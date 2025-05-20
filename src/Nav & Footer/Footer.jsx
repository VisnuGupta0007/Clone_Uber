import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <section className="bg-black text-white p-6 sm:p-10 mt-10">
                <h1 className="text-4xl text-center px-10">Uber</h1>
                <h2 className="capitalize text-xl text-center px-10 mt-8">Visit Help Center</h2>

                {/* Main Content Layout */}
                <div className="flex flex-col sm:flex-row justify-between mt-14 gap-8 sm:gap-16 px-6 sm:px-20">

                    {/* Company Section */}
                    <div className="w-full sm:w-auto">
                        <ul className="text-xl font-semibold">Company</ul>
                        <ul className="mt-2.5 text-lg">About us</ul>
                        <ul className="mt-2.5 text-lg">Our offering</ul>
                        <ul className="mt-2.5 text-lg">Newsroom</ul>
                        <ul className="mt-2.5 text-lg">Investors</ul>
                        <ul className="mt-2.5 text-lg">Blog</ul>
                        <ul className="mt-2.5 text-lg">Careers</ul>
                    </div>

                    {/* Product Section */}
                    <div className="w-full sm:w-auto">
                        <ul className="text-xl font-semibold">Product</ul>
                        <ul className="mt-2.5 text-lg">Ride</ul>
                        <ul className="mt-2.5 text-lg">Drive</ul>
                        <ul className="mt-2.5 text-lg">Eat</ul>
                        <ul className="mt-2.5 text-lg">Uber for Business</ul>
                        <ul className="mt-2.5 text-lg">Uber Freight</ul>
                        <ul className="mt-2.5 text-lg">Gift cards</ul>
                        <ul className="mt-2.5 text-lg">Uber Health</ul>
                    </div>

                    {/* Global Citizenship Section */}
                    <div className="w-full sm:w-auto">
                        <ul className="text-xl font-semibold">Global citizenship</ul>
                        <ul className="mt-2.5 text-lg">Safety</ul>
                        <ul className="mt-2.5 text-lg">Sustainability</ul>
                    </div>

                    {/* Travel Section */}
                    <div className="w-full sm:w-auto">
                        <ul className="text-xl font-semibold">Travel</ul>
                        <ul className="mt-2.5 text-lg">Reserve</ul>
                        <ul className="mt-2.5 text-lg">Airports</ul>
                        <ul className="mt-2.5 text-lg">Cities</ul>
                    </div>
                </div>

                {/* Social Links and Location */}
                <div className="flex flex-col sm:flex-row items-center justify-between px-6 sm:px-20 mt-5">
                    <div className="flex gap-6 text-xl">
                        <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                            <FaFacebookSquare />
                        </ul>
                        <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                            <FaXTwitter />
                        </ul>
                        <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                            <FaYoutube />
                        </ul>
                        <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                            <FaLinkedin />
                        </ul>
                        <ul className="p-4 hover:bg-gray-900 hover:rounded-xl">
                            <FaInstagram />
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
                    <img
                        src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg"
                        alt="Google Play"
                        className="w-32 sm:w-40"
                    />
                    <img
                        src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
                        alt="App Store"
                        className="w-32 sm:w-40"
                    />
                </div>
            </section>

        </>
    )
}

export default Footer