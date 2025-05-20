import { FaCircleDot } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { CgShapeSquare } from "react-icons/cg";

function Ride() {
    return (
        <>
            <div className="flex items-center justify-between p-12">
                <div className="ml-20">
                    <div>
                        <h1 className="text-6xl font-bold mb-4">
                            Request a ride for <br /> now or later
                        </h1>
                    </div>
                    <div>
                        <p className="text-lg  p-2">
                            Add your trip details, hop in, and go.
                        </p>



                        <div className="relative ">
                            <div className=" flex items-center bg-gray-200 rounded-xl text-center px-2">
                                <ul className=" ml-2.5"><FaCircleDot /></ul>
                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    className="w-96 p-4 rounded-2xl bg-gray-200 mt-2 outline-0"
                                />
                                <ul className=" text-lg  ml-10"><FaLocationArrow /></ul>

                            </div>



                            <div className="absolute left-[23px] top-[43px] h-[65px] w-[2px] bg-black"></div>

                            <div className=" flex items-center bg-gray-200 rounded-xl text-center px-2 mt-5">
                                <ul className=" text-lg mt-2 ml-2.5"><CgShapeSquare /></ul>
                                <input
                                    type="text"
                                    placeholder="Enter location"
                                    className="w-96 p-4 rounded-2xl bg-gray-200 mt-2 outline-0"
                                />


                            </div>
                        </div>

                        <div className="space-x-4 pt-2">
                            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                                See prices
                            </button>
                            <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                                Schedule for later
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-fit flex justify-cente mr-14">
                    <img
                        src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_2144,w_2144/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png"
                        alt=""
                        srcset=""
                        className="w-[550px] h-auto"
                    />
                </div>
            </div>
        </>
    )
}

export default Ride