"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface NextProjectProps {
  project: Project;
}

export default function NextProject({ project }: NextProjectProps) {
  return (
    <section className="py-16 sm:py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="page-container text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-caption uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4"
        >
          Next Project
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Link
            href={`/work/${project.slug}`}
            className="group inline-block"
          >
            <h3 className="text-display-sm sm:text-display-md font-display group-hover:text-sunset-500 transition-colors duration-500">
              {project.title}
            </h3>
            <p className="mt-3 text-body-md text-neutral-500 dark:text-neutral-400">
              {project.shortDescription}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-body-sm font-medium group-hover:text-sunset-500 transition-colors duration-300">
              <span>View Case Study</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
