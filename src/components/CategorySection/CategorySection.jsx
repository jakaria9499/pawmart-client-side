import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Link } from "react-router";

const CategorySection = () => {
  const category = [
    {
      image: "https://i.ibb.co.com/bjSrWR4Y/pexels-cibelebergamim-32623350.jpg",
      title: "Pets",
    },
    {
      image: "https://i.ibb.co.com/9HHdnfdm/pexels-cottonbro-6568942.jpg",
      title: "Pets_Food",
    },
    {
      image:
        "https://i.ibb.co.com/twrSvbt3/pexels-pet-foto-644780685-17818930.jpg",
      title: "Pets_Accessories",
    },
    {
      image:
        "https://i.ibb.co.com/4nWDbC85/pexels-tima-miroshnichenko-6235225.jpg",
      title: "Pets_Care_Products",
    },
  ];

  return (
    <div className="space-y-10">
      <h2 className="text-3xl text-center font-semibold">Category</h2>
      <div className="grid grid-cols-4 gap-5 max-sm:grid-cols-2 ">
        {category.map((data, i) => (
          <CategoryCard key={i} data={data}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
