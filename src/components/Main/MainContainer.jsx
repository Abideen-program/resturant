import React from "react";

import Home from "../Home/Home";
import FruitsSection from "../FruitsSection/FruitsSection";
import RowComponent from "../RowComponent/RowComponent";

const MainContainer = () => {
  return (
    <main>
      <Home />
      <FruitsSection />
      <RowComponent flag={true}/>
    </main>
  );
};

export default MainContainer;
