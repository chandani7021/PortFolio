import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Achievements = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
            <div className='py-12 font-titleFont flex flex-col gap-4'>
                <p className='text-sm text-designColor tracking-[4px]'></p>
                <h2 className='text-4xl font-bold'>Achievements</h2>
            </div>

            <div className='mt-14 w-[80%] sm:w-[95%] sm:h-[1400px] h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                <ResumeCard
                    title="Smart India Hackathon 2022 Finalist"
                    subTitle="Ministry of Education (In Gujrat)"
                    result="Aug 2022"
                    des="• Actively participated as a team member in the development of a disaster response website for the National
                    Disaster Response Force (NDRF), employing Blockchain technology and Node.js.
                    • Played a key role in the construction of the frontend segment of the project, utilizing industry-standard
                    frameworks like Laravel and tailwind CSS, resulting in a visually appealing and user-friendly interface." />

                <ResumeCard
                    title="Developer Virtual Experience Program"
                    subTitle="Accenture Nordics's Developer on Forage"
                    result="June 2023"
                    des="During this virtual Experience program I excelled in various technical tasks, such as defining requirements, designing architecture changes, migrating to the cloud, debugging, and enhancing security. She also demonstrated strong skills in problem-solving, data management, and privacy protection." />


            </div>
        </motion.div>
    )
}

export default Achievements