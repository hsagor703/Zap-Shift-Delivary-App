import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({data}) => {
    const {userName, review, user_photoURL} = data
  return (
    <div>
      <div className="max-w-md bg-white shadow-md rounded-xl p-8 border border-gray-100">
        {/* Quote Icon */}
        <div className="text-teal-400 text-4xl mb-4"><FaQuoteLeft /></div>

        {/* Testimonial Text */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {review}
        </p>

        {/* Divider */}
        <hr className="border-dashed border-gray-300 mb-6" />

        {/* Reviewer */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-700">
            <img className="w-12 h-12 rounded-full bg-teal-700" src={user_photoURL} alt="" />
          </div>

          <div>
            <h3 className="text-teal-800 font-semibold">{userName}</h3>
            <p className="text-gray-500 text-sm">Senior Product Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
