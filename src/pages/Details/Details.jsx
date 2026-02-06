import React, { useEffect, useRef, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import OrderModal from "./OrderModal";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxoisSecure";

const Details = () => {
  const [cardDetails, setCardDetails] = useState({});
  const orderModel = useRef(null);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const details = async () => {
      try {
        const res = await axiosSecure.get(`/petsSupplies/${id}`);
        setCardDetails(res.data);
      } catch {
        toast.error("something wrong");
      }
    };

    details();
  }, [id, axiosSecure]);

  return (
    <div className="lg:px-10 ">
      <div className="flex gap-10 max-md:flex-col mb-10">
        <div>
          <img
            className="max-w-[400px] max-h-[400px] rounded-xl"
            src={cardDetails?.image}
            alt=""
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{cardDetails?.productName}</h1>
          <p>
            <span className="font-semibold">Category: </span>
            <span>{cardDetails?.category}</span>
          </p>
          <p>
            <span className="font-semibold">Location: </span>
            <span>{cardDetails?.location}</span>
          </p>
          <p>
            <span className="font-semibold">Owner's Email: </span>
            <span>{cardDetails?.email}</span>
          </p>
          <p className="flex items-center gap-1 font-semibold">
            <FaBangladeshiTakaSign />
            <span>{cardDetails?.price}</span>
          </p>
          <button
            className="btn btn-primary"
            onClick={() => orderModel.current.showModal()}
          >
            Order Now
          </button>
          <dialog ref={orderModel} className="modal">
            <OrderModal
              cardDetails={cardDetails}
              orderModel={orderModel}
            ></OrderModal>
          </dialog>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold">Description</h1>
        <h2 className="text-lg font-semibold">{cardDetails?.category}</h2>
        <p>{cardDetails?.description}</p>
      </div>
    </div>
  );
};

export default Details;
