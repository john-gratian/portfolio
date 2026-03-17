"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import type { BehavioralInsight } from "@/data/projects";

interface Props {
  insights: BehavioralInsight[];
}

export default function BehavioralInsights({ insights }: Props) {
  return (
    <section className="section-spacing bg-neutral-50 dark:bg-neutral-900/50">
      <div className="page-container">
        <SectionHeading
          label="Behavioral Insights"
          title="Psychological patterns observed in users"
          description="Through behavioral research, I identified the cognitive and emotional patterns driving user behavior in this project."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, i) => (
            <motion.div
              key={insight.pattern}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative p-8 rounded-2xl bg-white dark:bg-neutral-800/50
                         border border-neutral-200/80 dark:border-neutral-700/50"
            >
              {/* Brain icon */}
              <div className="w-10 h-10 rounded-full bg-sunset-100 dark:bg-sunset-900/30 flex items-center justify-center mb-5">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sunset-600 dark:text-sunset-400"
                >
                  <path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4 7.5L12 20l-3-3.5C7 14.5 5 12 5 9a7 7 0 0 1 7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold mb-3">{insight.pattern}</h3>
              <p className="text-body-md text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {insight.observation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
