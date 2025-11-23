import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxios from "../../hooks/useAxios";

const PaymentSuccessful = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxios();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  console.log(sessionId);
  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold border-0 text-green-500 btn">
        Payment successful
      </h1>
      <p className="text-xl font-bold text-blue-500 btn border-0">
        Your Transaction Id: <span className="text-green-500">{paymentInfo.transactionId}</span>
      </p>
      <p className="text-xl font-bold text-blue-500 btn border-0">
        Your Tracking Id: <span className="text-green-500">{paymentInfo.trackingId}</span>
      </p>
    </div>
  );
};

export default PaymentSuccessful;
