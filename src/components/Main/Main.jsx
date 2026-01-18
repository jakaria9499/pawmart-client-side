import React from "react";
import Carousel from "../Carousel/Carousel";
import CategorySection from "../CategorySection/CategorySection";
import RecentListings from "../RecentListings/RecentListings";
import ExtraSection from "../ExtraSection/ExtraSection";

const Main = () => {
  return (
    <div className=" space-y-30 mb-30">
      <Carousel></Carousel>
      <CategorySection></CategorySection>
      <RecentListings></RecentListings>
      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Main;
