"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="section-spacing">
      <div className="page-container">
        <SectionHeading
          label="Selected Work"
          title="Projects that made an impact"
          description="A selection of case studies showcasing research-driven design thinking and measurable outcomes."
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div
                  className="relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900
                              border border-neutral-200/50 dark:border-neutral-800/50
                              transition-all duration-500 hover:border-neutral-300 dark:hover:border-neutral-700"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <div
                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundColor: project.color + "15" }}
                      >
                        {/* Placeholder gradient — replace with actual image */}
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            background: `linear-gradient(135deg, ${project.color}33 0%, transparent 70%)`,
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="text-6xl font-display opacity-20"
                            style={{ color: project.color }}
                          >
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-caption uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                          {project.category}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                        <span className="text-caption uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                          {project.industry}
                        </span>
                      </div>

                      <h3 className="text-display-sm font-display mb-3 group-hover:text-sunset-500 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-body-md text-neutral-500 dark:text-neutral-400 mb-6">
                        {project.shortDescription}
                      </p>

                      <p className="text-body-sm font-medium text-sunset-600 dark:text-sunset-400">
                        {project.outcome}
                      </p>

                      <div className="mt-8 flex items-center gap-2 text-body-sm font-medium group-hover:text-sunset-500 transition-colors duration-300">
                        <span>View Case Study</span>
                        <motion.svg
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
                        </motion.svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
