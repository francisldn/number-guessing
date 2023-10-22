import React from "react";
import { Button, ButtonType } from "./button";
import { StatusBar } from "./statusBar";

interface MachineGuessGameProps {
  setMessage: (message: string) => void;
  setIsGameOver: (isGameOver: boolean) => void;
  setIsReady: (isReady: boolean) => void;
  guess: number;
  max: number;
  min: number;
  setMax: (max: number) => void;
  setMin: (min: number) => void;
  setGuess: (guess: number) => void;
}

export const MachineGuessGame: React.FC<MachineGuessGameProps> = ({
  setMessage,
  setIsGameOver,
  setIsReady,
  guess,
  max,
  min,
  setGuess,
  setMax,
  setMin,
}) => {
  const handleTooHigh = () => {
    setMax(guess - 1);
    setGuess(Math.floor((min + guess - 1) / 2));
  };

  const handleTooLow = () => {
    setMin(guess + 1);
    setGuess(Math.floor((guess + 1 + max) / 2));
  };

  const handleCorrect = () => {
    setMessage(`I guessed it: ${guess} 🎉🎉🎉`);
    setIsReady(false);
    setIsGameOver(true);
  };

  return (
    <>
      <StatusBar min={min} max={max} />
      <p className='text-blue-800 text-lg text-center font-bold pb-8'>
        Is it <span className='text-orange-600'>{guess}</span>?
      </p>
      <div className='range-bar'>
        <div
          className='range-highlight'
          style={{
            width: `${((guess - min) / (max - min)) * 100}%`,
          }}
        ></div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='flex gap-4 justify-around'>
          <Button
            onClick={handleTooLow}
            disabled={max + 1 === min - 1}
            btnText={"Too Low"}
            purpose={ButtonType.TOOLOW}
          />

          <Button
            onClick={handleTooHigh}
            btnText={"Too High"}
            disabled={max + 1 === min - 1}
            purpose={ButtonType.TOOHIGH}
          />
        </div>
        <Button
          onClick={handleCorrect}
          btnText={"Correct"}
          purpose={ButtonType.CORRECT}
        />
      </div>
    </>
  );
};
