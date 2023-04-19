import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header/Header";
import { clx } from "./utils/clx";
import MainContainer from "./components/Main/MainContainer";
import CreateItem from './components/CreateItem/CreateItem'

const App = () => {
  const classes = clx("w-screen h-auto flex flex-col bg-primary");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          index: true,
          element: <MainContainer />,
        },

        { path: "create", element: <CreateItem /> },
      ],
    },
  ]);
  return (
    <div className={classes}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
