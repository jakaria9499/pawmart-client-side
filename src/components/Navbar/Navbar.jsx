import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contests/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const publicLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/petsSupplies">Pet & Supplies</NavLink>
    </>
  );
  const privateLinks = (
    <>
      <NavLink to="/addListing">Add Listing</NavLink>
      <NavLink to="/myListing">My Listing</NavLink>
      <NavLink to="/myOrders">My Orders</NavLink>
    </>
  );
  return (
    <div
      className={`navbar bg-base-100 shadow-sm sticky top-0 left-0 w-full z-50
      transition-transform duration-300
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <div
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {publicLinks}
            {user && privateLinks}
          </div>
        </div>
        <Link to="/" className="btn btn-ghost  text-xl">
          pawMart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 gap-5">
          {publicLinks}
          {user && privateLinks}
        </div>
      </div>

      <div className="flex navbar-end gap-5">
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="profile" src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
            <div>
              <button onClick={handleLogOut} className="btn btn-primary">
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
