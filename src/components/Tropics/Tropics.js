import React, { useContext } from "react";
import { TropicContext } from "../Layout/Main";
import Tropic from "../Tropic/Tropic";

const Tropics = () => {
  const tropics = useContext(TropicContext);
  return (
    <div>
      <div className="mt-20 grid lg:grid-cols-2 lg:gap-10 justify-items-center">
        {tropics.map((tropic) => (
          <Tropic key={tropic.id} tropic={tropic}></Tropic>
        ))}
      </div>
    </div>
  );
};

export default Tropics;
