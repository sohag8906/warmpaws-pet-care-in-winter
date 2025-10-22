import React from 'react';
import { useLoaderData } from 'react-router';

const Hero = () => {
     const services = useLoaderData(); 
     console.log(services)
    return (
        <div className="container mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold mb-6">Popular Winter Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.serviceId}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={service.image}
              alt={service.serviceName}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold">{service.serviceName}</h3>
            <div className='flex justify-between mt-5'>
              <p className="text-yellow-500">Rating: {service.rating} ⭐</p>
            <p className="text-green-600 font-bold">Price: ${service.price}</p>
            </div>
            
            <button className="mt-5 w-full px-4 py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Hero;