"use client";
import React, { useState } from "react";
import { StatusBar } from "./statusBar";
import { Button, ButtonType } from "./button";

interface UserGuessGameProps {
  setMessage: (message: string) => void;
  setIsGameOver: (isGameOver: boolean) => void;
  setIsReady: (isReady: boolean) => void;
  guess: number | string;
  max: number;
  min: number;
  setMax: (max: number) => void;
  setMin: (min: number) => void;
  setGuess: (guess: number | string) => void;
  message: string;
  isGameOver: boolean;
  handleReset: () => void;
}

export const UserGuessGame: React.FC<UserGuessGameProps> = ({
  setMessage,
  setIsGameOver,
  setIsReady,
  guess,
  max,
  min,
  setGuess,
  setMax,
  setMin,
  message,
  isGameOver,
  handleReset,
}) => {
  const [targetNumber, setTargetNumber] = useState<string | number>("");

  const generateSecretNumber = () => {
    const rand = Math.floor(Math.random() * 10000) + 1;
    setGuess("");
    setTargetNumber(rand);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validation
    if (Number(guess) > max) {
      return;
    } else if (Number(guess) < min) {
      return;
    }

    if (targetNumber && Number(guess) < Number(targetNumber)) {
      setMessage("Your guess is too low. Try again!");
      setMin(Number(guess) + 1);
      setGuess("");
    } else if (targetNumber && Number(guess) > Number(targetNumber)) {
      setMessage(`Your guess is too high. Try again!`);
      setMax(Number(guess) - 1);
      setGuess("");
    } else if (targetNumber && Number(guess) === Number(targetNumber)) {
      setMessage(`You guessed it: ${guess} 🎉🎉🎉`);
      setIsReady(false);
      setIsGameOver(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(e.target.value);
    setMessage("");
  };

  return (
    <>
      <StatusBar min={min} max={max} />
      {targetNumber ? (
        <>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor='guess'
              className='text-blue-800 text-lg text-center font-bold pb-8 flex flex-col gap-3 items-center'
            >
              {`Guess the secret number (between 1 to 10,000):`}
              <input
                id='guess'
                name='guess'
                className='w-40 h-12 pl-4 rounded-md border border-blue-gray-200 bg-white px-3 py-2.5 text-blue-gray-700 outline outline-0 transition-all focus:border-2 focus:border-pink-500 focus:outline-0'
                value={guess}
                onChange={handleChange}
                placeholder='eg. 5000'
                max={max.toString()}
                min={min.toString()}
                type='number'
                required
              />
              {!isGameOver && message ? (
                <p className='font-normal text-sm text-red-500'>{message}</p>
              ) : null}
              <Button
                purpose={ButtonType.USERINPUT}
                btnText='Submit'
                onClick={() => null}
                type='submit'
              />
            </label>
          </form>
          <div className='self-end'>
            <Button
              onClick={() => {
                setTargetNumber("");
                handleReset();
              }}
              btnText='Reset'
              purpose={ButtonType.RESET}
            />
          </div>
        </>
      ) : (
        <div className='flex justify-center'>
          <Button
            purpose={ButtonType.GENERATE}
            btnText='Generate a number between 1 to 10,000'
            onClick={generateSecretNumber}
          />
        </div>
      )}
    </>
  );
};
