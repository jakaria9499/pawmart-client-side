// import jsPDF from "jspdf";
// import { autoTable } from "jspdf-autotable";
import React, { useContext, useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { AuthContext } from "../../contests/AuthContext";
import useAxiosSecure from "../../hooks/useAxoisSecure";
import toast from "react-hot-toast";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  // const doc = new jsPDF();
  // // It can parse html:
  // // <table id="my-table"><!-- ... --></table>
  // autoTable(doc, { html: "#my-table" });

  // // Or use javascript directly:
  // autoTable(doc, {
  //   head: [["Name", "Email", "Country"]],
  //   body: [
  //     ["David", "david@example.com", "Sweden"],
  //     ["Castille", "castille@example.com", "Spain"],
  //     // ...
  //   ],
  // });

  // doc.save("table.pdf");

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const order = async () => {
      try {
        const res = await axiosSecure.get(`/myOrders?email=${user.email}`);
        setOrders(res.data);
      } catch {
        toast.error("something wrong");
      }
    };
    order();
  }, [user.email, axiosSecure]);
  return (
    <div className="flex flex-col gap-5  bg-base-100 lg:w-[80%] mx-auto  ">
      <div className="p-4 pb-2 font-semibold opacity-60 tracking-wide rounded-box shadow-lg">
        Showing: ( <span>{orders.length}</span> items )
      </div>

      {orders.map((order, index) => (
        <div className="flex  rounded-box shadow-lg px-4 py-2">
          <div className="flex gap-5 w-full">
            <div className="flex items-center">
              <p>{index + 1}</p>
            </div>
            <div className="flex justify-between  w-full max-sm:flex-col">
              <div>
                <div>
                  <span className="font-semibold">Product Name:</span>{" "}
                  <span>{order.productName}</span>
                </div>
                <div>
                  <span className="font-semibold">Buyer Name:</span>{" "}
                  <span>{order.buyerName}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaBangladeshiTakaSign /> <span>{order.price}</span>
                </div>
              </div>
              <div className=" flex flex-col">
                <div>
                  <span className="font-semibold">Quantity: </span>
                  <span>{order.quantity}</span>
                </div>
                <div>
                  <span className="font-semibold">Date: </span>
                  <span>{order.date}</span>
                </div>
                <div>
                  <span className="font-semibold">Phone: </span>
                  <span>{order.phoneNumber}</span>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <span className="font-semibold">Address:</span>
                  <span>{order.address}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
