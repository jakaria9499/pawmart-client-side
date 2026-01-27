import React, { useContext } from "react";
import { AuthContext } from "../contests/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  console.log("jakaria");
  console.log(user);

  if (loading) {
    return (
      <div className="h-60 flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  if (user && user?.uid) return children;
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
