import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";
import { useDispatch } from "react-redux";

import { hideCart } from "../Store/features/CartItemSlice";
import Modal from "./Modal/Modal";

const CartBody = () => {
  const dispatch = useDispatch();

  return (
    <Modal>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <MdOutlineKeyboardBackspace
            onClick={() => dispatch(hideCart())}
            className="text-xl text-orange-600 font-bold cursor-pointer"
          />
          <p className="text-orange-600 font-semibold text-lg">Cart</p>
          <p className="flex text-sm items-center gap-2 bg-gray-400 py-1 px-2 rounded-md cursor-pointer hover:shadow-md transition-all ease-in-out duration-100">
            Clear <RiRefreshFill />
          </p>
        </div>

        
      </div>
    </Modal>
  );
};

export default CartBody;
