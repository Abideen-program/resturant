import React from "react";
import { motion } from "framer-motion";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../Store/features/CartItemSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full flex items-center justify-between border-b mt-3 border-orange-600 pb-2">
        {/* Image and Name section */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={item.imageURL}
            alt=""
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-contain"
          />
          <p className="text-[10px] md:text-xs text-headingColor">
            {item.title}
          </p>
        </div>

        {/* Button Section */}
        <div className="flex items-center justify-center gap-1 md:gap-2">
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="bg-gray-400 rounded-md md:rounded-lg p-1 cursor-pointer"
            onClick={() => dispatch(removeItemFromCart(item))}
          >
            <BiMinus className="text-orange-600 text-sm md:text-base" />
          </motion.div>

          <p className="text-sm md:text-base">{item.quantity}</p>

          <motion.div
            whileTap={{ scale: 0.6 }}
            className="bg-gray-400 rounded-md md:rounded-lg p-1 cursor-pointer"
            onClick={() => dispatch(addItemToCart(item))}
          >
            <BiPlus className="text-orange-600 text-sm md:text-base" />
          </motion.div>
        </div>
        {/* Price Section */}
        <div>
          <p className="text-orange-600 text-xs md:text-sm">
            $
            <span className="text-headingColor text-sm md:text-lg">
              {(item.price * item.quantity).toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItem;
