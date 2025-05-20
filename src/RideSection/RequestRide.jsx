import React from 'react';
import { FaCar, FaDotCircle, FaUser } from "react-icons/fa";
import { MdOutlineCarRental } from "react-icons/md";
import { BsBoxSeamFill } from "react-icons/bs";
import { SiGoogleforms } from "react-icons/si";
import { IoAddCircle } from "react-icons/io5";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

function RequestRide() {
  return (
    <>
      {/* Navbar */}
      <section>
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-10 py-4 gap-4">

          {/* Left: Brand + Nav */}
          <div className="flex flex-col lg:flex-row items-center gap-6 w-full lg:w-auto">

            <div className="text-3xl font-semibold cursor-pointer">
              <Link to='/'>Uber</Link>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2 border-b-4 border-black pb-1 cursor-pointer">
                <FaCar className="text-xl" />
                <h3 className="text-lg font-semibold"><Link to='/RideSection/Ride'>Ride</Link></h3>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <MdOutlineCarRental className="text-xl" />
                <h3 className="text-lg font-semibold"><Link to='/RideSection/Rentals'>Rentals</Link></h3>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <BsBoxSeamFill className="text-xl" />
                <h3 className="text-lg font-semibold"><Link to='/RideSection/Courier'>Courier</Link></h3>
              </div>
            </div>

          </div>

          {/* Right: Activity */}
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <SiGoogleforms className="text-xl" />
            <h3 className="text-lg font-semibold">Activity</h3>
          </div>

        </div>
      </section>

      <hr className="border-2 border-gray-300" />

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-6 px-4 md:px-8 py-6">

        {/* Ride Request Form */}
        <div className="border-2 border-gray-300 p-5 rounded-xl w-full max-w-lg mx-auto lg:mx-0">
          <h1 className="text-2xl font-semibold">Get a ride</h1>

          <div className="flex items-center gap-3 p-4 mt-4 bg-gray-200 rounded-lg">
            <FaDotCircle className="text-xl" />
            <input
              type="text"
              placeholder="Pickup location"
              className="outline-none bg-transparent w-full"
            />
          </div>

          <div className="flex items-center gap-3 p-4 mt-4 bg-gray-200 rounded-lg">
            <FaDotCircle className="text-xl" />
            <input
              type="text"
              placeholder="Dropoff location"
              className="outline-none bg-transparent w-full"
            />
            <IoAddCircle className="text-2xl" />
          </div>

          <div className="flex items-center gap-3 p-4 mt-4 bg-gray-200 rounded-lg">
            <FaDotCircle className="text-xl" />
            <input
              type="text"
              placeholder="Pickup now"
              className="outline-none bg-transparent w-full"
            />
          </div>

          <div className="flex items-center gap-3 p-3 mt-4 bg-gray-200 rounded-full w-36">
            <FaUser className="text-xl" />
            <button>For me</button>
          </div>

          <button className="w-full bg-gray-100 rounded-xl p-3 mt-5 text-lg font-bold text-gray-500 hover:bg-gray-200">
            Search
          </button>
        </div>

        {/* Google Map */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-auto lg:min-w-[600px] xl:min-w-[700px]">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_API_KEY">
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

export default RequestRide;
