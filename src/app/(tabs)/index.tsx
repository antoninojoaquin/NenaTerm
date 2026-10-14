import { useMemo, useState } from "react";
import { FlatList, TextInput, View, Text, StyleSheet } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import TermCard from "../../components/TermCard";
import { TERMS } from "../../data/data";
import { colors, radius } from "../../constants/theme";
import { normalize } from "../../utils/normalize"

export default function GlossaryScreen() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = normalize(query.trim());
    return [...TERMS]
      .sort((a, b) => a.word.localeCompare(b.word))
      .filter((t) => !q || normalize(t.word).includes(q) || normalize(t.translation).includes(q));
  }, [query]);

  const empty = results.length === 0;

  return (
    <View style={styles.screen}>
      <ScreenHeader
        title="Glosario"
        message={empty ? "No encontré esa palabra…" : "¡Hola, soy Nena! ¿Qué palabra vemos hoy?"}
        animation={empty ? "sad" : "sat"}
      />
      <FlatList
        data={results}
        keyExtractor={(t) => t.id}
        renderItem={({ item }) => <TermCard term={item} />}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <TextInput
            style={styles.search}
            value={query}
            onChangeText={setQuery}
            placeholder="Buscar palabra…"
            placeholderTextColor={colors.muted}
            accessibilityLabel="Buscar palabra"
            autoCorrect={false}
          />
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>Probá en el Traductor, que sirve para palabras que no están en el glosario.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.bg },
  list: { padding: 20, gap: 14 },
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
    marginBottom: 4,
  },
  emptyText: { fontFamily: "Nunito_600SemiBold", fontSize: 15, color: colors.muted, textAlign: "center", marginTop: 12 },
});