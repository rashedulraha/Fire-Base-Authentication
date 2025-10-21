import { useContext } from "react";
import { FaArrowLeft, FaGoogle, FaFacebook } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { FaMicrosoft } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AuthContext } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { LoginUser, LoginWithGoogle, LogInWithGithub } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  //!  handle login with email and password

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    LoginUser(email, password);
    // .then((result) => {
    //   console.log(result);
    //   if (result.user?.emailVerified === false) {
    //     toast.error("please verified your email");
    //     return;
    //   }

    //   toast.success("Successfully login");
    // })
    // .catch((e) => {
    //   toast.error(e.message);
    // });
  };

  // !handle Login with Google
  const handleLoginWithGoogle = () => {
    LoginWithGoogle()
      .then(() => {
        toast.success("Successfully logged in with Google");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  // !handle Login with Github
  const handleLoginWithGithub = () => {
    LogInWithGithub()
      .then(() => {
        toast.success("Successfully logged in with github");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // !handle Login with Facebook
  // const handleLoginWithFacebook = () => {
  //   LogInWithGithub()
  //     .then(() => {
  //       toast.success("Successfully logged in with github");
  //       navigate(location.state || "/");
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //     });
  // };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-white">Login</h1>
          <Link
            to="/"
            className="p-2 rounded-lg bg-slate-700/50 text-cyan-400 hover:bg-slate-700 transition-colors">
            <FaArrowLeft />
          </Link>
        </div>

        <p className="text-slate-400 mb-5 text-sm">Sign in to your account</p>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-slate-300 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm"
              required
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center text-slate-400">
              <input
                type="checkbox"
                className="mr-1.5 h-3 w-3 rounded border-slate-600 bg-slate-700 text-cyan-500 focus:ring-cyan-500"
              />
              Remember me
            </label>
            <Link to="/" className="text-cyan-400 hover:text-cyan-300">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-medium py-2.5 rounded-lg transition duration-300 text-sm cursor-pointer">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="px-3 bg-slate-800/50 text-slate-400">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-3">
          <button
            title="Click and login your account with Google"
            onClick={handleLoginWithGoogle}
            className="flex items-center justify-center gap-2 bg-white text-slate-800 hover:bg-slate-100 font-medium py-2 rounded-lg transition duration-300 text-xs">
            <FaGoogle />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 bg-white text-slate-800 hover:bg-slate-100 font-medium py-2 rounded-lg transition duration-300 text-xs">
            <FaMicrosoft />
            Microsoft
          </button>
          <button
            title="Click and login your account with Github"
            onClick={handleLoginWithGithub}
            className="flex items-center justify-center gap-2 bg-white text-slate-800 hover:bg-slate-100 font-medium py-2 rounded-lg transition duration-300 text-xs">
            <BsGithub />
            Github
          </button>
          <button className="flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 font-medium py-2 rounded-lg transition duration-300 text-xs">
            <FaFacebook />
            Facebook
          </button>
        </div>

        {/* Footer */}
        <div className="mt-5 text-center text-xs text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/registration"
            className="text-cyan-400 hover:text-cyan-300 font-medium">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
