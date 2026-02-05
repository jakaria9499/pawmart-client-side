import React, { useContext, useEffect, useRef, useState } from "react";
import { FcViewDetails } from "react-icons/fc";
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../../contests/AuthContext";
import { Link } from "react-router";
import toast from "react-hot-toast";
import UpdateModal from "./UpdateModal";

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const [lists, setLists] = useState([]);
  const updateModal = useRef(null);
  const [currentEdit, setCurrentEdit] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/myLists?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLists(data);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Delete Successfully");
          const remaining = lists.filter((list) => list._id !== id);
          setLists(remaining);
        }
      })
      .catch((err) => toast.error(err || " something wrong"));
  };
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
          <button
            onClick={() => {
              setCurrentEdit(list);
              updateModal.current.showModal();
            }}
            className="btn p-2 tooltip"
            data-tip="Update"
          >
            <GrUpdate />
          </button>
          <button
            onClick={() => handleDelete(list._id)}
            className="btn p-2 tooltip"
            data-tip="Delete"
          >
            <MdDelete />
          </button>
          <dialog ref={updateModal} className="modal">
            <UpdateModal
              list={currentEdit}
              updateModal={updateModal}
            ></UpdateModal>
          </dialog>
        </li>
      ))}
    </ul>
  );
};

export default MyListing;
