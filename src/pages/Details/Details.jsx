import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import OrderModal from "./OrderModal";

const Details = () => {
  return (
    <div className="lg:px-10 ">
      <div className="flex gap-10 max-md:flex-col mb-10">
        <div className="max-w-[400px]">
          <img
            className="rounded-lg "
            src="https://i.ibb.co.com/DHM3Pksh/pexels-duc-tinh-ngo-2147637857-30170554.jpg"
            alt=""
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Cat</h1>
          <p>
            <span className="font-semibold">Category: </span>
            <span>pets</span>
          </p>
          <p>
            <span className="font-semibold">Location: </span>
            <span>Mirpur, Dhaka</span>
          </p>
          <p>
            <span className="font-semibold">Owner's Email: </span>
            <span>jakaria@gmail.com</span>
          </p>
          <p className="flex items-center gap-1 font-semibold">
            <FaBangladeshiTakaSign />
            <span>5000</span>
          </p>
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Order Now
          </button>
          <dialog id="my_modal_3" className="modal">
            <OrderModal></OrderModal>
          </dialog>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold">Description</h1>
        <h2 className="text-lg font-semibold">pet</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          accusamus, qui hic fugiat quidem error asperiores blanditiis odio
          dolore voluptatum eveniet ea corrupti cum commodi a nihil nisi et
          tempore voluptates minima, animi reprehenderit deserunt, ab
          dignissimos! Quidem vitae ipsam voluptates quia quam aut asperiores
          totam quo assumenda exercitationem? Asperiores.
        </p>
      </div>
    </div>
  );
};

export default Details;
