import React from "react";
import { clx } from "../../utils/clx";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowComponent = ({ flag }) => {
  const classes = clx(
    `w-full p-4 md:px-16 mb-6 ${
      flag ? "overflow-x-scroll" : "overflow-x-hidden"
    }`
  );

  return (
    <div className={classes}>
      <div className="w-300 md:w-340 h-auto my-6 px-4 pb-2 rounded-lg bg-cardOverlay backdrop-blur-lg hover:drop-shadow-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.2 }}
            src="https://firebasestorage.googleapis.com/v0/b/resturantapp-a920a.appspot.com/o/Images%2F1682258825386-f1.png?alt=media&token=30b16ea9-d38e-4cb8-bb1b-ed9dcbef1de0"
            alt=""
            className="w-40 -mt-10 drop-shadow-2xl"
          />

          <motion.div
            whileTap={{ scale: 0.6 }}
            className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:shadow-md"
          >
            <MdShoppingBasket className="text-white" />
          </motion.div>
        </div>

        <div className="flex flex-col gap-1 items-end">
          <p className="text-headingColor font-semibold text-base md:text-lg">
            Strawberry
          </p>
          <p className="text-sm text-gray-500">45 Calories</p>
          <p className="text-headingColor font-semibold text-lg">
            <span className="text-xs mr-1 text-red-500">$</span>5.52
          </p>
        </div>
      </div>
    </div>
  );
};

export default RowComponent;
