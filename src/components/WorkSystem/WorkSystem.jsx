import React from "react";

import workSystemImage from "../../assets/bookingIcon.png";
const details = [
  {
    id: 1,
    name: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    img: workSystemImage,
  },
  {
    id: 2,
    name: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    img: workSystemImage,
  },
  {
    id: 3,
    name: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    img: workSystemImage,
  },
  {
    id: 4,
    name: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
    img: workSystemImage,
  },
];

const WorkSystem = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold textColor2 mb-8 p-2">How Its Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6">
        {details.map((data) => (
          <div key={data.id} className=" bg-[#f9f9fa] p-2 md:p-8 rounded-2xl space-y-2">
            <img src={data.img} alt="" />
            <h3 className="textColor2 font-semibold text-xl">{data.name}</h3>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSystem;
