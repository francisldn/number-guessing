import React from "react";

interface HeadingProps {
  text: string;
}

export const SubHeading: React.FC<HeadingProps> = ({ text }) => {
  return <h2 className='font-bold text-xl mb-6 text-indigo-800'>{text}</h2>;
};
