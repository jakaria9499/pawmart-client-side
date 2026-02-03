import React from "react";

const AddListing = () => {
  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Dhaka",
  });
  const handleAddListing = (e) => {
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
    console.log(
      email,
      productName,
      price,
      category,
      location,
      date,
      url,
      description,
    );

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
    fetch("http://localhost:3000/addList", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("data inserted successfully");
        }
      });
  };
  return (
    <div className="flex justify-center items-center h-200">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleAddListing} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full"
              placeholder="Email"
              name="email"
            />
            <label className="label">Product Name</label>
            <input
              type="text"
              className="input w-full outline-none"
              placeholder="Product Name"
              name="productName"
            />
            <div className="grid grid-cols-2 gap-5 ">
              <div className="">
                <label className="label">Price</label>
                <input
                  type="text"
                  className="input w-full outline-none"
                  placeholder="Price"
                  name="price"
                />
              </div>
              <div className="">
                <label className="label">Category</label>
                <select
                  defaultValue="Select a Category"
                  className="select outline-none"
                  name="category"
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
                  name="location"
                />
              </div>
              <div className="">
                <label className="label">Date</label>
                <input
                  type="date"
                  className="input outline-none"
                  value={today}
                  name="date"
                />
              </div>
            </div>

            <label className="label">Image URL</label>
            <input
              type="url"
              className="input w-full"
              placeholder="Image URL"
              name="url"
            />
            <label className="label">Description</label>
            <textarea
              className="textarea outline-none w-full"
              placeholder="Description here"
              name="description"
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
