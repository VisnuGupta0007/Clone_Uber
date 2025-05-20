
import { IoIosBriefcase } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { AiFillCreditCard } from "react-icons/ai";

function Plans() {
    return (
        <>
            <div>
                <h1 className=" text-3xl font-bold px-24 mt-10">Plans for later</h1>

                <div className="flex flex-wrap justify-center items-start gap-10 px-10 py-10">

                    <div id="plan_image" className="rounded-3xl text-right  ">
                        <h1 className=" text-4xl font-bold w-80 ml-96 pt-14">
                            Get your ride right with Uber Reserve
                        </h1>
                        <p className=" pr-20 text-2xl font-bold mt-14">
                            Choose date and time
                        </p>
                        <div className="flex justify-end mt-5 pr-20 gap-10">
                            <input
                                type="date"
                                className="bg-white border border-gray-300 px-4 py-2 rounded-md outline-none"
                            />
                            <input
                                type="time"
                                className="bg-white border border-gray-300 px-4 py-2 rounded-md outline-none"
                            />
                        </div>

                        <button className=" bg-black text-white text-xl font-bold rounded-xl w-[320px] cursor-pointer mr-20 mt-3 py-3.5 hover:bg-gray-900">Next</button>
                    </div>

                    <div className="border-gray-200 border-2 rounded-xl px-10 py-5 max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Benefits</h2>

                        <div className="flex items-center gap-5 mb-5">
                            <div className="text-2xl"><IoIosBriefcase /></div>
                            <p className="text-base border-b-2 border-black pb-1">
                                Choose your exact pickup time up to 90 days in advance.
                            </p>
                        </div>

                        <div className="flex items-center gap-5 mb-5">
                            <div className="text-2xl"><LuClock3 /></div>
                            <p className="text-base border-b-2 border-black pb-1">
                                Extra wait time included to meet your ride.
                            </p>
                        </div>

                        <div className="flex items-center gap-5">
                            <div className="text-2xl"><AiFillCreditCard /></div>
                            <p className="text-base border-b-2 border-black pb-1">
                                Cancel at no charge up to 60 minutes in advance.
                            </p>
                        </div>
                    </div>

                </div>


                <section className="">
                    <div className=" flex justify-between px-20  m-20">
                        <div>
                            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_621,w_1104/v1683576635/assets/f7/7aa380-a378-47bf-8b88-aaba1587efdd/original/landing-stops-group-rides.png"
                                alt=""
                                className=" h-80 w-full" />
                        </div>
                        <div className=" ">
                            <h1 className=" text-4xl font-bold max-w-96">Ride with friends seamlessly</h1>
                            <p className=" mt-5 w-[480px] text-lg ">
                                Riding with friends just got easier: set up a group ride in the
                                Uber app, invite your friends, and arrive at your destination.
                                Friends who ride together save together.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Plans