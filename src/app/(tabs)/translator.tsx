import { useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenHeader from "../../components/ScreenHeader";
import { translate, TranslateError, Lang } from "../../services/translate";
import { MascotAnimation } from "../../mascot/animations";
import { colors, radius } from "../../constants/theme";
import { findInGlossary } from "../../services/glossary";
import { Term } from "../../types";

type Status = "idle" | "loading" | "success" | "error";

const LANG_NAME: Record<Lang, string> = { en: "Inglés", es: "Español" };

export default function TranslatorScreen() {
  const [from, setFrom] = useState<Lang>("en");
  const to: Lang = from === "en" ? "es" : "en";
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [match, setMatch] = useState<Term | null>(null);

  const header: Record<
    Status,
    { animation: MascotAnimation; message: string; loop?: boolean }
  > = {
    idle: { animation: "sat", message: "¿Qué palabra querés traducir?" },
    loading: { animation: "run", message: "Buscando…", loop: true },
    success: { animation: "jump", message: "¡Listo! Mirá cómo se dice." },
    error: { animation: "sad", message: "Ups, algo salió mal." },
  };

  const run = async () => {
    if (!input.trim() || status === "loading") return;
    Keyboard.dismiss();

    // primero busca en tu glosario
    const found = findInGlossary(input, from);
    if (found) {
      setMatch(found);
      setResult(from === "en" ? found.translation : found.word);
      setStatus("success");
      return;
    }

    setMatch(null);
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 700));
      setResult(await translate(input, from, to));
      setStatus("success");
    } catch (e) {
      setError(e instanceof TranslateError ? e.message : "Algo salió mal.");
      setStatus("error");
    }
  };

  const swap = () => {
    setFrom(to);
    setInput(result);
    setResult("");
    setMatch(null);
    setError("");
    setStatus("idle");
  };

  const canTranslate = input.trim().length > 0 && status !== "loading";

  return (
    <View style={styles.screen}>
      <ScreenHeader title="Traductor" {...header[status]} />
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.label}>{LANG_NAME[from]}</Text>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder={
            from === "en"
              ? "Escribí una palabra en inglés…"
              : "Escribí una palabra en español…"
          }
          placeholderTextColor={colors.muted}
          multiline
          maxLength={500}
          autoCorrect={false}
          accessibilityLabel={`Texto en ${LANG_NAME[from]}`}
        />

        <View style={styles.swapWrap}>
          <View style={styles.swapShadow} />
          <Pressable
            style={({ pressed }) => [
              styles.swap,
              pressed && { transform: [{ translateY: 4 }] },
            ]}
            onPress={swap}
            accessibilityRole="button"
            accessibilityLabel="Intercambiar idiomas"
          >
            <Ionicons name="swap-vertical" size={26} color={colors.text} />
          </Pressable>
        </View>

        <Text style={styles.label}>{LANG_NAME[to]}</Text>
        <View style={styles.card}>
          {status === "loading" && <ActivityIndicator color={colors.primary} />}
          {status === "success" && (
            <>
              {match && (
                <View style={styles.chip}>
                  <Text style={styles.chipText}>En tu glosario</Text>
                </View>
              )}
              <Text style={styles.result}>{result}</Text>
              {match && <Text style={styles.cardText}>{match.definition}</Text>}
            </>
          )}
          {status === "error" && <Text style={styles.cardText}>{error}</Text>}
          {status === "idle" && (
            <Text style={styles.cardText}>La traducción aparece acá.</Text>
          )}
        </View>

        <Pressable
          style={[styles.button, !canTranslate && styles.buttonDisabled]}
          onPress={run}
          disabled={!canTranslate}
          accessibilityRole="button"
        >
          <Text style={styles.buttonText}>Traducir</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  content: { padding: 20, gap: 12 },
  label: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 14,
    color: colors.muted,
  },
  input: {
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: "#E6DCC8",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    minHeight: 56,
    fontFamily: "Nunito_600SemiBold",
    fontSize: 18,
    color: colors.text,
  },
  swapWrap: { alignSelf: "center", width: 48, height: 52 },
  swapShadow: {
    position: "absolute",
    bottom: 0,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.accentDark,
  },
  swap: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    gap: 6,
    backgroundColor: colors.card,
    borderRadius: radius.card,
    borderWidth: 2,
    borderBottomWidth: 5,
    borderColor: colors.border,
    padding: 16,
    minHeight: 64,
    justifyContent: "center",
  },
  result: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 20,
    color: colors.text,
  },
  cardText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 18,
    color: colors.muted,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: radius.button,
    borderBottomWidth: 5,
    borderBottomColor: colors.primaryDark,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 4,
  },
  buttonDisabled: { opacity: 0.5 },
  buttonText: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 19,
    color: colors.onPrimary,
  },
  chip: {
    alignSelf: "flex-start",
    backgroundColor: colors.accent,
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 2,
  },
  chipText: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 12,
    color: colors.text,
  },
});
