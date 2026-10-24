import * as Speech from "expo-speech";
import { Lang } from "./translate";

// La voz de Nena: femenina de Google TTS (Android). Si el celular no la
// tiene, se usa la mejor voz disponible
const PREFERRED_VOICE: Partial<Record<Lang, string>> = {
  en: "en-us-x-iog-local",
};

// 1 = normal. 1.5 le da el tono agudo de gatita; más arriba se deforma
const PITCH = 1.5;

let current: (() => void) | null = null;
// se guarda la promesa (no el resultado) para que dos pedidos a la vez
// no busquen las voces dos veces
const voiceCache: Partial<Record<Lang, Promise<string | undefined>>> = {};

const norm = (l: string) => l.toLowerCase().replace("_", "-");

async function findVoice(lang: Lang): Promise<string | undefined> {
  const voices = await Speech.getAvailableVoicesAsync();

  // la preferida, solo si existe en este celular
  const preferred = PREFERRED_VOICE[lang];
  if (preferred && voices.some((v) => v.identifier === preferred)) return preferred;

  // si no, la mejor calidad disponible
  const ofLang = voices.filter((v) => norm(v.language).startsWith(lang));
  const score = (v: (typeof voices)[number]) =>
    (v.quality === Speech.VoiceQuality.Enhanced ? 2 : 0) +
    (/en-us|es-ar|es-419/.test(norm(v.language)) ? 1 : 0);
  return [...ofLang].sort((a, b) => score(b) - score(a))[0]?.identifier;
}

const bestVoice = (lang: Lang) => (voiceCache[lang] ??= findVoice(lang).catch(() => undefined));

// En Android el motor de voz recién arranca la primera vez que se usa, y eso
// tarda unos segundos. Llamarla al abrir la app hace que el primer botón
// de escuchar ya lo encuentre listo
export function warmUpSpeech() {
  bestVoice("en");
}

export function stopSpeaking() {
  const finish = current;
  current = null;
  Speech.stop();
  finish?.();
}

export async function speak(text: string, lang: Lang, onDone: () => void) {
  stopSpeaking();

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    if (current === finish) current = null;
    onDone();
  };
  current = finish;

  const voice = await bestVoice(lang);
  if (finished) return; // lo frenaron mientras elegía la voz

  Speech.speak(text, {
    language: lang === "en" ? "en-US" : "es-AR",
    voice,
    rate: 0.9,
    pitch: PITCH,
    onDone: finish,
    onStopped: finish,
    onError: finish,
  });
}
