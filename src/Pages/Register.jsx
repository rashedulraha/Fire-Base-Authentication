import { useContext } from "react";
import { FaArrowLeft, FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, signInWithGoogle, signInWithFacebook } =
    useContext(AuthContext);

  //
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    //  call function to create user
    createUser(email, password)
      .then((result) => {
        console.log(result);
        toast.success("successfully create account");
      })
      .catch((error) => {
        console.log("Error find out :", error);
        toast.error(error.message);
      });
  };

  // Handle Google login
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result);
        toast.success("Successfully registered with Google");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  // Handle Facebook login
  const handleFacebookLogin = () => {
    signInWithFacebook()
      .then((result) => {
        console.log(result);
        toast.success("Successfully registered with Facebook");
      })
      .catch((error) => {
        console.log(error.message);
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
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-medium py-2 px-4 rounded-lg transition duration-300 text-sm">
            Sign Up
          </button>
        </form>

        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-2 bg-slate-800/50 text-slate-400">
                Or sign up with
              </span>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-1 bg-white text-slate-800 hover:bg-slate-100 font-medium py-2 px-3 rounded-lg transition duration-300 text-xs">
              <FaGoogle className="text-red-500" />
              Google
            </button>
            <button
              onClick={handleFacebookLogin}
              className="flex items-center justify-center gap-1 bg-blue-600 text-white hover:bg-blue-700 font-medium py-2 px-3 rounded-lg transition duration-300 text-xs">
              <FaFacebook />
              Facebook
            </button>
          </div>
        </div>

        <div className="mt-4 text-center text-xs">
          <p className="text-slate-400">
            Already have an account?{" "}
            <Link to={"/login"} className="text-cyan-400 hover:text-cyan-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
