import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function NftDisplay() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-metal py-48">
      <div>
        <div className="flex flex-col items-center py-20 font-Exo">
          <div className="mb-2">
            <h1 className="text-8xl bg-clip-text bg-gradient-to-b from-cyanMan via-purp to-pinkHaze text-transparent">
              Traits
            </h1>
          </div>

          <hr className="h-1 w-72 my-10 border border-purp bg-purp" />

          <div className="text-metal cursor-pointer">
            <div className="flex justify-center bg-transparent border-cyanMan border-2 text-cyanMan w-60 h-12 py-1 rounded-full mb-2 hover:shadow-pinkHaze active:bg-pinkHaze shadow-lg ">
              <h1 className="text-2xl">Uncommon</h1>
            </div>

            <div className="flex justify-center w-60 h-12 bg-transparent border-cyanMan border-2 text-cyanMan py-1 rounded-full mb-2 hover:shadow-pinkHaze active:bg-pinkHaze shadow-lg">
              <h1 className="text-2xl">Rare</h1>
            </div>

            <div className="flex justify-center w-60 h-12 bg-transparent border-cyanMan border-2 text-cyanMan py-1 rounded-full mb-2 hover:shadow-pinkHaze active:bg-pinkHaze shadow-lg">
              <h1 className="text-2xl">Ultra Rare</h1>
            </div>

            <div className="flex justify-center w-60 h-12 bg-transparent border-cyanMan border-2 text-cyanMan py-1 rounded-full mb-2 hover:shadow-pinkHaze active:bg-pinkHaze shadow-lg">
              <h1 className="text-2xl">Legendary</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="">
              <img
                src="https://nfts.wtf/wp-content/uploads/2021/07/2-cosmicpaws.io_-4a76513b8df576b9bf288eaf31f9eccd-1024x1024.jpeg"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src="https://blogs.airdropalert.com/wp-content/uploads/2021/10/Gutter-Rat-PFP-1024x1024.png"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img
                src="https://cdn.dribbble.com/users/83671/screenshots/17013854/mr_noir_1_1.png"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default NftDisplay;
