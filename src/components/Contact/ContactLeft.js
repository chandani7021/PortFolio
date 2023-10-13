import React from 'react';
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index.js"

const ContactLeft = () => {
    return (
        <div className='sm:w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col justify-center gap-8'>

            <img
                className='w-full h-64 object-cover rounded-lg mb-2'
                src={contactImg} alt="contactImg" />

            <div className='flex flex-col gap-4'>
                <h3 className='text-3xl font-bold text-white'>Chandani Mourya</h3>
                <p className='text-lg font-normal text-gray-400'>Software Developer</p>
                <p className='text-base text-gray-400 tracking-wide'>
                    Description
                </p>
                <p className='text-base text-gray-400 flex flex-row items-center gap-2'>
                    Phone: <span className='text-lightText'>+91 7021405056</span>
                </p>
                <p className='text-base text-gray-400 flex sm:flex-col sm:items-start flex-row items-center gap-2'>
                    Email: <span className='text-lightText '>chandanimaurya56@gmail.com</span>
                </p>
            </div>

            <div className='flex flex-col gap-4'>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                    Find Me In
                </h2>
                <div className='flex gap-4'>
                    <a href="https://twitter.com/MouryaChandani"> <span className='bannerIcon' target="_blank" rel="noreferrer"><FaTwitter /></span></a>
                    <a href="https://www.linkedin.com/in/chandani-mourya-8b551b191/" target="_blank" rel="noreferrer"><span className='bannerIcon'><FaLinkedinIn /></span></a>
                </div>
            </div>
        </div>
    )
}

export default ContactLeft