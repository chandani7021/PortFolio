import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title1, title2, des, icon }) => {
    return (
        // <div className='w-1/2 px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100'>
        <div className='w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'>
            <div className='h-72 overflow-y-hidden'>
                <div className='flex h-full flex-col gap-6 translate-y-14 group-hover:translate-y-0 transition-transform duration-500'>
                    <div className='w-10 h-8 flex flex-col justify-between'>
                        {/* <span className='text-4xl text-designColor'>{icon}</span> */}
                        {
                            icon ? (
                                <span className='text-4xl text-designColor'>{icon}</span>
                            ) : (
                                <>
                                    <span className='w-full h-[2px] rounded-lg bg-designColor inline-flex'></span>
                                    <span className='w-full h-[2px] rounded-lg bg-designColor inline-flex'></span>
                                    <span className='w-full h-[2px] rounded-lg bg-designColor inline-flex'></span>
                                    <span className='w-full h-[2px] rounded-lg bg-designColor inline-flex'></span>
                                </>
                            )

                        }
                    </div>
                    <div className='flex flex-col gap-6'>
                        <div className=' gap-2'>
                            <h2 className='text-2xl font-titleFont font-bold text-gray-300'>{title1}</h2>
                            <h2 className='text-2xl font-titleFont font-bold text-gray-300'>{title2}</h2>
                        </div>
                        <p className='base'>{des}</p>
                        <HiArrowRight />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card