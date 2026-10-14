import { ImageSourcePropType } from "react-native";

export const ANIMATIONS = {
  sat:     { source: require("../../assets/cat/Sheet_Cat_Sat.png"),     fps: 0.5 },
  jump:    { source: require("../../assets/cat/Sheet_Cat_Jump.png"),    fps: 8 },
  sad:     { source: require("../../assets/cat/Sheet_Cat_Sad.png"),     fps: 1 },
  dizzy:   { source: require("../../assets/cat/Sheet_Cat_Dizzy.png"),   fps: 8 },
  playing: { source: require("../../assets/cat/Sheet_Cat_Playing.png"), fps: 8 },
  sleep:   { source: require("../../assets/cat/Sheet_Cat_Sleep.png"),   fps: 4 },
  run:     { source: require("../../assets/cat/Sheet_Cat_Run.png"),     fps: 10 },
  hurt:    { source: require("../../assets/cat/Sheet_Cat_Hurt.png"),    fps: 8 },
} satisfies Record<string, { source: ImageSourcePropType; fps: number }>;

export const STATIC_LAST_FRAME: MascotAnimation[] = ["sleep", "sad"];

export type MascotAnimation = keyof typeof ANIMATIONS;