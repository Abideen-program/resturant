import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, setCategory } from "../Store/features/newItemSlice";
import { MdFastfood, MdCloudUpload, MdDelete } from "react-icons/md";

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

  const dispatch = useDispatch();

  const uploadHandler = () => {};

  const deleteImage = () => {};

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

          <div className="group w-full h-225 md:h-420 border-2 border-dotted border-gray-300 rounded-lg cursor-pointer flex flex-col items-center justify-center">
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
                        className="absolute bottom-3 p-3 bg-red-500 text-xl cursor-pointer outline-none rounded-full hover:shadow-md transition-all duration-100 ease-in-out"
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
        </div>
      </div>
    </div>
  );
};

export default CreateItem;
