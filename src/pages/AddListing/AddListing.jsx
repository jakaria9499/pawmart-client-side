import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contests/AuthContext";
import useAxiosSecure from "../../hooks/useAxoisSecure";

const AddListing = () => {
  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Dhaka",
  });
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const handleAddListing = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const productName = form.productName.value;
    const price = form.price.value;
    const category = form.category.value;
    const location = form.location.value;
    const date = form.date.value;
    const url = form.url.value;
    const description = form.description.value;

    const newList = {
      productName: productName,
      category: category,
      price: price,
      location: location,
      description: description,
      image: url,
      email: email,
      date: date,
    };

    try {
      const res =  axiosSecure.post("/addList", newList);

      if (res.data?.insertedId) {
        toast.success("Add data Successfully");
        form.reset();
      } else {
        toast.error("Insert failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Network error");
    }
  };
  return (
    <div className="flex justify-center items-center h-200">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleAddListing} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full outline-none"
              placeholder="Email"
              defaultValue={user.email}
              name="email"
              required
              readOnly
            />
            <label className="label">Product Name</label>
            <input
              type="text"
              className="input w-full outline-none"
              placeholder="Product Name"
              name="productName"
              required
            />
            <div className="grid grid-cols-2 gap-5 ">
              
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
              <div className="">
                <label className="label">Price</label>
                <input
                  type="text"
                  className="input w-full outline-none"
                  placeholder="Price"
                  name="price"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 ">
              
              <div className="">
                <label className="label">Date</label>
                <input
                  type="date"
                  className="input outline-none"
                  value={today}
                  name="date"
                  required
                />
              </div>
              <div className="">
                <label className="label">Location</label>
                <input
                  type="text"
                  className="input w-full outline-none"
                  placeholder="Location"
                  name="location"
                  required
                />
              </div>
            </div>

            <label className="label">Image URL</label>
            <input
              type="url"
              className="input w-full outline-none"
              placeholder="Image URL"
              name="url"
              required
            />
            <label className="label">Description</label>
            <textarea
              className="textarea outline-none w-full"
              placeholder="Description here"
              name="description"
              required
            ></textarea>

            <button type="submit" className="btn btn-neutral mt-4">
              Add List
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
