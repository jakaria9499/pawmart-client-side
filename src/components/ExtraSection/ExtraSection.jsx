import React from "react";
import { CiHome } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { LuDog } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";
import PetHeroesCard from "../PetHeroesCard/PetHeroesCard";

const ExtraSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Ahmed",
      pet: "Max",
      image: "https://i.ibb.co.com/7dF1HHLh/pexels-fangyuanzhiwai-32688844.jpg",
      review:
        "Adopting Max changed my life. PawMart made the process simple and safe.",
      rating: 5,
    },
    {
      id: 2,
      name: "Shakil Ahmed",
      pet: "Luna",
      image: "https://i.ibb.co.com/YJXP6vd/pexels-tkirkgoz-14572745.jpg",
      review:
        "Great platform for pet supplies and adoption. Highly recommended!",
      rating: 4,
    },
    {
      id: 3,
      name: "Tamin Ekbal",
      pet: "Rocky",
      image: "https://i.ibb.co.com/sdGjwfDm/pexels-mart-production-8434642.jpg",
      review:
        "Amazing experience! The adoption process was smooth and transparent.",
      rating: 5,
    },
    {
      id: 4,
      name: "Khairul Islam",
      pet: "Bella",
      image: "https://i.ibb.co.com/mrkMPYRR/pexels-ron-lach-9986349-2.jpg",
      review:
        "Very reliable platform. Customer support was helpful and friendly.",
      rating: 4,
    },
  ];

  return (
    <div className="space-y-30">
      <div className="space-y-10">
        <h1 className="text-3xl text-center max-md:text-2xl">
          Why Adopt From pawMart?
        </h1>
        <p className="w-[70%] max-md:w-[90%] text-center mx-auto">
          choosing to adopt means giving rescued pets a second chance at life.
          Each adoption saves a life, stops unethical breeding, and brings a
          loving companion into your home.
        </p>
        <div className="max-w-80 mx-auto space-y-1">
          <p className="flex items-center gap-2">
            <FaHeart />
            <span className="font-semibold">Stop</span> unethical breeding and
            puppy mills
          </p>
          <p className="flex items-center gap-2">
            <MdOutlinePets />
            <span className="font-semibold">Give</span> a rescued pet a happy
            home
          </p>
          <p className="flex items-center gap-2">
            <CiHome />
            <span className="font-semibold">Gain</span> a loyal and loving
            friend
          </p>
          <p className="flex items-center gap-2">
            <LuDog />
            <span className="font-semibold">Save a life</span> and reduce
            homelessness
          </p>
        </div>
      </div>
      <div className="space-y-10">
        <h1 className="text-3xl text-center max-md:text-2xl">
          Meet Our Pet Heroes
        </h1>
        <p className="w-[70%] max-md:w-[90%] text-center mx-auto">
          These amazing people have opened their hearts and homes to rescued
          pets
        </p>

        <div className="grid grid-cols-4  max-md:grid-cols-2 gap-5">
          {reviews.map((review) => (
            <PetHeroesCard review={review}></PetHeroesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
