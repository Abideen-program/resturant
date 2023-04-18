import React from "react";
import { MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { clx } from "../../utils/clx";

const classes = clx(
  "bg-gray-50 flex flex-col w-30 absolute right-0 top-12 rounded-lg shadow-xl"
);
const pClasses = clx(
  "text-base mx-2 my-2 px-2 py-1 flex gap-3 items-center text-textColor cursor-pointer hover:bg-slate-100 transition duration-100 ease-in-out"
);

const UserDropdown = () => {
  const adminId = useSelector((state) => state.user.user);
  return (
    <div className={classes}>
      {adminId?.email === "olafimihana@gmail.com" && (
        <Link to={"create"}>
          <motion.p whileTap={{ scale: 0.6 }} className={pClasses}>
            NewItem <MdAdd />
          </motion.p>
        </Link>
      )}

      <motion.p whileTap={{ scale: 0.6 }} className={pClasses}>
        Logout <MdLogout />
      </motion.p>
    </div>
  );
};

export default UserDropdown;
