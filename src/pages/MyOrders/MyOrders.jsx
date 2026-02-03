// import jsPDF from "jspdf";
// import { autoTable } from "jspdf-autotable";
import React from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const MyOrders = () => {
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
  return (
    <div className="flex flex-col gap-5  bg-base-100 lg:w-[80%] mx-auto  ">
      <div className="p-4 pb-2 font-semibold opacity-60 tracking-wide rounded-box shadow-lg">
        Showing: ( <span>2</span> items )
      </div>

      <div className="flex  rounded-box shadow-lg px-4 py-2">
        <div className="flex gap-5 w-full">
          <div className="flex items-center">
            <p>1</p>
          </div>
          <div className="flex justify-between  w-full max-sm:flex-col">
            <div>
              <div>
                <span className="font-semibold">Product Name:</span>{" "}
                <span>Cat</span>
              </div>
              <div>
                <span className="font-semibold">Buyer Name:</span>{" "}
                <span>Jakaria</span>
              </div>
              <div className="flex items-center gap-1">
                <FaBangladeshiTakaSign /> <span>500</span>
              </div>
            </div>
            <div className=" flex flex-col">
              <div>
                <span className="font-semibold">Quantity: </span>
                <span>5</span>
              </div>
              <div>
                <span className="font-semibold">Date: </span>
                <span>5/1/2026</span>
              </div>
              <div>
                <span className="font-semibold">Phone: </span>
                <span>01701701701</span>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <span className="font-semibold">Address:</span>
                <span>Mirpur 10, Dhaka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
