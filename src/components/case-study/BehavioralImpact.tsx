"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import type { BehavioralImpactItem } from "@/data/projects";

interface Props {
  items: BehavioralImpactItem[];
}

export default function BehavioralImpact({ items }: Props) {
  return (
    <section className="section-spacing bg-neutral-50 dark:bg-neutral-900/50">
      <div className="page-container">
        <SectionHeading
          label="Behavioral Impact"
          title="How user behavior changed after design"
          description="The true measure of behavioral design isn't just metrics — it's observable shifts in how people think, feel, and act."
        />

        <div className="space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={item.behavior}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center p-8 rounded-2xl
                         bg-white dark:bg-neutral-800/50
                         border border-neutral-200/80 dark:border-neutral-700/50"
            >
              {/* Before */}
              <div>
                <span className="text-caption uppercase tracking-widest text-red-400 dark:text-red-500 block mb-2">
                  Before
                </span>
                <p className="text-body-md text-neutral-500 dark:text-neutral-400">
                  {item.before}
                </p>
              </div>

              {/* Arrow + Behavior Label */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-semibold text-center px-4 py-1.5 rounded-full bg-sunset-100 dark:bg-sunset-900/30 text-sunset-700 dark:text-sunset-300 whitespace-nowrap">
                  {item.behavior}
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-sunset-500 rotate-90 md:rotate-0"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* After */}
              <div>
                <span className="text-caption uppercase tracking-widest text-emerald-500 dark:text-emerald-400 block mb-2">
                  After
                </span>
                <p className="text-body-md font-medium text-neutral-700 dark:text-neutral-300">
                  {item.after}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
