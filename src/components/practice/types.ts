import { MascotAnimation } from "../../mascot/animations";
import { Term } from "../../types";

// lo que la sesión le pide a Nena: qué hacer y qué decir
export type MascotCue = { animation: MascotAnimation; message: string };

export type SessionResult = { score: number; total: number; missed: Term[] };
