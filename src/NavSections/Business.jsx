import React from 'react'

import { Link } from "react-router";

// Footer
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

function Business() {
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

      {/* The best of Uber for your business */}

      <div className="flex justify-around bg-black text-white p-2">
        <div className="ml-20 mt-30 p-4">
          <p className="text-4xl font-bold ">
            The best of Uber <br />
            for your business
          </p>
          <p className="mt-10 ">
            Uber for Business gives your organization more control, <br />
            deeper insights, and features built for enterprise users. <br />{" "}
            Manage and track business travel, meal programs, and more <br /> on
            one dashboard.
          </p>
          <div className="flex justify-around mt-5 mr-25 gap-5">
            <p className="mt-5">How to get started</p>
            <p className="mt-5 underline">Check out our solutions</p>
          </div>
        </div>
        <div className="mr-20">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_2144,w_2144/v1685006943/assets/07/61a159-ae6b-4821-bcb4-83aaf8c4bdf6/original/220428_UBER_CDMX_M-DT1-A_001035_VS_R2.jpg"
            alt="uber for business"
            width={600}
            height={500}
          />
        </div>
      </div>
      <div className="bg-black text-white">
        <p className="text-3xl font-bold ml-40">
          A global platform built on the world’s largest <br /> mobility network
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 ml-30">
          {/* Card 1 */}
          <div className=" shadow-lg rounded-xl p-6 ">
            <h2 className="text-xl font-semibold mb-4">
              Achieve up to 10% cost savings through strengthened compliance
            </h2>
            <p className="text-white">
              Customers have praised the reduction in travel and meal expenses.¹
              It is possible to manage expenditures and usage, and operate under
              the established usage rules. For corporate use, there are no fees
              or monthly fixed costs.
            </p>
          </div>

          {/* Card 2 */}
          <div className=" shadow-lg rounded-xl p-6  ">
            <h2 className="text-xl font-semibold mb-4">
              Meet sustainability goals with actionable insights
            </h2>
            <p className="text-white">
              Track CO₂ emissions for every ride on a dashboard exclusive to
              Uber for Business. These insights can help you take action and
              leverage sustainable travel options like Uber Green.²
            </p>
          </div>

          {/* Card 3 */}
          <div className=" shadow-lg rounded-xl p-6  ">
            <h2 className="text-xl font-semibold mb-4">
              Provide benefits to employees as well
            </h2>
            <p className="text-white">
              Offer simplified expense reimbursement and support from a
              dedicated corporate customer team to both administrators and
              employees. In select cities, employees can enjoy a more premium
              ride experience with options like Uber Premium and Business
              Comfort.
            </p>
          </div>

          {/* Card 4 */}
          <div className=" shadow-lg rounded-xl p-6 ">
            <h2 className="text-xl font-semibold mb-4">
              Prioritize safety and security for your business
            </h2>
            <p className="text-white">
              We offer additional crash-alert notifications for business users.
              Our latest US Safety Report shows that 99.9% of Uber trips are
              completed without any reported safety incidents.
            </p>
          </div>
        </div>
      </div>

      {/* companies leverage Uber */}

      <div>
        <p className="text-3xl font-bold mt-15 ml-30">
          How companies leverage Uber for Business
        </p>
        <div className="flex justify-around items-center p-4 mt-15">
          <div>
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_250,w_444/v1679435963/assets/a6/c383fd-e0a2-4534-9651-40aa6f143f93/original/ilo-business_travel-360x204-expandable.svg"
              alt=""
              className="transition-transform duration-300 hover:scale-105"
            />
            <p className="ml-10 text-2xl font-bold">Business travel</p>
          </div>
          <div>
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_250,w_444/v1679436006/assets/bd/b27aa4-3019-479f-9b41-c9bbc5187d33/original/ilo-courtesy_rides-360x204-expandable.svg"
              alt=""
              className="transition-transform duration-300 hover:scale-105"
            />
            <p className="ml-10 text-2xl font-bold">Courtesy rides</p>
          </div>
          <div>
            <img
              src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_250,w_444/v1679436116/assets/d9/ca79d1-d191-442b-8a19-df7cc125a59c/original/ilo-meal_programs-360x204-expandable.svg"
              alt=""
              className="transition-transform duration-300 hover:scale-105"
            />
            <p className="ml-10 text-2xl font-bold">Meal programs</p>
          </div>
        </div>
      </div>

      {/* No Upfront Cost */}
      <div className="mt-16 px-4 md:px-16">
        <div className="text-3xl font-bold mb-10 text-center md:text-left">
          <p>Get started with no upfront costs</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Side - Images */}
          <div className="flex flex-row md:flex-col gap-4 md:gap-6 w-full md:w-1/2 justify-center md:justify-start p-5">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_250,w_444/v1679422653/assets/e1/ed6649-3011-4181-9dad-a241960c7c61/original/ilo-content_connected-01-360x202_2x.png"
              alt=""
              className="w-40 h-24 md:w-72 md:h-40 object-cover"
            />
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_250,w_444/v1679422708/assets/60/1f07db-0751-4b92-9399-ae4f0417219d/original/ilo-content_connected-02-360x202_2x.png"
              alt=""
              className="w-40 h-24 md:w-72 md:h-40 object-cover"
            />
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_250,w_444/v1679422783/assets/ed/5ab4b4-8d7b-41e7-92b2-1957bd1a79f4/original/ilo-content_connected-03-360x202_2x.png"
              alt=""
              className="w-40 h-24 md:w-72 md:h-40 object-cover"
            />
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block border-l-2 bg-black h-[80%] mx-4"></div>

          {/* Right Side - Text aligned to image center */}
          <div className="flex flex-col gap-6 w-full md:w-1/2 justify-center p-2 md:p-5">
            <div>
              <p className="text-xl md:text-2xl font-bold mb-2 text-center md:text-left">
                Customize your travel and meal programs
              </p>
              <p className="text-center md:text-left">
                Set your own policies, help ensure T&E compliance, and get full visibility into every ride and meal. You can easily integrate with the top expensing partners for seamless expensing without paying a service fee.
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold mb-2 text-center md:text-left">
                Onboard people at your own pace
              </p>
              <p className="text-center md:text-left">
                Add individuals, specific teams, or your entire organization at once. After your employees are invited, they can add a business profile for work-related rides and meals to their existing Uber account that they know and trust for business rides and meals.
              </p>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-bold mt-10 mb-2 text-center md:text-left">
                Set up amenities for customers
              </p>
              <p className="text-center md:text-left">
                Send Uber credit in the form of gift cards and vouchers for rides, meals, and more in a snap. You can even request rides for others to make their travel experience practically effortless.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Companies Working with us */}


      <div className="bg-gray-200 py-16 px-6 w-full">
        {/* Heading */}
        <div className="text-center mb-16 px-4">
          <p className="text-4xl font-bold leading-snug">
            Join over 200,000 companies working with us,
            <br />
            including more than half of the Fortune 500
          </p>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center items-center gap-10 mb-20 px-4">
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_311,w_552/v1679423868/assets/10/662a2b-e822-41f3-82ea-bfe096f10038/original/logo-zoom-360x202_2x.png"
            alt="Zoom"
            className="w-80 h-auto"
          />
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_311,w_552/v1679423930/assets/46/7467fc-e44a-4e62-a333-decae8656e9f/original/logo-cocacola-360x202_2x.png"
            alt="Coca-Cola"
            className="w-80 h-auto"
          />
          <img
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_311,w_552/v1679423970/assets/d9/76db1c-0f43-425e-bda8-a39d19abec32/original/logo-samsung-360x202_2x.png"
            alt="Samsung"
            className="w-80 h-auto"
          />
        </div>

        {/* Testimonial & Video Centered */}
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-4">
          {/* Testimonial Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="  font-semibold mb-4 leading-relaxed">
              “Pay and basic benefits aren’t the <br /> endgame. You need to be
              actively <br />
              listening to what employees need and <br />
              want. One of our first added benefits <br /> was providing Uber
              credit for rides, so <br />
              people could safely get a ride for work <br />
              or for fun. We encourage employees <br /> to spend the credits
              however they <br /> want.”
            </p>
            <p className="text-lg  mt-2">
              <b>Ryan Carter</b>, Founder and CEO, Parachute Media
            </p>
          </div>

          {/* Video */}
          <div className="lg:w-1/2">
            <iframe
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/38D4KRyvBQY"
              title="Uber Business Testimonial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className=" shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Rating */}

      <div className="bg-[#000080] text-white w-full h-[300px] flex items-center justify-center p-10">
        <p className=" text-4xl text-center font-bold ">
          9 out of 10 customers recommend choosing <br /> Uber for Business³
        </p>
      </div>

      {/* Learn More */}


      <div className="p-6 md:p-10 mt-10 mx-4 md:mx-32">
        {/* Heading */}
        <div className="mb-6 text-center md:text-left">
          <p className="text-2xl md:text-3xl font-bold">Interested in learning more?</p>
        </div>

        {/* Images in a row on md+, column on smaller */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="flex flex-col items-center md:items-start max-w-xs">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1679425285/assets/a5/05e92b-1d22-45a0-b9d6-4242bb140ed2/original/img-resource-1-360x360_2x.png"
              alt=""
              className="w-40 h-40 object-cover"
            />
            <p className="font-semibold text-lg mt-5 text-center md:text-left">
              How to reduce the carbon footprint of <br /> business travel
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start max-w-xs">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1679425358/assets/c3/c578f7-9210-46e6-bdc2-cb38493225ba/original/img-resource-2-360x360_2x.png"
              alt=""
              className="w-40 h-40 object-cover"
            />
            <p className="font-semibold text-lg mt-5 text-center md:text-left">
              The perks and benefits your employees <br />
              want now
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start max-w-xs">
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1679425447/assets/56/fa60d9-521d-4a8e-84b1-889587b4d8ca/original/img-resource-3-360x360_2x.png"
              alt=""
              className="w-40 h-40 object-cover"
            />
            <p className="font-semibold text-lg mt-5 text-center md:text-left">
              The road to sustainability: executives <br /> discuss their efforts toward net zero
            </p>
          </div>
        </div>
      </div>


      {/* Additional Detail Bottom */}

      <div className="ml-30 mt-10 text-gray-600 mr-30 p-5">
        <div>
          <p>
            Product and feature availability may vary by market and location. To
            find out more, get started here.
          </p>
        </div>
        <div className="mt-5">
          <p>
            ¹Based on over 275 Uber for Business customers surveyed globally in
            February 2023. Customers agreed that they were able to reduce costs
            on ground transportation and/or meals through better compliance.
          </p>
        </div>
        <div className="mt-5">
          <p>
            ²Uber Green is available only in certain cities. In addition,
            availability may be limited outside of downtown areas to start.
          </p>
        </div>
        <div className="mt-5">
          <p>
            ³Based on a November 2021 survey commissioned by Uber, in which 323
            Uber for Business customers responded to the question “How likely
            are you to recommend Uber for Business to a colleague or someone in
            your professional network?”
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

export default Business






