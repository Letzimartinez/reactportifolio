import React, { useEffect } from "react";
//import pic from "../assets/pic1.jpg";


import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  /**
   * Handles the download button click event and downloads the resume file.
   */
  
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 dark:bg-[#21073C]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          {/* About heading */}
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          {/* Profile picture */}
          <div className="flex justify-center items-center" data-aos="fade-right" data-aos-duration="800" data-aos-easing="linear">
            {/* <img
              src={pic}
              alt=""
              className="rounded-full shadow-2xl outline-offset-8 outline-dashed outline-2"
              style={{ width: "20rem", height: "20rem" }}
            /> */}
          </div>
          {/* About content */}
          <div className="flex flex-col justify-center">
            {/* Introduction */}
            <p className="text-xl font-bold pb-2 text-[#00FFCA]">
              I am Letzi Martinez
            </p>
            {/* Description */}
            <p className="text-sm leading-7">
              
            </p>I am an analytical, metrics-driven professional with an advanced foundation in Applied Mathematics and Statistics, combined with over five years of enterprise experience spanning data analytics, predictive modeling, and computational logic validation.  My expertise lies at the intersection of quantitative analysis and spatial data design. I specialize in building data-driven QGIS workflows—transforming dense, multi-layered geographic data arrays, remote sensing rasters, and localized coordinates into clear, actionable visual insights. Whether I am auditing algorithmic frameworks or evaluating historical environmental layers, I focus on data integrity and structural precision.
           <p className="text-xl font-bold pb-2 text-[#00FFCA]"><b>What I Do:</b></p>
           <p>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-7">
  <li>
    <strong>QGIS & Spatial Analytics:</strong> Managing vector layers, georeferencing historical map layouts, and manipulating multi-temporal attribute tables.
  </li>
  <li>
    <strong>Advanced Data & AI Optimization:</strong> Engineering high-performance prompt architectures, validating algorithmic logic, and fine-tuning generative models.
  </li>
  <li>
    <strong>Quantitative Strategy:</strong> Applying descriptive and inferential statistics to refine predictive risk curves and build selection algorithms.
  </li>
  <li>
    <strong>Spatial Data Pipelines:</strong> Synthesizing environmental, demographic, and geographic data vectors for seamless mapping layers.
  </li>
</ul>
           </p>
            {/* Download resume button */}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;