import React from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

const Cart = () => {
  return (
    <motion.div
      whileTap={{ scale: 0.6 }}
      className="relative flex items-center justify-center cursor-pointer"
    >
      <MdShoppingBasket className="text-textColor text-xl" />
      <div className="bg-cartNumBg w-5 h-5 rounded-full flex items-center justify-center absolute -top-4 -right-2">
        <span className="text-white text-xs">2</span>
      </div>
    </motion.div>
  );
};

export default Cart;