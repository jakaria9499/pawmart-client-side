import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const HomeLayout = () => {
  return (
    <div data-theme="light" className="max-w-[1400px] mx-auto space-y-10">
      <Navbar></Navbar>
      <div className="mx-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default HomeLayout;
