import { GameRule } from "@/components/gameRule";
import { NumberGuessingGame } from "@/components/numberGuessingGame";
import React from "react";

export default function AnotherGame() {
  return (
    <>
      <GameRule>
        <ol
          style={{ listStyle: "decimal" }}
          className='flex flex-col gap-4 mx-auto w-[90%]'
        >
          <li>
            Firstly, you will generate a secret number between 1 to 10,000
          </li>
          <li>Then, you will guess the secret number</li>
          <li>
            I will tell you if your guess is{" "}
            <span className='font-bold'>too high</span>,{" "}
            <span className='font-bold'>too low</span> or{" "}
            <span className='font-bold'>correct</span>. The game will continue
            until you have guessed the secret number correctly.
          </li>
        </ol>
      </GameRule>
      <NumberGuessingGame userGuess={true} />
    </>
  );
}
