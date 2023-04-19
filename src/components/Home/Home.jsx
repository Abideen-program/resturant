import React from "react";

import { clx } from "../../utils/clx";

import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

const classes = clx(
  "mt-14 md:mt-[50px] lg:mt-[72px] p-4 md:p-8 md:px-16 w-full lg:h-[calc(100vh_-_73px)] grid grid-cols-1 md:grid-cols-2 gap-2"
);

const Home = () => {
  return (
    <section className={classes} id="home">
      {/* FIRST PART */}
      <FirstSection />
      {/* SECOND PART */}
      <SecondSection />
    </section>
  );
};

export default Home;
