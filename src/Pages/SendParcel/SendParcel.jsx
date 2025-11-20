import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const regionsItems = useLoaderData();
  const duplicateRegions = regionsItems.map((r) => r.region);
  const regions = [...new Set(duplicateRegions)];
  const senderRegion = useWatch({control , name: "senderRegion"});
  const receiverRegion = useWatch({control , name: "receiverRegion"});

  const districtByRegion = (region) => {
    const filterRegions = regionsItems.filter((r) => r.region === region);
    const districts = filterRegions.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log("parcel", data);
  };

  return (
    <div className="bg-gray-100 mt-5 p-10 rounded-2xl space-y-5">
      <h2 className="text-3xl font-bold textColor2">Send A Parcel</h2>
      <p className="font-bold textColor2">Enter your parcel details</p>
      <hr className="text-gray-300" />
      <form className="font-bold" onSubmit={handleSubmit(handleSendParcel)}>
        {/* parcel type  */}
        <div className="flex gap-10 mb-5">
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio radio-primary"
              defaultChecked
            />
            Document
          </label>

          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio radio-primary"
            />
            Non Document
          </label>
        </div>

        {/* parcel weight and name  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 ">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="parcel name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="parcel weight"
            />
          </fieldset>
        </div>
        <hr className="text-gray-300 my-5" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {/* sender info  */}
          <div>
            <h2>Sender Details</h2>
            <fieldset className="fieldset space-y-2">
              {/* sender name  */}
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full"
                placeholder="Sender Name"
              />
              {/* sender email  */}
              <label className="label">Sender Email</label>
              <input
                type="email"
                {...register("senderEmail")}
                className="input w-full"
                placeholder="Sender Email"
              />
              {/* sender region  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Region</legend>
                <select
                  {...register("senderRegion")}
                  defaultValue="Pick a Region"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, i) => (
                    <option key={i}>{r}</option>
                  ))}
                </select>
              </fieldset>
              {/* sender district  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender District</legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a District"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a District</option>
                  {districtByRegion(senderRegion).map((r, i) => (
                    <option key={i}>{r}</option>
                  ))}
                </select>
              </fieldset>

              {/* sender address  */}
              <label className="label">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Sender Address"
              />
              {/* sender number  */}
              <label className="label">Sender Number</label>
              <input
                type="number"
                {...register("senderNumber")}
                className="input w-full"
                placeholder="Sender Number"
              />

              {/* sender Instruction  */}
              <label className="label">Sender Instruction</label>
              <textarea
                type="text"
                {...register("senderInstruction")}
                className="textarea w-full"
                placeholder="Sender Instruction"
              />
            </fieldset>
          </div>

          {/* receiver info  */}
          <div>
            <h2>Receiver Details</h2>
            <fieldset className="fieldset space-y-2">
              {/* receiver name  */}
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="Receiver Name"
              />
              {/* receiver email  */}
              <label className="label">Receiver Email</label>
              <input
                type="email"
                {...register("receiverEmail")}
                className="input w-full"
                placeholder="Receiver Email"
              />

              {/* Receiver region  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Region</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a Region"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((r, i) => (
                    <option key={i}>{r}</option>
                  ))}
                </select>
              </fieldset>

              {/* Receiver region  */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a District"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a District</option>
                  {districtByRegion(receiverRegion).map((r, i) => (
                    <option key={i}>{r}</option>
                  ))}
                </select>
              </fieldset>

              {/* receiver address  */}
              <label className="label">Receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="Receiver Address"
              />
              {/* receiver number  */}
              <label className="label">Receiver Number</label>
              <input
                type="number"
                {...register("receiverNumber")}
                className="input w-full"
                placeholder="Receiver Number"
              />
             
              {/* receiver Instruction  */}
              <label className="label">Receiver Instruction</label>
              <textarea
                type="text"
                {...register("receiverInstruction")}
                className="textarea w-full"
                placeholder="Receiver Instruction"
              />
            </fieldset>
          </div>
        </div>
        <input className="btn" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SendParcel;
