import React from "react";
import {
  Snowflake,
  PawPrint,
  Thermometer,
  Home,
  Heart,
  Sun,
} from "lucide-react"; // install: npm install lucide-react
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";

const WinterTips = () => {
  const navigate = useNavigate();

  const tips = [
    {
      id: 1,
      icon: <Snowflake className="w-10 h-10 text-blue-500" />,
      title: "Keep Pets Dry",
      description: "Always dry your pet after snow or rain to prevent chills.",
    },
    {
      id: 2,
      icon: <Home className="w-10 h-10 text-purple-500" />,
      title: "Use Cozy Bedding",
      description: "Provide warm blankets or pet beds for extra comfort.",
    },
    {
      id: 3,
      icon: <PawPrint className="w-10 h-10 text-pink-500" />,
      title: "Check Paws Regularly",
      description:
        "Inspect your pet’s paws for cracks, ice buildup, or irritation.",
    },
    {
      id: 4,
      icon: <Thermometer className="w-10 h-10 text-red-500" />,
      title: "Limit Outdoor Time",
      description:
        "Avoid long exposure to extreme cold to protect their health.",
    },
    {
      id: 5,
      icon: <Heart className="w-10 h-10 text-rose-500" />,
      title: "Give Them Extra Food",
      description:
        "Pets may need a little extra food to maintain body heat in winter.",
    },
    {
      id: 6,
      icon: <Sun className="w-10 h-10 text-yellow-500" />,
      title: "Morning Walks are Best",
      description:
        "Go for walks when the sun is out and it’s a bit warmer.",
    },
  ];

  return (
    <div className="my-14 py-10 bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl shadow-inner">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
        Winter Care Tips for Pets ❄️
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-blue-100"
          >
            <div className="mb-4">{tip.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {tip.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {tip.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
         <Link
          to="/vets"  // ✅ এখানে Link ব্যবহার
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
         “Meet Our Expert Vets”
        </Link>
      </div>
    </div>
  );
};

export default WinterTips;
