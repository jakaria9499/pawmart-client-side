import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="max-w-[1400px] mx-auto space-y-10">
      <Navbar></Navbar>
      <div className="mx-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
