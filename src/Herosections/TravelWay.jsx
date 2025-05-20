import React from 'react'

function TravelWay() {
    return (
        <>
            <div className=' my-32'>
                <h1 className=' px-32 text-4xl font-semibold'>Use the Uber app to help you travel your way</h1>
                <div className=' flex gap-16 px-32 mt-10'>
                    <div>
                        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_536,w_536/v1692743834/assets/54/f60161-cf6b-4401-a309-8bb196c0014c/original/U_CoastalCalifornia_White_Final-%281%29.jpg"
                            alt="Ride Options"
                            className=' h-96 w-96' />
                        <h2 className=' text-xl font-bold mt-3.5'>Ride Options</h2>
                        <p className=' text-lg mt-2.5 '>
                            There’s more than one way to move with Uber, no matter where you are or where you’re headed next.
                        </p>
                        <button className=' bg-black text-white text-lg font-bold mt-8 py-3 px-10 rounded-xl cursor-pointer hover:bg-gray-800'>Search ride options</button>
                    </div>

                    <div>
                        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_536,w_536/v1692743890/assets/f9/ba27c4-665c-4cca-8161-9e3f87f49994/original/Airport-rides.png"
                            alt="AIrports"
                            className=' h-96 w-96' />
                        <h2  className=' text-xl font-bold mt-3.5'>700+ airports</h2>
                        <p className=' text-lg mt-2.5 '>
                            You can request a ride to and from most major airports. Schedule a ride to the airport for one less thing to worry about.
                        </p>
                        <button className=' bg-black text-white text-lg font-bold mt-8 py-3 px-10 rounded-xl cursor-pointer hover:bg-gray-800'>Search Airports</button>
                    </div>

                    <div>
                        <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_536,w_536/v1689609697/assets/b8/c39de0-6e13-485b-ba45-66511170c62a/original/SS_Commuter.jpg"
                            alt="Cities"
                            className=' h-96 w-96' />
                        <h2  className=' text-xl font-bold mt-3.5'>10,000+ cities</h2>
                        <p className=' text-lg mt-2.5 '>
                            The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.
                        </p>
                        <button className=' bg-black text-white text-lg font-bold mt-8 py-3 px-10 rounded-xl cursor-pointer hover:bg-gray-800'>Search Cities</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TravelWay