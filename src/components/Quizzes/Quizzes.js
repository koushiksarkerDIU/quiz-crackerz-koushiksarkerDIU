import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quizzes = () => {
  const loader = useLoaderData();
  const quiz = loader.data;
  // console.log(quiz);
  const { name, questions, total } = quiz;
  return (
    <div>
      <h1 className="my-5 text-3xl font-bold italic">Quiz of : {name} </h1>
      <h1 className="my-5 text-xl font-bold italic">Total Quiz : {total} </h1>

      <div className="grid justify-items-center">
        {questions.map((question) => (
          <Question key={question.id} question={question}></Question>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
