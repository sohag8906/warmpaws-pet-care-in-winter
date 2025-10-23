import React, { useContext } from "react";
import { AuthConntext } from "../provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthConntext);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 flex flex-col items-center gap-4">
        {/* User Image */}
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"} // user image না থাকলে placeholder
          alt={user?.displayName || "User"}
          className="w-32 h-32 rounded-full object-cover"
        />

        {/* User Name */}
        <h3 className="text-xl font-semibold">
          {user?.displayName || "Anonymous User"}
        </h3>

        {/* User Email */}
        <p className="text-gray-600">{user?.email}</p>

        {/* Update Profile Button */}
        <button
          className="btn btn-primary mt-4 w-full"
          onClick={() => alert("Update Profile functionality coming soon!")}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
