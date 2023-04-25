import React, { useEffect, useRef } from "react";
import { clx } from "../../utils/clx";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

const RowComponent = ({ flag, data }) => {
  const rowContainer = useRef();

  let scrollValue = useSelector((state) => state.scrollValue.scrollValue);

  const classes = clx(
    `w-full p-4 md:px-16 flex gap-3 scroll-smooth ${
      flag
        ? "overflow-x-scroll scrollbar-none"
        : "overflow-x-hidden flex-wrap justify-center"
    }`
  );

  useEffect(() => {
    rowContainer.current.scrollLeft = scrollValue;
  }, [scrollValue]);

  return (
    <div className={classes} ref={rowContainer}>
      {data?.map((item) => {
        return (
          <div
            key={item.id}
            className="w-275 min-w-[275px] md:w-300 md:min-w-[300px] h-auto my-6 px-4 pb-2 rounded-lg bg-cardOverlay backdrop-blur-lg hover:drop-shadow-lg flex flex-col justify-between"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
              >
                <img src={item.imageURL} className="w-full h-full object-contain" alt="" />
              </motion.div>

              <motion.div
                whileTap={{ scale: 0.6 }}
                className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="flex flex-col gap-1 items-end">
              <p className="text-headingColor font-semibold text-base md:text-lg">
                {item.title}
              </p>
              <p className="text-sm text-gray-500">{item.calories} Calories</p>
              <p className="text-headingColor font-semibold text-lg">
                <span className="text-xs mr-1 text-red-500">$</span>
                {item.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RowComponent;
