import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CartoonButton, { CartoonVariant } from "../CartoonButton";
import SpeakButton from "../SpeakButton";
import ProgressBar from "./ProgressBar";
import { MascotCue, SessionResult } from "./types";
import { optionLabel, prompt, Question, QuizMode } from "../../services/quiz";
import { speak, stopSpeaking } from "../../services/speech";
import { hapticError, hapticSuccess } from "../../services/haptics";
import { colors, radius } from "../../constants/theme";
import { Term } from "../../types";

type Props = {
  mode: QuizMode;
  questions: Question[];
  onCue: (cue: MascotCue) => void;
  onFinish: (result: SessionResult) => void;
  onExit: () => void;
};

const ASK: Record<QuizMode, string> = {
  "en-es": "¿Qué significa en español?",
  "es-en": "¿Cómo se dice en inglés?",
  listen: "¿Qué palabra escuchaste?",
  definition: "¿Qué palabra es?",
};

// a partir de este largo (las definiciones) la pregunta va en letra más chica
const LONG_PROMPT = 40;

// todo entra en una pantalla: nada se mueve ni aparece abajo al responder
export default function QuizSession({ mode, questions, onCue, onFinish, onExit }: Props) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<Term | null>(null);
  const [missed, setMissed] = useState<Term[]>([]);
  const [wrongStreak, setWrongStreak] = useState(0);

  const { term, options } = questions[index];
  const isLast = index === questions.length - 1;
  const question = prompt(mode, term);
  const long = question.length > LONG_PROMPT;

  // en modo escucha, Nena dice la palabra apenas aparece la pregunta
  useEffect(() => {
    if (mode === "listen") speak(term.word, "en", () => {});
    return () => stopSpeaking();
  }, [mode, term.word]);

  const pick = (option: Term) => {
    if (picked) return;
    setPicked(option);

    if (option.id === term.id) {
      hapticSuccess();
      setWrongStreak(0);
      onCue({ animation: "jump", message: "¡Muy bien!" });
      return;
    }

    hapticError();
    setMissed((m) => [...m, term]);
    setWrongStreak((s) => s + 1);
    onCue(
      wrongStreak >= 1
        ? { animation: "dizzy", message: "¡Me mareo! Tranqui, seguimos." }
        : { animation: "hurt", message: `Casi… era "${optionLabel(mode, term)}".` },
    );
  };

  const next = () => {
    if (isLast) {
      onFinish({ score: questions.length - missed.length, total: questions.length, missed });
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
    onCue({ animation: "sat", message: ASK[mode] });
  };

  const variantFor = (option: Term): CartoonVariant => {
    if (!picked) return "plain";
    if (option.id === term.id) return "correct";
    if (option.id === picked.id) return "wrong";
    return "plain";
  };

  return (
    <View style={styles.wrap}>
      <ProgressBar current={index + (picked ? 1 : 0)} total={questions.length} />

      <View style={styles.card}>
        <Text style={styles.ask}>{ASK[mode]}</Text>
        {mode === "listen" ? (
          <SpeakButton text={term.word} size={64} />
        ) : (
          <Text
            style={[styles.prompt, long && styles.promptLong]}
            numberOfLines={long ? 6 : 3}
            adjustsFontSizeToFit
          >
            {question}
          </Text>
        )}
      </View>

      <View style={styles.options}>
        {options.map((option) => (
          <CartoonButton
            key={option.id}
            label={optionLabel(mode, option)}
            variant={variantFor(option)}
            dimmed={!!picked && variantFor(option) === "plain"}
            disabled={!!picked}
            compact
            fill
            style={styles.option}
            onPress={() => pick(option)}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <CartoonButton label="Salir" variant="plain" compact onPress={onExit} style={styles.exit} />
        <CartoonButton
          label={isLast ? "Ver resultado" : "Siguiente"}
          compact
          disabled={!picked}
          dimmed={!picked}
          onPress={next}
          style={styles.next}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, gap: 12 },
  // la pregunta y las opciones se reparten el alto libre, con un tope
  // para que en celulares muy altos no queden botones gigantes
  card: {
    flex: 1,
    maxHeight: 200,
    justifyContent: "center",
    backgroundColor: colors.card,
    borderRadius: radius.card,
    borderWidth: 2,
    borderBottomWidth: 5,
    borderColor: colors.border,
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 6,
    alignItems: "center",
  },
  ask: { fontFamily: "Nunito_800ExtraBold", fontSize: 18, color: colors.muted },
  prompt: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 26,
    color: colors.text,
    textAlign: "center",
  },
  promptLong: { fontFamily: "Nunito_600SemiBold", fontSize: 17 },
  options: { flex: 3, gap: 8, justifyContent: "center" },
  option: { maxHeight: 84 },
  footer: { flexDirection: "row", gap: 10 },
  exit: { flex: 1 },
  next: { flex: 2 },
});
