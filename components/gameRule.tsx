import React from "react";

interface GameRuleProps {
  children: React.ReactNode;
}

export const GameRule: React.FC<GameRuleProps> = ({ children }) => {
  return (
    <div className=' w-full pl-6 py-4 rounded-md bg-white'>
      <ol
        style={{ listStyle: "decimal" }}
        className='flex flex-col gap-4 mx-auto w-[90%]'
      >
        {children}
      </ol>
    </div>
  );
};
