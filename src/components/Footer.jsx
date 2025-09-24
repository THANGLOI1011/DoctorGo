import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* Left Section */}
        <div>
            <img className='w-40 mb-5' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Book appointments with the best doctors in your city. Trusted by thousands of patients.</p>
        </div>

        {/* Center Section */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* Right Section */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>13 Doctor St, Health City, HC 12345</li>
                <li>doctorgo@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* coppyright */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright © 2024 DoctorGo - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
