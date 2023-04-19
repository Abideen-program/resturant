import React from "react";

import Delivery from "../../assets/delivery.png";

const FirstSection = () => {
  return (
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
        The Fastest Delivery on{" "}
        <span className="text-[2.3rem] lg:text-[4rem] text-orange-600">
          a Click
        </span>
      </p>

      <p className="text-[13px] md:text-base text-center md:text-justify md:w-[90%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        veniam. Pariatur quasi fugit quaerat, temporibus laudantium quidem
        maiores quo doloribus
      </p>

      <button
        type="button"
        className="bg-gradient-to-br from-orange-400 to-orange-500 w-full my-4 md:my-0 md:mx-auto md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
      >
        Order Now
      </button>
    </div>
  );
};

export default FirstSection;
