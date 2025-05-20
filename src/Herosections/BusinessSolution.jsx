import React from 'react'

function BusinessSolution() {
    return (
        <>
            <div className=' flex bg-black text-white px-20 py-24'>
                <div >
                    <h1 className=' text-5xl font-semibold'>Looking for business solutions?</h1>
                    <p className=' text-xl mt-5'>
                        Get information about how companies leverage<span className=' underline underline-offset-4 ml-2.5'>Uber for Business: </span>
                    </p>
                    <ul className="list-disc ps-10 mt-5">
                        <li className="underline underline-offset-4 text-xl">Business travel</li>
                        <li className="underline underline-offset-4 text-xl mt-5">Courtesy rides</li>
                        <li className="underline underline-offset-4 text-xl mt-5">Meal programs</li>
                        <li className="underline underline-offset-4 text-xl mt-5">Item delivery</li>
                    </ul>

                    <div className=' flex mt-10 gap-14'>
                        <button className=' bg-white text-black text-xl font-mono px-8 py-2 rounded-xl cursor-pointer hover:bg-gray-200'>Get started</button>
                        <p className="cursor-pointer group inline-block">
                            <span className=" underline underline-offset-4 text-xl inline-block relative  after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-500 after:transition-all after:duration-500 group-hover:after:w-full">
                                Check out our solutions
                            </span>
                        </p>




                    </div>
                </div>

                <div>
                    <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_603,w_1072/v1691776332/assets/d6/48f5b6-bb5f-450e-8733-90aefecbd09e/original/U4B_Spot_U4BWebsite.jpg"
                        alt="Business Solution"
                        className=' h-96 ' />
                </div>
            </div>
        </>
    )
}

export default BusinessSolution