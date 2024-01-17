import QuestionCard from "@/components/shared/QuestionCard";
import { data } from "@/lib/constant";
import React from "react";
interface AccessibilityPageProps {
  params: {
    id: string;
  };
}
const CSSPage = ({ params: { id } }: AccessibilityPageProps) => {
  const questions = data[1].questions;
  const question = questions[parseInt(id) - 1].question;
  const answer = questions[parseInt(id) - 1].answer;
  const options = questions[parseInt(id) - 1].options;
  return (
    <div className=" mt-24">
      <QuestionCard title="css" question={question} options={options} id={id} />
    </div>
  );
};

export default CSSPage;
