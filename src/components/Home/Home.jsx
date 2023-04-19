import React from "react";

import Delivery from "../../assets/delivery.png";
import { clx } from "../../utils/clx";

const classes = clx(
  "mt-14 md:mt-[50px] lg:mt-[72px] p-4 md:p-8 md:px-16 w-full lg:h-[calc(100vh_-_73px)] grid grid-cols-1 md:grid-cols-2 gap-2"
);

const Home = () => {
  return (
    <section className={classes} id="home">
      <div className="py-2 flex-1 flex flex-col gap-2 items-start">
        <div className="flex gap-2 items-center justify-center py-1 px-4 rounded-full bg-orange-100">
          <p className="text-orange-400 font-semibold text-[15px]">
            Bike Delivery
          </p>
          <div className="w-8 h-8 overflow-hidden rounded-full bg-slate-50 drop-shadow-xl">
            <img
              src={Delivery}
              alt="Delivery bike"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <p className="text-[2rem] text-center md:text-left lg:text-[3.5rem] font-bold tracking-wider text-headingColor">
          The Fastest Delivery to
          <span className="text-[2.3rem] lg:text-[4rem] text-orange-600">
            Your Door Step
          </span>
        </p>

        <p className="text-[13px] md:text-base text-center md:text-justify md:w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          veniam. Pariatur quasi fugit quaerat, temporibus laudantium quidem
          maiores quo doloribus
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:m-auto md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>

      <div className="py-2 bg-blue-400 flex-1">Hello</div>
    </section>
  );
};

export default Home;
