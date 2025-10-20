import { useContext } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCamera,
  FaEdit,
  FaHome,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";
import { auth } from "../FireBaseAuth/Firebase.init";

const Profile = () => {
  const { displayName, email, photoURL, emailVerified } = auth?.currentUser;

  const { LogoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    LogoutUser();
    toast.success("Successfully Logout");
  };
  return (
    <div className="w-full  bg-gradient-to-br from-slate-900 to-slate-800 ">
      {/* main context  */}

      <div className="flex-1 flex items-center justify-center ">
        <div className="w-full ">
          <div className="bg-slate-800/50 backdrop-blur-sm  border border-slate-700 p-8 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2 ">
                Welcome ! ❤
              </h2>
              <p className="text-slate-400">
                View and manage your account information
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src={photoURL}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-cyan-500/20"
                  />
                  <div className="absolute bottom-0 right-0 bg-cyan-500 rounded-full p-2 border-2 border-slate-800">
                    <FaCamera className="text-slate-900 text-xs" />
                  </div>
                </div>

                <button className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center">
                  <FaEdit className="mr-1" /> Change Photo
                </button>
              </div>
              <div className="flex items-start  gap-5">
                {/* User  Profile Information */}
                <div className="flex-3">
                  <div className=" flex items-start w-full space-x-5    ">
                    <div className="w-2/3 space-y-5">
                      <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600">
                        <div className="flex items-start">
                          <div className="mt-1 text-cyan-400">
                            <FaUser />
                          </div>
                          <div className="ml-3 ">
                            <p className="text-xs text-slate-400">Full Name</p>
                            <p className="text-white font-medium">
                              {displayName}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600">
                        <div className="flex items-start">
                          <div className="mt-1 text-cyan-400">
                            <FaEnvelope />
                          </div>
                          <div className="ml-3 ">
                            <p className="text-xs text-slate-400">Email</p>
                            <p className="text-white font-medium">{email}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-5">
                      <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600">
                        <div className="flex items-start">
                          <div className="mt-1 text-cyan-400">
                            <FaUser />
                          </div>
                          <div className="ml-3 ">
                            <p className="text-xs text-slate-400">
                              Account Status
                            </p>
                            <p className="text-green-400 font-medium">Status</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600">
                        <div className="flex items-start">
                          <div className="mt-1 text-cyan-400">
                            <FaUser />
                          </div>
                          <div className="ml-3 ">
                            <p className="text-xs text-slate-400">
                              Member Since
                            </p>
                            <p className="text-white font-medium">Members</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center ">
                    <FaEdit className="mr-2" /> Edit Profile
                  </button>

                  <Link
                    to="/settings"
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center">
                    <FaCog className="mr-2" /> Account Settings
                  </Link>

                  <Link
                    to="/dashboard"
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center">
                    <FaHome className="mr-2" /> Go to Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center cursor-pointer">
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
