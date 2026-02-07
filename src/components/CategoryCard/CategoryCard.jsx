import React from "react";
import { useNavigate } from "react-router";

const CategoryCard = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/petsSupplies?category=${encodeURIComponent(data.title)}`);
  };
  return (
    <div
      onClick={handleClick}
      className="card bg-base-100 max-h-80 relative rounded-lg  shadow-sm "
    >
      <figure className="rounded-lg object-cover">
        <img className="object-fill" src={data.image} alt="Category" />
      </figure>
      <div className="card-body absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition rounded-lg">
        <h2 className="card-title text-white">{data.title}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
