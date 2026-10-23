import { useMemo, useState } from "react";
import { FlatList, TextInput, View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import TermCard from "../../components/TermCard";
import { TERMS } from "../../data/data";
import { colors } from "../../constants/theme";
import { normalize } from "../../utils/normalize";
import { CATEGORIES } from "../../services/glossary";

type Filter = "all" | string;

export default function GlossaryScreen() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const results = useMemo(() => {
    const q = normalize(query.trim());
    return [...TERMS]
      .sort((a, b) => a.word.localeCompare(b.word))
      .filter((t) => filter === "all" || t.category === filter)
      .filter(
        (t) =>
          !q ||
          normalize(t.word).includes(q) ||
          normalize(t.translation).includes(q),
      );
  }, [query, filter]);

  const empty = results.length === 0;

  const chips: { value: Filter; label: string }[] = [
    { value: "all", label: "Todas" },
    ...CATEGORIES.map((c) => ({ value: c, label: c })),
  ];

  return (
    <View style={styles.screen}>
      <ScreenHeader
        title="Glosario"
        message={
          empty
            ? "No encontré esa palabra…"
            : "¡Hola, soy Nena! ¿Qué palabra vemos hoy?"
        }
        animation={empty ? "sad" : "sat"}
      />
      <FlatList
        data={results}
        keyExtractor={(t) => t.id}
        renderItem={({ item }) => <TermCard term={item} />}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View style={styles.headerWrap}>
            <TextInput
              style={styles.search}
              value={query}
              onChangeText={setQuery}
              placeholder="Buscar palabra…"
              placeholderTextColor={colors.muted}
              accessibilityLabel="Buscar palabra"
              autoCorrect={false}
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.chips}
              style={styles.chipsScroll}
            >
              {chips.map(({ value, label }) => {
                const active = filter === value;
                return (
                  <Pressable
                    key={value}
                    onPress={() => setFilter(value)}
                    accessibilityRole="button"
                    accessibilityState={{ selected: active }}
                    style={[styles.chip, active && styles.chipActive]}
                  >
                    <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Probá en el Traductor, que sirve para palabras que no están en el
            glosario.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  list: { padding: 20, gap: 14 },
  headerWrap: { gap: 12 },
  search: {
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: "#E6DCC8",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontFamily: "Nunito_600SemiBold",
    fontSize: 18,
    color: colors.text,
  },
  chipsScroll: { marginHorizontal: -20 },
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
  emptyText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 15,
    color: colors.muted,
    textAlign: "center",
    marginTop: 12,
  },
});
