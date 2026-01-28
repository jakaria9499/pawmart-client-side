import React from "react";

const AddListing = () => {
  return (
    <div className="flex justify-center items-center h-200">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />
            <label className="label">Product Name</label>
            <input
              type="email"
              className="input w-full outline-none"
              placeholder="Product Name"
            />
            <div className="grid grid-cols-2 gap-5 ">
              <div className="">
                <label className="label">Price</label>
                <input
                  type="password"
                  className="input w-full outline-none"
                  placeholder="Price"
                />
              </div>
              <div className="">
                <label className="label">Category</label>
                <select
                  defaultValue="Select a Category"
                  className="select outline-none"
                >
                  <option disabled={true}>Select a Category</option>
                  <option>Pets</option>
                  <option>Pets Food</option>
                  <option>Pets Accessories</option>
                  <option>Pets Care Products</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 ">
              <div className="">
                <label className="label">Location</label>
                <input
                  type="text"
                  className="input w-full outline-none"
                  placeholder="Location"
                />
              </div>
              <div className="">
                <label className="label">Date</label>
                <input type="date" className="input outline-none" />
              </div>
            </div>

            <label className="label">Image URL</label>
            <input
              type="url"
              className="input w-full"
              placeholder="Image URL"
            />
            <label className="label">Description</label>
            <textarea
              className="textarea outline-none w-full"
              placeholder="Description here"
            ></textarea>

            <button className="btn btn-neutral mt-4">Add List</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
