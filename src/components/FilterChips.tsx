import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { colors } from "../constants/theme";
import { CATEGORIES } from "../services/glossary";

export const ALL = "all";

const CHIPS = [{ value: ALL, label: "Todas" }, ...CATEGORIES.map((c) => ({ value: c, label: c }))];

type Props = {
  value: string;
  onChange: (value: string) => void;
};

// fila deslizable de categorías; asume que la pantalla tiene 20 de margen
export default function FilterChips({ value, onChange }: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.chips}
      style={styles.scroll}
    >
      {CHIPS.map((chip) => {
        const active = value === chip.value;
        return (
          <Pressable
            key={chip.value}
            onPress={() => onChange(chip.value)}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
            style={[styles.chip, active && styles.chipActive]}
          >
            <Text style={[styles.chipText, active && styles.chipTextActive]}>{chip.label}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { marginHorizontal: -20, flexGrow: 0 },
  chips: { gap: 8, paddingHorizontal: 20 },
  chip: {
    backgroundColor: colors.card,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: colors.border,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primaryDark },
  chipText: { fontFamily: "Nunito_800ExtraBold", fontSize: 14, color: colors.text },
  chipTextActive: { color: colors.onPrimary },
});
