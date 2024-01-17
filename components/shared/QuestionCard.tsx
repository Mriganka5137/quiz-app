import Link from "next/link";
import { title } from "process";
import React from "react";
interface QuestionCardProps {
  id: string;
  question: string;
  options: string[];
  title: string;
}

type OptionMapping = { [index: number]: string };

const optionMapping: OptionMapping = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
};

const QuestionCard = ({ id, question, options, title }: QuestionCardProps) => {
  return (
    <div className=" flex justify-between gap-36">
      <div className="w-1/2">
        <p className=" text-body-l mb-7">Question {id} of 10</p>
        <h2 className=" text-heading-m">{question}</h2>
      </div>
      <div className=" flex flex-col w-1/2 gap-6">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex gap-8 bg-pureWhite px-5 py-5 rounded-3xl dark:bg-navyCustom items-center  shadow-lg  dark:shadow-none shadow-neutral-200"
          >
            <div className=" w-14 h-14 bg-lightGray p-3 flex items-center justify-center rounded-xl ">
              <h3 className=" text-heading-s dark:text-grayNavy">
                {optionMapping[index]}
              </h3>
            </div>
            <h3 className=" text-heading-s">{option}</h3>
          </div>
        ))}
        <Link
          href={`/${title}/${parseInt(id) + 1}`}
          className="flex bg-purpleCustom px-5 py-7 rounded-3xl  items-center  shadow-lg  dark:shadow-neutral-100/10 shadow-neutral-300  text-heading-s text-pureWhite justify-center"
        >
          Next Question
        </Link>
      </div>
    </div>
  );
};

export default QuestionCard;
