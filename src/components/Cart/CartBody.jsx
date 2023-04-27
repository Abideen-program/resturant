import React, { useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

import { RiRefreshFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import {
  hideCart,
  setClearCart,
  setCartTotal,
} from "../Store/features/CartItemSlice";
import Modal from "./Modal/Modal";
import CartItem from "./CartItem";
import EMPTYCART from "../../assets/emptyCart.svg";

const CartBody = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const cartTotal = useSelector((state) => state.cartItems.cartTotal);

  const dispatch = useDispatch();

  useEffect(() => {
    const total = cartItems.reduce((total, itemCurr) => {
      return total + itemCurr.quantity * itemCurr.price;
    }, 0);

    dispatch(setCartTotal(total));
  }, [cartItems]);

  return (
    <Modal>
      <div className=" w-full flex items-center justify-between">
        <MdOutlineKeyboardBackspace
          onClick={() => dispatch(hideCart())}
          className="text-lg md:text-3xl text-gray-600 font-bold cursor-pointer"
        />
        <p className="text-orange-600 font-semibold text-sm md:text-lg">Cart</p>
        <motion.p
          whileTap={{ scale: 0.6 }}
          className="flex text-xs md:text-sm items-center gap-2 bg-gray-400 py-1 px-2 rounded-md cursor-pointer hover:shadow-md transition-all ease-in-out duration-100"
          onClick={() => dispatch(setClearCart())}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      <div className="w-full">
        {/* check if the cart is empty or not */}
        {cartItems && cartItems.length > 0 ? (
          <div className="w-full">
            {cartItems?.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}

            <div className="w-full flex justify-end mt-3 font-semibold text-headingColor md:text-xl">
              <p>
                Total: <span className="text-sm text-orange-600">$</span>
              </p>
              <span>{`${cartTotal.toFixed(2)}`}</span>
            </div>

            <div className="flex">
              <motion.button
                whileTap={{ scale: 0.6 }}
                type="button"
                className="bg-gradient-to-br from-orange-400 to-orange-700 px-6 py-2 w-full mx-0 md:mx-auto md:w-auto text-headingColor font-semibold rounded-full mt-7 cursor-pointer hover:shadow-md transition-all duration-100 ease-in-out"
              >
                Order
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-2 items-center justify-center mt-6">
            <img src={EMPTYCART} alt="empty cart" className="w-[230px]"/>
            <p className="text-xs md:text-lg text-headingColor font-semibold">
              Add some items to your cart
            </p>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default CartBody;
