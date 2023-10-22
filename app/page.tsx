import { GameRule } from "@/components/gameRule";
import { NumberGuessingGame } from "../components/numberGuessingGame";

export default function Home() {
  return (
    <>
      <GameRule>
        <ol
          style={{ listStyle: "decimal" }}
          className='flex flex-col gap-4 mx-auto w-[90%]'
        >
          <li>Firstly, you think of a number between 1 to 10,000</li>
          <li>Then, I will guest your number</li>
          <li>
            You can respond with: <span className='font-bold'>too high</span>,{" "}
            <span className='font-bold'>too low</span> or{" "}
            <span className='font-bold'>correct</span>. The game will continue
            until I have guessed your number correctly
          </li>
        </ol>
      </GameRule>
      <NumberGuessingGame userGuess={false} />
    </>
  );
}
