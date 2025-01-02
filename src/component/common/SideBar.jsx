import React from 'react'
import Icons from '../home/Icon'

const SideBar = () => {
  return (
    <div>
         <div className="w-[320px] md:flex gap-5 bg-black opacity-95 min-h-screen pt-10 flex-col">
                    <div className='flex items-center flex-col gap-3'>
                        <div className='border-8 border-gray-800'
                            style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                                backgroundImage: "url('/Assets/image/png/suman.jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',


                            }}
                        ></div>
                        <h1 className='text-white font-semibold text-2xl'>Suman Dahiya</h1>
                        <div className='flex items-center gap-5 cursor-pointer'>
                            <div className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-blue-500 duration-300 bg-gray-800"><Icons icon={"twrIcon"} className='w-5 h-5' />
                            </div>
                            <div className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-blue-500 bg-gray-800 duration-300">
                                <Icons icon={"inIcon"} className='w-5 h-5 ' />

                            </div>
                            <div className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-blue-500 bg-gray-800 duration-300">
                                <Icons icon={"instaIcon"} className='w-7 h-7' />

                            </div>
                            <div className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-blue-500 bg-gray-800 duration-300">
                                <Icons icon={"facebookIcon"} className='w-7 h-7' />

                            </div>
                        </div>
                    </div>
                    <div className=" flex px-8 flex-col py-6 gap-6 max-h-[60vh] overflow-auto">
                        <div className='flex items-center gap-3 text-red-500 cursor-pointer group'>
                            <Icons icon={"homeIcon"} className="w-4 h-4" />
                            <p className='text-white group-hover:text-blue-500 duration-300'>Home</p>
                        </div>
                        <div className='flex items-center text-white gap-3 cursor-pointer group'>
                            <Icons icon={"aboutIcon"} className="w-4 h-4" />
                            <p className='text-white group-hover:text-blue-500 duration-300'>About</p>
                        </div>
                        <div className='flex items-center text-white group gap-3'>
                            <Icons icon={"fileIcon"} className="w-4 h-4" />
                            <p className='text-white group-hover:text-blue-500 duration-300'>Resume</p>
                        </div>
                        <div className='flex items-center text-white group gap-3'>
                            <Icons icon={"portfolioIcon"} className="w-4 h-4" />
                            <p className='text-white group-hover:text-blue-500 duration-300'>Portfolio</p>
                        </div>
                        <div className='flex items-center text-white gap-3 group'>
                            <Icons icon={"servicesIcon"} className="w-4 h-4" />
                            <p className='text-white group-hover:text-blue-500 duration-300'>Services</p>
                        </div>
                        <div className='flex items-center text-white gap-3 group'>
                            <Icons icon={"dropdownIcon"} className="w-4 h-4" />
                            <p className='text-white group-hover:text-blue-500 duration-300'>Dropdown</p>
                        </div>
                        <div className='flex items-center mb-5 text-white gap-3 group'>
                            <Icons icon={"contactIcon"} className="w-4 h-4" />
                            <p className='text-white group-hover:text-blue-500 duration-300'>Contact</p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default SideBar