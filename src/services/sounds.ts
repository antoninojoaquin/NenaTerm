import { AudioPlayer, createAudioPlayer, setAudioModeAsync } from "expo-audio";

// Sonidos de "Interface Sounds" de Kenney (CC0), pasados de .ogg a .mp3
// porque iOS no reproduce .ogg
const SOURCES = {
  correct: require("../../assets/audio/correct.mp3"),
  wrong: require("../../assets/audio/wrong.mp3"),
  finish: require("../../assets/audio/finish.mp3"),
  meow: require("../../assets/audio/meow.mp3"),
};

type Sound = keyof typeof SOURCES;

// de 0 a 1; el de error sonaba demasiado fuerte al lado de los otros
const VOLUME: Partial<Record<Sound, number>> = {
  wrong: 0.4,
};

// un reproductor por sonido, creado una sola vez y reutilizado
const players: Partial<Record<Sound, AudioPlayer>> = {};

// Se llama al abrir la app: deja los sonidos cargados para que suenen al instante.
// Con el celular en silencio o vibración no suenan (para no molestar en clase),
// y no cortan la música de otras apps
export function loadSounds() {
  setAudioModeAsync({ playsInSilentMode: false, interruptionMode: "mixWithOthers" }).catch(() => {});
  for (const name of Object.keys(SOURCES) as Sound[]) {
    try {
      if (players[name]) continue;
      const player = createAudioPlayer(SOURCES[name]);
      player.volume = VOLUME[name] ?? 1;
      players[name] = player;
    } catch {
      // sin audio la app sigue andando
    }
  }
}

// igual que la vibración: si falla, no pasa nada.
// Vuelve al principio antes de sonar, por si ya se reprodujo
async function play(name: Sound) {
  const player = players[name];
  if (!player) return;
  try {
    await player.seekTo(0);
    player.play();
  } catch {}
}

export const soundCorrect = () => play("correct");
export const soundWrong = () => play("wrong");
export const soundFinish = () => play("finish");
export const soundMeow = () => play("meow");
