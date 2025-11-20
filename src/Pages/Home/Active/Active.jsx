import React from "react";
import img1 from "../../../assets/live-tracking.png";
import img2 from "../../../assets/safe-delivery.png";
const items = [
  {
    id: 1,
    name: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    img: img1,
  },
  {
    id: 1,
    name: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: img2,
  },
  {
    id: 1,
    name: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: img2,
  },
];
const Active = () => {
  return (
    <div className="mt-10">
      <div>
        <div className="border border-dashed border-gray-400 mb-10"></div>

        <div className="  grid gap-5 ">
          {items.map((item) => (
          <div className="space-y-6 md:flex items-center bg-[#eaeced] p-5 rounded-2xl gap-6" key={item.id}>
            <img src={item.img} alt="" />
            <div className=" border-l-2 border-dashed md:h-36 border-gray-400">
            </div>
            <div>
              <h1 className="text-2xl font-bold textColor2" >{item.name}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        </div>

        <div className="border border-dashed border-gray-400 mt-10"></div>
      </div>
    </div>
  );
};

export default Active;
