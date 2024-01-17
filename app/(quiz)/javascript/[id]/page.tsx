import QuestionCard from "@/components/shared/QuestionCard";
import { data } from "@/lib/constant";
import React from "react";
interface JavaScriptPageProps {
  params: {
    id: string;
  };
}

const JavaScriptPage = ({ params: { id } }: JavaScriptPageProps) => {
  const questions = data[2].questions;
  const question = questions[parseInt(id) - 1].question;
  const answer = questions[parseInt(id) - 1].answer;
  const options = questions[parseInt(id) - 1].options;
  return (
    <div className=" mt-24">
      <QuestionCard
        answer={answer}
        title="javascript"
        question={question}
        options={options}
        id={id}
      />
    </div>
  );
};

export default JavaScriptPage;
