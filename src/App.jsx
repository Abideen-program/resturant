import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { setItems } from "./components/Store/features/itemsSlice";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header/Header";
import { clx } from "./utils/clx";
import MainContainer from "./components/Main/MainContainer";
import CreateItem from "./components/CreateItem/CreateItem";
import { getFoodData } from "./utils/saveFoodData";

const App = () => {
  const items = useSelector((state) => state.items.items);

  const dispatch = useDispatch();

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

  const fetchFoodItems = async () => {
    await getFoodData().then((data) => {
      dispatch(setItems(data));
    });
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  return (
    <div className={classes}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
