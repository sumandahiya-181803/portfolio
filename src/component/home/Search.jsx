import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS styles import
import { PROJECTS_LIST } from './Helper';
import Icons from './Icon';

const Search = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation runs only once
            easing: 'ease-in-out', // Smooth animation effect
        });
    }, []);

    return (
        <div className='w-full min-h-[300px] bg-white
         max-w-[1440px] mx-auto flex flex-col justify-center'>
            <div className="md:flex flex-col items-center py-4 w-full md:flex-row md:gap-0 justify-around px-">
                {PROJECTS_LIST.map((obj, i) => {
                    return (
                        <div 
                            key={i} 
                            className="flex items-center flex-col gap-3 group cursor-pointer" 
                            data-aos="fade-up" // AOS animation
                            data-aos-delay={`${i * 100}`} // Delay for staggered animations
                        >
                            <div className='flex items-center gap-3'>
                                <Icons icon={obj.icon} className='w-12 h-12' color={'blue-500'} />
                                <p className='md:text-5xl text-4xl font-bold text-blue-500'>{obj.range}</p>
                            </div>
                            <p className='md:text-lg text-gray-500'>{obj.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Search;
