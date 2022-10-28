import React from "react";
import { useLoaderData } from "react-router-dom";

const Quizzes = () => {
  const loader = useLoaderData();
  const quiz = loader.data;
  console.log(quiz);
  const { logo, name } = quiz;
  return (
    <div>
      <h1>Quiz of {name} </h1>
    </div>
  );
};

export default Quizzes;
