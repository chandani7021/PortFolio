import React from 'react';
import { motion } from 'framer-motion';


const Skills = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className="w-full flex flex-col lg:flex-row lg:gap-20">
            < div className='w-full lgl:w-1/2' >

                <div className='py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'></p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Skills</h2>
                </div>

                <div className='mt-14 w-full flex flex-col gap-6'>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Python</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>
                                    90%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>HTML</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>
                                    100%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>CSS</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>
                                    95%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>JacaScript</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>
                                    90%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>MySQL</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>
                                    80%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>React Native</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>
                                    70%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                   

                </div>
            </div >


            <div className='w-full lg:w-1/2 mt-10'>

                <div className='py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'></p>
                    <h2 className='text-3xl md:text-4xl font-bold'> </h2>
                </div>

                <div className='mt-14 w-full flex flex-col gap-6'>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>React.JS</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>
                                    80%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Node.JS</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>
                                    70%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>MongoDB</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>
                                    60%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Django</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>
                                    75%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Flask</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>
                                    60%
                                </span>
                            </motion.span>
                        </span>
                    </div>

                     <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Fast API</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className='w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>
                                    65%
                                </span>
                            </motion.span>
                        </span>
                    </div>



                </div>
            </div>

        </motion.div >
    )
}

export default Skills;











//in future when you will have more experience and things to add use this code to add the contents in flex-col

// <div className="w-full flex flex-row gap-10">
//             <div className='w-1/2'>

//                 <div className='py-12 font-titleFont flex flex-col gap-4'>
//                     <p className='text-sm text-designColor tracking-[4px]'></p>
//                     <h2 className='text-4xl font-bold'>Education</h2>
//                 </div>

//                 <div className='mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
//                     <ResumeCard
//                         title="B.E. in Computer Engineering"
//                         subTitle="Mumbai University (2019-2023)"
//                         result="8.9 / 10"
//                         des="" />

//                     <ResumeCard
//                         title="HSC in Science Stream"
//                         subTitle="S.I.E.S college of Arts, Science and Commerce(2018-2019)"
//                         result="74.15 %"
//                         des="" />

//                     <ResumeCard
//                         title="SSC"
//                         subTitle="Shree GauriDutt Mittal Vidyalaya(2016-2017)"
//                         result="89.6 %"
//                         des="" />
//                 </div>
//             </div>


//             <div className='w-1/2'>
//                 <div className="py-12 font-titleFont flex flex-col gap-4">
//                     <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
//                     <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
//                 </div>
//                 <div className="mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//                     <ResumeCard
//                         title="Sr. Software Engineer"
//                         subTitle="Google Out Tech - (2017 - Present)"
//                         result="USA"
//                         des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
//                     />
//                     <ResumeCard
//                         title="Web Developer & Trainer"
//                         subTitle="Apple Developer Team - (2012 - 2016)"
//                         result="MALAYSIA"
//                         des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
//                     />
//                     <ResumeCard
//                         title="Front-end Developer"
//                         subTitle="Nike - (2020 - 2011)"
//                         result="Oman"
//                         des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
//                     />
//                 </div>
//             </div>
//         </div>