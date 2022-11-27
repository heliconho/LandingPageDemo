import React from "react";
import { FaBars, FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="py-1 px-sm-4 px-3 my-auto">
        <FaBars />
      </div>
      <div className="my-auto py-1 pl-0 pr-1">Logo</div>
      <div className="ml-auto my-auto px-sm-4 pl-1 pr-3 rb-font-bold flex items-center">
        <div className="inline-block p-sm-2 px-3 cursor-pointer text-dark-color">
          <FaSearch />
        </div>
        <div className="inline-block p-sm-2 px-3 cursor-pointer text-dark-color">
          <FaShoppingCart />
        </div>
        <div className="inline-block px-sm-2 py-sm-3 p-1 rb-dark-color cursor-pointer">
          <a className="d-sm-inline d-none rb-font-size-sm px-3 py-2">註冊</a>
        </div>
        <div className="d-sm-inline d-none rb-font-size-sm px-3 py-2 rounded-pill bg-main-bg text-white cursor-pointer">
          <a className="d-sm-inline d-none rb-font-size-sm px-3 py-2">登入</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
