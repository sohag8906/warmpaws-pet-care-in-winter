import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate, useLocation } from "react-router-dom";
import { AuthConntext } from "../provider/AuthProvider";

const Hero = () => {
  const services = useLoaderData() || [];
  const { user } = useContext(AuthConntext);
  const navigate = useNavigate();
  const location = useLocation(); // বর্তমান পেজের info

  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold mb-6">Popular Winter Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.serviceId}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => {
              if (!user) {
                alert("Please login first to view details!");
                // login page-এ navigate করার সময় current page path পাঠানো
                navigate("/auth/login", { state: { from: location } });
              }
            }}
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">{service.serviceName}</h3>
            <div className="flex justify-between mt-5">
              <p className="text-yellow-500">Rating: {service.rating} ⭐</p>
              <p className="text-green-600 font-bold">Price: ${service.price}</p>
            </div>

            <Link
              to={`/service/${service.serviceId}`}
              className="mt-5 w-full px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 inline-block text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
