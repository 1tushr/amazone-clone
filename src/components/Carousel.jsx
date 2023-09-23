import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        navigation={true}
        spaceBetween={0}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 4500 }}
        className="h-[50%]"
      >
        <SwiperSlide>
          <img src={"../images/carousel_1.jpg"} alt="eur"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_2.jpg"} alt="eur"></img>
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video autoPlay loop muted="muted">
            <source src={"../images/carousel_vid.mp4"} type="video/mp4" />
          </video>
        </SwiperSlide>

        <SwiperSlide>
          <img src={"../images/carousel_4.jpg"} alt="eur"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={"../images/carousel_5.jpg"} alt="eur"></img>
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
    </div>
  );
}
