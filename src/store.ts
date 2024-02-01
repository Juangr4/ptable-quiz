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

export const useGameStore = create<State>((set) => ({
  availableElements: [...elements].sort(() => Math.random() - 0.5),
  attempts: 0,
  answers: { errors: 0, failures: 0, total: -1 },
  incAttempts: () => set((state) => ({ attempts: state.attempts + 1 })),
  nextGuess: () =>
    set((state) => {
      const answers = state.answers;
      if (state.attempts >= 3) answers.errors += 1;
      else if (state.attempts > 0) answers.failures += 1;
      answers.total += 1;
      const availableElements = state.availableElements;
      const guess = availableElements.pop();
      const grade = guess
        ? undefined
        : Math.round(
            100 -
              answers.errors * (100 / answers.total) -
              answers.failures * (50 / answers.total)
          ) / 10;
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
