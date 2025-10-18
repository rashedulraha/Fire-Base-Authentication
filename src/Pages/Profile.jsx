import React, { useState } from "react";
import { Link } from "react-router";
import { FaSignOutAlt, FaArrowLeft } from "react-icons/fa";

const Profile = () => {
  const [user] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    photoURL:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white relative">
      {/* Profile Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-md mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 text-center">
            {/* Profile Image */}
            <div className="mb-6">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-cyan-500/30"
              />
            </div>

            {/* User Info */}
            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
            <p className="text-cyan-400 mb-6">{user.email}</p>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Link
                to="/edit-profile"
                className="block w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold py-3 px-4 rounded-lg transition duration-300">
                Edit Profile
              </Link>

              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center">
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
