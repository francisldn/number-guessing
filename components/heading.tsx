import React from "react";

interface HeadingProps {
  text: string;
}

export const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h1 className='text-center font-extrabold text-2xl mb-8'>{text}</h1>;
};
