import React from "react";
import { MdFastfood } from "react-icons/md";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import { clx } from "../../utils/clx";
import { categories } from "../../utils/foodData";
import RowComponent from "../RowComponent/RowComponent";

const classes = clx("w-full mb-6 p-4 md:px-16");

const MenuContainer = () => {
  const [filter, setFilter] = React.useState("chicken");
  const foodItems = useSelector((state) => state.items.items);
  console.log(foodItems);
  return (
    <div className={classes} id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl capitalize font-semibold text-headingColor relative before:content before:w-16 before:h-1 before:bg-gradient-to-tr from-orange-400 to-orange-600 before:absolute before:rounded-lg before:-bottom-2 before: left-0 transition-all ease-in-out duration-100 mr-auto">
          our hot dishes
        </p>

        <div className="w-full flex items-center justify-start md:justify-center gap-6 py-6 overflow-x-scroll scrollbar-none">
          {categories?.map((category) => {
            return (
              <motion.div
                whileTap={{ scale: 0.6 }}
                key={category.id}
                className={`group w-24 min-w-[94px] h-28 rounded-lg cursor-pointer ${
                  filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                } drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg transition-all ease-in-out duration-100`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    filter === category.urlParamName
                      ? "bg-card"
                      : "bg-cartNumBg"
                  } group-hover:bg-card flex items-center justify-center`}
                >
                  <MdFastfood
                    className={`${
                      filter === category.urlParamName
                        ? "text-headingColor"
                        : "text-card"
                    } group-hover:text-headingColor text-lg`}
                  />
                </div>
                <p
                  className={`${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  } text-sm  group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="w-full">
          <RowComponent
            flag={false}
            data={foodItems?.filter((item) => item.category === filter)}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuContainer;
