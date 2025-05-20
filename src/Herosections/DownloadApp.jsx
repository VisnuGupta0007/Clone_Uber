import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function DownloadApp() {
    return (
        <>
            <div className=' bg-stone-200 p-20 my-20'>
                <h1 className=' px-20 py-10 text-4xl font-bold'>Do more in the app</h1>
                <div className=' flex justify-between px-12'>
                    <div className="group flex gap-5 bg-white px-8 py-5 transition-all duration-300">
                        <img
                            src="https://static-00.iconduck.com/assets.00/uber-icon-1024x1024-4icncyyo.png"
                            alt="Uber_Icon"
                            className="h-32 w-32"
                        />
                        <h1 className="flex items-center text-2xl font-bold w-80">
                            Download the Uber app
                        </h1>
                        <ul className="flex items-center mt-3 text-3xl transform transition-transform duration-300 group-hover:translate-x-2">
                            <FaArrowRight />
                        </ul>
                    </div>


                    <div>
                        <div className="group flex gap-5 bg-white px-8 py-5 w-full transition-all duration-300">
                            <img
                                src="https://static-00.iconduck.com/assets.00/uber-icon-1024x1024-4icncyyo.png"
                                alt="Uber_Icon"
                                className="h-32 w-32"
                            />
                            <h1 className="flex items-center text-2xl font-bold w-80">
                                Sign up to ride
                            </h1>
                            <span className="flex items-center mt-3 text-3xl transform transition-transform duration-300 group-hover:translate-x-2">
                                <FaArrowRight />
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className=' px-20'>
                <h2>Certain requirements and features vary by country, region, and city.</h2>
            </div>
        </>
    )
}

export default DownloadApp