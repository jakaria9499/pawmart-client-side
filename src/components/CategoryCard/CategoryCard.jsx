import React from "react";

const CategoryCard = ({ data }) => {
  return (
    <div className="card bg-base-100 h-64 relative  shadow-sm">
      <figure className="rounded-lg object-cover">
        <img className="object-fill" src={data.image} alt="Shoes" />
      </figure>
      <div className="card-body absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition">
        <h2 className="card-title">{data.title}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
