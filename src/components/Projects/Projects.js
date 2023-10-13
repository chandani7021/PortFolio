import React from 'react';
import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';
import { projectOne, projectTwo, projectThree, projectFour, projectFive } from "../../assets/index"

const Projects = () => {
    return (
        <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center'>
                <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                <ProjectCard
                    title="Stack Overflow Clone"
                    des="The StackOverflow Clone is a web app using React.js, Redux, Node.js, and Express.js. It features user authentication, Q&A capabilities, and user profile management, mimicking key aspects of StackOverflow."
                    src={projectOne}
                    github="https://github.com/chandani7021/stackoverflow_Clone"
                    link="https://stack-overflow-clone-by-chandani.netlify.app/" />

                <ProjectCard
                    title="Music Based on Emotion"
                    des="Experience a music recommendation system that tailors songs to your emotions and preferences, making music accessible and enjoyable for all. It predicts song moods using audio and lyrics."
                    src={projectTwo}
                    github="https://github.com/chandani7021/Music-Emotion" />

                <ProjectCard
                    title="Sentiment analysis Website"
                    des="Effortlessly analyze tweet sentiments and emotions with user-defined tweet counts. Valuable for businesses and individuals, presenting results visually through pie charts for easy comprehension."
                    src={projectFour}
                    github="https://github.com/chandani7021/Twitter-Sentiment-Analysis" />

                <ProjectCard
                    title="Movie Recommendation"
                    des="Discover movies easily using React-powered Movie Recommendation frontend. Simply search by name to access movie details, including title, type, release year, and a poster image. Your next movie choice made simple."
                    src={projectThree}
                    github="https://github.com/chandani7021/Movie-Recommendation" />

                <ProjectCard
                    title="Stock Price Prediction Website"
                    des="This project uses LSTM algorithms to predict opening stock prices by analyzing live datasets, uncovering sector-specific trends and aiding in market analysis and company growth prediction."
                    src={projectFive}
                    github="https://github.com/chandani7021/Stock-Price-Prediction" />

            </div>

        </section>
    )
}

export default Projects;