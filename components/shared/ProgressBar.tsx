"use client";
import React from "react";
interface ProgressBarProps {
  id: string;
}

const ProgressBar = ({ id }: ProgressBarProps) => {
  return (
    <div className=" w-full h-4 bg-pureWhite rounded-md p-1 dark:bg-navyCustom">
      <div
        className="h-full bg-purpleCustom rounded-md"
        style={{
          width: `${((parseInt(id) - 1) / 10) * 100}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
