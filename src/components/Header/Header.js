import React, { useContext } from "react";
import img from "../../images/quiz.jpg";
import { TropicContext } from "../Layout/Main";
import Tropic from "../Tropic/Tropic";

const Header = () => {
  const tropics = useContext(TropicContext);
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
      <div className="mt-20 grid lg:grid-cols-2 lg:gap-10 justify-items-center">
        {tropics.map((tropic) => (
          <Tropic key={tropic.id} tropic={tropic}></Tropic>
        ))}
      </div>
    </div>
  );
};

export default Header;
