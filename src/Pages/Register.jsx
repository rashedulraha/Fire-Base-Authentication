import { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

import { AuthContext } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { Register } = useContext(AuthContext);
  const Navigate = useNavigate();

  //
  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const photoURL = event.target.photo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(displayName, photoURL, email, password);

    //!  Call function to create user
    Register(email, password)
      .then((result) => {
        updateProfile(result?.user, { displayName, photoURL })
          .then(() => {
            toast.success("successfully create account");
            Navigate("/profile");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.log("Error find out :", error);
        toast.error(error.message);
      });
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4 overflow-hidden">
      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-4 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-white">Create Account</h1>
          <Link
            to="/"
            className="text-cyan-400 hover:text-cyan-300 transition duration-300 bg-slate-800/50 backdrop-blur-sm p-2 rounded-lg border border-slate-700">
            <FaArrowLeft />
          </Link>
        </div>
        <p className="text-slate-400 mb-4">Sign up to get started</p>

        <form onSubmit={handleRegister} className="space-y-3">
          <div className="flex items-center justify-between gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-medium text-slate-300 mb-1">
                Photo URL
              </label>
              <input
                type="url"
                name="photo"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                placeholder="Photo URL"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-300 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center text-xs">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-3 w-3 text-cyan-500 focus:ring-cyan-500 border-slate-600 rounded bg-slate-700"
              required
            />
            <label htmlFor="terms" className="ml-1 text-slate-400">
              I agree to the{" "}
              <Link to={"/"} className="text-cyan-400 hover:text-cyan-300">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-sm cursor-pointer">
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center text-xs">
          <p className="text-slate-400">
            Already have an account?{" "}
            <Link to={"/login"} className="text-cyan-400 hover:text-cyan-300">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
