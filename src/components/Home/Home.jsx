import React from "react";

import Delivery from "../../assets/delivery.png";
import Herobg from "../../assets/heroBg.png";
import { clx } from "../../utils/clx";
import { imageData } from "../../utils/homeFourImages";

const classes = clx(
  "mt-14 md:mt-[50px] lg:mt-[72px] p-4 md:p-8 md:px-16 w-full lg:h-[calc(100vh_-_73px)] grid grid-cols-1 md:grid-cols-2 gap-2"
);

const Home = () => {
  return (
    <section className={classes} id="home">
      {/* FIRST PART */}
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
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:mx-auto md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>

      {/* SECOND PART */}
      <div className="py-2 bg-ble-400 flex-1 relative px-2">
        <img
          src={Herobg}
          alt="hero-bg"
          className="ml-auto w-full lg:w-[400px] h-[400px] lg:h-[470px]"
        />

        <div className="w-full h-full gap-2 flex flex-wrap items-center justify-center lg:px-10  absolute border border-red-500 top-0 left-0">
          {imageData.map((image) => {
            return (
              <div className=" md:w-[150px] lg:w-[160px] lg:min-w-[160px] p-4 bg-cardOverlay backdrop-blur-md flex flex-col items-center justify-center rounded-2xl">
                <img
                  src={image.imageSrc}
                  alt="icecream"
                  className="w-20 lg:w-28 -mt-10 lg:-mt-20"
                />
                <p className="text-base text-textColor font-semibold">
                  {image.name}
                </p>
                <p className="text-xs lg:text-sm font-semibold text-lightTextGray my-1 lg:my-2">
                  {image.description}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {image.price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
