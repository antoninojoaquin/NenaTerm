import { View, Text, StyleSheet } from "react-native";
import { Term } from "../types";
import { colors, radius } from "../constants/theme";
import SpeakButton from "./SpeakButton";

export default function TermCard({ term }: { term: Term }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleWrap}>
          <Text style={styles.word}>{term.word}</Text>
          <View style={styles.chip}>
            <Text style={styles.chipText}>{term.category}</Text>
          </View>
        </View>
        <SpeakButton text={term.word} />
      </View>
      <Text style={styles.translation}>{term.translation}</Text>
      <Text style={styles.definition}>{term.definition}</Text>
      <View style={styles.exampleRow}>
        <Text style={styles.example}>“{term.example}”</Text>
        <SpeakButton text={term.example} size={32} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.card,
    borderWidth: 2,
    borderBottomWidth: 5,
    borderColor: colors.border,
    padding: 16,
    gap: 4,
  },
  word: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 20,
    color: colors.text,
    flexShrink: 1,
  },
  chip: {
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
  translation: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 16,
    color: colors.text,
  },
  definition: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 14,
    color: colors.muted,
  },
  exampleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 4,
  },
  example: {
    flex: 1,
    fontFamily: "Nunito_600SemiBold",
    fontSize: 14,
    color: colors.muted,
    fontStyle: "italic",
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  titleWrap: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    columnGap: 8,
    rowGap: 4,
  },
});
