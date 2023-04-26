import React from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { setShowCart } from "../Store/features/CartItemSlice";

const Cart = () => {
  const dispatch = useDispatch();

  return (
    <motion.div
      whileTap={{ scale: 0.6 }}
      className="relative flex items-center justify-center cursor-pointer"
      onClick={() => dispatch(setShowCart())}
    >
      <MdShoppingBasket className="text-textColor text-xl" />
      <div className="bg-cartNumBg w-5 h-5 rounded-full flex items-center justify-center absolute -top-4 -right-2">
        <span className="text-white text-xs">2</span>
      </div>
    </motion.div>
  );
};

export default Cart;
