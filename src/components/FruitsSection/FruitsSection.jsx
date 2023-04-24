import React from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import { clx } from "../../utils/clx";

const classes = clx("w-full  p-4 md:px-16 mb-6");

const FruitsSection = () => {
  return (
    <section className={classes}>
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl capitalize font-semibold text-headingColor relative before:content before:w-32 before:h-1 before:bg-gradient-to-tr from-orange-400 to-orange-600 before:absolute before:rounded-lg before:-bottom-2 before: left-0 transition-all ease-in-out duration-100">
          fresh & healthy fruits
        </p>

        <div className="hidden md:flex items-center gap-2">
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="w-8 h-8 bg-orange-300 hover:bg-orange-500 rounded-lg cursor-pointer transition-all ease-in-out duration-100 flex items-center justify-center"
          >
            <MdChevronLeft className="text-lg text-white" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="w-8 h-8 bg-orange-300 hover:bg-orange-500 rounded-lg cursor-pointer transition-all ease-in-out duration-100 flex items-center justify-center"
          >
            <MdChevronRight className="text-lg text-white" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FruitsSection;
