import React from "react";

import Home from "../Home/Home";
import FruitsSection from "../FruitsSection/FruitsSection";
import RowComponent from "../RowComponent/RowComponent";
import { useSelector } from "react-redux";
import MenuContainer from "../MenuComponent/MenuContainer";
import CartBody from "../Cart/CartBody";

const MainContainer = () => {
  
  const foodItems = useSelector((state) => state.items.items);

  return (
    <main>
      <Home />
      <FruitsSection/>
      <RowComponent flag={true} data={foodItems?.filter((item) => item.category === 'fruits')} />
      <MenuContainer />
      <CartBody />
    </main>
  );
};

export default MainContainer;
