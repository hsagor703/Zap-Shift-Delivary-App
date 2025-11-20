import React from "react";
import service from "../../assets/service.png";
const services = [
  {
    id: 1,
    name: "Express  & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.  Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    img: service,
  },
  {
    id: 2,
    name: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    img: service,
  },
  {
    id: 3,
    name: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    img: service,
  },
  {
    id: 4,
    name: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    img: service,
  },
  {
    id: 5,
    name: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    img: service,
  },
  {
    id: 6,
    name: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    img: service,
  },
];
const OurServices = () => {
  return (
    <div className="bgColor2 mt-10 rounded-2xl">
      <div className=" p-2 md:p-20 text-center ">
        <h1 className="text-3xl font-bold text-white mb-4">Our Service</h1>
        <p className="text-white mb-8 mx-auto md:w-[750px]">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
          {services.map((data) => (
            <div key={data.id} className=" bg-[#f9f9fa] px-6 py-8 rounded-2xl space-y-2 text-center hover:bg-[#caeb66]">
              <img className="mx-auto" src={data.img} alt="" />
              <h3 className="textColor2 font-semibold text-xl">{data.name}</h3>
              <p className="md:w-[362]">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
