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
    <div className="rounded-lg py-5 my-10 lg:w-3/5 shadow ">
      <div className="flex justify-between m-2">
        <h2 className="lg:text-xl text-lg font-semibold italic lg:w-3/4 mr-1">
          Quiz :{question}
        </h2>
        <button onClick={() => handleShowCorrectAns(correctAnswer)}>
          <FontAwesomeIcon className="m-1" icon={faEye}></FontAwesomeIcon>
        </button>
      </div>
      <div className="grid lg:grid-cols-2 justify-items-center justify-center p-2">
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
