import React from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/Loading/Loading";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const {isLoading, data: payments = [] } = useQuery({
    queryKey: ["payment history", user.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/payments?email=${user.email}`);
      return result.data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <h2>Payment History: {payments.length}</h2>

      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Amount</th>
              <th>TransactionId</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment,i) => (
              <tr key={payment._id}>
                <th>{i+1}</th>
                <td>{payment?.parcelName}</td>
                <td>${payment?.amount}</td>
                <td>{payment?.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
