import React from 'react'
import { logo } from '../../assets'
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full py-20 h-auto border-b-[1px] border-b-black grid lg:grid-cols-4 gap-4 sm:gap-8 sm:flex sm:flex-col lg:flex-row'>
            <div className='w-full lg:w-1/3 h-full flex flex-col gap-8 sm:px-[25%] lg:px-[0%]'>
                <img className="w-32" src={logo} alt="logo" />
                <div className='flex gap-4'>
                    <a href="https://twitter.com/MouryaChandani" target="_blank" rel="noreferrer"> <span className='bannerIcon'><FaTwitter /></span></a>
                    <a href="https://www.linkedin.com/in/chandani-mourya-8b551b191/" target="_blank" rel="noreferrer"><span className='bannerIcon'><FaLinkedinIn /></span></a>
                </div>
            </div>

            <div className='flex sm:flex-row sm:gap-4 lg:gap-48'>
                <div className='w-full h-full'>
                    <h3 className='text-xl uppercase text-designColor tracking-wider'>
                        Quick Links
                    </h3>
                    <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
                        <a
                            href="https://drive.google.com/file/d/19tmO8A7hUe3sWY4KA5P9KPPdVEWzRMvE/view?usp=sharing"
                            download="chandaniMouryaResume.pdf"
                            target="_blank" rel="noreferrer">
                            <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

                                Download Resume
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span></li>
                        </a>
                    </ul>
                </div>
                <div className='w-full h-full'>
                    <h3 className='text-xl uppercase text-designColor tracking-wider'>
                        Published Papers
                    </h3>
                    <ul className='flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6'>
                        <a
                            href="https://drive.google.com/file/d/1-Gc-9JPKKJ30uOV7gMDTfbzZyDL-WYVI/view?usp=sharing"
                            download="chandaniMouryaPaper1.pdf"
                            target="_blank" rel="noreferrer">
                            <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

                                Paper 1
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span></li>
                        </a>


                        <a
                            href="https://drive.google.com/file/d/1zDbmbV0x0LFPFQ-Rv4EKjYg9NxXbNbeS/view?usp=sharing"
                            download="chandaniMouryaPaper2.pdf"
                            target="_blank" rel="noreferrer">
                            <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">

                                Paper 2
                                <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            </span></li>
                        </a>
                    </ul>

                </div>
            </div>
            {/* <div className='w-full h-full'></div> */}
        </div>
    )
}

export default Footer