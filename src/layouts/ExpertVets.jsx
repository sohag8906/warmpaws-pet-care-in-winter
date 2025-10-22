import React from "react";

const ExpertVets = () => {
  const vets = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      experience: "8 years experience in pet nutrition & winter care",
      image: "https://i.ibb.co.com/MxZBTktJ/images-2.jpg"
    },
    {
      id: 2,
      name: "Dr. David Miller",
      experience: "5 years experience in grooming & coat health",
      image: "https://i.ibb.co.com/pBd97fMr/images-3.jpg"
    },
    {
      id: 3,
      name: "Dr. Emma Brown",
      experience: "10 years experience in pet wellness & cold protection",
      image: "https://i.ibb.co.com/W4XHt7SM/images-4.jpg"
    },
    {
      id: 4,
      name: "Dr. Alex Carter",
      experience: "6 years experience in animal therapy and cold injury prevention",
      image: "https://i.ibb.co.com/Qvnt9S9F/download-7.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
        Meet Our Expert Vets
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vets.map((vet) => (
          <div
            key={vet.id}
            className="p-4  rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 text-center bg-white"
          >
            <img
              src={vet.image}
              alt={vet.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{vet.name}</h3>
            <p className="text-gray-600 mt-2">{vet.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertVets;
