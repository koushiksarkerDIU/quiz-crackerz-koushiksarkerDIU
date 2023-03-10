import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./Option.css";

const Option = ({ option, correctAnswer }) => {
  const [count, setCount] = useState(0);
  const handleCorrectAns = (option) => {
    if (option === correctAnswer) {
      toast.success("Your answer is correct", {
        position: "top-center",
      });
    } else {
      toast.error("Your answer is incorrect");
    }
  };
  const increase = () => {
    console.log("hi");
  };

  console.log(count);
  return (
    <div className="w-3/4 m-2 option">
      <button
        className="w-full h-full p-3"
        onClick={() => {
          handleCorrectAns(option);
          increase();
        }}
      >
        {option}
      </button>
      <ToastContainer />
    </div>
  );
};

export default Option;
