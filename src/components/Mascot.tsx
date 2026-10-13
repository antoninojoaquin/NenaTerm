import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { ANIMATIONS, MascotAnimation } from "../mascot/animations";

const FRAME = 64;

type Props = { animation?: MascotAnimation; size?: number };

export default function Mascot({ animation = "sat", size = 128 }: Props) {
  const { source, fps } = ANIMATIONS[animation];
  const sheet = Image.resolveAssetSource(source);
  const frames = Math.max(1, Math.round(sheet.width / FRAME));
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    setFrame(0);
    const id = setInterval(() => setFrame((f) => (f + 1) % frames), 1000 / fps);
    return () => clearInterval(id);
  }, [animation, frames, fps]);

  return (
    <View
      style={{ width: size, height: size, overflow: "hidden" }}
      accessibilityRole="image"
      accessibilityLabel="Mascota: un gato negro"
    >
      <Image
        source={source}
        style={{ width: size * frames, height: size, marginLeft: -frame * size }}
      />
    </View>
  );
}