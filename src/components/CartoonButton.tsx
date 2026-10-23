import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors, radius } from "../constants/theme";

const LEDGE = 5;

const VARIANTS = {
  primary: { face: colors.primary, ledge: colors.primaryDark, text: colors.onPrimary },
  accent: { face: colors.accent, ledge: colors.accentDark, text: colors.text },
  plain: { face: colors.card, ledge: colors.border, text: colors.text },
  correct: { face: "#7BD88F", ledge: "#4FAF63", text: colors.text },
  wrong: { face: colors.error, ledge: "#D94848", text: colors.onPrimary },
};

export type CartoonVariant = keyof typeof VARIANTS;

type Props = {
  label?: string;
  children?: ReactNode;
  onPress?: () => void;
  variant?: CartoonVariant;
  disabled?: boolean;
  dimmed?: boolean;
  compact?: boolean;
  fill?: boolean; // se estira para ocupar el alto que le dé el padre
  style?: ViewStyle;
  accessibilityLabel?: string;
};

// botón con una base sólida debajo que se "hunde" al tocarlo
export default function CartoonButton({
  label,
  children,
  onPress,
  variant = "primary",
  disabled,
  dimmed,
  compact,
  fill,
  style,
  accessibilityLabel,
}: Props) {
  const v = VARIANTS[variant];
  return (
    <View style={[styles.wrap, fill && styles.fill, dimmed && styles.dimmed, style]}>
      <View style={[styles.ledge, { backgroundColor: v.ledge }]} />
      <Pressable
        onPress={onPress}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel ?? label}
        style={({ pressed }) => [
          styles.face,
          { backgroundColor: v.face, borderColor: v.ledge },
          compact && styles.faceCompact,
          fill && styles.fill,
          pressed && { transform: [{ translateY: LEDGE }] },
        ]}
      >
        {children ?? (
          <Text
            style={[styles.label, compact && styles.labelCompact, { color: v.text }]}
            numberOfLines={2}
            adjustsFontSizeToFit
          >
            {label}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingBottom: LEDGE },
  dimmed: { opacity: 0.45 },
  fill: { flex: 1 },
  ledge: {
    position: "absolute",
    top: LEDGE,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: radius.button,
  },
  face: {
    borderRadius: radius.button,
    borderWidth: 2,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  faceCompact: { paddingVertical: 10 },
  label: { fontFamily: "Nunito_800ExtraBold", fontSize: 18, textAlign: "center" },
  labelCompact: { fontSize: 16 },
});
