import React from "react";
import "./Option.css";

const Option = ({ option }) => {
  return (
    <div className="w-3/4 m-2 option">
      <h2 className="p-2"> {option}</h2>
    </div>
  );
};

export default Option;
