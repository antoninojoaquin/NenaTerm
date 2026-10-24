import { Stack } from "expo-router";
import { useFonts, Nunito_600SemiBold, Nunito_800ExtraBold } from "@expo-google-fonts/nunito";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { warmUpSpeech } from "../services/speech";
import { loadSounds } from "../services/sounds";

SplashScreen.preventAutoHideAsync();
warmUpSpeech();
loadSounds();

export default function RootLayout() {
  const [loaded] = useFonts({ Nunito_600SemiBold, Nunito_800ExtraBold });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}