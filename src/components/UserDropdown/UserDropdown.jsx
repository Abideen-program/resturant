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
  "text-base mx-2 my-2 px-2 py-1 flex gap-2 items-center text-textColor cursor-pointer hover:bg-slate-100 transition duration-100 ease-in-out"
);

const logoutClasses = clx(
  "md:hidden text-base mx-2 my-2 px-2 py-1 flex gap-2 justify-center text-textColor cursor-pointer bg-gray-200 hover:bg-slate-300 transition duration-100 ease-in-out rounded-md shadow-md"
);

const listItemClasses = clx(
  "text-base cursor-pointer text-textColor hover:text-headingColor hover:bg-slate-100 transition-all duration-100 ease-in-out mx-2 my-2 px-2 py-1"
);

const UserDropdown = (props) => {
  const { onlogout, onclose } = props;
  const adminId = useSelector((state) => state.user.user);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      className={classes}
    >
      {adminId?.email === "olafimihana@gmail.com" && (
        <Link to={"create"}>
          <motion.p
            whileTap={{ scale: 0.6 }}
            className={pClasses}
            onClick={onclose}
          >
            NewItem <MdAdd />
          </motion.p>
        </Link>
      )}

      {/* NAV LINKS SECTION FOR THE MOBILE SCREEN*/}
      <ul className="md:hidden flex flex-col">
        <li className={listItemClasses} onClick={onclose}>
          Home
        </li>
        <li className={listItemClasses} onClick={onclose}>
          Menu
        </li>
        <li className={listItemClasses} onClick={onclose}>
          About Us
        </li>
        <li className={listItemClasses} onClick={onclose}>
          Services
        </li>
      </ul>

      <motion.p
        whileTap={{ scale: 0.6 }}
        className={`hidden md:flex ${pClasses}`}
        onClick={onlogout}
      >
        Logout <MdLogout />
      </motion.p>

      <motion.p
        whileTap={{ scale: 0.6 }}
        className={logoutClasses}
        onClick={onlogout}
      >
        Logout <MdLogout />
      </motion.p>
    </motion.div>
  );
};

export default UserDropdown;
