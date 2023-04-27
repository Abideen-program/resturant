import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { setShowCart, setCartCount } from "../Store/features/CartItemSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const cartCount = useSelector((state) => state.cartItems.cartCount);
  const dispatch = useDispatch();

  useEffect(() => {
    const count = cartItems.reduce((total, itemCount) => {
      return total + itemCount.quantity;
    }, 0);

    dispatch(setCartCount(count));
  }, [cartItems]);

  return (
    <motion.div
      whileTap={{ scale: 0.6 }}
      className="relative flex items-center justify-center cursor-pointer"
      onClick={() => dispatch(setShowCart())}
    >
      <MdShoppingBasket className="text-textColor text-xl" />
      <div className="bg-cartNumBg w-5 h-5 rounded-full flex items-center justify-center absolute -top-4 -right-2">
        <span className="text-white text-xs">{cartCount}</span>
      </div>
    </motion.div>
  );
};

export default Cart;
