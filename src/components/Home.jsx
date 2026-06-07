import React from 'react'
import { Link } from "react-scroll";


import Typewriter from "typewriter-effect";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-50 text-lg">Hi, I am</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#00FFCA]">
    Lezti Martinez
        </h1>
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-zinc-50 pt-2 flex">
            <span className='mr-2'>I am </span>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("an AI & Spatial Analytics Specialist")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("")
                  .start();
              }}
            />
          </h2>
        </div>
        <p className="text-gray-300 py-4 leading-8">
        Experienced professional with a strong foundation in Applied Mathematics and Statistics, backed by 5+ years of enterprise experience in Data Analytics, AI Engine Optimization, and data-driven QGIS workflows. Expert in evaluating foundational LLMs and engineering multi-layered spatial data pipelines for specialized technical domains.
        </p>
        <div className="mt-4 mx">
        <button  className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
          >
          <Link to='contact' smooth={true} duration={500}>Hire Me</Link>
        </button>
         
        </div>
        <div className="mt-4">
              <button
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
              >
                 <a href='https://docs.google.com/document/d/1B54_dox9OzKUISbFDxlM_Xq0ZPd87-Nj/edit' >Resume</a>
                
              </button>
            </div>
        
      </div>
    </div>
  );
}

export default Home;