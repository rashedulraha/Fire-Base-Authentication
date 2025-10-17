import { signInWithEmailAndPassword } from "firebase/auth";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { auth } from "../FireBaseAuth/Firebase.init";
import { toast } from "react-toastify";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const regEx =
      /^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};:'",.<>\/?\\|`~]).+$/;

    if (regEx.test(password)) {
      console.log(regEx);
    }

    // sign in with gmail and password
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Successfully Sing in");
      })
      .then((error) => {
        toast?.error(error.message);
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
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Sign in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="you@example.com"
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
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-slate-600 rounded bg-slate-700"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-slate-400">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to={"/"}
                className="font-medium text-cyan-400 hover:text-cyan-300">
                Forgot password?
              </Link>
            </div>
          </div>

          <div className="flex-3">
            <button
              type="submit"
              className="btn w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded-lg transition duration-300 cursor-pointer ">
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="font-medium text-cyan-400 hover:text-cyan-300">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
