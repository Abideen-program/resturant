import React from "react";

import Home from "../Home/Home";
import FruitsSection from "../FruitsSection/FruitsSection";
import RowComponent from "../RowComponent/RowComponent";
import { useSelector } from "react-redux";

const MainContainer = () => {
  
  const foodItems = useSelector((state) => state.items.items);

  return (
    <main>
      <Home />
      <FruitsSection/>
      <RowComponent flag={true} data={foodItems} />
    </main>
  );
};

export default MainContainer;
