import React, { useContext, useState, useEffect } from "react";
import { AuthConntext } from "../provider/AuthProvider";
import { updateProfile, getAuth, reload } from "firebase/auth";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user } = useContext(AuthConntext);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");

  const auth = getAuth();

  // Load latest user info from Firebase
  useEffect(() => {
    if (user) {
      // Force reload to get updated photoURL from Firebase
      reload(user).then(() => {
        setName(user.displayName || "");
        setPhotoURL(user.photoURL || "");
        setEmail(user.email || "");
      });
    }
  }, [user]);

  const handleUpdate = () => {
    if (!user) return;
    updateProfile(user, { displayName: name, photoURL })
      .then(() => toast.success("Profile updated successfully!"))
      .catch((err) => toast.error(err.message));
  };

  // Get initials if photoURL not available
  const getInitials = (fullName) => {
    if (!fullName) return "U";
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md flex flex-col items-center gap-4">

        {/* Profile Image or Initials */}
        {photoURL ? (
          <img
            src={photoURL}
            alt={name || "User"}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-4xl font-bold border-4 border-blue-500">
            {getInitials(name)}
          </div>
        )}

        

        {/* Editable Inputs */}
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
        <input
          type="email"
          value={email}
          readOnly
          className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
        />

        {/* Update Button */}
        <button
          onClick={handleUpdate}
          className="btn btn-primary w-full mt-2"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
