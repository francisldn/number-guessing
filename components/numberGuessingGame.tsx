"use client";
import React, { useState } from "react";
import { Button, ButtonType } from "./button";
import { MachineGuessGame } from "./machineGuessGame";
import { UserGuessGame } from "./userGuessGame";
import { ModalComponent } from "./modal";
import { useRouter } from "next/navigation";

interface NumberGuessingGameProps {
  userGuess: boolean; // true if user is guessing, false if machine is guessing
}

export const NumberGuessingGame: React.FC<NumberGuessingGameProps> = ({
  userGuess,
}) => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10000);
  const [guess, setGuess] = useState<string | number>(
    Math.floor((min + max) / 2)
  );
  const [message, setMessage] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  const handleReset = () => {
    setMin(1);
    setMax(10000);
    setGuess(5000);
    setMessage("");
    setIsGameOver(false);
  };

  return (
    <div id='App'>
      {!isReady ? (
        <div className='mt-8'>
          <Button
            onClick={() => setIsReady(true)}
            btnText='Ready to play?'
            purpose={ButtonType.READY}
          />
        </div>
      ) : (
        <div className='flex flex-col mt-8'>
          {userGuess ? (
            <UserGuessGame
              setMessage={setMessage}
              setIsGameOver={setIsGameOver}
              setIsReady={setIsReady}
              guess={guess}
              setGuess={setGuess}
              setMin={setMin}
              setMax={setMax}
              min={min}
              max={max}
              message={message}
              isGameOver={isGameOver}
              handleReset={handleReset}
            />
          ) : (
            <>
              <MachineGuessGame
                setMessage={setMessage}
                setIsGameOver={setIsGameOver}
                setIsReady={setIsReady}
                guess={Number(guess)}
                setGuess={setGuess}
                setMin={setMin}
                setMax={setMax}
                min={min}
                max={max}
              />
              <div className='self-end'>
                <Button
                  onClick={handleReset}
                  btnText='Reset'
                  purpose={ButtonType.RESET}
                />
              </div>
            </>
          )}
        </div>
      )}

      <ModalComponent isOpen={isGameOver}>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-center text-2xl font-bold mb-8'>
            Congratulations!
          </h1>
          <p className='text-center text-xl font-bold mb-8 px-8'>{message}</p>
          <div className='flex gap-4'>
            <Button
              onClick={handleReset}
              btnText='Play Again'
              purpose={ButtonType.RESET}
            />
            <Button
              onClick={() => router.push(userGuess ? "/" : "/anothergame")}
              btnText='Play Another Game'
              purpose={ButtonType.ANOTHER}
            />
          </div>
        </div>
      </ModalComponent>
    </div>
  );
};
