import { createUserWithEmailAndPassword } from "firebase/auth";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { auth } from "../FireBaseAuth/Firebase.init";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();

    // const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const confirmPassword = event.target.confirmPassword.value;

    // console.log({ name, email, password, confirmPassword });

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Successfully registered");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Back to Home Button - Outside the card, top left */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition duration-300 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700">
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-slate-400">Sign up to get started</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            {/* person name */}
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Full Name"
              required
            />
          </div>

          <div>
            {/* Person email */}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="flex gap-3 items-center">
            <div>
              {/* person account password */}
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-300 mb-1">
                Password
              </label>
              <input
                name="password"
                type="password"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              {/* Person account confirm password */}
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-slate-300 mb-1">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-slate-600 rounded bg-slate-700"
              required
            />
            <label
              htmlFor="terms"
              className="ml-2 block text-sm text-slate-400">
              I agree to the{" "}
              <Link to={"/"} className="text-cyan-400 hover:text-cyan-300">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <div className="flex-3">
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-cyan-400 hover:text-cyan-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
