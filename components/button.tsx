import React from "react";

export enum ButtonType {
  TOOLOW = "low",
  TOOHIGH = "high",
  CORRECT = "correct",
  RESET = "reset",
  READY = "ready",
  ANOTHER = "another",
  USERINPUT = "userinput",
  GENERATE = "generate",
}

interface ButtonProps {
  onClick: () => void;
  purpose: ButtonType;
  type?: "reset" | "submit" | "button";
  btnText: string;
  disabled?: boolean;
}

const ButtonTypeStyles = {
  [ButtonType.TOOLOW]:
    "border-red-200 bg-red-200 hover:bg-red-600 text-black hover:text-white",
  [ButtonType.TOOHIGH]: "border-red-500 bg-red-500 hover:bg-red-800 text-white",
  [ButtonType.CORRECT]:
    "border-green-600 bg-green-600 hover:bg-green-800 text-white",
  [ButtonType.RESET]:
    "bg-gradient-to-br from-[#091679] to-[#00a1ff] border-blue-500 hover:bg-blue-800 text-white",
  [ButtonType.READY]:
    "bg-gradient-to-br from-[#091679] to-[#00a1ff] border-blue-500 hover:bg-blue-800 text-white",
  [ButtonType.ANOTHER]:
    "bg-gradient-to-br from-[#d71212] to-[#f77b00] border-red-500 hover:bg-red-800 text-white",
  [ButtonType.USERINPUT]:
    "border-blue-600 bg-blue-600 hover:bg-blue-800 text-white w-32",
  [ButtonType.GENERATE]:
    "bg-gradient-to-br from-[#091679] to-[#00a1ff] border-blue-500 hover:bg-blue-800 text-white",
  disabled: "bg-grey-400 border-grey-400 text-grey-600",
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  btnText,
  disabled,
  type,
  purpose,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`border ${
        purpose === ButtonType.TOOLOW
          ? ButtonTypeStyles[ButtonType.TOOLOW]
          : purpose === ButtonType.TOOHIGH
          ? ButtonTypeStyles[ButtonType.TOOHIGH]
          : purpose === ButtonType.CORRECT
          ? ButtonTypeStyles[ButtonType.CORRECT]
          : purpose === ButtonType.RESET
          ? ButtonTypeStyles[ButtonType.RESET]
          : purpose === ButtonType.READY
          ? ButtonTypeStyles[ButtonType.READY]
          : purpose === ButtonType.ANOTHER
          ? ButtonTypeStyles[ButtonType.ANOTHER]
          : purpose === ButtonType.USERINPUT
          ? ButtonTypeStyles[ButtonType.USERINPUT]
          : purpose === ButtonType.GENERATE
          ? ButtonTypeStyles[ButtonType.GENERATE]
          : ButtonTypeStyles[ButtonType.TOOLOW]
      } rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline ${
        disabled ? ButtonTypeStyles.disabled : ""
      }}`}
    >
      {btnText}
    </button>
  );
};
