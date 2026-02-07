import { use, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contests/AuthContext";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser, signInWithGoogle, updataUser, setUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = (e) => {
    e.preventDefault();
    const input = e.target;
    const name = input.name.value;
    const email = input.email.value;
    const password = input.password.value;
    const photoURL = input.photoURL.value;

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordValidation.test(password)) {
      toast.error(
        "Password must contain at least 1 uppercase, 1 lowercase letter and be minimum 6 characters long.",
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Registration Successfully");
        const updateData = { displayName: name, photoURL: photoURL };
        updataUser(updateData);
        setUser(updateData);
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success("Registration Successfully");
      })
      .catch((error) => {
        toast.error(error);
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
