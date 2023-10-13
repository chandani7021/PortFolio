import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Achievements from './Achievements';

const Resume = () => {

    const [educationData, setEducationData] = useState(true);
    const [skillsData, setSkillsData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementsData, setAchievementsData] = useState(false);

    return (
        <section id='resume' className="w-full sm:h-[2180px] lg:h-[90%] py-20  border-b-[1px] border-black">

            <div className='flex justify-center items-center text-center'>
                <Title title="Fresher"
                    des="My Resume" />
            </div>

            <div>
                <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                    <li
                        onClick={() =>
                            setEducationData(true) &
                            setSkillsData(false) &
                            setExperienceData(false) &
                            setAchievementsData(false)
                        }
                        className={`${educationData
                            ? "border-[1px] border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >Education</li>

                    {/* <li className='resumeLi'>Education</li> */}
                    <li onClick={() =>
                        setEducationData(false) &
                        setSkillsData(true) &
                        setExperienceData(false) &
                        setAchievementsData(false)}
                        className={`${skillsData ? "border-[1px] border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Professional Skills</li>

                    <li onClick={() =>
                        setEducationData(false) &
                        setSkillsData(false) &
                        setExperienceData(true) &
                        setAchievementsData(false)}
                        className={`${experienceData ? "border-[1px] border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Experience</li>

                    <li onClick={() =>
                        setEducationData(false) &
                        setSkillsData(false) &
                        setExperienceData(false) &
                        setAchievementsData(true)}
                        className={`${achievementsData ? "border-[1px] border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Achievements</li>
                </ul>
            </div>
            {
                educationData && <Education />
            }
            {
                skillsData && <Skills />
            }
            {
                experienceData && <Experience />
            }
            {
                achievementsData && <Achievements />
            }

        </section>
    );
};

export default Resume;