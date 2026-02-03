const OrderModal = () => {
  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Dhaka",
  });
  console.log(today);
  return (
    <div className="modal-box">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h1 className="font-semibold">Order Form</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Buyer Name</label>
          <input
            type="text"
            className="input w-full outline-none"
            placeholder="Buyer Name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full outline-none"
            placeholder="Email"
          />
          <label className="label">Product ID</label>
          <input
            type="text"
            className="input w-full outline-none"
            placeholder="Product ID"
          />
          <label className="label">Product Name</label>
          <input
            type="text"
            className="input w-full outline-none"
            placeholder="Product Name"
          />
          <div className="grid grid-cols-2 gap-5 ">
            <div className="">
              <label className="label">Price</label>
              <input
                type="text"
                className="input w-full outline-none"
                placeholder="Price"
              />
            </div>
            <div className="">
              <label className="label">Quantity</label>
              <input
                min={1}
                max={10}
                defaultValue={1}
                type="number"
                className="input w-full outline-none"
                placeholder="Quantity"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 ">
            <div className="">
              <label className="label">Phone Number</label>
              <input
                type="text"
                className="input w-full outline-none"
                placeholder="Phone Number"
              />
            </div>
            <div className="">
              <label className="label">Date</label>
              <input type="date" className="input outline-none" value={today} />
            </div>
          </div>

          <label className="label">Address</label>
          <input type="text" className="input w-full" placeholder="Address" />
          <label className="label">Additional Notes</label>
          <textarea
            className="textarea outline-none w-full"
            placeholder="Description here"
          ></textarea>

          <button className="btn btn-neutral mt-4">Add List</button>
        </fieldset>
      </div>
    </div>
  );
};

export default OrderModal;
