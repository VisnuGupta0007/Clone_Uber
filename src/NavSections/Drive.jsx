import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
// Footer
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

function Drive() {
  return (
    <>

      {/* Navbar */}
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

      {/* Drive */}
      <div className='px-6 sm:px-10 py-5 gap-4"'>
        <h1 className=' text-2xl font-bold'>Drive</h1>
      </div>

      {/* Drive Section */}
      <div className="flex flex-col md:flex-row justify-around p-12 gap-8 items-center h-fit bg-black text-white">
        <div className="bg-center text-center md:text-left">
          <h1 className="text-7xl font-bold leading-tight mb5">
            Drive when you <br />
            want, make what <br />
            you need
          </h1>
          <p className=' mt-10'>Earn on your own schedule.</p>
          <div className="mt-5 flex flex-col md:flex-row items-center gap-5">
            <button className="p-4 border rounded-2xl bg-white text-black hover:bg-gray-400">
              Get Started
            </button>
            <button className="p-4 rounded-2xl underline">
              Already have an account? Sign in
            </button>
          </div>
        </div>

        <div className="transform -translate-y-6">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_800,w_800/v1656511866/assets/67/3b671f-4ccd-484a-ad97-cded31823ed0/original/illustration-safety-01-1.png"
            alt="Uber driver illustration"
            className=" w-[600px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Why Drive Section */}
      <div className="py5 px-4 mt-10">
        <h1 className="text-3xl font-bold mb-6 text-left ml-20 mt-10">
          Why drive with us
        </h1>

        <div className="flex justify-center items-center">
          <img
            src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_311,w_552/v1536163548/assets/d8/b61431-a847-461d-8c89-b260757259bd/original/whyDriveWithUs_tablet.svg"
            alt="Why drive with us"
            className="w-full max-w-[1000px] h-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-around mt-10 text-center md:text-left gap-6 md:gap-0">
          <div>
            <p className="font-bold p-2">Set your own hours</p>
            <p className="mt-2">You decide when and how often you drive.</p>
          </div>
          <div>
            <p className="font-bold p-2">Get paid fast</p>
            <p className="mt-2">Weekly payments in your bank account.</p>
          </div>
          <div>
            <p className="font-bold p-2">Get support at every turn</p>
            <p className="mt-2">
              If there’s anything that you need, you can reach us anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Partner Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-10 gap-y-8 p-6 mt-20">
        <div className="text-center md:text-left">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_243,w_431/v1535744030/assets/7e/4c2f7e-da89-4c1e-a8cf-1b56172c6e5b/original/D_Fleet2x.png"
            alt="Join a fleet"
            className="w-[300px] md:w-[600px]"
          />
          <p className="font-bold p-2 mt-2">Join a fleet</p>
          <p className="mt-2">
            Find and join a fleet partner and start driving for them using{" "}
            <br />
            the Uber app.
          </p>
        </div>
        <div className="text-center md:text-left">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_243,w_431/v1535753709/assets/ec/8183dc-ffee-468a-9ee8-175bd1fb1f55/original/D_Fleet_22x.png"
            alt="Become a fleet partner"
            className="w-[300px] md:w-[600px]"
          />
          <p className="font-bold p-2 mt-2">Become a fleet partner</p>
          <p className="mt-2">
            Start making money. Connect your drivers and upload the <br />
            required documents to your profile.
          </p>
        </div>
      </div>

      {/* Safety On the road */}

      <div className="py-10 px-6 ml-20">
        <div className="ml-10">
          <h1 className="text-3xl font-bold mb-4">Safety on the road</h1>
          <p className="mb-8">
            Your safety drives us to continuously raise the bar.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-around gap-6">
          <div className="max-w-sm">
            <p className="font-bold ">Protection on every trip</p>
            <p >
              Each trip you take with the Uber app is insured to protect <br />
              you and your rider.
            </p>
          </div>
          <div className="max-w-sm">
            <p className="font-bold ">Help if you need it</p>
            <p>
              The Emergency Button calls 911. The app <br />
              displays your trip details so you can quickly <br />
              share them with authorities.
            </p>
          </div>
          <div className="max-w-sm">
            <p className="font-bold ">Community Guidelines</p>
            <p>
              Our standards help to create safe connections <br />
              and positive interactions with everyone. Learn <br />
              how our guidelines apply to you.
            </p>
          </div>
        </div>
      </div>

      {/* Driver App */}

      <div className="relative h-[500px] w-full ">
        <img
          src="https://i.pinimg.com/736x/1e/10/e3/1e10e3a68c2f4359eedabed505118bca.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* ✅ Text on top */}
        <div className="relative z-10 flex flex-col justify-center h-full ml-20 text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg">Your journey begins here.</p>
        </div>
      </div>

      {/* Download Driver App */}

      <div className="w-full h-auto sm:h-[500px] p-5 bg-gray-200">
        <div className="mt-10 px-4 sm:px-0 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
            Drive your way in the app
          </h1>
        </div>

        {/* Download Link */}
        <a href="https://www.uber.com/global/en/ride/app/?referrer=singular_click_id%3D2a45e106-683e-4a70-bff0-26d48b1abe24">
          <div className="group flex flex-col sm:flex-row items-center gap-5 mt-10 sm:mt-20 px-4 sm:px-0  mx-auto bg-white w-full sm:w-auto max-w-[550px] p-5 shadow transition-all duration-300 hover:shadow-md rounded-lg">
            <img
              src="https://imgs.search.brave.com/jtqZTZYQoWNACF-n_T9sWzCpUzW_PdbfiuGnD4M3y7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWJlci1hc3NldHMu/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV9hdXRvOmVjbyxj/X2ZpbGwsaF8zNjgs/d181NTIvdjE3MTgx/MjQ0OTMvYXNzZXRz/L2U1LzI3YmFhYy1j/NzliLTQ0ZGEtOTk4/Ny1iNTc2NGUyNzc3/MDEvb3JpZ2luYWwv/UVItRG93bmxvYWQt/RHJpdmVyLUFwcC0z/LTItKDEpLnBuZw"
              alt="qr-code"
              className="w-48 h-48 sm:w-40 sm:h-40 object-contain"
            />

            <div className="flex flex-col ml-0 sm:ml-10 text-center sm:text-left">
              <p className="text-lg font-semibold">Download the Driver app</p>
              <p className="text-gray-600">Scan to download</p>
            </div>

            <div className="text-4xl mt-4 sm:mt-0 sm:ml-5 sm:text-3xl transform transition-transform duration-300 group-hover:translate-x-2">
              <FaArrowRight />
            </div>
          </div>
        </a>
      </div>



      {/* Sign Up to Drive */}
      <div>
        <div className="flex ml-30 mt-10 shadow transition-all duration-300 hover:shadow-md items-center">
          <div>
            <p className="text-4xl font-bold p-4"><Link to='/signup'>Sign up to drive</Link> </p>


          </div>
          <div className="text-4xl ml-5 sm:text-3xl transform transition-transform duration-300 hover:translate-x-2 cursor-pointer">
            <FaArrowRight className="text-4xl" />
          </div>
        </div>
        <hr className="border-black border-t-2 mt-2 w-[400px] ml-24" />


        <div className="ml-30 mt-30">
          <p>
            This is a promotional offer and is not a promise or guarantee of
            future earnings. This offer is available only to new drivers and
            delivery people on the Uber app who (i) have never <br /> previously
            signed up to drive or deliver with Uber; (ii) receive this offer
            directly from Uber and see it in the guarantee tracker of the Uber
            Driver app; (iii) are cleared to drive or deliver <br /> with Uber;
            and (iv) complete the number of trips or deliveries displayed in the
            guarantee tracker in the city where they signed up to drive within
            the specified timeframe. Offer <br /> terms such as number of trips
            or deliveries and reward amount may vary by location. The guarantee
            offer that you see in the app replaces any guarantee amounts Uber
            previously <br /> offered you.
          </p>
          <p className="mt-5">
            Earnings from your trips (after services fees and certain charges
            are deducted, such as city or local government charges) are included
            toward your guaranteed amount; any tips <br /> and promotions you
            make are on top of that amount. Earnings from your deliveries (after
            services fees and certain charges are deducted, such as city or
            local government charges) <br /> and Eats Boost promotions are
            included toward your offer amount; any tips and additional
            promotions you make are on top of that amount.
          </p>
          <p className="mt-5">
            Any payment due will be automatically added to your account after
            you complete the required trips. Each completed trip or delivery
            counts as one trip or delivery toward your <br /> minimum
            requirement. Canceled trips or deliveries do not count. This offer
            is only valid for those who received it from Uber (via an email, an
            ad, a web page, or a unique referral link) <br />
            and meet the eligibility requirements. Uber reserves the right to
            withhold or deduct payments that it determines or believes were
            fraudulent, illegal, in error, or in violation of the <br /> driver
            terms or these terms. Limited time only. Offer and terms are subject
            to change.
          </p>
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

export default Drive

