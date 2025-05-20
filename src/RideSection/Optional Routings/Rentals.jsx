import React from 'react';
// Navbar Icons
import { FaCar } from "react-icons/fa";
import { MdOutlineCarRental } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
import { Link } from 'react-router';
import { SiGoogleforms } from "react-icons/si";

// Section Icons
import { BsHourglassSplit } from "react-icons/bs";
import { IoBagSharp } from "react-icons/io5";

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

function Rentals() {
  return (
    <>
      {/* Navbar */}
      <section className="bg-white shadow-sm">
        <div className="flex flex-col lg:flex-row justify-between px-5 md:px-10 py-4 gap-4">

          {/* Left: Logo + Links */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-20 items-center">

            <h1 className="text-3xl font-bold cursor-pointer">
              <Link to="/">Uber</Link>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-10 text-center sm:text-left mt-2 sm:mt-0">

              <div className="flex items-center gap-2.5 cursor-pointer">
                <FaCar className="text-2xl" />
                <h3 className="text-lg font-semibold">
                  <Link to="/RideSection/Ride">Ride</Link>
                </h3>
              </div>

              <div className="flex items-center gap-2.5 border-b-4 border-black pb-1 cursor-pointer">
                <MdOutlineCarRental className="text-2xl" />
                <h3 className="text-lg font-semibold">
                  <Link to="/RideSection/Rentals">Rentals</Link>
                </h3>
              </div>

              <div className="flex items-center gap-2.5 cursor-pointer">
                <BsBoxSeamFill className="text-2xl" />
                <h3 className="text-lg font-semibold">
                  <Link to="/RideSection/Courier">Courier</Link>
                </h3>
              </div>

            </div>
          </div>

          {/* Right: Activity */}
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

        {/* Rentals Info Card */}
        <div className="w-full max-w-md mx-auto lg:mx-0 border-2 rounded-xl overflow-hidden shadow-sm">
          <img
            src="https://mobile-content.uber.com/shared-rides/hourly_illustration.png"
            alt="Rentals"
            className="w-full h-48 object-cover"
          />

          <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
            <h1 className="text-2xl font-bold">Uber Rentals</h1>

            <div className="flex items-start gap-2">
              <BsHourglassSplit className="mt-1 text-xl" />
              <p>Keep a car and driver for up to 12 hours</p>
            </div>

            <div className="flex items-start gap-2">
              <IoBagSharp className="mt-1 text-xl" />
              <p>Ideal for business meetings, tourist travel and multiple stop trips</p>
            </div>

            <div className="flex items-start gap-2">
              <MdOutlineCarRental className="mt-1 text-xl" />
              <p>Book for now or reserve for later</p>
            </div>
          </div>

          <button className="bg-black text-white text-lg px-5 w-full rounded-xl font-semibold py-2.5 mt-2.5 hover:bg-gray-800 transition">
            Get started
          </button>
        </div>

        {/* Google Map Section */}
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

export default Rentals;
