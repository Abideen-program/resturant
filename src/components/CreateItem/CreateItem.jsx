import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, setCategory } from "../Store/features/newItemSlice";
import { MdFastfood } from "react-icons/md";

import { categories } from "../../utils/foodData";
import Loader from "../Loader/Loader";

const CreateItem = () => {
  const field = useSelector((state) => state.newItem.field);
  const alertStatus = useSelector((state) => state.newItem.alertStatus);
  const message = useSelector((state) => state.newItem.message);
  const title = useSelector((state) => state.newItem.title);
  const category = useSelector((state) => state.newItem.category);
  const isLoading = useSelector((state) => state.newItem.isLoading);

  const dispatch = useDispatch();

  return (
    <div className="mt-16 md:mt-24 p-8 md:px-16 w-full">
      <div className="w-full min-h-screen flex border border-red-600 items-center justify-center">
        <div className="border border-gray-300 p-4 w-[95%] md:w-[75%] rounded-lg flex flex-col items-center justify- gap-4">
          {field && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`w-full p-2 text-center rounded-lg text-lg font-semibold ${
                alertStatus === "danger"
                  ? "bg-red-400 text-red-800"
                  : "bg-emerald-400 text-emerald-800"
              }`}
            >
              {message}
            </motion.p>
          )}

          <div className="border-b border-gray-300 p-2 flex items-center gap-2 w-full">
            <MdFastfood className="text-xl text-gray-700" />
            <input
              type="text"
              required
              value={title}
              placeholder="Enter the item name"
              onChange={(e) => dispatch(setTitle(e.target.value))}
              className="w-full h-full outline-none border-none font-semibold text-textColor bg-transparent placeholder:text-gray-400"
            />
          </div>

          <div className="w-full">
            <select
              className="outline-none w-full p-2 rounded-md border-b-2 border-gray-200 cursor-pointer"
              onChange={(e) => dispatch(setCategory(e.target.value))}
            >
              <option value="other" className="bg-white">
                Select Category
              </option>
              {categories?.map((cate) => {
                return (
                  <option
                    key={cate.id}
                    value={cate.urlParamName}
                    className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                  >
                    {cate.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="group w-full h-225 md:h-420 border-2 border-dotted border-gray-300 rounded-lg cursor-pointer flex flex-col items-center justify-center">
            {isLoading ? <Loader /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
