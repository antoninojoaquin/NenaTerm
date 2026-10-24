import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenHeader from "../../components/ScreenHeader";
import CartoonButton from "../../components/CartoonButton";
import QuizSession from "../../components/practice/QuizSession";
import SessionResult from "../../components/practice/SessionResult";
import { MascotCue, SessionResult as Result } from "../../components/practice/types";
import { buildQuiz, Question, QuizMode } from "../../services/quiz";
import { TERMS } from "../../data/data";
import { soundFinish } from "../../services/sounds";
import { colors } from "../../constants/theme";

type Stage =
  | { kind: "menu" }
  | { kind: "quiz"; mode: QuizMode; questions: Question[] }
  | { kind: "result"; mode: QuizMode; result: Result };

const GAMES: { game: QuizMode; title: string; description: string; icon: React.ComponentProps<typeof Ionicons>["name"] }[] = [
  { game: "en-es", title: "Inglés → Español", description: "Elegí la traducción correcta", icon: "language" },
  { game: "es-en", title: "Español → Inglés", description: "Elegí la palabra en inglés", icon: "chatbubbles" },
  { game: "listen", title: "Escucha", description: "Nena la dice, vos la reconocés", icon: "headset" },
  { game: "definition", title: "Definición → Palabra", description: "Leé qué es y elegí la palabra", icon: "book" },
];

const MENU_CUE: MascotCue = { animation: "sat", message: "¿Practicamos? Elegí un juego." };

const START_CUE: Record<QuizMode, string> = {
  "en-es": "¿Qué significa en español?",
  "es-en": "¿Cómo se dice en inglés?",
  listen: "¡Escuchá bien!",
  definition: "¿Qué palabra es?",
};

function resultCue({ score, total }: Result): MascotCue {
  const ratio = score / total;
  if (ratio === 1) return { animation: "playing", message: "¡Perfecto! ¡Sos un crack!" };
  if (ratio >= 0.7) return { animation: "jump", message: "¡Muy bien! Casi perfecto." };
  if (ratio >= 0.4) return { animation: "sat", message: "¡Bien! Podés mejorar." };
  return { animation: "sad", message: "A repasar un poquito más." };
}

export default function PracticeScreen() {
  const [view, setView] = useState<Stage>({ kind: "menu" });
  const [cue, setCue] = useState<MascotCue & { id: number }>({ ...MENU_CUE, id: 0 });

  // el id cambia siempre, así Nena repite la animación aunque sea la misma
  const say = (next: MascotCue) => setCue((c) => ({ ...next, id: c.id + 1 }));

  const start = (mode: QuizMode) => {
    say({ animation: "sat", message: START_CUE[mode] });
    setView({ kind: "quiz", mode, questions: buildQuiz(TERMS) });
  };

  const finish = (mode: QuizMode) => (result: Result) => {
    soundFinish();
    say(resultCue(result));
    setView({ kind: "result", mode, result });
  };

  const toMenu = () => {
    say(MENU_CUE);
    setView({ kind: "menu" });
  };

  const header = (
    <ScreenHeader
      title="Práctica"
      animation={cue.animation}
      message={cue.message}
      replayKey={cue.id}
      compact={view.kind === "quiz"}
    />
  );

  // durante el juego no hay scroll: todo tiene que verse de una
  if (view.kind === "quiz") {
    return (
      <View style={styles.screen}>
        {header}
        <View style={styles.game}>
          <QuizSession
            key={view.questions.map((q) => q.term.id).join()}
            mode={view.mode}
            questions={view.questions}
            onCue={say}
            onFinish={finish(view.mode)}
            onExit={toMenu}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      {header}
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        {view.kind === "menu" &&
          GAMES.map(({ game, title, description, icon }) => (
            <CartoonButton key={game} variant="plain" onPress={() => start(game)} accessibilityLabel={title}>
              <View style={styles.gameRow}>
                <View style={styles.gameIcon}>
                  <Ionicons name={icon} size={26} color={colors.onPrimary} />
                </View>
                <View style={styles.gameText}>
                  <Text style={styles.gameTitle}>{title}</Text>
                  <Text style={styles.gameDescription}>{description}</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color={colors.muted} />
              </View>
            </CartoonButton>
          ))}

        {view.kind === "result" && (
          <SessionResult result={view.result} onRetry={() => start(view.mode)} onMenu={toMenu} />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  content: { padding: 20, gap: 12 },
  game: { flex: 1, paddingHorizontal: 20, paddingTop: 16, paddingBottom: 12 },
  gameRow: { flexDirection: "row", alignItems: "center", gap: 14, alignSelf: "stretch" },
  gameIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  gameText: { flex: 1, gap: 2 },
  gameTitle: { fontFamily: "Nunito_800ExtraBold", fontSize: 18, color: colors.text },
  gameDescription: { fontFamily: "Nunito_600SemiBold", fontSize: 14, color: colors.muted },
});
