import React from "react";
import { CiHome } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { LuDog } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";
import PetHeroesCard from "../PetHeroesCard/PetHeroesCard";

const ExtraSection = () => {
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

        <div className="grid grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-3 gap-5">
          <PetHeroesCard></PetHeroesCard>
          <PetHeroesCard></PetHeroesCard>
          <PetHeroesCard></PetHeroesCard>
          <PetHeroesCard></PetHeroesCard>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
