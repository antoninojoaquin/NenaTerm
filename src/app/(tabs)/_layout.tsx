import { ColorValue } from "react-native";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import TabBar from "../../components/TabBar";

const icon = (name: React.ComponentProps<typeof Ionicons>["name"]) =>
  function TabIcon({ color, size }: { color: ColorValue; size: number }) {
    return <Ionicons name={name} size={size} color={color} />;
  };

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Glosario", tabBarIcon: icon("book-outline") }} />
      <Tabs.Screen name="translator" options={{ title: "Traductor", tabBarIcon: icon("swap-horizontal") }} />
      <Tabs.Screen name="about" options={{ title: "Acerca de", tabBarIcon: icon("information-circle-outline") }} />
    </Tabs>
  );
}
