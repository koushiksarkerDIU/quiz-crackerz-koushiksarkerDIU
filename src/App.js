import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import Error from "./components/Error/Error";
import Home from "./components/Home/Home";
import Tropic from "./components/Tropic/Tropic";
import Static from "./components/Static/Static";
import Blog from "./components/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
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

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
