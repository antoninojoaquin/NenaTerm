import { Text, View, StyleSheet, ScrollView } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../constants/theme";

export default function AboutScreen() {
  return (
    <View style={styles.screen}>
      <ScreenHeader
        title="Glosario Técnico"
        subtitle="Proyecto final - Inglés Técnico II"
        animation="sleep"
        variant="hero"
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionLabel}>Créditos</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Mascota</Text>
          <Text style={styles.cardText}>
            Cat Sprite Pack por julesleech (itch.io)
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Interpretación de la mascota</Text>
          <Text style={styles.cardText}>
            Negrita "Nena" (Mascota de Tiziana Oldoni)
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Traducción y fuente</Text>
          <Text style={styles.cardText}>MyMemory · Nunito (Google Fonts)</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    padding: 20,
    gap: 14,
  },
  sectionLabel: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 14,
    color: colors.muted,
    marginTop: 6,
  },
  card: {
    backgroundColor: colors.card,
    borderWidth: 2,
    borderRadius: 16,
    borderBottomWidth: 5,
    borderColor: colors.border,
    padding: 16,
    gap: 4,
  },
  cardTitle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 16,
    color: colors.text,
  },
  cardText: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 14,
    color: colors.muted,
  },
});
