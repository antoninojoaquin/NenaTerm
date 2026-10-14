import { TERMS } from "../data/data";
import { Term } from "../types";
import { normalize } from "../utils/normalize";
import { Lang } from "./translate";

export function findInGlossary(text: string, from: Lang): Term | undefined {
  const q = normalize(text.trim());
  if (!q) return undefined;

  if (from === "en") return TERMS.find((t) => normalize(t.word) === q);

  return TERMS.find((t) =>
    normalize(t.translation)
      .replace(/\(.*?\)/g, "")
      .split(",")
      .some((part) => part.trim() === q)
  );
}