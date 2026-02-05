import React, { useContext, useEffect, useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../contests/AuthContext";
import { Link } from "react-router";

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/myLists?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLists(data);
        
      });
  }, [user.email]);
  return (
    <ul className="list  bg-base-100 lg:w-[80%] mx-auto rounded-box shadow-md">
      <li className="p-4 pb-2 font-semibold opacity-60 tracking-wide">
        Showing: ( <span>{lists.length}</span> items )
      </li>

      {lists.map((list) => (
        <li className="list-row">
          <div>
            <img className="size-15 rounded-box" src={list.image} />
          </div>
          <div>
            <div>{list.productName}</div>
            <div className="text-xs font-semibold opacity-60">
              {list.category}
            </div>
            <div>price: {list.price}</div>
          </div>
          <Link
            to={`http://localhost:5173/details/${list._id}`}
            className="btn tooltip p-2"
            data-tip="View Details"
          >
            <FcViewDetails />
          </Link>
          <button className="btn p-2 tooltip" data-tip="Update">
            <GrUpdate />
          </button>
          <button className="btn p-2 tooltip" data-tip="Delete">
            <MdDelete />
          </button>
        </li>
      ))}

      
    </ul>
  );
};

export default MyListing;
