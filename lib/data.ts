import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import breifly from "@/public/briefly.png";
import skipify from "@/public/skipify.jpg";
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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Engineer",
    location: "F&L - Remote",
    description:
      "Fullstack Engineer for a digital agency based in London. I Worked on the briefly and Omni project.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022 - Oct 2023",
  },
  {
    title: "Software Engineer",
    location: "Punch.Co - Remote",
    description:
      "I worked for 2 year in a Fintech silicon valley startup(Skipify). Developed and Owned their merchant service from scratch.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2020 - Jul 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "BCD apps - KDH, AFG",
    description:
      "Worked For a website development agency and built fetures for multiple clients.",
    icon:React.createElement(CgWorkAlt),
    date: "Oct 2019 - Jan 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Briefly",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Next.js", "TypeScript", "Nest.js","MongoDB", "Redux", "styled-components"],
    imageUrl: breifly,
  },
  {
    title: "Skipify",
    description:
      "Fintech application to make payments frictionless for e-commerce bussiness owners",
    tags: ["React", "Next.js", "Tailwind", "Node.js", "Django", "PostgreSQL"],
    imageUrl: skipify,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Ruby-on-Rails", "SQL", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Ruby on Rails",
  "Framer Motion",
] as const;
