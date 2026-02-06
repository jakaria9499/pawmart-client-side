import { Link, useSearchParams } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const PetsSupplies = () => {
  const [searchParams] = useSearchParams();
  const axios = useAxios();
  let category = "";
  if (searchParams.get("category")) {
    category = searchParams.get("category");
  }

  const [petsProduct, setPetsProduct] = useState([]);
  useEffect(() => {
    const pets = async () => {
      try {
        const res = await axios.get(`/petsSupplies?category=${category}`);
        setPetsProduct(res.data);
      } catch {
        toast.error("category Loading error");
      }
    };
    pets();
  }, [category, axios]);

  return (
    <div
      className={` col-span-4 max-lg:col-span-3 grid grid-cols-3 max-lg:grid-cols-2 gap-5 p-3  max-md:col-span-4`}
    >
      {petsProduct.map((card) => (
        <ProductCard key={card._id} card={card}></ProductCard>
      ))}
    </div>
  );
};

export default PetsSupplies;
