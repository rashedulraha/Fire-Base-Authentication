import { Link, NavLink } from "react-router";
import logo from "../../assets/firebase-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { auth } from "../../FireBaseAuth/Firebase.init";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const authUserInfo = auth?.currentUser?.photoURL;
  const navBarLink = (
    <>
      <div className="flex gap-5 items-center text-white text-lg ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about-us"}>About</NavLink>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>

        {user ? "" : <NavLink to={"/registration"}>Registration</NavLink>}

        {user && (
          <>
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
          <h3 className="font-bold text-white text-3xl">
            <a href="/">AuthFlow</a>
          </h3>
        </div>
        <ul className="items-center gap-6 hidden  md:flex">{navBarLink}</ul>
        <div>
          {user ? (
            <Link to={"/profile"}>
              <figure className="w-12 h-12 rounded-full overflow-hidden transition  duration-300 transform hover:scale-105">
                <img
                  className="w-full h-full object-cover"
                  src={authUserInfo}
                  alt="user profile"
                />
              </figure>
            </Link>
          ) : (
            <Link
              className="btn loginButton shadow-none border-none"
              to={"/login"}>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
