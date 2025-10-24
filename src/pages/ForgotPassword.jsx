import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert(`Password reset link sent to ${email}. Check your inbox.`);
        setEmail(""); // ফর্ম ক্লিয়ার করা
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="card bg-base-100 shadow-md p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-5">
          Forgot Password
        </h2>
        <form onSubmit={handleReset} className="flex flex-col gap-4">
          <label className="label">Enter your email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
