import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData() || []; // array of services

  if (!services.length) {
    return <p className="text-red-500 p-5">No services found!</p>;
  }

  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Service Details</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.serviceId}
            className="border rounded-2xl shadow-lg p-4 hover:shadow-xl transition"
          >
            {/* Service Image */}
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />

            {/* Service Details */}
            <h3 className="text-xl font-semibold mb-2">{service.serviceName}</h3>
            <p className="text-gray-600 mb-2">Category: {service.category}</p>
            <p className="text-gray-700 mb-2">{service.description}</p> {/* description */}
            <div className="flex justify-between mb-2">
              <p className="text-yellow-500 font-semibold">{service.rating} ⭐</p>
              <p className="text-green-600 font-bold">${service.price}</p>
            </div>
            <p className="mb-2">Provider: {service.providerName}</p>
            <p className="mb-2">Slots Available: {service.slotsAvailable}</p>

            {/* Book Now Button */}
            <Link
              to={`/book/${service.serviceId}`}
              className="w-full block text-center bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
