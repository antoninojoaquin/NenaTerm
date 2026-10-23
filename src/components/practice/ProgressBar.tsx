import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/theme";

export default function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <View style={styles.row}>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${(current / total) * 100}%` }]} />
      </View>
      <Text style={styles.count}>
        {current}/{total}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", gap: 10 },
  track: {
    flex: 1,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.border,
    overflow: "hidden",
  },
  fill: { height: "100%", borderRadius: 7, backgroundColor: colors.primary },
  count: { fontFamily: "Nunito_800ExtraBold", fontSize: 14, color: colors.muted },
});
