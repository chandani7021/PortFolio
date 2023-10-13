import React, { useState } from 'react';
import Title from '../layouts/Title';
import Slider from 'react-slick';
import { RiStarFill } from "react-icons/ri"
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';
import { testmonialOne, testimonialTwo, quote } from '../../assets/index';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        >
            <HiArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
            onClick={onClick}
        >
            <HiArrowLeft />
        </div>
    );
}

const Testimonial = () => {
    const [dotActive, setDocActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        beforeChange: (prev, next) => {
            setDocActive(next);
        },
        appendDots: (dots) => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                }}
            >
                <ul
                    style={{
                        display: "flex",
                        gap: "15px",
                        justifyContent: "center",
                        margin: "0px 0px -40px 0px",
                    }}
                >
                    {" "}
                    {dots}{" "}
                </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={
                    i === dotActive
                        ? {
                            width: "12px",
                            height: "12px",
                            color: "blue",
                            background: "#36b3e0",
                            borderRadius: "50%",
                            cursor: "pointer",
                        }
                        : {
                            width: "12px",
                            height: "12px",
                            color: "blue",
                            background: "gray",
                            borderRadius: "50%",
                            cursor: "pointer",
                        }
                }
            ></div>
        ),
    };

    return (
        <section id='testimonial' className="w-full py-20 border-b-[1px] border-black">

            <div className='flex justify-center items-center text-center'>
                <Title title="What they Say"
                    des="Testimonials" />
            </div>

            <div className='max-w-6xl mx-auto'>
                <Slider {...settings}>
                    <div className='w-full'>
                        <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
                            <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center'>
                                <img
                                    className='h-72 md:h-32 lgl:h-72 rounded-lg object-cover'
                                    src={testmonialOne} alt="testimonialOne" />

                                <div>
                                    <p className='text-xs uppercase text-designColor tracking-wide mb-2'>
                                        Company Name
                                    </p>
                                    <h3 className='text-2xl font-bold'>Name</h3>
                                    <p className='text-base tracking-wide text-gray-500'>
                                        Role
                                    </p>
                                </div>

                            </div>

                            <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>
                                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                                <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-4 rounded-lg flex flex-col justify-center gap-4 lgl:p-8 lgl:gap-8'>
                                    <div className='flex justify-between lgl:items-center py-6 border-b-2 border-b-gray-900'>
                                        <div>
                                            <h3 className='text-xl lgl:text-2xl font-medium tracking-wide'>
                                                {" "}
                                                work you did
                                            </h3>
                                            <p className='text-base text-gray-400 mt-3'>
                                                {" "} via upwork - from - to date
                                            </p>
                                        </div>

                                        <div className='text-yellow-500 flex gap-1'>
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
                                        There testimonial about you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='w-full'>
                        <div className='w-full h-auto flex flex-col lgl:flex-row justify-between'>
                            <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center'>
                                <img
                                    className='h-72 md:h-32 lgl:h-72 rounded-lg object-cover'
                                    src={testimonialTwo} alt="testimonialTwo" />

                                <div>
                                    <p className='text-xs uppercase text-designColor tracking-wide mb-2'>
                                        Company Name
                                    </p>
                                    <h3 className='text-2xl font-bold'>Name</h3>
                                    <p className='text-base tracking-wide text-gray-500'>
                                        Role
                                    </p>
                                </div>

                            </div>

                            <div className='w-full lgl:w-[60%] h-full flex flex-col justify-between'>
                                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                                <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne  p-4 lgl:p-8 rounded-lg flex flex-col justify-center gap-4 lgl:gap-8'>
                                    <div className='flex justify-between ilgl:tems-center py-6 border-b-2 border-b-gray-900'>
                                        <div>
                                            <h3 className='text-xl lgl:text-2xl font-medium tracking-wide'>
                                                {" "}
                                                work you did
                                            </h3>
                                            <p className='text-base text-gray-400 mt-3'>
                                                {" "} via upwork - from - to date
                                            </p>
                                        </div>

                                        <div className='text-yellow-500 flex gap-1'>
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                            <RiStarFill />
                                        </div>
                                    </div>
                                    <p className='text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6'>
                                        There testimonial about you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </Slider>
            </div>
        </section>
    )
}

export default Testimonial