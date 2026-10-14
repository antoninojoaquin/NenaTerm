import { ColorValue } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/theme";

const icon =
  (name: React.ComponentProps<typeof Ionicons>["name"]) =>
  ({ color }: { color: ColorValue }) =>
    <Ionicons name={name} size={24} color={color} />;

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarLabelStyle: { fontFamily: "Nunito_800ExtraBold", fontSize: 12 },
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border, height: 64, paddingTop: 6 },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Glosario", tabBarIcon: icon("book") }} />
      <Tabs.Screen name="translator" options={{ title: "Traductor", tabBarIcon: icon("swap-horizontal") }} />
      <Tabs.Screen name="about" options={{ title: "Acerca de", tabBarIcon: icon("information-circle") }} />
    </Tabs>
  );
}