import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Error from "../Error/Error";
import Main from "../Layout/Main";
import Static from "../Static/Static";
import Tropic from "../Tropic/Tropic";
import Header from "../Header/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Header></Header>,
      },
      {
        path: "tropic",
        element: <Tropic></Tropic>,
      },
      {
        path: "static",
        element: <Static></Static>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
