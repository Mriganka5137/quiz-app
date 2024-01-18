"use client";
import useScore from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ScoreCardProps {
  topic: string;
  imgSrc: string;
}

const ScoreCard = ({ topic, imgSrc }: ScoreCardProps) => {
  const score = useScore((state) => state.score);

  return (
    <div className="w-1/2 max-laptop:w-full ">
      <div className=" bg-pureWhite dark:bg-navyCustom flex flex-col items-center justify-start w-full rounded-[24px] shadow-sm p-12 gap-10 max-tablet:p-8 ">
        <div className=" flex items-center gap-4">
          <div className=" w-14 h-14 p-2 max-tablet:w-10 max-tablet:h-10 max-tablet:p-1">
            <Image
              src={imgSrc}
              alt={topic}
              width={100}
              height={100}
              className=" w-full h-full object-contain"
            />
          </div>
          <h2 className=" text-heading-s">{topic}</h2>
        </div>
        <div>
          <h2 className=" text-display">{score}</h2>
          <p className=" text-body-m">out of 10</p>
        </div>
      </div>
      <button className=" bg-purpleCustom w-full text-center p-8 text-pureWhite text-[28px] rounded-[24px] font-normal min-h-14 mt-8 max-tablet:text-[18px] max-tablet:p-2 max-tablet:rounded-[12px] max-tablet:mt-3">
        <Link href="/">Play Again</Link>
      </button>
    </div>
  );
};

export default ScoreCard;
