import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import customer from "../../../assets/customer-top.png";

const Reviews = ({ reviewsPromise }) => {
  const reviewsData = use(reviewsPromise);
  console.log(reviewsData);
  return (
    <div>
      <div className="">
        <img className="mx-auto mt-20" src={customer} alt="" />
        <h1 className="text-4xl font-bold textColor2 mt-10 text-center">
          What our customers are sayings
        </h1>

        <p className="md:w-[730px] mx-auto text-center mb-10">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviewsData.map((data) => (
          <SwiperSlide key={data.id}>
            <ReviewCard data={data}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
