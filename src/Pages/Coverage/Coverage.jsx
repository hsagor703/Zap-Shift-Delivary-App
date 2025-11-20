import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const position = [23.685, 90.3563];
  const servicesData = useLoaderData();
  const mapRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const findArea = servicesData.find(service => service.district.toLowerCase().includes(search.toLowerCase()));
    if (findArea) {
      const areaNumber = [findArea.latitude, findArea.longitude];
      console.log(findArea, areaNumber);
      mapRef.current.flyTo(areaNumber, 14)
    }

  }
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold textColor2">
          We are available in 64 districts
        </h1>

        <form onSubmit={handleSubmit}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" name="search" required placeholder="Search" />
          </label>
          <button className="btn" >search</button>
        </form>

        <h3 className="text-2xl font-bold textColor2 ">
          We deliver almost all over Bangladesh
        </h3>
      </div>
      <div className="border h-[800px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {servicesData.map((data, index) => (
            <Marker key={index} position={[data.latitude, data.longitude]}>
              <Popup>
                <strong>{data.district}</strong> <br /> Service Area :{" "}
                {data.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
