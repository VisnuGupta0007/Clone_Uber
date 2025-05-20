import React from 'react';
import { FaCar, FaDotCircle } from "react-icons/fa";
import { MdOutlineCarRental } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
import { Link } from 'react-router';
import { SiGoogleforms } from "react-icons/si";
import { CgShapeSquare } from "react-icons/cg";

// Map
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function Courier() {
  return (
    <>
      {/* Top Nav Section */}
      <section>
        <div className="flex flex-col lg:flex-row justify-between px-5 md:px-10 mt-4 gap-4">

          <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-center text-center">

            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold cursor-pointer">
                <Link to="/">Uber</Link>
              </h1>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-10 mt-2 sm:mt-5 text-center sm:text-left">

              <div className="flex items-center gap-2.5 cursor-pointer">
                <FaCar className="text-2xl" />
                <h3 className="text-lg font-semibold">
                  <Link to="/RideSection/Ride">Ride</Link>
                </h3>
              </div>

              <div className="flex items-center gap-2.5 cursor-pointer">
                <MdOutlineCarRental className="text-2xl" />
                <h3 className="text-lg font-semibold">
                  <Link to="/RideSection/Rentals">Rentals</Link>
                </h3>
              </div>

              <div className="flex items-center gap-2.5 border-b-4 border-black pb-1 cursor-pointer">
                <BsBoxSeamFill className="text-2xl" />
                <h3 className="text-lg font-semibold">
                  <Link to="/RideSection/Courier">Courier</Link>
                </h3>
              </div>

            </div>
          </div>

          {/* Activity Button */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-full w-fit">
              <SiGoogleforms className="text-xl" />
              <h3 className="text-base font-semibold">Activity</h3>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-2 border-gray-300 my-3" />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 md:px-10 pb-10">

        {/* Ride Request Card */}
        <div className="w-full max-w-md mx-auto lg:mx-0 border-2 rounded-xl overflow-hidden shadow-sm">
          <img
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-plan/c824e49b7d43abd5.jpg"
            alt="Courier"
            className="w-full h-48 object-cover"
          />

          <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
            <h1 className="text-2xl font-bold">Courier</h1>

            <p className="text-base text-gray-600">
              Have a courier deliver something for you. Get packages delivered in the time it takes to drive there.
            </p>

            <div className="flex items-center gap-3 bg-gray-200 px-4 py-2 rounded-lg">
              <FaDotCircle className="text-xl" />
              <input
                type="text"
                placeholder="Pickup Location"
                className="w-full text-base font-medium text-gray-700 bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-3 bg-gray-200 px-4 py-2 rounded-lg">
              <CgShapeSquare className="text-xl" />
              <input
                type="text"
                placeholder="Dropoff Location"
                className="w-full text-base font-medium text-gray-700 bg-transparent outline-none"
              />
            </div>

            <button className="w-full mt-3 bg-gray-200 text-gray-500 font-semibold py-2.5 rounded-xl hover:bg-black hover:text-white transition">
              Search
            </button>
          </div>
        </div>

        {/* Google Map */}
        <div className="flex-1 min-h-[400px]">
          <LoadScript googleMapsApiKey="AIzaSyBpgZ65NiewGg7Tqr7uz3DknfOx9Vdpls8">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={12}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </>
  );
}

export default Courier;
