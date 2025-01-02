import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles
import { SERVICES_DATA_LIST } from './Helper';
import Icons from './Icon';

const Services = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation will happen only once
      easing: 'ease-in-out', // Animation easing type
    });
  }, []);

  return (
    <div className='w-full max-w-[1440px] mx-auto bg-white overflow-hidden'>
      <div className="container p-4">
        {/* Header Section */}
        <div className='gap-3 flex flex-col mb-8 w-full' data-aos="fade-down">
          <h1 className="text-3xl font-semibold text-gray-800">Services</h1>
          <div className="w-16 py-[2px] bg-blue-500"></div>
          <p className="text-gray-700 text-lg">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 py-10 gap-10'>
          {SERVICES_DATA_LIST.map((obj, i) => (
            <div
              key={i}
              className='flex flex-col md:flex-row gap-3 items-center group cursor-pointer'
              data-aos="fade-up" // Animation for each service card
              data-aos-delay={i * 100} // Staggered animation
            >
              <div
                className='p-5 bg-blue-500 rounded-full duration-300 hover:cursor-pointer group-hover:bg-white border-[2px] border-blue-500'
                data-aos="zoom-in" // Animation for the icon
              >
                <Icons icon={obj.icon} className='w-7 h-7' />
              </div>
              <div className='flex flex-col gap-4'>
                <p
                  className='text-xl md:text-left text-center font-semibold duration-300 group-hover:text-blue-500'
                  data-aos="fade-right" // Animation for the title
                >
                  {obj.title}
                </p>
                <p
                  className='md:text-left text-center group-hover:text-gray-700'
                  data-aos="fade-left" // Animation for the description
                >
                  {obj.descripition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
