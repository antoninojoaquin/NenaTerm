import { Stack } from "expo-router";
import { useFonts, Nunito_600SemiBold, Nunito_800ExtraBold } from "@expo-google-fonts/nunito";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { warmUpSpeech } from "../services/speech";
import { loadSounds } from "../services/sounds";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({ Nunito_600SemiBold, Nunito_800ExtraBold });

  // en un efecto y no al cargar el archivo: la versión web también se
  // renderiza en el servidor, donde no hay voz ni audio
  useEffect(() => {
    warmUpSpeech();
    loadSounds();
  }, []);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}