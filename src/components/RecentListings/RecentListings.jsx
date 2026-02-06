import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const RecentListings = () => {
  const [recentList, setRecentList] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    const recent = async () => {
      try {
        const res = await axios.get("/recentList");
        setRecentList(res.data);
      } catch {
        toast.error("something wrong");
      }
    };

    recent();
  }, [axios]);

  return (
    <div className="space-y-10">
      <h2 className="text-center text-2xl font-semibold">Recent List</h2>
      <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-2 ">
        {recentList.map((card) => (
          <ProductCard card={card}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default RecentListings;
