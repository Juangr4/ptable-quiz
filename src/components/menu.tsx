import type { FC } from "react";
import { useGameStore } from "../store";

export const Menu: FC = () => {
  const { guess, nextGuess, grade, resetGame } = useGameStore();
  const restart = () => {
    if (grade) {
      resetGame();
    }
    nextGuess();
  };
  return (
    <div className="p-4">
      {!guess && !grade && (
        <button
          className="border-2 border-black p-2 rounded-md hover:bg-gray-400"
          onClick={restart}
        >
          Comenzar Juego
        </button>
      )}
      {guess && (
        <h3 className="text-3xl">
          Elemento a encontrar: <span className="font-bold">{guess.name}</span>
        </h3>
      )}
      {grade && (
        <>
          <h3 className="text-3xl">
            Nota: <span className="font-bold">{Math.round(grade)}</span>%
          </h3>
          <button
            className="border-2 border-black rounded-md p-1 hover:bg-gray-400"
            onClick={resetGame}
          >
            Reiniciar
          </button>
        </>
      )}
    </div>
  );
};
