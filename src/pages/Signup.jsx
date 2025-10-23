import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthConntext } from "../provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config"; // Firebase config path

const Signup = () => {
  const { createUser, updateUserProfile } = useContext(AuthConntext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Password validation function
  const validatePassword = (password) => {
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    if (!uppercase.test(password)) {
      setError("Password must include at least one uppercase letter");
      return false;
    }
    if (!lowercase.test(password)) {
      setError("Password must include at least one lowercase letter");
      return false;
    }
    return true;
  };

  // Form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    setError(""); // clear previous error

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!validatePassword(password)) return;

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update user profile with name and photo
        updateUserProfile(name, photo)
          .then(() => {
            console.log("Profile updated:", user);
            navigate("/home"); // Redirect to Home
          })
          .catch((err) => {
            console.log("Profile update error:", err.message);
          });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  // Google Signup
  const handleGoogleSignUp = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google user:", result.user);
        navigate("/home"); // Redirect after Google login
      })
      .catch((err) => {
        console.log(err.message);
        setError("Google signup failed");
      });
  };

  return (
    <div className="flex justify-center mt-10 mb-10">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl py-5">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSignUp} className="card-body">
          <label className="label">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="input"
            required
          />

          <label className="label">Photo URL</label>
          <input
            name="photo"
            type="text"
            placeholder="Photo URL"
            className="input"
            required
          />

          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input"
            required
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input"
            required
          />

          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Register
          </button>
        </form>

        <p className="text-center pt-3">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-secondary underline">
            Login
          </Link>
        </p>

        <button
          onClick={handleGoogleSignUp}
          className="btn bg-white text-black border-[#e5e5e5] flex items-center justify-center gap-2 mt-4 w-full"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
              <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
              <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
              <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
            </g>
          </svg>
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;

