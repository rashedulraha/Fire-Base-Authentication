import { Link, NavLink } from "react-router";
import logo from "../../assets/firebase-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result);
        toast.success("successfully sign out");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const navBarLink = (
    <>
      <div className="flex gap-5 items-center text-white text-lg ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about-us"}>About</NavLink>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>

        {user ? "" : <NavLink to={"/registration"}>Registration</NavLink>}

        {user && (
          <>
            <NavLink to={"/profile"}>Profile</NavLink>
            <NavLink to={"/orders"}>Orders</NavLink>
          </>
        )}
      </div>
    </>
  );
  return (
    <div className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 py-3 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <figure>
            <img
              src={logo}
              className="w-[55px] rounded-full border-2 border-cyan-500"
            />
          </figure>
          <h3 className="font-bold text-white text-3xl">AuthFlow</h3>
        </div>
        <ul className="items-center gap-6 hidden  md:flex">{navBarLink}</ul>

        <button className="bg-cyan-500 hover:bg-cyan-400 text-white  px-6 py-2 rounded-md font-semibold cursor-pointer transition  duration-300 transform hover:scale-105">
          {user ? (
            <a onClick={handleSignOut}>Logout </a>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
