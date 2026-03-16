"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const skillCategories = [
  {
    title: "Research & Strategy",
    skills: [
      "User Interviews",
      "Usability Testing",
      "Competitive Analysis",
      "Journey Mapping",
      "Information Architecture",
      "Survey Design",
    ],
  },
  {
    title: "Design & Prototyping",
    skills: [
      "Wireframing",
      "Visual Design",
      "Interaction Design",
      "Prototyping",
      "Design Systems",
      "Responsive Design",
    ],
  },
  {
    title: "Tools & Methods",
    skills: [
      "Figma",
      "Miro",
      "Principle",
      "Maze",
      "Hotjar",
      "Storybook",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section-spacing">
      <div className="page-container">
        <SectionHeading
          label="Capabilities"
          title="What I bring to the table"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: catIndex * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: catIndex * 0.15 + skillIndex * 0.05,
                    }}
                    className="flex items-center gap-3 text-body-md text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sunset-400 shrink-0" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
