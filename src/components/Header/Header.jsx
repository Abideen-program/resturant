import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Store/features/userSlice";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { app } from "../../../firebase.config";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { clx } from "../../utils/clx";

function Header() {
  const classes = clx("fixed w-screen py-6 px-16 z-50");
  const listItemClasses = clx(
    '"text-base cursor-pointer text-textColor hover:text-headingColor transition-all duration-100 ease-in-out"'
  );

  const owner = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  //GET THE AUTH
  const auth = getAuth(app);
  //GET THE NEW PROVIDER
  const provider = new GoogleAuthProvider();

  //sign up callback
  const signUp = async () => {
    const {
      user: { refreshToken, providerData },
    } = await signInWithPopup(auth, provider);
    dispatch(setUser(providerData[0]));

    //save the user data into the local storage to be use after refresh
    localStorage.setItem("user", JSON.stringify(providerData[0]));
  };

  return (
    <>
      <header className={classes}>
        {/* Desktop views and tablets */}
        {/* LOGO SECTION */}
        <div className="hidden md:flex w-full h-full item-center justify-between">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={logo} className="w-8" alt="logo" />
            <p className="font-bold text-headingColor text-xl">freshAlways</p>
          </Link>

          <div className="flex items-center gap-8">
            {/* NAV LINKS SECTION*/}
            <ul className="flex gap-8 items-center ml-auto">
              <li className={listItemClasses}>Home</li>
              <li className={listItemClasses}>Menu</li>
              <li className={listItemClasses}>About Us</li>
              <li className={listItemClasses}>Services</li>
            </ul>

            {/* CART SECTION */}
            <motion.div
              whileTap={{ scale: 0.6 }}
              className="relative flex items-center justify-center cursor-pointer"
            >
              <MdShoppingBasket className="text-textColor text-base" />
              <div className="bg-cartNumBg w-5 h-5 rounded-full flex items-center justify-center absolute -top-4 -right-2">
                <span className="text-white text-xs">2</span>
              </div>
            </motion.div>

            <div className="relative">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={owner ? owner?.photoURL : avatar}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-lg cursor-pointer rounded-full"
                alt="user profile picture"
                onClick={signUp}
              />
            </div>
          </div>
        </div>

        {/* Mobile views */}
        <div className="flex md:hidden w-full h-full"></div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
