import React from "react";

interface StatusBarProps {
  min: number;
  max: number;
}

export const StatusBar: React.FC<StatusBarProps> = ({ min, max }) => {
  const statusBarMax = `${(min / 100).toFixed(2)}%`;
  const statusBarMin = `${(100 - max / 100).toFixed(2)}%`;

  return (
    <div className='my-6'>
      <div className='bg-green-500 border-2 border-black w-full h-8 rounded-md flex justify-between relative z-1'>
        <div
          className={`h-full bg-slate-500 z-2 ${
            min > 1 ? "border-r-2 border-dotted" : ""
          }`}
          style={{ width: statusBarMax }}
        >
          <p
            className={`text-md ${
              min === 1 ? "text-black pl-2" : "text-white"
            } text-right pr-3 items-center`}
          >
            {min}
          </p>
        </div>

        <div
          className={`h-full bg-slate-500 z-2 ${
            max < 10000 ? "border-l-2 border-dotted" : ""
          }`}
          style={{ width: statusBarMin }}
        >
          {max < 10000 ? (
            <p className={`text-md text-white text-left pl-2 items-center`}>
              {max}
            </p>
          ) : null}
        </div>
        {max === 10000 ? (
          <p className={`text-md text-black text-right pr-2 items-center`}>
            {max}
          </p>
        ) : null}
      </div>
    </div>
  );
};
