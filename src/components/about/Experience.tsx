"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const experiences = [
  {
    role: "Senior UX Designer — Behavioral Design Lead",
    company: "Company Name",
    period: "2023 — Present",
    description:
      "Leading UX design with a behavioral science lens. Applying cognitive psychology principles to product strategy, conducting behavioral research, and mentoring designers on psychology-driven design methods.",
  },
  {
    role: "UX Designer & Behavioral Researcher",
    company: "Company Name",
    period: "2021 — 2023",
    description:
      "Designed across mobile and web platforms using mental model mapping and decision-journey analysis. Introduced behavioral analytics to measure psychological engagement beyond traditional metrics.",
  },
  {
    role: "UI/UX Designer",
    company: "Company Name",
    period: "2019 — 2021",
    description:
      "Created responsive interfaces grounded in cognitive load theory. Built a design system informed by Gestalt principles and perceptual psychology, used across 5 products.",
  },
  {
    role: "Masters in Clinical Psychology",
    company: "University",
    period: "2017 — 2019",
    description:
      "Specialized in human cognition, behavioral assessment, and psychometric research. Developed expertise in understanding decision-making patterns, motivation, and emotional regulation — the foundation of my design practice.",
  },
];

const tools = [
  "Figma",
  "Sketch",
  "Adobe XD",
  "Miro",
  "Maze",
  "Hotjar",
  "Principle",
  "ProtoPie",
  "Storybook",
  "Notion",
  "Jira",
  "Dovetail",
];

export default function Experience() {
  return (
    <>
      {/* Experience */}
      <section className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="page-container">
          <SectionHeading label="Experience" title="Where I've worked" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-8 py-8 border-b border-neutral-200 dark:border-neutral-800 last:border-b-0"
              >
                <div>
                  <p className="text-body-sm text-neutral-400 dark:text-neutral-500">
                    {exp.period}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{exp.role}</h3>
                  <p className="text-body-sm text-sunset-600 dark:text-sunset-400 mb-3">
                    {exp.company}
                  </p>
                  <p className="text-body-md text-neutral-500 dark:text-neutral-400">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 sm:py-24">
        <div className="page-container">
          <SectionHeading label="Tools" title="What I work with" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="px-5 py-2.5 text-body-sm font-medium rounded-full
                           bg-neutral-100 dark:bg-neutral-800
                           border border-neutral-200 dark:border-neutral-700
                           hover:border-sunset-300 dark:hover:border-sunset-700
                           transition-colors duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
