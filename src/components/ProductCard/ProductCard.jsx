import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body space-y-1">
        <h2 className="card-title">Card Title</h2>
        <div className="flex justify-between">
          <span className="max-sm:text-xs bg-emerald-600 px-1 rounded-full">
            pets
          </span>
          <span className="max-sm:text-xs bg-emerald-600 px-1 rounded-full">
            dhaka
          </span>
        </div>
        <div className="card-actions justify-end">
          <p className="flex items-center gap-1">
            <FaBangladeshiTakaSign /> <span>550</span>
          </p>
          <button className="btn btn-primary">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
