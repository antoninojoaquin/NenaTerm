import { useMemo, useState } from "react";
import { SectionList, TextInput, View, Text, StyleSheet } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import TermCard from "../../components/TermCard";
import FilterChips, { ALL } from "../../components/FilterChips";
import { TERMS } from "../../data/data";
import { colors } from "../../constants/theme";
import { normalize } from "../../utils/normalize";
import { Term } from "../../types";

export default function GlossaryScreen() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(ALL);

  // ordenadas de la A a la Z y agrupadas por la primera letra
  const sections = useMemo(() => {
    const q = normalize(query.trim());
    const results = [...TERMS]
      .sort((a, b) => a.word.localeCompare(b.word))
      .filter((t) => filter === ALL || t.category === filter)
      .filter(
        (t) =>
          !q ||
          normalize(t.word).includes(q) ||
          normalize(t.translation).includes(q),
      );

    const byLetter = new Map<string, Term[]>();
    for (const t of results) {
      const letter = normalize(t.word[0]).toUpperCase();
      byLetter.set(letter, [...(byLetter.get(letter) ?? []), t]);
    }
    return [...byLetter].map(([title, data]) => ({ title, data }));
  }, [query, filter]);

  const empty = sections.length === 0;

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
      <SectionList
        sections={sections}
        keyExtractor={(t) => t.id}
        renderItem={({ item }) => <TermCard term={item} />}
        renderSectionHeader={({ section }) => <Text style={styles.letter}>{section.title}</Text>}
        stickySectionHeadersEnabled={false}
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
            <FilterChips value={filter} onChange={setFilter} />
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
  letter: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 22,
    color: colors.primary,
    marginTop: 6,
  },
  emptyText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 15,
    color: colors.muted,
    textAlign: "center",
    marginTop: 12,
  },
});
