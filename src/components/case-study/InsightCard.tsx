"use client";

import { motion } from "framer-motion";
import type { Insight } from "@/data/projects";

interface InsightCardProps {
  insight: Insight;
  index: number;
}

export default function InsightCard({ insight, index }: InsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative p-6 sm:p-8 rounded-xl bg-white dark:bg-neutral-800/50
                 border border-neutral-200/80 dark:border-neutral-700/50
                 hover:border-sunset-300 dark:hover:border-sunset-700
                 transition-colors duration-300"
    >
      {/* Number indicator */}
      <span className="text-caption font-mono text-sunset-500 mb-4 block">
        {String(index + 1).padStart(2, "0")}
      </span>

      <h4 className="text-lg font-semibold mb-3">{insight.title}</h4>
      <p className="text-body-sm text-neutral-500 dark:text-neutral-400">
        {insight.description}
      </p>
    </motion.div>
  );
}
