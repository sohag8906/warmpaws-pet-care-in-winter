import React, { useContext, useState } from "react";
import { AuthConntext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user } = useContext(AuthConntext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = () => {
    updateProfile(user, { displayName: name, photoURL: photoURL })
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((err) => {
        toast.error("Profile update failed: " + err.message);
      });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

      <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 flex flex-col items-center gap-4">
        <img
          src={photoURL || "https://via.placeholder.com/150"}
          alt={name || "User"}
          className="w-32 h-32 rounded-full object-cover"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Photo URL"
          className="input input-bordered w-full"
        />
        <button onClick={handleUpdate} className="btn btn-primary w-full mt-2">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
