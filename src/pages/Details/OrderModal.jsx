import { useContext } from "react";
import { AuthContext } from "../../contests/AuthContext";

const OrderModal = ({ cardDetails, orderModel }) => {
  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Dhaka",
  });
  const { user } = useContext(AuthContext);
  const handleOrders = (e) => {
    e.preventDefault();
    const form = e.target;
    const productId = form.productId.value;
    const productName = form.productName.value;
    const buyerName = form.buyerName.value;
    const email = form.email.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const address = form.address.value;
    const phoneNumber = form.phoneNumber.value;
    const date = form.date.value;
    const additionalNotes = form.additionalNotes.value;
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
    const newOrder = {
      productId: productId,
      productName: productName,
      buyerName: buyerName,
      email: email,
      quantity: quantity,
      price: price,
      address: address,
      phoneNumber: phoneNumber,
      date: date,
      additionalNotes: additionalNotes,
    };
    fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          console.log(result);
          orderModel.current.close();
        }
      })
      .catch((err) => console.log(err));
  };
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
        <form onSubmit={handleOrders} className="fieldset">
          <label className="label">Buyer Name</label>
          <input
            type="text"
            name="buyerName"
            className="input w-full outline-none"
            placeholder="Buyer Name"
            defaultValue={user?.displayName}
            required
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full outline-none"
            placeholder="Email"
            defaultValue={user?.email}
            readOnly
          />
          <label className="label">Product ID</label>
          <input
            type="text"
            name="productId"
            className="input w-full outline-none"
            placeholder="Product ID"
            defaultValue={cardDetails?._id}
            readOnly
          />
          <label className="label">Product Name</label>
          <input
            type="text"
            name="productName"
            className="input w-full outline-none"
            placeholder="Product Name"
            defaultValue={cardDetails?.productName}
            readOnly
          />
          <div className="grid grid-cols-2 gap-5 ">
            <div className="">
              <label className="label">Price</label>
              <input
                type="text"
                name="price"
                className="input w-full outline-none"
                placeholder="Price"
                defaultValue={cardDetails?.price}
              />
            </div>
            <div className="">
              <label className="label">Quantity</label>
              <input
                min={1}
                max={10}
                defaultValue={1}
                type="number"
                name="quantity"
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
                name="phoneNumber"
                className="input w-full outline-none"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="">
              <label className="label">Date</label>
              <input
                type="date"
                name="date"
                className="input outline-none"
                value={today}
                required
              />
            </div>
          </div>

          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input w-full"
            placeholder="Address"
            required
          />
          <label className="label">Additional Notes</label>
          <textarea
            className="textarea outline-none w-full"
            placeholder="Description here"
            name="additionalNotes"
          ></textarea>

          <button type="submit" className="btn btn-neutral mt-4">
            Add List
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
