// components/ResumeComponent.js
'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { PROJECT_DATA_LIST } from './Helper';

const ResumeComponent = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-in-out',
        });
    }, []);

    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Node.js'];

    return (
        <div className='flex w-full max-w-[1440px] mx-auto flex-col gap-2 py-10 px-10'>
            <h1 className="text-3xl font-semibold text-gray-800" data-aos="fade-right">Resume</h1>
            <div className="w-16 py-[2px] bg-blue-500" data-aos="zoom-in"></div>
            <p className='text-gray-700 text-lg' data-aos="fade-up">
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
            <div className="w-full md:flex gap-8 py-4 mx-auto">
                {/* Summary and Education Section */}
                <div className='flex md:w-[45%] gap-3 flex-col' data-aos="fade-left">
                    <div className="mb-6 w-full">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-1 mb-4">Summary</h2>
                        <p className="text-gray-700">
                            Enthusiastic web developer with a strong foundation in frontend and backend technologies. Eager to learn and contribute to real-world projects while honing my skills in modern web development tools and practices.
                        </p>
                    </div>
                    <div className="mb-6 flex flex-col gap-2" data-aos="fade-up">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-1 mb-4">Education</h2>
                        <li className="md:text-2xl text-[18px]">Master of Computer Science</li>
                        <p className='text-base text-gray-700 ml-7 font-semibold'>2022-2024</p>
                        <p className='md:text-lg ml-7'>Chaudhary BansiLal University, BHIWANI</p>
                        <li className="md:text-2xl text-[18px]">Bachelor of Computer Science</li>
                        <p className='text-base text-gray-700 font-semibold ml-7'>2017-2020</p>
                        <p className='md:text-lg ml-7'>Rajiv Gandhi Collage for Women (CBLU), BHIWANI</p>
                    </div>
                </div>
                {/* Projects Section */}
                <div className='md:w-[50%]' data-aos="fade-right">
                    <div className="mb-6 w-full gap-4 flex flex-col">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-1 mb-4">Projects</h2>
                        <div className="space-y-4">
                            {PROJECT_DATA_LIST.map((obj, i) => (
                                <div
                                    key={i}
                                    className="bg-gray-200 p-4 rounded-md shadow-sm"
                                    data-aos="flip-up"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800">{obj.title}</h3>
                                    <p className="text-gray-600">{obj.description}</p>
                                    {/* <Link href={obj.link} target="_blank" className="text-blue-500 cursor-pointer">View Project</Link> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeComponent;
