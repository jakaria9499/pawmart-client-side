import ProductCard from "../../components/ProductCard/ProductCard";

const PetsSupplies = () => {
  return (
    <div
      className={` col-span-4 max-lg:col-span-3 grid grid-cols-3 max-lg:grid-cols-2 gap-5 p-3  max-md:col-span-4`}
    >
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  );
};

export default PetsSupplies;
