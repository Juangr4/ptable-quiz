import { create } from "zustand";
import { elements, type TableElement } from "./data";

type State = {
  availableElements: TableElement[];
  guess?: TableElement;
  attempts: number;
  answers: { errors: number; failures: number; total: number };
  grade?: number;
  incAttempts: () => void;
  nextGuess: () => void;
  resetGame: () => void;
};

const failurePunishment = 50 / elements.length;
const errorPunishment = 100 / elements.length;

export const useGameStore = create<State>((set) => ({
  availableElements: [...elements].sort(() => Math.random() - 0.5),
  attempts: 0,
  answers: { errors: 0, failures: 0, total: -1 },
  incAttempts: () => set((state) => ({ attempts: state.attempts + 1 })),
  nextGuess: () =>
    set((state) => {
      const answers = state.answers;
      let punishment = 0;
      if (state.attempts >= 3) punishment = errorPunishment;
      else if (state.attempts > 0) punishment = failurePunishment;
      const availableElements = state.availableElements;
      const guess = availableElements.pop();
      const grade = (state.grade ? state.grade : 100) - punishment;
      return {
        availableElements,
        guess,
        answers,
        grade,
        attempts: 0,
      };
    }),
  resetGame: () =>
    set(() => ({
      availableElements: [...elements].sort(() => Math.random() - 0.5),
      guess: undefined,
      answers: { errors: 0, failures: 0, total: -1 },
      grade: undefined,
    })),
}));
