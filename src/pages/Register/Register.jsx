import { use, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { AuthContext } from "../../contests/AuthContext";
import { Bounce, toast } from "react-toastify";

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const input = e.target;
    const name = input.name.value;
    const email = input.email.value;
    const password = input.password.value;
    const photoURL = input.photoURL.value;

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidation.test(password)) {
      toast(
        "Password must contain at least 1 uppercase, 1 lowercase letter and be minimum 6 characters long.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        },
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center h-[700px] ">
      <div className="card bg-base-100 w-full h-fit max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              required
            />
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
            <label className="label">Photo URL</label>
            <input
              type="url"
              className="input"
              placeholder="Photo URL"
              name="photoURL"
            />
            <button type="submit" className="btn  mt-4 ">
              Register
            </button>
            <p className="text-center text-base font-semibold">or</p>
            <button onClick={handleGoogle} className="btn ">
              <FcGoogle size={20} />
              Continue with Google
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <Link className="link link-hover text-secondary" to="/login">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
