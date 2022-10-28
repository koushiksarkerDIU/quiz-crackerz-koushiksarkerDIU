import React from "react";
import "./Option.css";

const Option = ({ option }) => {
  return (
    <div className="w-3/4 m-2 p-3 option">
      <button>{option}</button>
    </div>
  );
};

export default Option;
