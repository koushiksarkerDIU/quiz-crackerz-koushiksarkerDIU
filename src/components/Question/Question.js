import React from "react";
import Option from "../Option/Option";

const Question = (props) => {
  //   console.log(props.question);
  const { question, options, correctAnswer } = props.question;
  return (
    <div className="border p-10 w-3/5">
      <h2>Quiz :{question}</h2>
      <div className="grid grid-cols-2 justify-items-center justify-center p-2">
        {options.map((option, i) => (
          <Option key={i} option={option}></Option>
        ))}
      </div>
      <div>{correctAnswer}</div>
    </div>
  );
};

export default Question;
