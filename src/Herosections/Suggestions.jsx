import React from 'react';

function Suggestions() {
    return (
        <>
            <div>
                <h1 className="text-4xl font-bold mb-6 px-20">Suggestion</h1>
                <div className="px-4 lg:px-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                        <div className="flex bg-neutral-100 w-[450px] rounded-xl">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">Courier</h2>
                                <p className="text-gray-600 mb-4">
                                    Uber makes same-day item delivery easier than ever.
                                </p>
                                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200 mt-3.5">
                                    Details
                                </button>
                            </div>
                            <img
                                src="https://cn-geo1.uber.com/static/mobile-content/Courier.png"
                                alt="Courier"
                                className="md:w-1/3 w-full object-cover"
                            />
                        </div>

                        <div className="flex bg-neutral-100 w-[450px] rounded-xl">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">Rentals</h2>
                                <p className="text-gray-600 mb-4">
                                    Request a trip for a block of mind and make multiple stops.
                                </p>
                                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200 mt-3.5">
                                    Details
                                </button>
                            </div>
                            <img
                                src="https://mobile-content.uber.com/launch-experience/Hourly2021.png"
                                alt="Courier"
                                className="md:w-1/3 w-full object-cover"
                            />
                        </div>

                        <div className="flex bg-neutral-100 w-[450px] rounded-xl">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">Reserve</h2>
                                <p className="text-gray-600 mb-4">
                                    Reserve your ride in advance so you can relax on the day of your trip.
                                </p>
                                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200">
                                    Details
                                </button>
                            </div>
                            <img
                                src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png"
                                alt="Courier"
                                className="md:w-1/3 w-full object-cover"
                            />
                        </div>

                        <div className="flex bg-neutral-100 w-[450px] rounded-xl">
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2">Ride</h2>
                                <p className="text-gray-600 mb-4">
                                    Go anywhere with uber Request a ride, hop in, and go.
                                </p>
                                <button className="bg-white px-4 py-2 rounded-full hover:bg-gray-200">
                                    Details
                                </button>
                            </div>
                            <img
                                src="https://mobile-content.uber.com/launch-experience/Hourly2021.png"
                                alt="Courier"
                                className="md:w-1/3 w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Suggestions;
