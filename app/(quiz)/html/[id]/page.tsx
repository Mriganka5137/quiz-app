import QuestionCard from "@/components/shared/QuestionCard";
import { data } from "@/lib/constant";
import Link from "next/link";
import React from "react";
interface HTMLPageProps {
  params: {
    id: string;
  };
}

const HTMLPage = ({ params: { id } }: HTMLPageProps) => {
  const questions = data[0].questions;
  const question = questions[parseInt(id) - 1].question;
  const answer = questions[parseInt(id) - 1].answer;
  const options = questions[parseInt(id) - 1].options;
  return (
    <div className=" mt-24">
      <QuestionCard
        answer={answer}
        title="html"
        question={question}
        options={options}
        id={id}
      />
    </div>
  );
};

export default HTMLPage;
