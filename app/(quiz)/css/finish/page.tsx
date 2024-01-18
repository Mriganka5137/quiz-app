"use client";
import useScore from "@/lib/store";
import React, { use } from "react";

const FinishPage = () => {
  const score = useScore((state) => state.score);
  return (
    <div>
      <h1>Finish Page</h1>
      <h2>{score}</h2>
    </div>
  );
};

export default FinishPage;
