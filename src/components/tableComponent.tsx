import { useEffect, useState, type FC } from "react";
import type { TableElement } from "../data";
import { useGameStore } from "../store";

export const TableComponent: FC<{ element: TableElement }> = ({ element }) => {
  const { guess, attempts, incAttempts, nextGuess, grade } = useGameStore();
  const [color, setColor] = useState<"red" | "green" | "yellow" | undefined>();

  useEffect(() => {
    if (!grade) setColor(undefined);
  }, [grade]);

  useEffect(() => {
    if (attempts >= 3 && guess?.atomicNumber === element.atomicNumber) {
      onClick();
    }
  }, [attempts]);

  const onClick = () => {
    if (color) return;
    if (guess?.atomicNumber === element.atomicNumber) {
      switch (attempts) {
        case 0:
          setColor("green");
          break;
        case 1:
        case 2:
          setColor("yellow");
          break;
        default:
          setColor("red");
      }
      nextGuess();
    } else {
      incAttempts();
    }
  };

  return (
    <div
      className="lg:border-4 border-2 border-black w-[34px] h-[34px] lg:h-12 lg:w-12 xl:h-16 xl:w-16 p-0.5 break-words hover:bg-gray-300"
      style={{
        gridColumnStart: element.position[0],
        gridRowStart: element.position[1],
        backgroundColor: color,
      }}
      onClick={onClick}
    >
      <p className="text-sm font-thin hidden lg:block">
        {element.atomicNumber}
      </p>
      {color && (
        <p className="font-semibold lg:text-lg text-sm">{element.symbol}</p>
      )}
    </div>
  );
};
