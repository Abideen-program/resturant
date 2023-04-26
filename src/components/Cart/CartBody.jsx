import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

import { RiRefreshFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { hideCart } from "../Store/features/CartItemSlice";
import Modal from "./Modal/Modal";
import CartItem from "./CartItem";

const CartBody = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  console.log(cartItems);

  const dispatch = useDispatch();

  return (
    <Modal>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <MdOutlineKeyboardBackspace
            onClick={() => dispatch(hideCart())}
            className="text-lg md:text-3xl text-gray-600 font-bold cursor-pointer"
          />
          <p className="text-orange-600 font-semibold text-sm md:text-lg">
            Cart
          </p>
          <motion.p
            whileTap={{ scale: 0.6 }}
            className="flex text-xs md:text-sm items-center gap-2 bg-gray-400 py-1 px-2 rounded-md cursor-pointer hover:shadow-md transition-all ease-in-out duration-100"
          >
            Clear <RiRefreshFill />
          </motion.p>
        </div>

        {cartItems?.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>

      <div className="w-full flex mt-2">
        <p className="ml-auto font-semibold text-headingColor md:text-xl">
          Total: $00
        </p>
      </div>

      <div className="flex">
        <motion.button whileTap={{scale: 0.6}}
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-700 px-6 py-2 w-full mx-0 md:mx-auto md:w-auto text-headingColor font-semibold rounded-full mt-7 cursor-pointer hover:shadow-md transition-all duration-100 ease-in-out"
        >
          Order
        </motion.button>
      </div>
    </Modal>
  );
};

export default CartBody;