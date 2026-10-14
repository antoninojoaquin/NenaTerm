export type Lang = "en" | "es";

type ErrorCode = "network" | "quota" | "empty" | "unknown";

export class TranslateError extends Error {
  code: ErrorCode;
  constructor(code: ErrorCode, message: string) {
    super(message);
    this.code = code;
  }
}

const API = "https://api.mymemory.translated.net/get";

// MyMemory a veces devuelve caracteres como &#39; en vez de '
const decode = (s: string) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

export async function translate(text: string, from: Lang, to: Lang): Promise<string> {
  const q = text.trim();
  if (!q) throw new TranslateError("empty", "Escribí algo para traducir.");

  const params = new URLSearchParams({ q, langpair: `${from}|${to}` });

  let res: Response;
  try {
    res = await fetch(`${API}?${params.toString()}`);
  } catch {
    throw new TranslateError("network", "Sin conexión. Revisá tu internet.");
  }

  let data: any;
  try {
    data = await res.json();
  } catch {
    throw new TranslateError("unknown", "No pude leer la respuesta del traductor.");
  }

  const translated: string = data?.responseData?.translatedText ?? "";

  // Por precaución: cupo agotado (por código de estado o por el texto de aviso)
  if (Number(data?.responseStatus) === 429 || /MYMEMORY WARNING/i.test(translated)) {
    throw new TranslateError("quota", "Se acabó el cupo diario del traductor. Probá mañana.");
  }

  if (!res.ok || !translated) {
    throw new TranslateError("unknown", "No pude traducir eso. Probá con otra palabra.");
  }

  return decode(translated);
}