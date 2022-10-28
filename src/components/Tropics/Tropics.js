import React from "react";
import { useLoaderData } from "react-router-dom";
import Tropic from "../Tropic/Tropic";

const Tropics = () => {
  const loaderData = useLoaderData();
  const tropics = loaderData?.data;
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
