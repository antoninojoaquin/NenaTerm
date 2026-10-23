import { Term } from "../types";
import { normalize } from "../utils/normalize";

export type QuizMode = "en-es" | "es-en" | "listen";

export type Question = {
  term: Term;
  options: Term[];
};

export const QUIZ_LENGTH = 10;
const OPTIONS = 4;

export function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// cada pregunta trae la respuesta correcta mezclada con 3 distractores al azar
export function buildQuiz(terms: Term[], length = QUIZ_LENGTH): Question[] {
  return shuffle(terms)
    .slice(0, length)
    .map((term) => {
      const distractors = shuffle(terms.filter((t) => t.id !== term.id)).slice(0, OPTIONS - 1);
      return { term, options: shuffle([term, ...distractors]) };
    });
}

// préstamos como "Firmware": en español se dicen igual, así que mostrar la
// traducción regalaría la respuesta. Para esos se usa la definición.
const isLoanword = (t: Term) => normalize(t.translation).includes(normalize(t.word));
const spanish = (t: Term) => (isLoanword(t) ? t.definition : t.translation);

// lo que se pregunta y lo que se elige, según el modo
export const prompt = (mode: QuizMode, t: Term) => (mode === "es-en" ? spanish(t) : t.word);
export const optionLabel = (mode: QuizMode, t: Term) => (mode === "en-es" ? spanish(t) : t.word);
