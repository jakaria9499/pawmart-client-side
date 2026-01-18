import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const RecentListings = () => {
  return (
    <div className="space-y-10">
      <h2 className="text-center text-2xl font-semibold">Recent List</h2>
      <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-2 ">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default RecentListings;
