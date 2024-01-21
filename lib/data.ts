import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import shopeasy from "@/public/shopeasy.png"
import blog from "@/public/blog.png"
import nextAuth from "@/public/next-auth.png"
import wordanalyticsImg from "@/public/wordanalytics.png";

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
] as const;

export const experiencesData = [
  {
    title: "Student",
    location: "Coimbatore,India",
    description:
      "Successfully navigating through the dynamic academic landscape at Kikani Vidhya Mandir, I triumphantly completed both 11th and 12th grades, embodying a commitment to excellence and a passion for lifelong learning.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
  },
  {
    title: "College Student",
    location: "VIT Chennai",
    description:
      "I'm now a Student Pursuing a Bachelor's degree in Computer Science Engineering at Vellore Institute of Technology, Chennai, frontend developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma , Redux, Next Auth. I'm open to freelancing opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ShopEasy-Ecommerce",
    description:
      "I worked as a frontend developer on project for 1 month. Users can give go out on shopping on it",
    tags: ["React", "Redux", "Tailwind", "Appwrite"],
    imageUrl: shopeasy,
    linkProject: "https://shopeasyy.netlify.app/"
  },
  {
    title: "React Blog with Authentication",
    description:
      "Blog Website where Users Can Create their Own Blogs and View them.It has features like Authentication, CRUD Operations",
    tags: ["React", "JavaScript", "Tailwind", "Redux", "Appwrite"],
    imageUrl: blog,
    linkProject: "https://appwritereactblog.vercel.app/"
  },
  {
    title: "Next Auth Advanced Authentication System",
    description:
      "A public web app for Advanced Authentication System built on Next js which includes features like OAuth Provider, Forgot password and More",
    tags: ["React", "Next.js", "Prisma", "Tailwind", "Next Auth"],
    imageUrl: nextAuth,
    linkProject: "https://next-auth-krish.vercel.app/"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Redux",
  "Tailwind",
] as const;
