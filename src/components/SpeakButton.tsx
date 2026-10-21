import { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { speak, stopSpeaking } from "../services/speech";
import { Lang } from "../services/translate";
import { colors } from "../constants/theme";

type Props = { text: string; lang?: Lang; size?: number };

export default function SpeakButton({ text, lang = "en", size = 40 }: Props) {
  const [speaking, setSpeaking] = useState(false);
  const speakingRef = useRef(false);
  speakingRef.current = speaking;

  // si la tarjeta desaparece mientras habla, corta el audio
  useEffect(() => () => { if (speakingRef.current) stopSpeaking(); }, []);

  const onPress = () => {
    if (speaking) {
      stopSpeaking();
      return;
    }
    setSpeaking(true);
    speak(text, lang, () => setSpeaking(false));
  };

  return (
    <View style={{ width: size, height: size + 3 }}>
      <View style={[styles.shadow, { width: size, height: size, borderRadius: size / 2 }]} />
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={speaking ? "Detener pronunciación" : `Escuchar: ${text}`}
        style={({ pressed }) => [
          styles.btn,
          { width: size, height: size, borderRadius: size / 2 },
          pressed && { transform: [{ translateY: 3 }] },
        ]}
      >
        <Ionicons name={speaking ? "stop" : "volume-high"} size={size * 0.5} color={colors.text} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: { position: "absolute", bottom: 0, backgroundColor: colors.accentDark },
  btn: { backgroundColor: colors.accent, alignItems: "center", justifyContent: "center" },
});