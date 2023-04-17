import React from "react";
import { MdShoppingBasket } from "react-icons/md";

import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import { clx } from "../../utils/clx";

function Header() {
  const classes = clx("fixed w-screen py-6 px-16 z-50");
  const listItemClasses = clx(
    '"text-base cursor-pointer text-textColor hover:text-headingColor transition-all duration-100 ease-in-out"'
  );

  return (
    <header className={classes}>
      {/* Desktop views and tablets */}
      {/* LOGO SECTION */}
      <div className="hidden md:flex w-full h-full item-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} className="w-8" alt="logo" />
          <p className="font-bold text-headingColor text-xl">freshAlways</p>
        </div>

        <div className="flex items-center gap-8">
          {/* NAV LINKS SECTION*/}
          <ul className="flex gap-8 items-center ml-auto">
            <li className={listItemClasses}>Home</li>
            <li className={listItemClasses}>Menu</li>
            <li className={listItemClasses}>About Us</li>
            <li className={listItemClasses}>Services</li>
          </ul>

          {/* CART SECTION */}
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor cursor-pointer text-base" />
            <div className="bg-cartNumBg w-5 h-5 rounded-full flex items-center justify-center absolute -top-4 -right-2">
              <span className="text-white text-xs">2</span>
            </div>
          </div>

          <img
            src={avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-lg"
            alt="user profile picture"
          />
        </div>
      </div>

      {/* Mobile views */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
}

export default Header;
