
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import dog from "../assets/doge1.jpg";
import dog2 from "../assets/dog-2.webp";
import newcat from "../assets/cat5.jpg";
import newdog from "../assets/dog66 (5).jpg";
import cat3 from "../assets/cat888.jpg";
import cat4 from "../assets/999.jpg";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[400px]">
            {/* Left Image */}
            <div className="relative">
              <img
                src={cat3}
                alt="Cute Cat"
                className="w-full h-[250px] md:h-[400px] object-cover rounded-xl"
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-xl text-white text-center p-4">
                <h2 className="text-2xl md:text-4xl font-bold">Cute Cats</h2>
                <p className="text-sm md:text-lg mt-2">
                  They will be your best companions on cold winter days.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src={dog}
                alt="Happy Dog"
                className="w-full h-[250px] md:h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-xl text-white text-center p-4">
                <h2 className="text-2xl md:text-4xl font-bold">Happy Dogs</h2>
                <p className="text-sm md:text-lg mt-2">
                  Playful, loving, and always ready to cuddle.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[400px]">
            <div className="relative">
              <img
                src={cat4}
                alt="Winter Cat"
                className="w-full h-[250px] md:h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-xl text-white text-center p-4">
                <h2 className="text-2xl md:text-4xl font-bold">Winter Cats</h2>
                <p className="text-sm md:text-lg mt-2">
                  Perfect companions for chilly days.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={dog2}
                alt="Joyful Dog"
                className="w-full h-[250px] md:h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-xl text-white text-center p-4">
                <h2 className="text-2xl md:text-4xl font-bold">Joyful Dogs</h2>
                <p className="text-sm md:text-lg mt-2">
                  Bringing happiness and energy to your home.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[400px]">
            <div className="relative">
              <img
                src={newcat}
                alt="Lovely Cat"
                className="w-full h-[250px] md:h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-xl text-white text-center p-4">
                <h2 className="text-2xl md:text-4xl font-bold">Lovely Cats</h2>
                <p className="text-sm md:text-lg mt-2">
                  Soft, cuddly, and full of love.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={newdog}
                alt="Friendly Dog"
                className="w-full h-[250px] md:h-[400px] object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-xl text-white text-center p-4">
                <h2 className="text-2xl md:text-4xl font-bold">Friendly Dogs</h2>
                <p className="text-sm md:text-lg mt-2">
                  Always ready to brighten your day.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;