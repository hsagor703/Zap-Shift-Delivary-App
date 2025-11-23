import React from "react";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading/Loading";

const Payment = () => {
  const axiosSecure = useAxios();
  const { parcelId } = useParams();
  const { isLoading, data: pData = {} } = useQuery({
    queryKey: ["payData", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: pData.cost,
      parcelId: pData._id,
      senderEmail: pData.senderEmail,
      parcelName: pData.parcelName,
    };

    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log("from payment section", res.data);
    window.location.href = res.data.url;
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1>
        {" "}
        please pay for ${pData.cost} {pData.parcelName}
      </h1>
      <button onClick={handlePayment} className="btn bgColor1">
        pay
      </button>
    </div>
  );
};

export default Payment;
