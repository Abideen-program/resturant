import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  setTitle,
  setCategory,
  setCalories,
  setPrice,
} from "../Store/features/newItemSlice";

import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";

import { categories } from "../../utils/foodData";
import Loader from "../Loader/Loader";
import IMAGE from "../../assets/f1.png";
import Input from "../Input/Input";
import Select from "../Input/Select";

const CreateItem = () => {
  const field = useSelector((state) => state.newItem.field);
  const alertStatus = useSelector((state) => state.newItem.alertStatus);
  const message = useSelector((state) => state.newItem.message);
  const title = useSelector((state) => state.newItem.title);
  const category = useSelector((state) => state.newItem.category);
  const isLoading = useSelector((state) => state.newItem.isLoading);
  const imageAsset = useSelector((state) => state.newItem.imageAsset);
  const calories = useSelector((state) => state.newItem.calories);
  const price = useSelector((state) => state.newItem.price);

  const dispatch = useDispatch();

  const uploadHandler = () => {};

  const deleteImage = () => {};

  const saveDetails = () => {
    console.log({ title, category, calories, price });
    dispatch(setTitle(""));
    dispatch(setCategory(null));
    dispatch(setCalories(""));
    dispatch(setPrice(""));
  };

  return (
    <div className="mt-14 md:mt-[50px] lg:mt-[72px] p-4 md:p-8 md:px-16 w-full">
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="border border-gray-300 p-3 md:p-4 w-[95%] md:w-[75%] rounded-lg flex flex-col items-center justify-center gap-2 md:gap-3">
          {field && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`w-full p-2 text-center rounded-lg md:text-lg font-semibold ${
                alertStatus === "danger"
                  ? "bg-red-400 text-red-800"
                  : "bg-emerald-400 text-emerald-800"
              }`}
            >
              {message}
              Helolo
            </motion.p>
          )}

          <Input
            icon={<MdFastfood className="text-xl text-gray-700" />}
            type={"text"}
            placeholder={"Enter the item name"}
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />

          <Select
            onChange={(e) => dispatch(setCategory(e.target.value))}
            categories={categories}
          />

          <div className="group w-full h-[200px] md:h-[300px] border-2 border-dotted border-gray-300 rounded-lg cursor-pointer flex flex-col items-center justify-center">
            {isLoading ? (
              <Loader /> //if loading use loader
            ) : (
              <>
                {!imageAsset ? ( //if not check if there is a loaded image from the firebase
                  <>
                    {/* if there is not loaded click to upload an image urself */}
                    <label className="w-full h-ful flex flex-col justify-center items-center">
                      <div className="w-full h-ful flex flex-col justify-center gap-2 items-center cursor-pointer">
                        <MdCloudUpload className="text-3xl text-gray-500 hover:text-gray-700" />
                        <p className="text-gray-500 hover:text-gray-700">
                          click here to updload
                        </p>
                      </div>

                      <input
                        type="file"
                        name="uploadimage"
                        accept="images/*"
                        onChange={uploadHandler}
                        className="w-0 h-0"
                      />
                    </label>
                  </>
                ) : (
                  <>
                    {/* if there is a loaded image, either use it or delete it to upload an image urself  */}
                    <div className="relative flex flex-col items-center h-full">
                      <img
                        src={imageAsset}
                        alt="uploaded image"
                        className="w-full h-full object-cover"
                      />
                      <motion.button
                        whileTap={{ scale: 0.6 }}
                        type="button"
                        className="absolute md:bottom-3 bottom-1 p-3 bg-red-500 text-xl cursor-pointer outline-none rounded-full hover:shadow-md transition-all duration-100 ease-in-out"
                        onClick={deleteImage}
                      >
                        <MdDelete className="text-white" />
                      </motion.button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:gap-3 w-full">
            <Input
              icon={<MdFoodBank className="text-xl text-gray-700" />}
              type={"text"}
              placeholder={"Calories"}
              value={calories}
              onChange={(e) => dispatch(setCalories(e.target.value))}
            />

            <Input
              icon={<MdAttachMoney className="text-xl text-gray-700" />}
              type={"number"}
              placeholder={"Price"}
              value={price}
              onChange={(e) => dispatch(setPrice(e.target.value))}
            />
          </div>

          <div className="w-full flex items-center">
            <button
              type="button"
              className="bg-emerald-500 border-none outline-none px-12 py-2 rounded-lg text-lg text-white font-medium w-full md:w-auto mx-0 md:ml-auto"
              onClick={saveDetails}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
