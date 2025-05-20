import React from "react";
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

const Cities = () => {
    const countries = [
        "Andorra",
        "United Arab Emirates (UAE)",
        "Argentina",
        "Austria",
        "Australia",
        "Bangladesh",
        "Belgium",
        "Bahrain",
        "Bolivia",
        "Brazil",
        "Canada",
        "Switzerland",
        "Ivory Coast",
        "Chile",
        "Colombia",
        "Costa Rica",
        "Czech Rep",
        "Germany",
        "Denmark",
        "Dominican Rep",
        "Ecuador",
        "Estonia",
        "Egypt",
        "Spain",
        "Finland",
        "France",
        "Great Britain",
        "Ghana",
        "Greece",
        "Guatemala",
        "Hong Kong",
        "Honduras",
        "Croatia",
        "Hungary",
        "Republic of Ireland",
        "India",
        "Italy",
        "Jamaica",
        "Jordan",
        "Japan",
        "Kenya",
        "Korea",
        "Lebanon",
        "Sri Lanka",
        "Lithuania",
        "Malta",
        "Mexico",
        "Nigeria",
        "Netherlands",
        "Norway",
        "New Zealand",
        "Panama",
        "Peru",
        "Poland",
        "Portugal",
        "Paraguay",
        "Qatar",
        "Romania",
        "Saudi Arabia",
        "Sweden",
        "Slovakia",
        "El Salvador",
        "Turkey",
        "Taiwan",
        "Tanzania",
        "Ukraine",
        "Uganda",
        "United States",
        "Uruguay",
        "South Africa",
    ];

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

            <div className="p-8 font-sans ml-30 mt-15">
                {/* Heading Section */}
                <div className="mb-8">
                    <h1 className="text-5xl font-bold mb-2">
                        Use Uber in cities around the <br />
                        world
                    </h1>
                    <p className="text-lg mb-4 mt-10">
                        Get to your destination in more than 10,000 cities. If you’re going to
                        an airport, see all airports where <br /> Uber is available.
                    </p>

                </div>

                {/* Sticky Global + Countries List */}
                <div className="justify-center">
                    {/* Sticky Left Side Heading */}
                    <div className="sticky top-20 text-xl font-bold h-fit min-w-[100px]">
                        Global
                    </div>

                    {/* Countries */}
                    <div className="grid grid-cols-2 gap-y-2 mt-30 ml-50 font-medium">
                        {countries.map((country, index) => (
                            <div key={index} className="underline">
                                {country}
                            </div>
                        ))}
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
    );
};

export default Cities;