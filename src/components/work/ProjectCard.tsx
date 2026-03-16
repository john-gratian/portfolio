"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={`/work/${project.slug}`} className="group block">
        <div className="relative">
          {/* Thumbnail */}
          <div
            className="relative aspect-[3/2] rounded-xl overflow-hidden mb-5
                        bg-neutral-100 dark:bg-neutral-900
                        border border-neutral-200/50 dark:border-neutral-800/50
                        transition-all duration-500
                        group-hover:border-neutral-300 dark:group-hover:border-neutral-700"
          >
            {/* Placeholder — replace with next/image when you have real images */}
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundColor: project.color + "12" }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${project.color}40 0%, transparent 70%)`,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-7xl font-display opacity-15"
                  style={{ color: project.color }}
                >
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>

            {/* Hover overlay */}
            <div
              className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10
                          dark:bg-neutral-900/0 dark:group-hover:bg-neutral-900/20
                          transition-colors duration-500"
            />

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1 text-xs font-medium rounded-full
                           bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm
                           text-neutral-700 dark:text-neutral-300"
              >
                {project.category}
              </span>
            </div>
          </div>

          {/* Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-caption uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                {project.industry}
              </span>
              <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
              <span className="text-caption text-neutral-400 dark:text-neutral-500">
                {project.year}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2 group-hover:text-sunset-500 transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-body-sm text-neutral-500 dark:text-neutral-400 mb-3 line-clamp-2">
              {project.shortDescription}
            </p>

            <p className="text-body-sm font-medium text-sunset-600 dark:text-sunset-400">
              {project.outcome}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
