import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
    return (
        < motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
            <div className='py-12 font-titleFont'>
                <p className='text-sm text-designColor tracking-[4px]'></p>
                <h2 className='text-4xl font-bold'>Experience</h2>
            </div>

            <div className='mt-14 w-[80%] h-[900px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                  <ResumeCard
                    title="Software Engineer"
                    subTitle="Copds"
                    result="Mar 2024 - Present"
                    des="Delivered 3 impactful projects — a Leave Management System (30% faster approvals), a Development
Showcase Platform, and an ongoing Cybersecurity solution — while strengthening technical expertise,
problem-solving, and cross-functional collaboration" />

                <ResumeCard
                    title="Fullstack Developer Intern"
                    subTitle="NullClass"
                    result="Aug 2023 - Oct 2023"
                    des="Developed a comprehensive QA system with a range of enhancements, including a subscription system,
                    reward system, location tracking, user login, device information capture, and robust multilanguage
                    support, enhancing user engagement and satisfaction" />

                <ResumeCard
                    title="Artificial Intelligence Intern"
                    subTitle="SmartKnower"
                    result="Jul 2022 - Aug 2022"
                    des="Created and trained two advanced Convolutional Neural Network (CNN) models for handwritten digit
                    prediction and CIFAR-10 image classification, achieving a notable accuracy rate of 82% and 74%
                    respectively." />

                {/* <ResumeCard
                    title="Artificial Intelligence Intern"
                    subTitle="AI Remark Skills"
                    result="89.6 %"
                    des="" /> */}
            </div>
        </motion.div>
    )
}

export default Experience