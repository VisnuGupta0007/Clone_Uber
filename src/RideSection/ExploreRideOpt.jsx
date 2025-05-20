import React from 'react'
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router";

// HeroSection
import { FaCircleDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { CgShapeSquare } from "react-icons/cg";

// Footer
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function ExploreRideOpt() {
  return (
    <>
      {/* NavBar */}

      <section className="first">
        <div className="flex flex-col lg:flex-row justify-between px-6 sm:px-10 py-5 bg-black text-white font-semibold gap-4">

          {/* Left Side */}
          <div className="flex flex-wrap gap-3 items-center">
            <h1 className="text-3xl font-normal cursor-pointer"><Link to='/'>Uber</Link> </h1>
            <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/ride'>Ride</Link> </ul>
            <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/drive'>Drive</Link> </ul>
            <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer"><Link to='/business'>Business</Link> </ul>
            <select className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer bg-black border-none">
              <option value="">About</option>
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

      <section className="second">
        <div className="flex flex-col sm:flex-row justify-between px-6 sm:px-10 py-5 gap-4">

          <div>
            <h1 className="text-2xl font-bold">Ride</h1>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 text-gray-500 text-base sm:text-lg">
            <ul className="hover:text-black cursor-pointer"><Link to='/RequestRide'> Request a ride</Link></ul>
            <ul className="hover:text-black cursor-pointer"><Link to='/ReserveRide'>Reserve a ride</Link> </ul>
            <ul className="hover:text-black cursor-pointer"><Link to='/SeePrices'>See prices</Link> </ul>
            <ul className="hover:text-black cursor-pointer"><Link to='/ExploreRideOpt'>Explore ride options</Link> </ul>
            <ul className="hover:text-black cursor-pointer"><Link to='/AirportRide'> Airport rides</Link></ul>
          </div>
        </div>
      </section>

      {/* HeroSections */}
      <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12">
        {/* Left Text Section */}
        <div className="lg:ml-20 w-full lg:w-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 p-2 w-full lg:w-[500px]">
            Go with Uber
          </h1>

          <p className="text-base sm:text-lg p-2 w-full lg:w-[500px]">
            Find a ride for every road with access in more than 10,000 cities worldwide.
          </p>
          <p className="text-base sm:text-lg p-2 w-full lg:w-[500px]">
            Because the best adventures come to you.
          </p>

          {/* Input Section */}
          <div className="relative mt-4">
            <div className="flex items-center bg-gray-200 rounded-xl px-2">
              <ul className="ml-2.5"><FaCircleDot /></ul>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full sm:w-96 p-4 rounded-2xl bg-gray-200 mt-2 outline-0"
              />
              <ul className="text-lg ml-10"><FaLocationArrow /></ul>
            </div>

            <div className="absolute left-6 top-[43px] h-[65px] w-[2px] bg-black hidden sm:block"></div>

            <div className="flex items-center bg-gray-200 rounded-xl px-2 mt-5">
              <ul className="text-lg mt-2 ml-2.5"><CgShapeSquare /></ul>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full sm:w-96 p-4 rounded-2xl bg-gray-200 mt-2 outline-0"
              />
            </div>
          </div>

          {/* Buttons and Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-7 mt-3.5 pt-2">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 w-full sm:w-auto text-center">
              See prices
            </button>
            <p className="text-xl">
              <a
                href="https://www.uber.com/global/en/ride/app/?referrer=singular_click_id%3Dad62b5ad-c873-4fe4-a5cd-9dd1fe3cca30"
                className="underline underline-offset-6 hover:text-gray-600"
              >
                Download the Uber app
              </a>
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-auto flex justify-center lg:mr-14 mt-8 lg:mt-0">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1072,w_1072/v1631136074/assets/1d/837fde-e40e-4a8d-81c4-1b43776d0395/original/ride-options-hero.png"
            alt="Uber ride options"
            className="w-full max-w-[600px] h-auto"
          />
        </div>
      </div>


      {/* Suggetions */}

      <div className="py-10 bg-white">
        <h1 className="text-4xl font-bold mb-10 px-4 lg:px-20">Suggestion</h1>
        <div className="px-4 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">

            {/* Card-1 */}
            <div className="flex flex-col md:flex-row bg-neutral-100 rounded-xl shadow-md overflow-hidden w-full h-full">
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Courier</h2>
                  <p className="text-gray-600 mb-4">
                    Uber makes same-day item delivery easier than ever.
                  </p>
                </div>
                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200 transition w-fit">
                    <Link to='/RideSection/Courier'>Details</Link> 
                </button>
              </div>
              <img
                src="https://cn-geo1.uber.com/static/mobile-content/Courier.png"
                alt="Courier"
                className=" h-32 w-32  self-center"
              />
            </div>

            {/* Card-2 */}
            <div className="flex flex-col md:flex-row bg-neutral-100 rounded-xl shadow-md overflow-hidden w-full h-full">
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Intercity</h2>
                  <p className="text-gray-600 mb-4">
                    Get convenient, affordable outstation cabs anytime at your door.
                  </p>
                </div>
                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200 transition w-fit">
                    <Link to='/RideSection/Ride'>Details</Link> 
                </button>
              </div>
              <img
                src="https://mobile-content.uber.com/launch-experience/intercity.png"
                alt="Intercity"
                className=" h-32 w-32  self-center"
              />
            </div>

            {/* Card-3 */}
            <div className="flex flex-col md:flex-row bg-neutral-100 rounded-xl shadow-md overflow-hidden w-full h-full">
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Rentals</h2>
                  <p className="text-gray-600 mb-4">
                    Request a trip for a block of time and make multiple stops.
                  </p>
                </div>
                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200 transition w-fit">
                    <Link to='/RideSection/Rentals'>Details</Link> 
                </button>
              </div>
              <img
                src="https://mobile-content.uber.com/launch-experience/Hourly2021.png"
                alt="Rentals"
                className=" h-32 w-32  self-center"
              />
            </div>

            {/* Card-4 */}
            <div className="flex flex-col md:flex-row bg-neutral-100 rounded-xl shadow-md overflow-hidden w-full h-full">
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Reserve</h2>
                  <p className="text-gray-600 mb-4">
                    Reserve your ride in advance so you can relax on the day of your trip.
                  </p>
                </div>
                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200 transition w-fit">
                 <Link to='/RideSection/Ride'>Details</Link> 
                </button>
              </div>
              <img
                src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
                alt="Reserve"
                className=" h-32 w-32  self-center"
              />
            </div>

           

          </div>
        </div>
      </div>

      {/* Uber Shuttle */}
      <div className="flex flex-col lg:flex-row px-6 sm:px-12 lg:px-32 py-10 sm:py-16 lg:py-20 gap-10 lg:gap-20 items-center">
        <div className="w-full lg:w-[700px] mt-4 lg:mt-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Commute in Comfort with Uber Shuttle
          </h1>
          <p className="text-base sm:text-lg text-gray-800 mt-6 sm:mt-10 leading-relaxed">
            Uber Shuttle is a new way to enjoy a comfortable, safe, and convenient commute in Delhi. There’s no need to wait to hail down and squeeze onto a crowded bus, spend hours in the metro or drive in peak traffic.
          </p>
        </div>

        <div className="w-full max-w-lg sm:max-w-xl lg:max-w-none">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_715,w_1072/v1685144200/assets/98/b5dfcc-edfc-4515-9643-5e4ba0143f64/original/uber-shuttle-delhi.png"
            alt="Uber Shuttle in Delhi"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Explore with Uber */}
      <div className="px-6 sm:px-12 lg:px-24 py-10 sm:py-14 lg:py-20 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-700">
          Explore the globe with Uber
        </h1>

        {/* Part-1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 sm:mt-14">
          <div>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_357,w_536/v1630533096/assets/76/adedf3-6c48-4a3c-89cd-cc33a209a706/original/explore-left.png"
              alt="Ride with Uber"
              className="w-full h-auto object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-5">Ride with Uber in 10,000+ cities</h2>
            <p className="text-lg text-gray-600 mt-2.5 leading-relaxed">
              Travel around cities worldwide, with access to rides almost everywhere.
            </p>
          </div>

          <div>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_357,w_536/v1630533248/assets/a4/7c98e3-19c8-4d27-a0a3-ad0a3dde2886/original/explore-right.png"
              alt="Airport rides"
              className="w-full h-auto object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-5">Get a ride at 700+ airports</h2>
            <p className="text-lg text-gray-600 mt-2.5 leading-relaxed">
              The world is ready for your arrival. Start your travels with a ride to the airport. In most regions you’ll also have the option to schedule an airport pickup or dropoff in advance.
            </p>
          </div>
        </div>

        {/* Part-2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 sm:mt-14">
          <div>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_336,w_598/v1630545468/assets/f3/921166-0b84-4800-8d6f-92decc6ca092/original/go-green-image.png"
              alt="Go green"
              className="w-full h-auto object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-5">Go green</h2>
            <p className="text-lg text-gray-600 mt-2.5 leading-relaxed">
              Move toward a greener future with eco-friendly ride options. It’s the perfect way to be a more conscious traveler.
            </p>
          </div>

          <div>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_336,w_598/v1630545915/assets/86/16c006-e642-43b5-9c08-8312517b1e83/original/safety-image.png"
              alt="Safety standards"
              className="w-full h-auto object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-5">Our Door-to-Door Safety Standard</h2>
            <p className="text-lg text-gray-600 mt-2.5 leading-relaxed">
              We’ve introduced new policies and features to help keep everyone safe, including a mandatory mask policy and free disinfectant supplies for drivers.
            </p>
          </div>

          <div>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_336,w_598/v1630546204/assets/80/315da2-7c25-4eaa-881d-b6ed42823802/original/uberpass-image.png"
              alt="Uber One"
              className="w-full h-auto object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-5">Go further, get more with Uber One</h2>
            <p className="text-lg text-gray-600 mt-2.5 leading-relaxed">
              See and do it all with one membership that lets you save on all your rides and eats.
            </p>
          </div>
        </div>
      </div>


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

export default ExploreRideOpt