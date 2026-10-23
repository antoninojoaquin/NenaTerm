import { StyleSheet, Text, View } from "react-native";
import CartoonButton from "../CartoonButton";
import { SessionResult as Result } from "./types";
import { colors, radius } from "../../constants/theme";

type Props = {
  result: Result;
  onRetry: () => void;
  onMenu: () => void;
};

export default function SessionResult({ result, onRetry, onMenu }: Props) {
  const { score, total, missed } = result;

  return (
    <View style={styles.wrap}>
      <View style={styles.scoreCard}>
        <Text style={styles.scoreLabel}>Tu puntaje</Text>
        <Text style={styles.score}>
          {score}/{total}
        </Text>
      </View>

      {missed.length > 0 && (
        <>
          <Text style={styles.sectionLabel}>Para repasar</Text>
          {missed.map((t) => (
            <View key={t.id} style={styles.missed}>
              <Text style={styles.word}>{t.word}</Text>
              <Text style={styles.translation}>{t.translation}</Text>
            </View>
          ))}
        </>
      )}

      <CartoonButton label="Otra vez" onPress={onRetry} />
      <CartoonButton label="Volver al menú" variant="plain" onPress={onMenu} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 12 },
  scoreCard: {
    backgroundColor: colors.accent,
    borderRadius: radius.card,
    borderBottomWidth: 6,
    borderBottomColor: colors.accentDark,
    paddingVertical: 20,
    alignItems: "center",
  },
  scoreLabel: { fontFamily: "Nunito_800ExtraBold", fontSize: 16, color: colors.text },
  score: { fontFamily: "Nunito_800ExtraBold", fontSize: 48, color: colors.text },
  sectionLabel: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 14,
    color: colors.muted,
    marginTop: 6,
  },
  missed: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 2,
    borderBottomWidth: 5,
    borderColor: colors.border,
    padding: 14,
    gap: 2,
  },
  word: { fontFamily: "Nunito_800ExtraBold", fontSize: 17, color: colors.text },
  translation: { fontFamily: "Nunito_600SemiBold", fontSize: 15, color: colors.muted },
});
