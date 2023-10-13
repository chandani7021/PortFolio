import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { DiDatabase, DiGit, DiPython } from "react-icons/di";
import { SiProgress } from "react-icons/si";
import { FaGlobe, FaCode } from "react-icons/fa";

const Features = () => {
    return (
        <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>

            <Title title="Features" des="What I Do" />
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>

                <Card title1="Fullstack Web" title2="Development"
                    des="I possess a comprehensive skill set that allows me to build entire web applications independently."
                    icon={<SiProgress />} />

                <Card title1="Web" title2="Development" des="I Craft interactive and user-centric web applications to enhance online experiences."
                    icon={<FaGlobe />} />

                <Card title1="Database" title2="Management"
                    des="I have a strong command of database systems, including SQL and NoSQL databases."
                    icon={<DiDatabase />} />



                <Card title1="Machine" title2=" Learning"
                    des="I Harness data-driven insights to build intelligent systems and predictive models."
                    icon={<FaCode />} />

                <Card title1="Python" title2="Development"
                    des="I am proficient in utilizing Python for web development, data analysis, and more"
                    icon={<DiPython />} />

                <Card title1="Vesion" title2=" Control"
                    des="I Ensure collaborative and error-free code management with version control systems like Git"
                    icon={<DiGit />} />
            </div>
        </section>

    )
}

export default Features