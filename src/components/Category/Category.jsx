import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";

const Category = () => {
  return (
    <div className="border-1 px-2 border-gray-200 col-span-1 h-fit rounded-lg shadow-lg pb-5">
      <h1 className="text-2xl py-2 font-semibold border-b-1 border-gray-300">
        Filter
      </h1>
      <div className="space-y-2  border-b-1 border-gray-300 pb-2">
        <div className="flex justify-between items-center py-2">
          <h1 className="text-xl  font-semibold ">Price Range</h1>
          <IoIosArrowDown />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <input className="input" type="text" defaultValue={0} />
            <span className="font-bold">-</span>
            <input className="input" type="text" defaultValue={100000} />
          </div>
          <p className="flex items-center">
            <span className="text-lg">Price: </span>{" "}
            <TbCurrencyTaka size={20} />
            <span className="font-semibold">0-100000</span>
          </p>
        </div>
      </div>
      <div className="space-y-2  py-2">
        <div className="flex justify-between items-center pr-2">
          <h1 className="text-xl  font-semibold ">Category</h1>
          <IoIosArrowDown />
        </div>
        <div className="space-y-2">
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-accent"
            />
            <p className="font-semibold text-lg">Pets</p>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-accent"
            />
            <p className="font-semibold text-lg">Pets Food</p>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-accent"
            />
            <p className="font-semibold text-lg">Pets Accessories</p>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-accent"
            />
            <p className="font-semibold text-lg">Care Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
