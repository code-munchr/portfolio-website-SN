"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm passionate <span className="font-medium">Problem Solver</span> with and satiable desire for learning.{" "}
        I have mostly worked e-commerce and fintech Projects.{" "}
        My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Nest.js, PostgreSQL and MongoDB
        </span>. I'm Proficient with TypeScript and Prisma and I'm always looking to
        learn new technologies.
        <span className="italic"> When I'm not coding</span>, I enjoy playing
        video games, going out with friends, and listening to music.{" "}
      </p>
    </motion.section>
  );
}
