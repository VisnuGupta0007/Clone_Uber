import React from 'react'
import { Link } from "react-router";
import { CiGlobe } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { BsBoxSeamFill } from "react-icons/bs";
import { ImSpoonKnife } from "react-icons/im";
import { FaChampagneGlasses } from "react-icons/fa6";
import { TbScooter } from "react-icons/tb";
import { IoBagSharp } from "react-icons/io5";
import { FaTruckFront } from "react-icons/fa6";

import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Help() {
  return (
    <>
      <section className='navbar'>
        <section className="first">
          <div className="flex flex-col lg:flex-row justify-between px-6 sm:px-10 py-5 bg-black text-white font-semibold gap-4">
            {/* Left Side */}
            <div className="flex flex-wrap gap-3 items-center">
              <h1 className="text-3xl font-normal cursor-pointer"><Link to='/'>Uber</Link></h1>
            </div>

            {/* Right Side */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer text-lg">
                <span className="-rotate-45 font-bold text-xl"><CiGlobe /></span>
                <span>EN</span>
              </div>

              <ul className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer">
                <span className='font-bold text-xl'><LuUser /></span>
                <Link to='/login'>Log in</Link>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <div className='flex flex-col sm:flex-row items-center px-6 sm:px-20 mt-8 gap-4 relative'>
        <h1 className='text-2xl font-semibold'>Help</h1>
        <div className="hidden sm:block sm:absolute sm:left-[100px] sm:top-1/2 sm:h-14 sm:w-[2px] bg-gray-400"></div>
      </div>

      {/* HeroSection */}
      <section className='mt-7 px-6 sm:px-20'>
        <div id='Help-Hero'>
          <div className="flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mt-10">Welcome to Uber Support</h1>
            <p className="text-lg mt-4">
              We’re here to help. Looking for customer service contact information? Explore support
              resources for the relevant products below to find the best way to reach out about your issue.
            </p>
          </div>

          {/* Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 mt-10 p-4 sm:p-10 bg-gray-50 rounded-lg'>
            {[{
              icon: <FaCar />,
              label: 'Riders'
            }, {
              icon: <BsBoxSeamFill />,
              label: 'Driving & Delivering'
            }, {
              icon: <ImSpoonKnife />,
              label: 'Uber Eats'
            }, {
              icon: <FaChampagneGlasses />,
              label: 'Merchants & Restaurants'
            }, {
              icon: <TbScooter />,
              label: 'Bikes & Scooters'
            }, {
              icon: <IoBagSharp />,
              label: 'Uber for Business'
            }, {
              icon: <FaTruckFront />,
              label: 'Freight'
            }].map(({icon, label}, idx) => (
              <div key={idx} className='bg-white p-8 flex flex-col justify-center items-center rounded-lg shadow-md hover:shadow-lg transition'>
                <div className='text-5xl text-black'>{icon}</div>
                <h1 className='text-xl font-semibold mt-4 text-center'>{label}</h1>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="footer">
        <section className="bg-black text-white p-6 sm:p-10 mt-10">
          <h1 className="text-4xl text-center px-10">Uber</h1>
          <h2 className="capitalize text-xl text-center px-10 mt-8">Visit Help Center</h2>

          {/* Social Links and Location */}
          <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-20 mt-5 gap-6 sm:gap-0">
            <div className="flex gap-6 text-xl">
              <a href="https://www.facebook.com/uber" className="p-4 hover:bg-gray-900 hover:rounded-xl"><FaFacebookSquare /></a>
              <a href="https://x.com/uber" className="p-4 hover:bg-gray-900 hover:rounded-xl"><FaXTwitter /></a>
              <a href="https://www.youtube.com/channel/UCgnxoUwDmmyzeigmmcf0hZA" className="p-4 hover:bg-gray-900 hover:rounded-xl"><FaYoutube /></a>
              <a href="https://www.linkedin.com/company/uber-com/" className="p-4 hover:bg-gray-900 hover:rounded-xl"><FaLinkedin /></a>
              <a href="https://www.instagram.com/uber/" className="p-4 hover:bg-gray-900 hover:rounded-xl"><FaInstagram /></a>
            </div>

            <div className="flex gap-6 mt-6 sm:mt-0">
              <div className="flex text-lg items-center gap-2 px-4 py-3 rounded-full hover:bg-neutral-800 cursor-pointer">
                <span className="-rotate-45 font-bold text-xl"><CiGlobe /></span>
                <span>English</span>
              </div>
              <div className="flex text-lg items-center gap-2 px-4 py-3 rounded-full hover:bg-neutral-800 cursor-pointer">
                <span className="font-bold text-xl"><FaLocationDot /></span>
                <span>Delhi</span>
              </div>
            </div>
          </div>

          {/* App Store & Google Play Links */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center px-6 sm:px-20 mt-10">
            <a href="https://play.google.com/store/apps/details?id=com.ubercab" className="w-32 sm:w-40 mx-auto sm:mx-0">
              <img
                src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
                alt="Google Play"
                className="w-full"
              />
            </a>

            <a href="https://apps.apple.com/us/app/uber-request-a-ride/id368677368" className="w-32 sm:w-40 mx-auto sm:mx-0">
              <img
                src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
                alt="App Store"
                className="w-full"
              />
            </a>
          </div>
        </section>
      </section>
    </>
  )
}

export default Help
