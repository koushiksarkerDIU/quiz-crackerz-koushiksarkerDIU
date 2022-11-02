import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Error from "../Error/Error";
import Main from "../Layout/Main";
import Static from "../Static/Static";
import Header from "../Header/Header";
import Tropics from "../Tropics/Tropics";
import Quizzes from "../Quizzes/Quizzes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Header></Header>,
      },
      {
        path: "tropics",
        element: <Tropics></Tropics>,
      },
      {
        path: "static",
        element: <Static></Static>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "quiz/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.id}`
          );
        },
        element: <Quizzes></Quizzes>,
      },
    ],
  },
]);
