import { Link } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";

const PetsSupplies = () => {
  const [petsProduct, setPetsProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/petsSupplies")
      .then((res) => res.json())
      .then((data) => setPetsProduct(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(petsProduct);
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
