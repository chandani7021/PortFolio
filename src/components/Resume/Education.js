import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
            <div className='py-12 font-titleFont gap-4'>
                <p className='text-sm text-designColor tracking-[4px]'></p>
                <h2 className='text-3xl md:text-4xl font-bold'>Education</h2>
            </div>

            <div className='mt-6 lgl:mt-14 w-[80%] h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                <ResumeCard
                    title="B.E. in Computer Engineering"
                    subTitle="Mumbai University (2019-2023)"
                    result="8.9 / 10"
                    des="" />

                <ResumeCard
                    title="HSC in Science Stream"
                    subTitle="S.I.E.S college of Arts, Science and Commerce(2018-2019)"
                    result="74.15 %"
                    des="" />

                <ResumeCard
                    title="SSC"
                    subTitle="Shree GauriDutt Mittal Vidyalaya(2016-2017)"
                    result="89.6 %"
                    des="" />
            </div>
        </motion.div>

    )
}

export default Education