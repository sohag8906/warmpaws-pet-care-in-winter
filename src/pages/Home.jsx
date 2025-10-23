import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import cat from '../assets/images1.jpg'
import cat2 from '../assets/image2.jpg'
import dog from '../assets/doge1.jpg'
import dog2 from '../assets/dog-2.webp'

const Home = () => {
  return (
    <div className="container mx-auto px-4 my-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        className="rounded-xl"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between h-[400px]">
            
            {/* Left Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full p-2 relative">
              <img
                src={cat}
                alt="Cute Cat"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              {/* Centered Overlay Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 rounded-xl text-white text-center">
                <h2 className="text-xl md:text-2xl font-bold">Cute Cats</h2>
                <p className="text-sm md:text-base">They will be your best companions on cold winter days.</p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full p-2 relative">
              <img
                src={dog}
                alt="Happy Dog"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 rounded-xl text-white text-center">
                <h2 className="text-xl md:text-2xl font-bold">Happy Dogs</h2>
                <p className="text-sm md:text-base">Playful, loving, and always ready to cuddle.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between h-[400px]">
            
            {/* Left Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full p-2 relative">
              <img
                src={cat2}
                alt="Winter Cat"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 rounded-xl text-white text-center">
                <h2 className="text-xl md:text-2xl font-bold">Winter Cats</h2>
                <p className="text-sm md:text-base">Perfect companions for chilly days.</p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full p-2 relative">
              <img
                src={dog2}
                alt="Joyful Dog"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 rounded-xl text-white text-center">
                <h2 className="text-xl md:text-2xl font-bold">Joyful Dogs</h2>
                <p className="text-sm md:text-base">Bringing happiness and energy to your home.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between h-[400px]">
            
            {/* Left Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full p-2 relative">
              <img
                src={cat}
                alt="Lovely Cat"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 rounded-xl text-white text-center">
                <h2 className="text-xl md:text-2xl font-bold">Lovely Cats</h2>
                <p className="text-sm md:text-base">Soft, cuddly, and full of love.</p>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full p-2 relative">
              <img
                src={dog2}
                alt="Friendly Dog"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 rounded-xl text-white text-center">
                <h2 className="text-xl md:text-2xl font-bold">Friendly Dogs</h2>
                <p className="text-sm md:text-base">Always ready to brighten your day.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Home;
