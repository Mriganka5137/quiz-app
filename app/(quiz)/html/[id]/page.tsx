import { data } from "@/lib/constant";
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

export default HTMLPage;
