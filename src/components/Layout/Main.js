import React, { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
export const TropicContext = createContext([]);

const Main = () => {
  const tropics = useLoaderData().data;
  return (
    <TropicContext.Provider value={tropics}>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </TropicContext.Provider>
  );
};

export default Main;
