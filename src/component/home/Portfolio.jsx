'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS styles import

const imageData = [
    { src: '/Assets/image/png/product1.jpg', category: 'ALL' },
    { src: '/Assets/image/png/product.jpg', category: 'APP' },
    { src: '/Assets/image/png/product3.jpg', category: 'BRANDING' },
    { src: '/Assets/image/png/product4.jpg', category: 'PRODUCT' },
    { src: '/Assets/image/png/earphone.jpg', category: 'APP' },
    { src: '/Assets/image/png/hand-shak.jpg', category: 'BRANDING' },
    { src: '/Assets/image/png/mobile.jpg', category: 'PRODUCT' },
    { src: '/Assets/image/png/product2.jpg', category: 'APP' },
    { src: '/Assets/image/png/beauty.jpg', category: 'BRANDING' },
    { src: '/Assets/image/png/book2.jpg', category: 'BOOKS' },
    { src: '/Assets/image/png/mobile2.jpg', category: 'PRODUCT' },
    { src: '/Assets/image/png/book1.jpg', category: 'BOOKS' },
];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');
    const filteredImages =
        activeCategory === 'ALL'
            ? imageData
            : imageData.filter((img) => img.category === activeCategory);

    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,  // Animation runs only once
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className='w-full max-w-[1440px] mx-auto bg-zinc-50 py-10 px-10 flex flex-col gap-5 mb-5'>
            <div className='w-full flex flex-col gap-3'>
                <p className='text-3xl font-semibold text-gray-800' data-aos="fade-up">Portfolio</p>
                <div className="w-16 py-[2px] bg-blue-500" data-aos="fade-up"></div>
                <p className='text-gray-700 text-lg' data-aos="fade-up">
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
                    alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
            </div>

            {/* Category buttons with AOS animation */}
            <div className='w-full flex gap-5 items-center justify-center text-xs md:text-lg font-semibold' data-aos="fade-up">
                {['ALL', 'APP', 'BRANDING', 'PRODUCT', 'BOOKS'].map((category) => (
                    <button
                        key={category}
                        className={`hover:text-blue-500 duration-300 ${
                            activeCategory === category ? 'text-blue-500 font-semibold' : ''
                        }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Portfolio images */}
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5'>
                {filteredImages.map((img, index) => (
                    <div
                        key={index}
                        className='relative group rounded-md overflow-hidden shadow-lg'
                        data-aos="fade-up"
                        data-aos-delay={`${index * 100}`} // Stagger the animations
                    >
                        <div className='overflow-hidden'>
                            <Image
                                src={img.src}
                                alt={`Portfolio Image ${index + 1}`}
                                width={300}
                                height={400}
                                className='w-[400px] h-[250px] object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                        </div>
                     
                        <div className="absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-center justify-center">
                            <p className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {img.category}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
