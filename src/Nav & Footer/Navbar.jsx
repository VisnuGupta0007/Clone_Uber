
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router";

function Navbar() {
    return (
        <>
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

            <section className="second">
                <div className="flex flex-col sm:flex-row justify-between px-6 sm:px-10 py-5 gap-4">

                    <div>
                        <h1 className="text-2xl font-bold">Ride</h1>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-3 text-gray-500 text-base sm:text-lg">
                        <ul className="hover:text-black cursor-pointer"><Link to='/RequestRide'> Request a ride</Link></ul>
                        <ul className="hover:text-black cursor-pointer"><Link to='/ReserveRide'>Reserve a ride</Link> </ul>
                        <ul className="hover:text-black cursor-pointer"><Link to='/SeePrices'>See prices</Link> </ul>
                        <ul className="hover:text-black cursor-pointer"><Link to='/ExploreRideOpt'>Explore ride options</Link> </ul>
                        <ul className="hover:text-black cursor-pointer"><Link to='/AirportRide'> Airport rides</Link></ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Navbar