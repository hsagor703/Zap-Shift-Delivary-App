import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import star_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const logos = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  star_people,
];
const Brands = () => {
  return (
    <div>
        <h1 className="text-2xl font-bold textColor2 mt-10 text-center">We've helped thousands of sales teams</h1>
      <Swiper
        className="mt-10"
        loop={true}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
        <img src={amazon} alt="" />
      </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Brands;
