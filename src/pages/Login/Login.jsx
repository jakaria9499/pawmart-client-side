import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../../contests/AuthContext";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const input = e.target;
    const email = input.email.value;
    const password = input.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleLogIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
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
