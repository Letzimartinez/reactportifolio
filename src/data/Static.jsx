import html from "../assets/langues/HTML.png";
import angular from "../assets/langues/angular.png";
import reactLangue from "../assets/langues/react.png";
import django from "../assets/langues/django.png";

import css from "../assets/langues/css.png";

import js from "../assets/langues/js.png";

import bootstrap from "../assets/langues/bootstrap.png";
import c from "../assets/langues/c.png";
import py from "../assets/langues/py.png";
import php from "../assets/langues/php.png";
import java from "../assets/langues/java.png";
//import dekut from "../assets/dekut.png";
import garage from "../assets/garage.png";
import hosi from"../assets/hosi.png";
//import ibm from "../assets/ibm.png";
import hotel from"../assets/hotel.png";
import travel from"../assets/travel.png";
//import net from "../assets/net.png";
//import cisco from "../assets/cisco.jpg"
// Array of work objects
export const works = [
  {
    title: "Lake Hamrin Multi-Temporal Spatial & Environmental Risk Analysis",
    imgUrl:hosi,
   tech: ["An analytical case study mapping regional archaeological and distribution nodes against multi-temporal environmental indicators in the Lake Hamrin basin. This project demonstrates the synthesis of complex vector data, historical layouts, and remote sensing imagery to evaluate long-term environmental vulnerability.","QGIS", "Georeferencing & Spatial Alignment", "Remote Sensing Data Arrays"],
   
    duration: "400",
  },

  {
    title: "Dynamic GeoPackage (GPKG) Data Mapping & Spatial Visualization",
    imgUrl: garage,
    
    tech: ["An advanced spatial layout project focused on embedding multimedia elements directly within structured GIS file formats. This project demonstrates how to optimize database storage by packing relational image binaries directly inside a single GeoPackage (.gpkg) file and rendering them dynamically on an interactive map layout.","Spatial Databases", "QGIS", "GeoPackage (.gpkg)"],
    
    duration: "500",
  },
  {
    title: "Automated Cartographic Production & Dynamic Atlas Generation",
    imgUrl:hotel,
    tech: ["An optimization project utilizing the QGIS Atlas engine to automate spatial layer clipping and multi-page map book rendering. This workflow eliminates manual map creation by using a single coverage layer to dynamically crop background raster and vector data down to specific municipality borders.", "QGIS Atlas", "Map Layout Engine"],
    
    duration: "600",
  },
  {
    title: "Procedural Antique Cartography & Custom Symbology Styling",
    imgUrl:travel,
    tech: ["A highly stylized cartographic project recreating a vintage, historical aesthetic of South Africa's southern coast within modern GIS frameworks. This layout showcases the advanced use of custom vector styling, procedural blending modes, and advanced symbology mapping to translate standard spatial coordinates into an architectural, antique print design.", "QGIS Cartography", "Spatial Aesthetics"],
    
    duration: "700",
  },
];

// Array of experience objects
export const experiences = [
  {
    date: "2025 - PRESENT",
    company: "Enterprise AI Platforms (Outlier, Prolifc, Pareto)",
    position: "AI Evaluation & Annotation Specialist",
    description:
      "Execute rigorous AI model evaluation across advanced engineering benchmarks to validate factual accuracy,abstract reasoning, and systemic safety constraints.",
  },
  {
    date: "2021-PRESENT",
    company: "Independent Fintech & Credit Risk Advisory Services",
    position: "Strategic Data & Portfolio Consultant",
    description:
      "Audited complex enterprise consumer and SME portfolios, implementing mathematical validation frameworksthat signifcantly boosted core model reliability metrics.",
      
  },
  
];

// Array of education objects
export const works1 = [
  {
    title: "JOMO KENYATTA UNIVERSITY OF AGRICULTURE AND TECHNOLOGY",
    //imgUrl:dekut,
    tech: ["BACHELOR OF SCIENCE IN MATHEMATICS"],
    //title1:"September 2020- Current"

  },

  /*{
    title: "IBM DATA SCIENCE CERTIFICATION",
    imgUrl: ibm,
    title2:"May 2021-July 2021",
    tech: ["Data Analysis"],
   
    duration: "500",
  },*/
  /*{
    title: "IBM ",
    imgUrl:net,
    title3:"September 2021-November 2021",
    tech: ["System Administrator"],
   
    duration: "600",
  },*/
  /*{
    title: "CISCO NETWORKING",
    imgUrl:cisco,
    title4:"September 2021-November 2021",
    tech: ["Cyber Security"],
    
    duration: "700",
  },*/
];

// Array of langue objects
export const langues = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactLangue,
    title: "React",
    style: "shadow-sky-500",
  },
  
  
  {
    id: 7,
    src: angular,
    title: "Angular",
    style: "shadow-rose-500",
  },
  {
    id: 8,
    src: django,
    title: "Django",
    style: "shadow-emerald-700",
  },
  
  
  {
    id: 11,
    src: bootstrap,
    title: "Bootstrap",
    style: "shadow-violet-500",
  },
  
  {
    id: 13,
    src: py,
    title: "Python",
    style: "shadow-yellow-400",
  },

  {
    id: 14,
    src: php,
    title: "Php",
    style: "shadow-violet-400",
  },
  {
    id: 15,
    src: c,
    title: "C",
    style: "shadow-blue-400",
  },
  {
    id: 16,
    src: java,
    title: "Java",
    style: "shadow-orange-500",
  },
];
