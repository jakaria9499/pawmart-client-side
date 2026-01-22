import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Category from "../components/Category/Category";

const PetsSuppliesLayout = () => {
  return (
    <div data-theme="light" className="max-w-[1400px] mx-auto space-y-10">
      <Navbar></Navbar>
      <div className="mx-5 grid grid-cols-5">
        <Category></Category>
        <Outlet className="col-span-3"></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PetsSuppliesLayout;
