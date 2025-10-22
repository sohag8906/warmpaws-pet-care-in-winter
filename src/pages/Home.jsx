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
            <div className="w-full md:w-1/2 h-[200px] md:h-full p-2">
              <img
                src={cat}
                alt="Cozy Dog"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full p-2 relative">
              <img
                src={dog}
                alt="Cozy Cat"
                className="w-full h-[400px] object-cover rounded-xl"
              />
             
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between h-[400px]">
            
            {/* Left Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full p-2">
              <img
                src={cat2}
                alt="Cozy Cat"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full p-2 relative">
              <img
                src={dog2}
                alt="Cozy Dog"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between h-[400px]">
            
            {/* Left Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full p-2">
              <img
                src={cat}
                alt="Cozy Cat"
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 h-[200px] md:h-full p-2 relative">
              <img
                src={dog2}
                alt="Cozy Dog"
                className="w-full h-[400px] object-cover rounded-xl"
              />
              
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Home;
