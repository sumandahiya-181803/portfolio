"use client"
import React, { useState } from 'react'
import Services from '../home/Services'
import SideBar from '../common/SideBar'
import AboutMe from '../home/AboutMe'
import Hero from '../home/Hero'
import Search from '../home/Search'
import Skills from '../home/Skills'
import ResumeComponent from '../home/Resume'
import Portfolio from '../home/Portfolio'
import Contact from '../home/Contact'
// import PopUp from '../home/Pop-up'

const HomePage = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className='flex w-full'>
      <div className={`fixed top-0 lg:left-0 duration-300 z-[1000] ${openSideBar ? "left-0" : "-left-[320px]"}`}>
        <SideBar />
      </div>
      <div className="w-full lg:w-[calc(100vw-320px)] lg:ml-[320px]">
        <Hero setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />
        <AboutMe />
        <Search />
        <Skills />
        <ResumeComponent />
        <Portfolio />
        <Services />
        <Contact />
      
      </div>
    </div>
  )
}

export default HomePage