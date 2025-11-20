import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from "../../assets/banner/banner1.png";
import bannerImg2 from "../../assets/banner/banner2.png";
import bannerImg3 from "../../assets/banner/banner3.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="mt-9 ">
      <Carousel infiniteLoop>
        <div className="">
          <div className=" relative">
            <img className="" src={bannerImg1} />
          </div>
          <div className="flex items-center  absolute top-120 left-22">
            <button className="btn rounded-full bgColor1 font-bold">
              Track Your Parcel
            </button>
            <BsArrowUpRightCircleFill className="text-2xl mr-4 bgColo" />
            <button className="btn font-bold rounded-xl">Be A Rider</button>
          </div>
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
