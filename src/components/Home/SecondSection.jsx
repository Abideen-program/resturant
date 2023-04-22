import React from "react";

import Herobg from "../../assets/heroBg.png";
import { imageData } from "../../utils/foodData";

const SecondSection = () => {
  return (
    <div>
      <div className="py-2 bg-ble-400 flex-1 relative px-2">
        <img
          src={Herobg}
          alt="hero-bg"
          className="ml-auto w-full lg:w-[400px] h-[400px] lg:h-[470px] "
        />

        <div className="w-full h-full gap-4 md:gap-2 flex flex-wrap items-center justify-center lg:px-[50px] xl:px-20 absolute top-0 left-0 overflow-hidden md:overflow-auto">
          {imageData.map((image) => {
            return (
              <div key={image.id} className=" w-[150px] lg:w-[160px] lg:min-w-[160px] p-4 bg-cardOverlay backdrop-blur-md flex flex-col items-center justify-center rounded-2xl">
                <img
                  src={image.imageSrc}
                  alt="icecream"
                  className="w-[70px] lg:w-28 -mt-8 md:-mt-10 lg:-mt-16"
                />
                <p className="text-[14px] md:text-base text-textColor font-semibold">
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
    </div>
  );
};

export default SecondSection;
