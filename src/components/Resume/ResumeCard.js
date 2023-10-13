import React from 'react'

const ResumeCard = ({ title, subTitle, result, des }) => {
    return (
        <div className='w-full sm:h-[1000px] md:h-[60%] h-1/3 group flex'>

            <div className='w-10 sm:px-2 h-[6px] bgOpacity mt-16 relative'>
                <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                    <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'>

                    </span>
                </span>
            </div>

            <div className='lg:w-[80%] lg:h-[60%] sm:w-[120%] bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg sm:px-10 px-10 flex flex-col sm:items-start justify-center gap-10 shadow-shadowOne'>

                <div className='flex justify-between items-center flex-row'>

                    <div>
                        <h3 className='text-2xl font-semibold group-hover:text-white duration-300'>{title}</h3>
                        <p className='text-sm mt-2 text-gray-400 group-hover:text-white duration-300'>{subTitle}</p>
                    </div>

                    <div>
                        <p className='w-[100%] sm:w-[100%] sm:h-[90%]h-10 text-designColor bg-black bg-opacity-25 rounded-lg flex lg:justify-center lg:-mt-8 lg:ml-16 md:mt-10 px-2 py-2  items-center shadow-shadowOne text-sm font-medium'>
                            {result}
                        </p>
                    </div>
                </div>
                <p className='text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300'>
                    {des}
                </p>
            </div>
        </div >
    )
}

export default ResumeCard