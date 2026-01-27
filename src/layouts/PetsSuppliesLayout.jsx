import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Category from "../components/Category/Category";
import { TbFilterSearch } from "react-icons/tb";
import { MdOutlineSort } from "react-icons/md";
import { useState } from "react";

const PetsSuppliesLayout = () => {
  const [filter, setFilter] = useState(0);
  return (
    <div data-theme="light" className="max-w-[1400px] mx-auto space-y-10">
      <Navbar></Navbar>
      <div className="mx-5 flex justify-between">
        <div
          onClick={() => setFilter((prev) => !prev)}
          className="btn md:hidden"
        >
          <p className="flex items-center gap-1 cursor-pointer ">
            <span>
              <TbFilterSearch size={20} />
            </span>
            <span>Filters</span>
          </p>
        </div>
        <div className="max-md:hidden w-10"></div>
        <div className="w-[50%]">
          <label className="input outline-none border-1 border-gray-300 rounded-full w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="text" required placeholder="Search" />
          </label>
        </div>
        <div className="btn">
          <p className="flex items-center gap-1 cursor-pointer">
            <span>
              <MdOutlineSort size={20} />
            </span>
            <span>Sort</span>
          </p>
        </div>
      </div>
      <div className="mx-5 grid grid-cols-5 max-lg:grid-cols-4">
        <Category filter={filter}></Category>
        <Outlet filter={filter} className={`col-span-3 max-lg:col-span-2 `}></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PetsSuppliesLayout;
