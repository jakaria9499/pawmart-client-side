import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router";

const ProductCard = ({ card }) => {
  return (
    <div className="card bg-base-100  shadow-sm h-fit">
      <figure className=" max-h-64 max-sm:max-h-40 max-lg:max-h-44 bg-gray-100 flex items-center justify-center rounded-xl">
        <img
          src={card?.image || "/no-image.png"}
          alt={card?.category}
          className="max-w-full max-h-full object-contain"
        />
      </figure>
      <div className="card-body space-y-1">
        <h2 className="card-title">{card?.productName}</h2>
        <div className="flex justify-between">
          <span className="max-sm:text-xs bg-emerald-600 px-1 rounded-full">
            {card?.category}
          </span>
          <span className="max-sm:text-xs bg-emerald-600 px-1 rounded-full">
            {card?.location}
          </span>
        </div>
        <div className="card-actions justify-end">
          <p className="flex items-center gap-1">
            <FaBangladeshiTakaSign /> <span>{card?.price}</span>
          </p>
          <Link to={`/details/${card?._id}`} className="btn btn-primary">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
