import Carousel from "../../components/Carousel/Carousel";
import CategorySection from "../../components/CategorySection/CategorySection";
import RecentListings from "../../components/RecentListings/RecentListings";
import ExtraSection from "../../components/ExtraSection/ExtraSection";

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
