import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaTwitter, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { Icon } from '@iconify/react';


const LeftBanner = () => {

    const [text] = useTypewriter({
        words: ["Software Developer.", "Frontend Developer.", "Backend Developer.", "Full Stack Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    const url = "chandanimaurya56@gmail.com"
    const handleShare = () => {

        alert('Email address Copied ' + url)
    }

    return (
        <div className=' w-full flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>Welcome to my Portfolio!</h4>
                <h1 className='text-4xl font-bold text-white'>
                    Hi, I am {" "}
                    <span className='text-designColor capitalize'>
                        Chandani Mourya
                    </span></h1>
                <h2 className='text-2xl font-bold text-white'> a{" "}
                    <span>
                        {text}
                    </span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor='#ff014f' />
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                    I'm a coding sorcerer with a passion for bringing imaginative visions to life through lines of code. Let's embark on an innovation journey and transform your ideas into digital masterpieces that make a real impact!
                </p>
                {/* 28:42 */}
            </div>
            <div className='flex flex-col lg:flex-row justify-between gap-4'>
                <div className='w-1/2'>
                    <h2 className='text-base uppercase font-titleFont mb-4'>FIND ME IN </h2>
                    <div className='flex gap-4'>
                        <a href="https://twitter.com/MouryaChandani" target="_blank" rel="noreferrer"> <span className='bannerIcon'><FaTwitter /></span></a>
                        <a href="https://www.linkedin.com/in/chandani-mourya-8b551b191/" target="_blank" rel="noreferrer"><span className='bannerIcon'><FaLinkedinIn /></span></a>
                        <button type="button" onClick={handleShare}><span className='bannerIcon' ><FaEnvelope /></span></button>
                    </div>
                </div>

                <div className='w-1/2'>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Platforms</h2>
                    <div className='flex gap-4'>
                        <a href="https://leetcode.com/Chandani7021/" target="_blank" rel="noreferrer"><span className='bannerIcon'><Icon icon="simple-icons:leetcode" /></span></a>
                        <a href="https://www.codingninjas.com/studio/profile/Chandani777" target="_blank" rel="noreferrer"><span className='bannerIcon'><Icon icon="simple-icons:codingninjas" /></span></a>
                        <a href="https://www.hackerrank.com/Chandanimaurya56" target="_blank" rel="noreferrer"><span className='bannerIcon'><Icon icon="simple-icons:hackerrank" /></span></a>
                        {/* <span className='bannerIcon'><SiNextdotjs /></span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBanner