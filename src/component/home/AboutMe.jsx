import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutMe = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation occurs only once
            easing: 'ease-in-out', // Smooth animation effect
        });
    }, []);

    return (
        <div className='w-full max-w-[1440px] mx-auto bg-white'>
            <div className="container p-4">
                {/* Header Section */}
                <header className="gap-3 flex flex-col mb-8" data-aos="fade-down">
                    <h1 className="text-3xl font-semibold text-gray-800">About</h1>
                    <div className="w-16 py-[2px] bg-blue-500"></div>
                    <p className="text-gray-700 text-lg">
                        Hello! I'm [Suman Dahiya], a Web Developer with a strong foundation in front-end technologies. I specialize in creating responsive and user-friendly websites, and I’m passionate about delivering high-quality and efficient solutions.
                    </p>
                </header>

                {/* Content Section */}
                <section className="flex flex-col md:flex-row pt-4 gap-5">
                    {/* Image Section */}
                    <div
                        className="w-full sm:w-[300px] md:w-[330px] h-[350px] sm:h-[350px] md:h-[330px] shadow-xl shadow-zinc-200 bg-sky-200 relative opacity-90 rounded-lg"
                        style={{
                            backgroundImage: "url('/Assets/image/png/suman.jpg')",
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        data-aos="zoom-in" // Animation for the image
                    ></div>

                    {/* Text Content Section */}
                    <div className="flex flex-col gap-7 w-full">
                        <p className="text-3xl font-semibold" data-aos="fade-right">
                            UI/UX Designer & Web Developer.
                        </p>
                        <p className="text-lg text-gray-700" data-aos="fade-up">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div className="flex flex-col gap-10">
                            {/* Info Section */}
                            <div className="flex flex-col md:flex-row w-full items-start gap-5">
                                <ul
                                    className='list-disc text-gray-700 w-full px-4 md:px-4 md:w-[50%] flex flex-col gap-5'
                                    data-aos="fade-left"
                                >
                                    <li className='font-bold'>Birthday: <span className='font-normal'>27 feb 1998</span></li>
                                    <li className='font-bold'>Age: <span className='font-normal'>25</span></li>
                                    <li className='font-bold'>Website: <span className='font-normal'>www.example.com</span></li>
                                    <li className='font-bold'>Degree: <span className='font-normal'>Master</span></li>
                                </ul>
                                <ul
                                    className='list-disc text-gray-700 w-full px-4 md:px-0 md:w-[50%] flex flex-col gap-5'
                                    data-aos="fade-right"
                                >
                                    <li className='font-bold'>Phone: <span className='font-normal'>+91 8059181803</span></li>
                                    <li className='font-bold'>Email: <span className='font-normal'>email@example.com</span></li>
                                    <li className='font-bold'>City: <span className='font-normal'>Bhiwani</span></li>
                                    <li className='font-bold'>Freelance: <span className='font-normal'>Available</span></li>
                                </ul>
                            </div>

                            {/* Description Section */}
                            <p className='text-lg' data-aos="fade-up">
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis <br />
                                et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime <br />
                                officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutMe;
