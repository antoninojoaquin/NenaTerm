import { ColorValue } from "react-native";
import { Tabs } from "expo-router";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import TabBar from "../../components/TabBar";

const antIcon = (name: React.ComponentProps<typeof AntDesign>["name"]) =>
  function TabIcon({ color, size }: { color: ColorValue; size: number }) {
    return <AntDesign name={name} size={size} color={color} />;
  };

const fontAwesomeIcon = (name: React.ComponentProps<typeof FontAwesome5>["name"]) =>
  function TabIcon({ color, size }: { color: ColorValue; size: number }) {
    return <FontAwesome5 name={name} size={size} color={color} />;
  };

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Glosario", tabBarIcon: fontAwesomeIcon("book") }} />
      <Tabs.Screen name="practice" options={{ title: "Práctica", tabBarIcon: fontAwesomeIcon("gamepad") }} />
      <Tabs.Screen name="translator" options={{ title: "Traductor", tabBarIcon: antIcon("swap") }} />
      <Tabs.Screen name="about" options={{ title: "Acerca de", tabBarIcon: fontAwesomeIcon("cat") }} />
    </Tabs>
  );
}
