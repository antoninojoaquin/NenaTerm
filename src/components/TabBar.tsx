import { Pressable, StyleSheet, Text, View } from "react-native";
import type { BottomTabBarProps } from "expo-router/tabs";
import { colors, radius } from "../constants/theme";

const LEDGE = 4;

export default function TabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
  return (
    <View style={[styles.bar, { paddingBottom: insets.bottom + 10 }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const focused = state.index === index;
        const label = typeof options.title === "string" ? options.title : route.name;
        const color = focused ? colors.onPrimary : colors.muted;

        const onPress = () => {
          const event = navigation.emit({ type: "tabPress", target: route.key, canPreventDefault: true });
          if (!focused && !event.defaultPrevented) navigation.navigate(route.name, route.params);
        };

        return (
          <View key={route.key} style={styles.slot}>
            {focused && <View style={styles.ledge} />}
            <Pressable
              onPress={onPress}
              onLongPress={() => navigation.emit({ type: "tabLongPress", target: route.key })}
              accessibilityRole="tab"
              accessibilityState={{ selected: focused }}
              accessibilityLabel={label}
              style={({ pressed }) => [
                styles.tab,
                focused && styles.tabActive,
                pressed && { transform: [{ translateY: focused ? LEDGE : 2 }] },
              ]}
            >
              {options.tabBarIcon?.({ focused, color, size: 26 })}
              <Text style={[styles.label, { color }]}>{label}</Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    gap: 8,
    paddingTop: 10,
    paddingHorizontal: 12,
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  slot: { flex: 1, paddingBottom: LEDGE },
  ledge: {
    position: "absolute",
    top: LEDGE,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: radius.button,
    backgroundColor: colors.primaryDark,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingVertical: 10,
    borderRadius: radius.button,
  },
  tabActive: { backgroundColor: colors.primary },
  label: { fontFamily: "Nunito_800ExtraBold", fontSize: 13 },
});
