import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Store/features/userSlice";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { app } from "../../../firebase.config";
import UserDropdown from "../UserDropdown/UserDropdown";
import Cart from "../Cart/Cart";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { clx } from "../../utils/clx";

const classes = clx("fixed w-screen p-4 md:py-6 md:px-16 z-50");
const listItemClasses = clx(
  '"text-base cursor-pointer text-textColor hover:text-headingColor transition-all duration-100 ease-in-out"'
);

//GET THE AUTH
const auth = getAuth(app);
//GET THE NEW PROVIDER
const provider = new GoogleAuthProvider();

function Header() {
  //dropdown menu state
  const [isMenu, setIsMenu] = React.useState(false);

  const loggedInUser = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  //sign up callback
  const signUp = async () => {
    //only sign in the user, if there is not a logged in user
    if (!loggedInUser) {
      //then log in the user
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(auth, provider);
      dispatch(setUser(providerData[0]));

      //save the user data into the local storage to be use after refresh
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
    //if the user is already logged in, trigger the dropdown menu
    else {
      setIsMenu((prevState) => {
        return !prevState;
      });
    }
  };

  //closing dropdown menu on click
  const closeMenu = () => {
    setIsMenu(false);
  };

  //the logout function to be passed down as prop to UserDropdown component
  const logoutHandler = () => {
    //close the dropdown menu
    closeMenu();
    //clear the local storage
    localStorage.clear();
    //set user to null
    dispatch(setUser(null));
  };

  return (
    <>
      <header className={classes}>
        {/* Desktop views and tablets */}
        <div className="hidden md:flex w-full h-full item-center justify-between">
          {/* LOGO SECTION */}
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
            <Cart />

            {/* USER PROFILE SECTTION */}
            <div className="relative">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={loggedInUser ? loggedInUser?.photoURL : avatar}
                className="w-9 min-w-[40px] h-9 min-h-[40px] drop-shadow-lg cursor-pointer rounded-full"
                alt="user profile picture"
                onClick={signUp}
              />

              {isMenu && (
                <UserDropdown onclose={closeMenu} onlogout={logoutHandler} />
              )}
            </div>
          </div>
        </div>

        {/* Mobile views */}

        <div className="flex items-center justify-between md:hidden w-full h-full">
          {/* logo section */}
          <Link to={"/"} className="flex items-center gap-2">
            <img src={logo} className="w-8" alt="logo" />
            <p className="font-bold text-headingColor text-base">freshAlways</p>
          </Link>

          <div className="flex items-center justify-center gap-3">
            {/* CART SECTION */}
            <Cart />
            {/* user section */}
            <div className="relative">
              <motion.img
                whileTap={{ scale: 0.6 }}
                src={loggedInUser ? loggedInUser?.photoURL : avatar}
                className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-lg cursor-pointer rounded-full"
                alt="user profile picture"
                onClick={signUp}
              />

              {isMenu && (
                <UserDropdown onclose={closeMenu} onlogout={logoutHandler} />
              )}
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
