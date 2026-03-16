"use client";

import { motion } from "framer-motion";
import InsightCard from "./InsightCard";
import type { Project } from "@/data/projects";

interface ResearchInsightsProps {
  research: Project["research"];
}

export default function ResearchInsights({ research }: ResearchInsightsProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="page-container">
        {/* Section header */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-caption uppercase tracking-widest text-sunset-500 mb-2">
              User Research
            </p>
            <h2 className="text-2xl font-display">
              What we discovered
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-body-lg text-neutral-600 dark:text-neutral-400 mb-6">
              {research.description}
            </p>

            {/* Research methods */}
            <div className="flex flex-wrap gap-2">
              {research.methods.map((method) => (
                <span
                  key={method}
                  className="px-3 py-1 text-xs font-medium rounded-full
                             bg-neutral-100 dark:bg-neutral-800
                             text-neutral-600 dark:text-neutral-400"
                >
                  {method}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Insight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {research.insights.map((insight, i) => (
            <InsightCard key={insight.title} insight={insight} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
