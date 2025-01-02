import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS styles import

const Skills = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation runs only once
      easing: 'ease-in-out', // Smooth animation effect
    });
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col md:items-start items-center py-10 px-5 min-h-[400px] bg-teal-50 mb-4">
      {/* Header Section */}
      <div className="flex flex-col md:px-10 md:items-start gap-6" data-aos="fade-up">
        <p className="text-4xl font-bold">Skills</p>
        <div className="w-16 py-[2px] bg-blue-500"></div>
        <p className="text-gray-700">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      {/* Skills Section */}
      <div className="w-full flex flex-wrap justify-center gap-10 mt-8">
        {/* Column 1 */}
        <div className="flex flex-col gap-6 w-full md:w-[45%]" data-aos="fade-up" data-aos-delay="100">
          {/* HTML */}
          <div className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <p>HTML</p>
              <p>100%</p>
            </div>
            <div className="w-full h-[10px] bg-gray-200 rounded">
              <div className="w-full h-full bg-blue-500 rounded"></div>
            </div>
          </div>

          {/* CSS */}
          <div className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <p>CSS</p>
              <p>90%</p>
            </div>
            <div className="w-full h-[10px] bg-gray-200 rounded">
              <div className="w-[90%] h-full bg-blue-500 rounded"></div>
            </div>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <p>JavaScript</p>
              <p>75%</p>
            </div>
            <div className="w-full h-[10px] bg-gray-200 rounded">
              <div className="w-[75%] h-full bg-blue-500 rounded"></div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6 w-full md:w-[45%]" data-aos="fade-up" data-aos-delay="200">
          {/* Tailwind CSS */}
          <div className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <p>Tailwind CSS</p>
              <p>85%</p>
            </div>
            <div className="w-full h-[10px] bg-gray-200 rounded">
              <div className="w-[85%] h-full bg-blue-500 rounded"></div>
            </div>
          </div>

          {/* React JS */}
          <div className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <p>React JS</p>
              <p>70%</p>
            </div>
            <div className="w-full h-[10px] bg-gray-200 rounded">
              <div className="w-[70%] h-full bg-blue-500 rounded"></div>
            </div>
          </div>

          {/* Next JS */}
          <div className="flex flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <p>Next JS</p>
              <p>55%</p>
            </div>
            <div className="w-full h-[10px] bg-gray-200 rounded">
              <div className="w-[55%] h-full bg-blue-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
  