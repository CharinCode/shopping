import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className=" md:flex justify-between items-center bg-green-600 p-3 w-full">
      <div>
        <div className=" text-xl  sm:text-3xl font-bold text-yellow-200">
          Charin Shop
        </div>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
    </nav>
  );
};

export default Navbar;
