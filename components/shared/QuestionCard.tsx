"use client";
import useScore from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";
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
  // useRouter

  const router = useRouter();

  const setScore = useScore((state) => state.setScore);

  const nextLink =
    id === "10" ? `/${title}/finish` : `/${title}/${parseInt(id) + 1}`;
  const [select, setSelect] = useState<string | null>(null);
  const [submit, setSubmit] = useState<boolean>(false);
  const [correct, setCorrect] = useState(false);
  const handleSubmit = () => {
    setSubmit(true);
    if (select === answer) {
      setCorrect(true);
      setScore();
    } else {
      setCorrect(false);
    }
  };

  return (
    <div className=" flex justify-between gap-10 max-laptop:flex-col">
      <div className="w-2/5  pr-3 max-laptop:w-full max-laptop:pr-0 flex flex-col justify-between pb-20 max-laptop:pb-5 gap-10">
        <div>
          <p className=" text-body-l mb-7">Question {id} of 10</p>
          <h2 className=" text-heading-m">{question}</h2>
        </div>
        <ProgressBar id={id} />
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
            } flex gap-6  bg-pureWhite px-5 py-5 rounded-3xl dark:bg-navyCustom items-center  shadow-lg cursor-pointer dark:shadow-none shadow-neutral-200 group border-[3px] justify-between hover:-translate-y-1 transition-all ease-in-out duration-300  max-laptop:p-3 max-tablet:gap-3 max-tablet:rounded-[12px] ${
              submit && select === option
                ? option === answer
                  ? "border-green-500"
                  : "border-red-500"
                : ""
            } `}
          >
            <div className="flex gap-8 items-center max-tablet:gap-4 ">
              <div
                className={`${
                  select === option ? "bg-purpleCustom " : "bg-lightGray "
                } w-14 h-14 flex items-center justify-center rounded-xl flex-shrink-0 max-tablet:w-10 max-tablet:h-10 max-tablet:rounded-[8px] ${
                  submit && select === option
                    ? option === answer
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
            {submit && answer === option && (
              <Image
                src="/assets/images/icon-correct.svg"
                width={40}
                height={40}
                alt="correct"
              />
            )}

            {submit && select === option && answer !== option && (
              <Image
                src="/assets/images/icon-error.svg"
                width={40}
                height={40}
                alt="incorrect"
              />
            )}
          </div>
        ))}

        {!submit ? (
          <button
            onClick={() => {
              handleSubmit();
            }}
            disabled={!select}
            className="flex bg-purpleCustom px-5 py-7 rounded-[24px]  items-center  shadow-lg  dark:shadow-neutral-100/10 shadow-neutral-300  text-heading-s text-pureWhite justify-center hover:-translate-y-1 transition-all ease-in-out duration-300 max-tablet:rounded-[8px]"
          >
            Submit Answer
          </button>
        ) : (
          <Link
            href={nextLink}
            className="flex bg-purpleCustom px-5 py-7 rounded-[24px]  items-center  shadow-lg  dark:shadow-neutral-100/10 shadow-neutral-300  text-heading-s text-pureWhite justify-center hover:-translate-y-1 transition-all ease-in-out duration-300 max-tablet:rounded-[8px]"
          >
            {nextLink === `/${title}/finish` ? "Finish" : "Next Question"}
          </Link>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
