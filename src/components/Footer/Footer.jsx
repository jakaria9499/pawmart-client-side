import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Useful Links</h6>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/petsSupplies" className="link link-hover">
            Pets & Supplies
          </Link>
          <Link to="/addListing" className="link link-hover">
            Add Listing
          </Link>
          <Link to="/myListing" className="link link-hover">
            My Listing
          </Link>
          <Link to="/myOrders" className="link link-hover">
            My Orders
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Category</h6>
          <Link to="/petsSupplies?category=Pets" className="link link-hover">
            Pets
          </Link>
          <Link
            to="/petsSupplies?category=Pets_Food"
            className="link link-hover"
          >
            Pets Food
          </Link>
          <Link
            to="/petsSupplies?category=Pets_Accessories"
            className="link link-hover"
          >
            Pets Accessories
          </Link>
          <Link
            to="/petsSupplies?category=Pets_Care_Products"
            className="link link-hover"
          >
            Pets Care Products
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <p>
            <span className="text-2xl">pawMart</span>
            <br />
            PawMart connects local pet owners and buyers for adoption and pet
            care products
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link to="https://x.com/">
              <FaSquareXTwitter size={23} />
            </Link>
            <Link to="https://www.youtube.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link to="https://web.facebook.com/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
      <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            pawMart Industries Ltd
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
