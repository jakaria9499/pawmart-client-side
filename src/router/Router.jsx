import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import PetsSupplies from "../pages/PetsSupplies/PetsSupplies";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import Register from "../pages/Register/Register";
import AddListing from "../pages/AddListing/AddListing";
import MyListing from "../pages/MyListing/MyListing";
import MyOrders from "../pages/MyOrders/MyOrders";
import PetsSuppliesLayout from "../layouts/PetsSuppliesLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Main,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/addListing",
        Component: AddListing,
      },
      {
        path: "/myListing",
        Component: MyListing,
      },
      {
        path: "myOrders",
        Component: MyOrders,
      },
    ],
  },
  {
    path: "/petsSupplies",
    Component: PetsSuppliesLayout,
    children: [
      {
        path: "/petsSupplies",
        Component: PetsSupplies,
      },
    ],
  },
]);

export default router;
