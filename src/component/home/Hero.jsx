"use client"
import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import Icons from './Icon';
const Hero = ({ setOpenSideBar, openSideBar }) => {

    const [isExpanded, setIsExpanded] = useState(false);


    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='w-full min-h-screen bg-hero-suman bg-opacity-70 relative bg-cover bg-no-repeat bg-red-500'>
            <span className='absolute z-50 top-4 right-4 text-3xl' onClick={() => setOpenSideBar(!openSideBar)}>
                <Icons icon={'menuIcon'} className={'w-9 h-9'} />
            </span>
            <span className='bg-black w-full h-full bg-opacity-45 absolute top-0 left-0 block'></span>
            <div className='max-w-[1140px] relative z-40 px-4 mx-auto flex flex-col justify-center min-h-screen'>
                <p className='text-6xl text-gray-100 font-semibold left-4'>Suman Dahiya</p>
                <span
                    className="text-4xl  z-10 top-[370px] left-7 text-white flex items-center space-x-2"
                >
                    <span>I'm</span>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('developer')
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString('designer')
                                .pauseFor(2500)
                                .deleteAll()
                                .start();
                        }}
                        options={{
                            loop: true,
                        }}
                    />
                </span>
            </div>
        </div>
    )
}

export default Hero