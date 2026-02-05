import { useContext } from "react";
import { AuthContext } from "../../contests/AuthContext";
import toast from "react-hot-toast";

const UpdateModal = ({ list, updateModal,  }) => {
  const { user } = useContext(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const image = form.image.value;
    const address = form.address.value;
    const description = form.description.value;
    // console.log(
    //   productId,
    //   productName,
    //   buyerName,
    //   email,
    //   quantity,
    //   price,
    //   address,
    //   phoneNumber,
    //   date,
    //   additionalNotes,
    // );
    const newUpdate = {
      productName: productName,
      email: email,
      category: category,
      price: price,
      image: image,
      address: address,
      description: description,
    };
    fetch(`http://localhost:3000/update/${list._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUpdate),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount) {
          toast.success("Update Successfully");
          updateModal.current.close();

          
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="modal-box">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h1 className="font-semibold">Update Form</h1>
      <div className="card-body">
        <form onSubmit={handleUpdate} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full outline-none"
            placeholder="Email"
            defaultValue={user?.email}
          />
          <label className="label">Product ID</label>
          <input
            type="text"
            name="productId"
            className="input w-full outline-none"
            placeholder="Product ID"
            defaultValue={list?._id}
            readOnly
            disabled
          />
          <label className="label">Product Name</label>
          <input
            type="text"
            name="productName"
            className="input w-full outline-none"
            placeholder="Product Name"
            defaultValue={list?.productName}
          />
          <div className="grid grid-cols-2 gap-5 ">
            <div className="">
              <label className="label">Price</label>
              <input
                type="text"
                className="input w-full outline-none"
                placeholder="Price"
                defaultValue={list?.price}
                name="price"
                required
              />
            </div>
            <div>
              <label className="label">Category</label>
              <select
                defaultValue=""
                className="select outline-none"
                name="category"
                required
                onChange={(e) => {
                  const value = e.target.value;
                  const priceInput = e.target.form.price;
                  if (value === "Pets") {
                    priceInput.value = "Free";
                    priceInput.setAttribute("readonly", true);
                  } else {
                    priceInput.value = "";
                    priceInput.removeAttribute("readonly");
                  }
                }}
              >
                <option value="" disabled>
                  Select a Category
                </option>
                <option value="Pets">Pets</option>
                <option value="Pets_Food">Pets_Food</option>
                <option value="Pets_Accessories">Pets_Accessories</option>
                <option value="Pets_Care_Products">Pets_Care_Products</option>
              </select>
            </div>
          </div>

          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input w-full"
            placeholder="Address"
            defaultValue={list?.location}
            required
          />
          <label className="label">Photo URL</label>
          <input
            type="url"
            name="image"
            className="input w-full"
            placeholder="Phone URL"
            defaultValue={list?.image}
            required
          />
          <label className="label">Description</label>
          <textarea
            className="textarea outline-none w-full"
            placeholder="Description here"
            name="description"
            defaultValue={list?.description}
            required
          ></textarea>

          <button type="submit" className="btn btn-neutral mt-4">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
