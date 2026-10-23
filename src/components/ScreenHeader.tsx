import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Mascot from "./Mascot";
import { MascotAnimation } from "../mascot/animations";
import { colors, radius } from "../constants/theme";

type Props = {
  title: string;
  message?: string; // texto del globo (variante "bubble")
  subtitle?: string; // texto bajo el título (variante "hero")
  animation?: MascotAnimation;
  variant?: "bubble" | "hero";
  loop?: boolean;
  replayKey?: number | string; // cambialo para repetir la animación
  compact?: boolean; // Nena más chica y sin título, para dejar lugar abajo
};

export default function ScreenHeader({
  title,
  message,
  subtitle,
  animation = "sat",
  variant = "bubble",
  loop = false,
  replayKey,
  compact = false,
}: Props) {
  if (variant === "hero") {
    return (
      <SafeAreaView edges={["top"]} style={styles.wrap}>
        <View style={styles.platform}>
          <Mascot animation={animation} size={128} loop={loop} replayKey={replayKey} />
        </View>
        <Text style={[styles.title, styles.center]}>{title}</Text>
        {subtitle ? (
          <Text style={[styles.subtitle, styles.center]}>{subtitle}</Text>
        ) : null}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={["top"]} style={[styles.wrap, compact && styles.wrapCompact]}>
      <View style={styles.row}>
        <Mascot animation={animation} size={compact ? 64 : 96} loop={loop} replayKey={replayKey} />
        {message ? (
          <View style={styles.bubble}>
            <Text style={styles.bubbleText}>{message}</Text>
          </View>
        ) : null}
      </View>
      {!compact && <Text style={styles.title}>{title}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.primary,
    borderBottomLeftRadius: radius.header,
    borderBottomRightRadius: radius.header,
    paddingHorizontal: 20,
    paddingBottom: 22,
    gap: 10,
  },
  wrapCompact: { paddingBottom: 12 },
  row: { flexDirection: "row", alignItems: "center", gap: 10 },
  bubble: {
    flex: 1,
    backgroundColor: colors.accent,
    borderRadius: 20,
    borderBottomLeftRadius: 6,
    borderBottomWidth: 4,
    borderBottomColor: colors.accentDark,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  bubbleText: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 17,
    color: colors.text,
  },
  title: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 26,
    color: colors.onPrimary,
  },
  subtitle: {
    fontFamily: "Nunito_800ExtraBold",
    fontSize: 18,
    color: colors.onPrimary,
  },
  center: { textAlign: "center" },
  platform: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: colors.accent,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 8,
  },
});
