import { data } from "@/lib/constant";
import React from "react";
interface AccessibilityPageProps {
  params: {
    id: string;
  };
}
const AccessibilityPage = ({ params: { id } }: AccessibilityPageProps) => {
  const questions = data[3].questions;
  const question = questions[parseInt(id) - 1].question;
  const answer = questions[parseInt(id) - 1].answer;
  const options = questions[parseInt(id) - 1].options;
  return (
    <div>
      <div>{question}</div>
      <div>{answer}</div>
      <div>
        {options.map((option, index) => (
          <div key={index}>{option}</div>
        ))}
      </div>
    </div>
  );
};

export default AccessibilityPage;
