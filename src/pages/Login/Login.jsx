import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contests/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("jakaria")
    const input = e.target;
    const email = input.email.value;
    const password = input.password.value;
    signIn(email, password)
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Log in Successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Log in Successfully");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="flex justify-center items-center h-[600px] ">
      <div className="card bg-base-100 w-full h-fit max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            <div className="flex justify-end">
              <Link className="link link-hover">Forgot password?</Link>
            </div>
            <button type="submit" className="btn  mt-4 ">
              Login
            </button>
            <p className="text-center text-base font-semibold">or</p>
            <button onClick={handleGoogleLogIn} className="btn ">
              <FcGoogle size={20} />
              Login with Google
            </button>
          </form>
          <p>
            Don’t have an account?{" "}
            <Link className="link link-hover text-secondary" to="/register">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
