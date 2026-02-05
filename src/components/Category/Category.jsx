import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSearchParams } from "react-router";

const Category = ({ filter }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategories = searchParams.get("category")?.split(",") || [];

  const handleCategoryChange = (value) => {
    let updated = [...selectedCategories];

    if (updated.includes(value)) {
      updated = updated.filter((c) => c !== value);
    } else {
      updated.push(value);
    }

    if (updated.length > 0) {
      searchParams.set("category", updated.join(","));
    } else {
      searchParams.delete("category");
    }

    setSearchParams(new URLSearchParams(searchParams));
  };

  return (
    <div
      className={`border px-2 border-gray-200 col-span-1 h-fit
      rounded-lg shadow-lg pb-5 bg-base-100 z-50
      md:static md:block md:w-auto
      ${filter ? "fixed block inset-y-0 top-40 left-4 w-[260px]" : "hidden"}`}
    >
      <h1 className="text-2xl py-2 font-semibold border-b border-gray-300">
        Filter
      </h1>

      <div className="space-y-2 py-2">
        <div className="flex justify-between items-center pr-2">
          <h1 className="text-xl font-semibold">Category</h1>
          <IoIosArrowDown />
        </div>

        {["Pets", "Pets_Food", "Pets_Accessories", "Pets_Care_Products"].map(
          (pet) => (
            <div key={pet} className="flex gap-3 items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                checked={selectedCategories.includes(pet)}
                onChange={() => handleCategoryChange(pet)}
              />
              <p className="font-semibold text-lg">{pet}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Category;
