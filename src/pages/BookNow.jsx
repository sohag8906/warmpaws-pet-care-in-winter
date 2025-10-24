import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const BookNow = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service booked successfully!");
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-8 flex flex-col justify-between">
        
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Book Service</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl hover:bg-blue-400 transition-colors font-semibold"
            >
              Book Now
            </button>
          </form>
        </div>

        {/* Back Button at the bottom */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 text-center bg-primary font-bold  w-full py-2 text-white hover:bg-blue-400 hover:underline rounded-xl border border-blue-300"
        >
          &larr; Back
        </button>
      </div>

      <Toaster position="top-right" />
    </div>
  );
};

export default BookNow;
