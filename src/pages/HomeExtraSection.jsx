import React from 'react';

const HomeExtraSection = () => {
    return (
        <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg mt-10">
            <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">
                Winter Pet Games
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {/* First Game */}
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    <h3 className="font-semibold text-xl mb-3 text-blue-600">Snow Fetch</h3>
                    <p className="text-gray-700">
                        Play fetch with your dog using brightly colored toys in the snow. Keeps them active and warm.
                    </p>
                </div>

                {/* Second Game */}
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    <h3 className="font-semibold text-xl mb-3 text-blue-600">Winter Hide & Seek</h3>
                    <p className="text-gray-700">
                        Hide treats or toys in snow mounds or around the house for your pets to find. Fun and mentally stimulating!
                    </p>
                </div>

                {/* Third Game */}
                <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    <h3 className="font-semibold text-xl mb-3 text-blue-600">Indoor Obstacle Course</h3>
                    <p className="text-gray-700">
                        Set up tunnels, cushions, and small jumps inside to let your pets exercise and stay playful during cold days.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeExtraSection;
