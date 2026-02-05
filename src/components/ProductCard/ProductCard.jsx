import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router";

const ProductCard = ({ card }) => {
  return (
    <div className="card bg-base-100  shadow-sm h-fit w-fit">
      <figure>
        <img
          className="rounded-xl   max-h-60"
          src={card?.image}
          alt={card?.category}
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
