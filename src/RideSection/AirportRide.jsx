import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router";
import { FaCircleDot } from "react-icons/fa6";
import { CgShapeSquare } from "react-icons/cg";
import { FaLocationArrow } from "react-icons/fa";

// Footer

import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function AirportRide() {
  return (
    <>
      {/* NavBar */}
      <section className="nav">
        <section className="first">
          <div className="flex flex-col lg:flex-row justify-between px-6 sm:px-10 py-5 bg-black text-white font-semibold gap-4">

            {/* Left Side */}
            <div className="flex flex-wrap gap-3 items-center">
              <h1 className="text-3xl font-normal cursor-pointer"><Link to='/'>Uber</Link> </h1>
              <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/ride'>Ride</Link> </ul>
              <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/drive'>Drive</Link> </ul>
              <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/business'>Business</Link> </ul>
              <select className="px-3 py-2 rounded-full bg-black text-white text-sm appearance-none hover:bg-neutral-800 cursor-pointer">
                <option>About</option>
                <option>About us</option>
                <option>Our offerings</option>
                <option>How Uber works</option>
                <option>Sustainability</option>
                <option>Explore</option>
                <option>Newsroom</option>
                <option>Investor relations</option>
                <option>Autonomous</option>
                <option>Blog</option>
                <option>Careers</option>
              </select>


            </div>

            {/* Right Side */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer text-lg">
                <span className="-rotate-45 font-bold text-xl">
                  <CiGlobe />
                </span>
                <span>EN</span>
              </div>
              <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/help'>Help</Link> </ul>
              <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/signup'>Sign up</Link> </ul>
              <ul className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 cursor-pointer"><Link to='/login'>Log in</Link> </ul>
            </div>
          </div>
        </section>


      </section>


      {/* HeroSections */}
      <section className="first bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-12">

          <div className="w-full lg:w-1/2 lg:ml-20">
            <h1 className="text-6xl font-semibold mb-4 w-[500px]">
              Airport rides are better with Uber
            </h1>

            <p className="text-xl mb-6 w-[500px] ">
              Request a ride to over 700 airports around the world. In most regions, you’ll also have the option to schedule an airport pickup or dropoff in advance.
            </p>


            <div className="relative">

              <div className="flex w-[500px] items-center bg-gray-200 rounded-xl px-2">
                <ul className="ml-2.5 "><FaCircleDot /></ul>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="flex-1 p-4 rounded-2xl bg-gray-200 mt-2 outline-0 w-full"
                />
                <ul className="ml-4  mr-5"><FaLocationArrow /></ul>
              </div>


              <div className="absolute left-[24px] top-[43px] h-[65px] w-[2px] bg-black hidden sm:block"></div>

              <div className="flex items-center w-[500px] bg-gray-200 rounded-xl px-2 mt-5">
                <ul className="text-lg mt-2 ml-2.5"><CgShapeSquare /></ul>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="flex-1 p-4 rounded-2xl bg-gray-200 mt-2 outline-0 w-full"
                />
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 w-full sm:w-auto">
                See prices
              </button>
              <button className="border border-black px-6 py-3 rounded-xl hover:bg-gray-100 w-full sm:w-auto">
                Schedule for later
              </button>
            </div>
          </div>


          <div className="mt-10 lg:mt-0 lg:mr-14 w-full lg:w-auto flex justify-center">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_603,w_1072/v1727481324/assets/e6/4763d8-dc3f-480f-bc0d-9b831babbdfc/original/Hero12_AwarenessDiscovery_TravelHero_DesktopWebSurface_1920x1280.png"
              alt="Ride Illustration"
              className="w-[300px] sm:w-[400px] lg:w-[550px] h-auto"
            />
          </div>
        </div>
      </section>

      <section className=' mt-20'>
        <h1 className=' text-4xl font-semibold px-32'>Reserve your airport ride in advance</h1>
        <p className=' text-lg mt-10 px-32'>
          Take the stress out of getting to or from the airport by scheduling a ride up to 90 days ahead of time.
        </p>

        <div className=' grid grid-cols-3 px-32 mt-10 gap-16'>
          <div>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_536,w_536/v1719582698/assets/51/c17bec-b3cc-4bfe-9d77-9f7d735c7bee/original/Hero02_GR_Ring%28SM%29_420x420.png"
              alt="" />

            <h2 className=' text-xl font-semibold mt-3.5'>Plan your ride to the airport</h2>
            <p className=' text-xl mt-3.5'>
              Priority matching through Uber Reserve helps you get the ride you need when you need it.*
            </p>

          </div>

          <div>
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_552,w_552/v1719582800/assets/53/0e23f0-10ce-45c1-9143-717e0480c52d/original/05_Premium-Pickup-At-Airport-Leg-2-or-4-of-Trip-_Email_1080x1080_Blue.svg"
              alt="" />

            <h2 className=' text-xl font-semibold mt-3.5'>Have a ride waiting for you when you land**</h2>
            <p className=' text-xl mt-3.5'>
              Our flight-tracking technology will let your driver know if your flight is delayed (or early) so they can adjust their pickup time accordingly.
            </p>

          </div>

          <div>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_536,w_536/v1719582892/assets/58/63af3f-3069-4e21-8134-2780dd8efd08/original/Planning_RingS-M.png"
              alt="" />

            <h2 className=' text-xl font-semibold mt-3.5'>Book ahead of time with flexible cancellation</h2>
            <p className=' text-xl mt-3.5'>
              Lock in your price when you reserve your ride. If your plans change, cancel for free up to one hour before your scheduled pickup time.
            </p>

          </div>


        </div>
      </section>

      {/* Footer */}
       <section className="footer">
                <section className="bg-black text-white p-6 sm:p-10 mt-10">
                    <h1 className="text-4xl text-center px-10">Uber</h1>
                    <h2 className="capitalize text-xl text-center px-10 mt-8">Visit Help Center</h2>

                    {/* Social Links and Location */}
                    <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-20 mt-5">
                        <div className="flex gap-6 text-xl">
                            <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                                <a href="https://www.facebook.com/uber?uclick_id=ae27f511-d37f-420c-8c1c-9ff0a1d63bc0"><FaFacebookSquare /></a>
                            </ul>

                            <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                                <a href="https://x.com/uber?uclick_id=ae27f511-d37f-420c-8c1c-9ff0a1d63bc0"> <FaXTwitter /> </a>
                            </ul>

                            <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                                <a href="https://www.youtube.com/channel/UCgnxoUwDmmyzeigmmcf0hZA">   <FaYoutube /> </a>
                            </ul>

                            <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                                <a href="https://www.linkedin.com/company/uber-com/">  <FaLinkedin /> </a>
                            </ul>

                            <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                                <a href="https://www.instagram.com/uber/?uclick_id=ae27f511-d37f-420c-8c1c-9ff0a1d63bc0"> <FaInstagram /> </a>
                            </ul>
                        </div>

                        <div className="flex gap-6 mt-6 sm:mt-0">
                            <div className="flex text-lg items-center gap-2 px-4 py-3 rounded-full hover:bg-neutral-800 cursor-pointer">
                                <span className="-rotate-45 font-bold text-xl">
                                    <CiGlobe />
                                </span>
                                <span>English</span>
                            </div>
                            <div className="flex text-lg items-center gap-2 px-4 py-3 rounded-full hover:bg-neutral-800 cursor-pointer">
                                <span className="font-bold text-xl">
                                    <FaLocationDot />
                                </span>
                                <span>Delhi</span>
                            </div>
                        </div>
                    </div>

                    {/* App Store & Google Play Links */}
                    <div className="flex gap-5 justify-center px-6 sm:px-20 mt-10">
                        <a href="https://play.google.com/store/apps/details?gl=US&hl=en_US&id=com.ubercab&referrer=singular_click_id%3Dd73e8b46-e928-46c7-b7a7-a79b4849093b">
                            <img
                                src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
                                alt="Google Play"
                                className="w-32 sm:w-40"
                            />
                        </a>

                        <a href="https://apps.apple.com/us/app/uber-request-a-ride/id368677368?referrer=singular_click_id%3D66e1d411-8835-4234-8cea-71854c235f7d">
                            <img
                                src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
                                alt="App Store"
                                className="w-32 sm:w-40"
                            />
                        </a>

                    </div>
                </section>
            </section>

    </>
  )
}

export default AirportRide