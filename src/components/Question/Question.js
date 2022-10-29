import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Option from "../Option/Option";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = (props) => {
  const { question, options, correctAnswer } = props.question;
  const handleShowCorrectAns = (correctAnswer) => {
    toast.info(correctAnswer, {
      theme: "dark",
    });
  };

  return (
    <div className="rounded-lg p-5 mb-20 w-3/5 shadow">
      <div className="flex justify-around">
        <h2 className="text-xl font-semibold italic w-3/4">Quiz :{question}</h2>
        <button onClick={() => handleShowCorrectAns(correctAnswer)}>
          <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
        </button>
      </div>
      <div className="grid grid-cols-2 justify-items-center justify-center p-2">
        {options.map((option, i) => (
          <Option
            key={i}
            option={option}
            correctAnswer={correctAnswer}
          ></Option>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Question;
