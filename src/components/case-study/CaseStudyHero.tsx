"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface CaseStudyHeroProps {
  project: Project;
}

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{
            background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="page-container relative">
        {/* Back link */}
        <motion.a
          href="/work"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-body-sm text-neutral-500 hover:text-neutral-900
                     dark:text-neutral-400 dark:hover:text-white transition-colors duration-300 mb-12"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13 8H3M7 4L3 8l4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Work
        </motion.a>

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span
            className="px-3 py-1 text-xs font-medium rounded-full"
            style={{
              backgroundColor: project.color + "15",
              color: project.color,
            }}
          >
            {project.category}
          </span>
          <span className="text-caption uppercase tracking-widest text-neutral-400">
            {project.industry}
          </span>
          <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
          <span className="text-caption text-neutral-400">{project.year}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-md sm:text-display-lg font-display max-w-4xl mb-6"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-body-lg text-neutral-500 dark:text-neutral-400 max-w-3xl mb-12"
        >
          {project.shortDescription}
        </motion.p>

        {/* Project details grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-t border-b border-neutral-200 dark:border-neutral-800"
        >
          {[
            { label: "Role", value: project.role },
            { label: "Duration", value: project.duration },
            { label: "Team", value: project.team },
            { label: "Tools", value: project.tools.join(", ") },
          ].map((detail) => (
            <div key={detail.label}>
              <p className="text-caption uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-1">
                {detail.label}
              </p>
              <p className="text-body-sm font-medium">{detail.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
