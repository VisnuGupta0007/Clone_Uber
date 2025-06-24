// NavBar
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router";

import { FaCircleDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { CgShapeSquare } from "react-icons/cg";
import { IoIosBriefcase } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { AiFillCreditCard } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

// Footer
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Home() {
    return (
        <>

            {/* NavBar */}
            <section className="nav w-full">
                {/* Top Navigation */}
                <section className="first bg-black text-white font-semibold">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-4 sm:px-6 md:px-10 py-4 gap-4">

                        {/* Left Side */}
                        <div className="flex flex-wrap items-center gap-2 md:gap-4">
                            <h1 className="text-3xl font-normal cursor-pointer">
                                <Link to="/">Uber</Link>
                            </h1>
                            <ul className="px-3 py-2 rounded-full hover:bg-neutral-800 cursor-pointer">
                                <Link to="/ride">Ride</Link>
                            </ul>
                            <ul className="px-3 py-2 rounded-full hover:bg-neutral-800 cursor-pointer">
                                <Link to="/drive">Drive</Link>
                            </ul>
                            <ul className="px-3 py-2 rounded-full hover:bg-neutral-800 cursor-pointer">
                                <Link to="/business">Business</Link>
                            </ul>

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
                        <div className="flex flex-wrap items-center gap-2 md:gap-3">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer text-lg">
                                <span className="-rotate-45 font-bold text-xl">
                                    <CiGlobe />
                                </span>
                                <span>EN</span>
                            </div>
                            <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer">
                                <Link to="/help">Help</Link>
                            </ul>
                            <ul className="px-4 py-2 rounded-full hover:bg-neutral-800 cursor-pointer">
                                <Link to="/signup">Sign up</Link>
                            </ul>
                            <ul className="px-4 py-2 rounded-full bg-white text-black hover:bg-gray-200 cursor-pointer">
                                <Link to="/login">Log in</Link>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Bottom Navigation */}
                <section className="second border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-6 md:px-10 py-4 gap-4">

                        <div>
                            <h1 className="text-2xl font-bold">Ride</h1>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 text-gray-500 text-base sm:text-lg">
                            <ul className="hover:text-black cursor-pointer">
                                <Link to="/RequestRide">Request a ride</Link>
                            </ul>
                            <ul className="hover:text-black cursor-pointer">
                                <Link to="/ReserveRide">Reserve a ride</Link>
                            </ul>
                            <ul className="hover:text-black cursor-pointer">
                                <Link to="/SeePrices">See prices</Link>
                            </ul>
                            <ul className="hover:text-black cursor-pointer">
                                <Link to="/ExploreRideOpt">Explore ride options</Link>
                            </ul>
                            <ul className="hover:text-black cursor-pointer">
                                <Link to="/AirportRide">Airport rides</Link>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>


            {/* Ride */}
            <section className="first bg-white">
                <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-12 gap-10">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 lg:ml-10">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
                            Request a ride for <br /> now or later
                        </h1>

                        <p className="text-base sm:text-lg mb-6">
                            Add your trip details, hop in, and go.
                        </p>

                        {/* Input Fields */}
                        <div className="relative space-y-5">

                            {/* First Input */}
                            <div className="flex items-center bg-gray-200 rounded-xl px-3">
                                <span className="text-lg text-gray-700">
                                    <FaCircleDot />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    className="flex-1 p-4 rounded-2xl bg-gray-200 mt-2 outline-none w-full"
                                />
                                <span className="text-lg text-gray-700 mr-2">
                                    <FaLocationArrow />
                                </span>
                            </div>

                            {/* Vertical Line (only for larger screens) */}
                            <div className="absolute left-[22px] top-[44px] h-[60px] w-[2px] bg-black hidden sm:block"></div>

                            {/* Second Input */}
                            <div className="flex items-center bg-gray-200 rounded-xl px-3">
                                <span className="text-lg text-gray-700 mt-2">
                                    <CgShapeSquare />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    className="flex-1 p-4 rounded-2xl bg-gray-200 mt-2 outline-none w-full"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 w-full sm:w-auto">
                                <Link to="/RequestRide">See prices</Link>
                            </button>
                            <button className="border border-black px-6 py-3 rounded-full hover:bg-gray-100 w-full sm:w-auto">
                                <Link to="/RequestRide">Schedule for later</Link>
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-auto flex justify-center">
                        <img
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_2144,w_2144/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png"
                            alt="Ride Illustration"
                            className="w-[280px] sm:w-[400px] lg:w-[550px] h-auto"
                        />
                    </div>
                </div>
            </section>


            {/* Suggetion */}
            <section className="second bg-white py-10">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6 px-4 lg:px-20">Suggestion</h1>
                    <div className="px-4 lg:px-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Card 1 */}
                            <div className="flex flex-col sm:flex-row bg-neutral-100 rounded-xl overflow-hidden">
                                <div className="p-6 flex-1">
                                    <h2 className="text-xl font-semibold mb-2">Intercity</h2>
                                    <p className="text-gray-600 mb-4">
                                        Get convenient, affordable outstation cabs anytime at your door.
                                    </p>
                                    <button className="bg-white px-4 py-2 rounded-full mt-3.5 hover:bg-gray-200">
                                        <Link to='/RideSection/Ride'>Details</Link>
                                    </button>
                                </div>
                                <img
                                    src="https://cn-geo1.uber.com/static/mobile-content/Courier.png"
                                    alt="Courier"
                                    className="w-full sm:w-1/3 object-cover"
                                />
                            </div>

                            {/* Card 2 */}
                            <div className="flex flex-col sm:flex-row bg-neutral-100 rounded-xl overflow-hidden">
                                <div className="p-6 flex-1">
                                    <h2 className="text-xl font-semibold mb-2">Rentals</h2>
                                    <p className="text-gray-600 mb-4">
                                        Request a trip for a block of mind and make multiple stops.
                                    </p>
                                    <button className="bg-white px-4 py-2 rounded-full mt-3.5 hover:bg-gray-200">
                                        <Link to='/RideSection/Rentals'>Details</Link>
                                    </button>
                                </div>
                                <img
                                    src="https://mobile-content.uber.com/launch-experience/Hourly2021.png"
                                    alt="Rentals"
                                    className="w-full sm:w-1/3 object-cover"
                                />
                            </div>

                            {/* Card 3 */}
                            <div className="flex flex-col sm:flex-row bg-neutral-100 rounded-xl overflow-hidden">
                                <div className="p-6 flex-1">
                                    <h2 className="text-xl font-semibold mb-2">Reserve</h2>
                                    <p className="text-gray-600 mb-4">
                                        Reserve your ride in advance so you can relax on the day of your trip.
                                    </p>
                                    <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200">
                                        <Link to='/RideSection/Ride'>Details</Link>
                                    </button>
                                </div>
                                <img
                                    src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
                                    alt="Reserve"
                                    className="w-full sm:w-1/3 object-cover"
                                />
                            </div>

                            {/* Card 4 */}
                            <div className="flex flex-col sm:flex-row bg-neutral-100 rounded-xl overflow-hidden">
                                <div className="p-6 flex-1">
                                    <h2 className="text-xl font-semibold mb-2">Ride</h2>
                                    <p className="text-gray-600 mb-4">
                                        Go anywhere with Uber. Request a ride, hop in, and go.
                                    </p>
                                    <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200">
                                        <Link to='/RideSection/Ride'>Details</Link>
                                    </button>
                                </div>
                                <img
                                    src="https://mobile-content.uber.com/launch-experience/Hourly2021.png"
                                    alt="Ride"
                                    className="w-full sm:w-1/3 object-cover"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>




            {/* Plans */}
            <section className="third bg-white py-10">
                <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-4 sm:px-8 lg:px-24 mt-4">
                        Plans for later
                    </h1>

                    <div className="flex flex-col lg:flex-row flex-wrap justify-center items-start gap-10 px-4 sm:px-10 py-10">

                        {/* Left Side: Form */}
                        <div
                            id="plan_image"
                            className="plan-image relative rounded-3xl p-6 w-full lg:w-[60%] text-center lg:text-right flex flex-col justify-between"
                        >
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-md lg:ml-auto lg:mr-14 pt-6 text-black drop-shadow-md">
                                Get your ride right with Uber Reserve
                            </h1>

                            <p className="text-lg sm:text-xl font-semibold mt-10 lg:pr-20 text-black drop-shadow-md">
                                Choose date and time
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center lg:justify-end mt-5 gap-4 lg:pr-20">
                                <input
                                    type="date"
                                    className="bg-white border border-gray-300 px-4 py-2 rounded-md outline-none w-full sm:w-auto"
                                />
                                <input
                                    type="time"
                                    className="bg-white border border-gray-300 px-4 py-2 rounded-md outline-none w-full sm:w-auto"
                                />
                            </div>

                            <div className="flex justify-end mt-6 px-4 sm:px-10 lg:px-20">
                                <button className="bg-black text-white text-lg font-bold rounded-xl py-3.5 px-8 w-full max-w-xs hover:bg-gray-900 transition duration-200">
                                    Next
                                </button>
                            </div>
                        </div>


                        {/* Right Side: Benefits */}
                        <div className="border border-gray-200 rounded-xl p-6 w-full h-96 max-w-md bg-white">
                            <h2 className="text-xl font-bold mb-4">Benefits</h2>

                            <div className="flex items-start gap-4 mb-5">
                                <div className="text-2xl pt-1"><IoIosBriefcase /></div>
                                <p className="text-base border-b-2 border-black pb-1">
                                    Choose your exact pickup time up to 90 days in advance.
                                </p>
                            </div>

                            <div className="flex items-start gap-4 mb-5">
                                <div className="text-2xl pt-1"><LuClock3 /></div>
                                <p className="text-base border-b-2 border-black pb-1">
                                    Extra wait time included to meet your ride.
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="text-2xl pt-1"><AiFillCreditCard /></div>
                                <p className="text-base border-b-2 border-black pb-1">
                                    Cancel at no charge up to 60 minutes in advance.
                                </p>
                            </div>
                        </div>
                    </div>

                    <section className="mt-10">
                        <div className="flex flex-col lg:flex-row items-center gap-10 px-4 sm:px-10 lg:px-20">

                            <div className="w-full lg:w-1/2">
                                <img
                                    src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_621,w_1104/v1683576635/assets/f7/7aa380-a378-47bf-8b88-aaba1587efdd/original/landing-stops-group-rides.png"
                                    alt="Ride with friends"
                                    className="w-full h-auto rounded-xl object-cover"
                                />
                            </div>

                            <div className="w-full lg:w-1/2">
                                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 max-w-md">
                                    Ride with friends seamlessly
                                </h1>
                                <p className="text-base sm:text-lg max-w-xl">
                                    Riding with friends just got easier: set up a group ride in the Uber app, invite your friends, and arrive at your destination. Friends who ride together save together.
                                </p>
                            </div>

                        </div>
                    </section>
                </div>
            </section>


            {/* Travel */}
            <section className="forth">
                <div className="my-32">
                    <h1 className="px-6 sm:px-12 lg:px-32 text-2xl sm:text-3xl lg:text-4xl font-semibold text-center lg:text-left">
                        Use the Uber app to help you travel your way
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16 px-6 sm:px-12 lg:px-32 mt-10 justify-center">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs sm:max-w-sm lg:max-w-md">
                            <img
                                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_536,w_536/v1692743834/assets/54/f60161-cf6b-4401-a309-8bb196c0014c/original/U_CoastalCalifornia_White_Final-%281%29.jpg"
                                alt="Ride Options"
                                className="h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-xl object-cover"
                            />
                            <h2 className="text-xl font-bold mt-4">Ride Options</h2>
                            <p className="text-base mt-2.5">
                                There’s more than one way to move with Uber, no matter where you are or where you’re headed next.
                            </p>
                            <button className="bg-black text-white text-base font-bold mt-6 py-3 px-8 rounded-xl hover:bg-gray-800">
                                <Link to="ExploreRideOpt"> Search ride options</Link>
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs sm:max-w-sm lg:max-w-md">
                            <img
                                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_536,w_536/v1692743890/assets/f9/ba27c4-665c-4cca-8161-9e3f87f49994/original/Airport-rides.png"
                                alt="Airports"
                                className="h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-xl object-cover"
                            />
                            <h2 className="text-xl font-bold mt-4">700+ airports</h2>
                            <p className="text-base mt-2.5">
                                You can request a ride to and from most major airports. Schedule a ride to the airport for one less thing to worry about.
                            </p>
                            <button className="bg-black text-white text-base font-bold mt-6 py-3 px-8 rounded-xl hover:bg-gray-800">
                                <Link to="AirportRide">Search Airports</Link>
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs sm:max-w-sm lg:max-w-md">
                            <img
                                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_536,w_536/v1689609697/assets/b8/c39de0-6e13-485b-ba45-66511170c62a/original/SS_Commuter.jpg"
                                alt="Cities"
                                className="h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-xl object-cover"
                            />
                            <h2 className="text-xl font-bold mt-4">10,000+ cities</h2>
                            <p className="text-base mt-2.5">
                                The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.
                            </p>
                            <button className="bg-black text-white text-base font-bold mt-6 py-3 px-8 rounded-xl hover:bg-gray-800">
                                <Link to="/Cities">Search Cities</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>




            {/* BusinessSolution */}
            <section className="fifth">
                <div className="flex flex-col lg:flex-row bg-black text-white px-6 sm:px-12 lg:px-20 py-16 lg:py-24 gap-10">


                    <div className="flex-1">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
                            Looking for business solutions?
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl mt-5">
                            Get information about how companies leverage
                            <span className="underline underline-offset-4 ml-2.5"><Link to='/business'>Uber for Business:</Link> </span>
                        </p>



                        <div className=" flex-col sm:flex-row mt-20 gap-6">
                            <button className="bg-white text-black text-base sm:text-lg font-mono px-6 sm:px-8 py-2 rounded-xl hover:bg-gray-200">
                                <Link to='/Business/2Way'>Get started</Link>
                            </button>
                            <p className="cursor-pointer group mt-20 text-base sm:text-lg">
                                <span className="underline underline-offset-4 inline-block relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-500 group-hover:after:w-full">
                                    <Link to='/business'>Check out our solutions</Link>
                                </span>
                            </p>
                        </div>
                    </div>


                    <div className="flex-1">
                        <img
                            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_603,w_1072/v1691776332/assets/d6/48f5b6-bb5f-450e-8733-90aefecbd09e/original/U4B_Spot_U4BWebsite.jpg"
                            alt="Business Solution"
                            className="w-full h-auto max-h-96 object-cover rounded-xl"
                        />
                    </div>
                </div>
            </section>



            {/* DownloadApp */}
            <section className="sixth">
                <div className="bg-stone-200 px-6 sm:px-12 lg:px-20 py-16 my-20">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-4 sm:px-10 py-6 sm:py-10">
                        Do more in the app
                    </h1>

                    <div className="flex flex-col lg:flex-row justify-between gap-8 px-4 sm:px-10">


                        <div className="group flex items-center gap-5 bg-white p-6 rounded-xl shadow transition-all duration-300 hover:shadow-md">
                            <img
                                src="https://static-00.iconduck.com/assets.00/uber-icon-1024x1024-4icncyyo.png"
                                alt="Uber Icon"
                                className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                            />
                            <div className="flex-1">
                                <h1 className="text-xl sm:text-2xl font-bold">
                                    <a href="https://www.uber.com/global/en/ride/app/?referrer=singular_click_id%3Dde675c57-5e03-4c4d-be06-5b61ee54befb">Download the Uber app</a>
                                </h1>
                            </div>
                            <div className="text-2xl sm:text-3xl transform transition-transform duration-300 group-hover:translate-x-2">
                                <FaArrowRight />
                            </div>
                        </div>


                        <div className="group flex items-center gap-5 bg-white p-6 rounded-xl shadow transition-all duration-300 hover:shadow-md">
                            <img
                                src="https://static-00.iconduck.com/assets.00/uber-icon-1024x1024-4icncyyo.png"
                                alt="Uber Icon"
                                className="h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                            />
                            <div className="flex-1">
                                <h1 className="text-xl sm:text-2xl font-bold"><Link to='/signup'>Sign up to ride</Link> </h1>
                            </div>
                            <div className="text-2xl sm:text-3xl transform transition-transform duration-300 group-hover:translate-x-2">
                                <FaArrowRight />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="px-6 sm:px-12 lg:px-20">
                    <h2 className="text-base sm:text-lg text-gray-600">
                        Certain requirements and features vary by country, region, and city.
                    </h2>
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

export default Home
