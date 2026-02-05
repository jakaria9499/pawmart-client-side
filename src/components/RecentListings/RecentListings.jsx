import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const RecentListings = () => {
  const [recentList, setRecentList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recentList")
      .then((res) => res.json())
      .then((data) => {
        setRecentList(data);
      });
  }, []);

  return (
    <div className="space-y-10">
      <h2 className="text-center text-2xl font-semibold">Recent List</h2>
      <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-2 ">
        {
          recentList.map(card=>
            <ProductCard card={card}></ProductCard>
          )
        }

      </div>
    </div>
  );
};

export default RecentListings;
