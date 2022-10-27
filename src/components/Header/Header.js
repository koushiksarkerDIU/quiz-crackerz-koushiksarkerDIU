import React from "react";
import img from "../../images/quiz.jpg";
import Home from "../Home/Home";
const Header = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col">
        <div className="w-screen lg:w-1/2 m-0">
          <img src={img} alt="" />
        </div>
        <div className="lg:w-1/2 mt-10 flex text-center items-center justify-center">
          <div>
            <h2 className="lg:text-5xl text-2xl">
              Wellcome to Chase Your Brain
            </h2>
            <p className="lg:text-2xl">
              Here you can train your brain into next level
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Home></Home>
      </div>
    </div>
  );
};

export default Header;
