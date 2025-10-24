import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate, useLocation } from "react-router-dom";
import { AuthConntext } from "../provider/AuthProvider";

const Hero = () => {
  const services = useLoaderData() || [];
  const { user } = useContext(AuthConntext);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold mb-6">Popular Winter Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.serviceId}
            className="flex flex-col justify-between rounded-xl shadow-lg hover:shadow-xl transition cursor-pointer h-full"
            onClick={() => {
              if (!user) {
                alert("Please login first to view details!");
                navigate("/auth/login", { state: { from: location } });
              }
            }}
          >
            {/* Image section */}
            <div className="w-full h-64 overflow-hidden rounded-t-xl">
              <img
                src={service.image}
                alt={service.serviceName}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Service info */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.serviceName}</h3>
                <p className="text-gray-600 font-semibold mb-1">Category: {service.category}</p>
               
              </div>
              <div className="flex justify-between mb-3">
                <p className="text-yellow-500 font-semibold">{service.rating} ⭐</p>
                <p className="text-green-600 font-bold">${service.price}</p>
              </div>
              

              {/* Button */}
              <Link
                to={`/service/${service.serviceId}`}
                className="w-full px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 text-center"
                onClick={(e) => e.stopPropagation()}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
