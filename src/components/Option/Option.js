import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "./Option.css";

const Option = ({ option, correctAnswer }) => {
  const handleCorrectAns = (option) => {
    if (option === correctAnswer) {
      toast.success("Your answer is correct", {
        position: "top-center",
      });
    } else {
      toast.error("Your answer is incorrect");
    }
  };
  return (
    <div className="w-3/4 m-2 p-3 option">
      <button
        className="w-full h-full"
        onClick={() => handleCorrectAns(option)}
      >
        {option}
      </button>
      <ToastContainer />
    </div>
  );
};

export default Option;
