"use client";
import Link from "next/link";
import React, { useState } from "react";
interface QuestionCardProps {
  id: string;
  question: string;
  options: string[];
  title: string;
  answer: string;
}

type OptionMapping = { [index: number]: string };

const optionMapping: OptionMapping = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
};

const QuestionCard = ({
  id,
  question,
  options,
  title,
  answer,
}: QuestionCardProps) => {
  const [select, setSelect] = useState<string | null>();
  const [submit, setSubmit] = useState<boolean>(false);
  const [correct, setCorrect] = useState(false);
  const handleSubmit = () => {
    if (select === answer) {
      // setSelect(null);
      setCorrect(true);
    } else {
    }
    setSubmit(true);
  };

  return (
    <div className=" flex justify-between gap-10 max-laptop:flex-col">
      <div className="w-2/5  pr-3 max-laptop:w-full max-laptop:pr-0">
        <p className=" text-body-l mb-7">Question {id} of 10</p>
        <h2 className=" text-heading-m">{question}</h2>
      </div>
      <div className=" flex flex-col gap-6  w-3/5 pl-10  max-laptop:w-full max-laptop:pl-0">
        {options.map((option, index) => (
          <div
            onClick={() => {
              if (submit) return;
              setSelect(option);
            }}
            key={index}
            className={`  ${
              select === option ? "border-purpleCustom" : "border-transparent"
            } flex gap-8 bg-pureWhite px-5 py-5 rounded-3xl dark:bg-navyCustom items-center  shadow-lg cursor-pointer dark:shadow-none shadow-neutral-200 group border-[3px] ${
              submit && select === option
                ? correct
                  ? "border-green-500" // Change the border color to green if correct
                  : "border-red-500" // Change the border color to red if incorrect
                : ""
            }`}
          >
            <div
              className={`${
                select === option ? "bg-purpleCustom " : "bg-lightGray "
              } w-14 h-14 flex items-center justify-center rounded-xl ${
                submit && select === option
                  ? correct
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "" // Change the background color to green if correct
              }`}
            >
              <h3
                className={`text-[28px] ${
                  select === option
                    ? "text-pureWhite"
                    : "text-grayNavy group-hover:text-purpleCustom"
                }   `}
              >
                {optionMapping[index]}
              </h3>
            </div>
            <h3 className=" text-heading-s">{option}</h3>
          </div>
        ))}

        {!submit ? (
          <button
            onClick={() => {
              handleSubmit();
            }}
            disabled={!select}
            className="flex bg-purpleCustom px-5 py-7 rounded-3xl  items-center  shadow-lg  dark:shadow-neutral-100/10 shadow-neutral-300  text-heading-s text-pureWhite justify-center"
          >
            Submit
          </button>
        ) : (
          <Link
            href={`/${title}/${parseInt(id) + 1}`}
            className="flex bg-purpleCustom px-5 py-7 rounded-3xl  items-center  shadow-lg  dark:shadow-neutral-100/10 shadow-neutral-300  text-heading-s text-pureWhite justify-center"
          >
            Next Question
          </Link>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
