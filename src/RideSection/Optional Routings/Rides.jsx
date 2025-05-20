import React from 'react';
// Navbar Icons
import { FaCar } from "react-icons/fa";
import { MdOutlineCarRental } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
import { Link } from 'react-router';
import { SiGoogleforms } from "react-icons/si";

// Form Icons
import { FaDotCircle, FaUser } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";

// Google Maps
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function Rides() {
  return (
    <>
      {/* Navbar */}
      <section className="bg-white shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-6 md:px-10 py-4 gap-4">

          {/* Logo & Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-20 items-center">

            <h1 className="text-3xl font-bold cursor-pointer">
              <Link to="/">Uber</Link>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-10 mt-2 sm:mt-0 text-center sm:text-left">

              {/* Ride (Active) */}
              <div className="flex items-center gap-2.5 border-b-4 border-black pb-1 cursor-pointer">
                <FaCar className="text-2xl" />
                <h3 className="text-lg font-semibold">
                  <Link to="/RideSection/Ride">Ride</Link>
                </h3>
              </div>

              {/* Rentals */}
              <div className="flex items-center gap-2.5 cursor-pointer">
                <MdOutlineCarRental className="text-2xl" />
                <h3 className="text-lg font-semibold">
                  <Link to="/RideSection/Rentals">Rentals</Link>
                </h3>
              </div>

              {/* Courier */}
              <div className="flex items-center gap-2.5 cursor-pointer">
                <BsBoxSeamFill className="text-2xl" />
                <h3 className="text-lg font-semibold">
                  <Link to="/RideSection/Courier">Courier</Link>
                </h3>
              </div>

            </div>
          </div>

          {/* Activity */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-full">
              <SiGoogleforms className="text-xl" />
              <h3 className="text-base font-semibold">Activity</h3>
            </div>
          </div>

        </div>
      </section>

      <hr className="border-2 border-gray-300 my-3" />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6 md:px-10 pb-10">

        {/* Ride Request Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0 border-2 border-gray-200 p-5 rounded-xl shadow-sm">
          <h1 className="text-2xl font-semibold">Get a ride</h1>

          {/* Input 1 */}
          <div className="flex items-center gap-3 p-3 mt-5 bg-gray-100 rounded-lg">
            <FaDotCircle className="text-xl" />
            <input
              type="text"
              placeholder="Pickup location"
              className="outline-none bg-transparent w-full"
            />
          </div>

          {/* Input 2 */}
          <div className="flex items-center gap-3 p-3 mt-5 bg-gray-100 rounded-lg">
            <FaDotCircle className="text-xl" />
            <input
              type="text"
              placeholder="Dropoff location"
              className="outline-none bg-transparent w-full"
            />
            <IoAddCircle className="text-2xl text-gray-500" />
          </div>

          {/* Input 3 */}
          <div className="flex items-center gap-3 p-3 mt-5 bg-gray-100 rounded-lg">
            <FaDotCircle className="text-xl" />
            <input
              type="text"
              placeholder="Pickup now"
              className="outline-none bg-transparent w-full"
            />
          </div>

          {/* For Me Button */}
          <div className="flex items-center gap-3 p-3 mt-5 bg-gray-100 rounded-full w-fit">
            <FaUser className="text-xl" />
            <button className="text-base font-medium">For me</button>
          </div>

          {/* Search Button */}
          <button className="w-full bg-black text-white rounded-xl p-3 mt-5 text-lg font-semibold hover:bg-gray-800 transition">
            Search
          </button>
        </div>

        {/* Google Map */}
        <div className="flex-1 min-h-[400px] w-full">
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

export default Rides;
