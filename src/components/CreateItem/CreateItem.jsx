import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  setTitle,
  setCategory,
  setCalories,
  setPrice,
  setLoading,
  setField,
  setMessage,
  setAlertStatus,
  setImageAsset,
} from "../Store/features/newItemSlice";

import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import { categories } from "../../utils/foodData";
import Loader from "../Loader/Loader";
import Input from "../Input/Input";
import Select from "../Input/Select";
import { storage } from "../../../firebase.config";
import { saveFoodData } from "../../utils/saveFoodData";

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

  const errorMessageFunction = () => {
    dispatch(setField(true));
    dispatch(setAlertStatus("danger"));

    setTimeout(() => {
      dispatch(setLoading(false));
      dispatch(setField(false));
      dispatch(setMessage(null));
      dispatch(setAlertStatus(""));
    }, 4000);
  };

  //all codes here deals with uploading of file
  const uploadHandler = (e) => {
    dispatch(setLoading(true));
    //get the image data from the input tag (type='file')
    const imageFile = e.target.files[0];
    //make a reference to the storage, and where to store with unique name
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    //upload to the storage with storageRef and the file you want to upload
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    //to see the progress of the upload
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },

      //if there is error
      (error) => {
        dispatch(setMessage("Error while uploading file 😔"));
        errorMessageFunction();
      },

      //if successful
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          dispatch(setField(true));
          dispatch(setLoading(false));
          dispatch(setImageAsset(downloadURL));
          dispatch(setMessage("File uploaded successfully 😊"));
          dispatch(setAlertStatus("Success"));

          setTimeout(() => {
            dispatch(setField(false));
            dispatch(setMessage(null));
            dispatch(setAlertStatus(""));
          }, 4000);
        });
      }
    );
  };

  //This will handle deleting the uploaded image
  const deleteImage = () => {
    dispatch(setLoading(true));

    const deleteRef = ref(storage, imageAsset);

    deleteObject(deleteRef).then(() => {
      dispatch(setLoading(false));
      dispatch(setImageAsset(null));
      dispatch(setMessage("Image deleted successfully 😊"));
      dispatch(setField(true));

      setTimeout(() => {
        dispatch(setField(false));
        dispatch(setMessage(null));
      }, 4000);
    });
  };

  //This will handle the saving of the uploaded data to firebase
  const saveDetails = () => {
    dispatch(setLoading(true));
    //check if any of the input field is missing
    try {
      if (!title || !category || !price || !calories || !imageAsset) {
        dispatch(setMessage("All required field must be filled 😔"));
        errorMessageFunction();
      } else {
        const data = {
          id: `${Date.now()}`,
          title,
          imageURL: imageAsset,
          category,
          quantity: 1,
          price,
        };
        
        saveFoodData(data); //save the food details to firestore
        dispatch(setLoading(false));
        dispatch(setMessage("Files saved successfully 😊"));
        dispatch(setField(true));

        setTimeout(() => {
          dispatch(setField(false));
          dispatch(setImageAsset(null));
          dispatch(setMessage(null));
          dispatch(setTitle(""));
          dispatch(setCategory(null));
          dispatch(setCalories(""));
          dispatch(setPrice(""));
        }, 3000);
      }
    } catch (error) {
      dispatch(setMessage("Error while uploading file 😔"));
      errorMessageFunction();
    }
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
                    {/* if there is no loaded image, click to upload an image urself */}
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
              type={"number"}
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
