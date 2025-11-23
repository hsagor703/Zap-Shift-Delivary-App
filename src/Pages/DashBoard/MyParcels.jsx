import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["my parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            // refetch the data
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handlePayment = async (parcel) => {
    const paymentInfo = {
      parcelName: parcel.parcelName,
      senderEmail: parcel.senderEmail,
      parcelId: parcel._id,
      cost: parcel.cost,
    };

    const res = await axiosSecure.post(
      "/payment-checkout-session",
      paymentInfo
    );
    window.location.assign(res.data.url);
    // console.log(res.data.url);
  };
  return (
    <div>
      this is my parcel page {parcels.length}
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment status</th>
              <th>Delivery status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <p className="text-green-500">paid</p>
                  ) : (
                    <button
                      onClick={() => handlePayment(parcel)}
                      // to={`/dashboard/payment/${parcel._id}`}
                      className="btn btn-sm bgColor1 text-black"
                    >
                      pay
                    </button>
                  )}
                </td>
                <td>{parcel?.deliveryStatus}</td>
                <td>
                  <button className="btn hover:bg-[#CAEB66]">
                    <FaEdit></FaEdit>{" "}
                  </button>
                  <button className="btn hover:btn-info">
                    <FaEye></FaEye>{" "}
                  </button>
                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className="btn hover:btn-error"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
