import { useEffect, useState } from "react";
import { Image, Pressable, View } from "react-native";
import {
  ANIMATIONS,
  MascotAnimation,
  STATIC_LAST_FRAME,
} from "../mascot/animations";

const FRAME = 64; // cada frame mide 64x64 px
const HOLD_MS = 800; // cuánto se queda en la pose de la reacción

type Props = {
  animation?: MascotAnimation;
  size?: number;
  loop?: boolean;
  replayKey?: number | string;
  onPressAnimation?: MascotAnimation | null;
};

export default function Mascot({
  animation = "sat",
  size = 128,
  loop = false,
  replayKey,
  onPressAnimation = "hurt",
}: Props) {
  const [reaction, setReaction] = useState<{
    name: MascotAnimation;
    id: number;
  } | null>(null);
  const [settledFor, setSettledFor] = useState<string | null>(null);
  const [pos, setPos] = useState({ key: "", frame: 0 });

  const baseKey = `${animation}:${replayKey ?? ""}`;
  // tras una reacción, la animación base queda quieta en su último frame
  const settled =
    !reaction &&
    !loop &&
    (settledFor === baseKey || STATIC_LAST_FRAME.includes(animation));
  const runKey = reaction
    ? `r:${reaction.name}:${reaction.id}`
    : `b:${baseKey}:${settled}`;

  const active = reaction?.name ?? animation;
  const { source, fps } = ANIMATIONS[active];
  const sheet = Image.resolveAssetSource(source);
  const frames = Math.max(1, Math.round(sheet.width / FRAME));

  // la reacción salta el primer frame (la pose normal)
  const startFrame = reaction && frames > 1 ? 1 : 0;
  const frame = settled
    ? frames - 1
    : pos.key === runKey
      ? pos.frame
      : startFrame;

  useEffect(() => {
    if (settled) return;

    // no hace falta resetear pos: con un runKey nuevo, el render ya usa startFrame
    let current = startFrame;
    let hold: ReturnType<typeof setTimeout> | undefined;

    const finish = () => {
      if (reaction) {
        hold = setTimeout(() => {
          setSettledFor(baseKey);
          setReaction(null);
        }, HOLD_MS);
      }
    };

    if (current >= frames - 1) {
      finish(); // no hay nada para reproducir
      return () => clearTimeout(hold);
    }

    const id = setInterval(() => {
      current += 1;
      if (current >= frames) {
        if (!reaction && loop) {
          current = 0;
        } else {
          clearInterval(id); // se queda en el último frame
          finish();
          return;
        }
      }
      setPos({ key: runKey, frame: current });
    }, 1000 / fps);

    return () => {
      clearInterval(id);
      clearTimeout(hold);
    };
  }, [runKey, frames, fps, loop, settled, startFrame, reaction, baseKey]);

  const handlePress = () => {
    if (!onPressAnimation) return;
    setReaction((prev) => ({
      name: onPressAnimation,
      id: (prev?.id ?? 0) + 1,
    }));
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={!onPressAnimation}
      accessibilityRole="button"
      accessibilityLabel="Mascota: un gato negro. Tocalo."
    >
      <View style={{ width: size, height: size, overflow: "hidden" }}>
        <Image
          source={source}
          style={{
            width: size * frames,
            height: size,
            marginLeft: -frame * size,
          }}
        />
      </View>
    </Pressable>
  );
}
