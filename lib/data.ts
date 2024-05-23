import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Computer Applications",
    location: "JMIT",
    description:
      "I dropped out of college after one year. I immediately started learning web development on my own, then after six months got a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Snowflakes Software Private Limited",
    description: "Here i worked as a junior react developer for one year.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2021 - April 2022",
  },
  {
    title: "Front-End Developer",
    location: "SoftRadix Technologies Pvt Ltd",
    description:
      "Here I handled many projects in React and Next.js. I also got an opportunity to work in Three.js project. So from past six months i am exploring on Three.js as well.",
    icon: React.createElement(FaReact),
    date: "May 2022 - May 2024",
  },
] as const;

export const projectsData = [
  {
    title: "3D Shirt Configurator",
    description:
      "I worked as a front-end developer on this project for 6 months. Users can customize their costumes in realtime with the 3d model.",
    tags: ["React", "Three.js", "SCSS", "Zustand", "Framer"],
    imageUrl: "/project1.png",
    link: "https://3d-shirt-configurator.netlify.app/",
  },
  {
    title: "IPhone Landing Page",
    description:
      "This project featuring an interactive 3D model of an iPhone with smooth animations powered by Three.js and GSAP",
    tags: ["React", "Three.js", "GSAP", "Webgi", "Framer"],
    imageUrl: "/project3.png",
    link: "https://3d-iphone-landing-page.netlify.app/",
  },
  {
    title: "Ai Image Generator",
    description:
      "Transform text into stunning images with this React.js-powered AI Image Generator, fueled by OpenAI's DALL·E 3",
    tags: ["React", "Open AI", "SCSS", "Framer"],
    imageUrl: "/project2.png",
    link: "https://openai-gallary.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Three.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;
