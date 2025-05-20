import React from 'react'
import { FaGoogle, FaApple } from 'react-icons/fa';
import { IoQrCodeSharp } from 'react-icons/io5';
import { Link } from 'react-router';

function Login() {
  return (
    <>
      {/* Navbar */}
      <section className='navbar'>




        {/* Left Side */}
        <div className="flex flex-wrap gap-3 items-center p-6 bg-black text-white">
          <h1 className="text-3xl font-normal cursor-pointer pl-10"><Link to='/'>Uber</Link> </h1>
        </div>
        <div />
      </section>

      {/* Page */}
      <div className="  flex items-center justify-center  px-4">
        <div className="  p-8  w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-4 ">
            What's your phone number or email?
          </h1>

          <input
            type="text"
            placeholder="Enter phone number or email"
            className="w-full h-14  bg-gray-200 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:black"
          />

          <button className="w-full h-14 text-xl bg-black text-white py-2 rounded-md  hover:bg-gray-900 transition mb-6 cursor-pointer">
            Continue
          </button>

          <div className="flex items-center justify-between mb-6 ">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          <button className="w-full h-14 flex items-center justify-center gap-3 cursor-pointer  bg-gray-200 rounded-md py-2 hover:bg-gray-100 transition mb-3">
            <FaGoogle className="text-lg" />
            <span>Continue with Google</span>
          </button>

          <button className="w-full flex h-14 items-center justify-center gap-3 cursor-pointer bg-gray-200 rounded-md py-2 hover:bg-gray-100 transition mb-3">
            <FaApple className="text-xl" />
            <span>Continue with Apple</span>
          </button>

          <div className="flex items-center justify-between my-6">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">or</span>
            <hr className="w-full border-gray-300" />
          </div>

          <button className="w-full h-14 flex items-center justify-center gap-3 cursor-pointer bg-gray-200 rounded-md py-2 hover:bg-gray-100 transition">
            <IoQrCodeSharp className="text-xl" />
            <span>Log in with QR code</span>
          </button>

          <p className=' text-gray-500 mt-5'>
            By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided
          </p>
        </div>


      </div>
    </>
  )
}

export default Login