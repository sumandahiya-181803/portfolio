'use client'; // Mark this file as a client component

import React, { useState } from 'react';
import Icons from './Icon';
import Link from 'next/link';

const Hero = () => {
  // State to track if the menu is open or not
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mx-auto max-w-full px-4 md:px-0 md:w-full md:max-w-[1140px] flex flex-col items-center">
      {/* Header Section */}
      <div className="flex flex-row w-full justify-between items-center py-4">
        {/* Logo/Icon */}
        <Icons icon="aboutIcon" className="text-sky-600 md:w-12 md:h-10 w-7 h-7 custom-icon-color" />

        {/* Desktop Navigation Links */}
        <div className="md:flex hidden gap-8">
          <Link href="/">
            <span className="text-sky-400 text-base md:text-lg hover:underline cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="text-sky-400 text-base md:text-lg hover:underline cursor-pointer">
              About Me
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-sky-400 text-base md:text-lg hover:underline cursor-pointer">
              Contact Me
            </span>
          </Link>
        </div>
        <div className="md:hidden cursor-pointer" >
          <Icons icon="menuIcon" className="w-6 h-6 text-sky-600" onClick={() => setIsOpen(true)} />
        </div>
        <div className={`fixed top-0 right-0 w-full h-full bg-black z-50 flex flex-col items-center justify-center 
            duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

          <div className=" text-white cursor-pointer" onClick={() => setIsOpen(false)}>
            <div className='flex flex-col justify-center items-center w-full h-full right-0 top-0'>
              {/* <Link to="/home" className="text-gray-700 text-base lg:text-[16px] mt-6">Home</Link> */}
              {/* <Link to="/blog" className="text-gray-700 text-base lg:text-[16px] mt-6">Blog</Link> */}
              {/* <Link to="/singlepost" className="text-gray-700 text-base lg:text-[16px] mt-6">Single Post</Link> */}
              {/* <Link to="/Location" className="text-gray-700 text-base lg:text-[16px] mt-6">Location</Link> */}
              {/* <Link to="/contact" className="text-gray-700 text-base lg:text-[16px] mt-6">Contact</Link> */}
            </div>
            <div className='p-0 absolute top-4 right-4'>
              <Icons icon='crossIcon' />
            </div>

          </div>
        </div>

      </div>


    </div>
  );
};

export default Hero;
