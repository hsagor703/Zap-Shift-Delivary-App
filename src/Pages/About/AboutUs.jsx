import React from "react";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="bg-gray-200 px-20 py-10 mt-8 rounded-2xl">
      <div>
        <h2 className="textColor2 font-bold text-3xl">About Us</h2>
        <p className="md:w-[629px] mt-3">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <hr className="my-5 text-gray-400" />
      <div className="flex gap-8 font-bold text-[#5b6a2b]">
        <Link>Story</Link>
        <Link>Mission</Link>
        <Link>Success</Link>
        <Link>Team & Others</Link>
      </div>
      <div className="mt-3 space-y-3">
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
