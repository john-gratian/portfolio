"use client";

import { motion } from "framer-motion";
import type { Metric } from "@/data/projects";

interface MetricsCardProps {
  metric: Metric;
  index: number;
  accentColor: string;
}

export default function MetricsCard({ metric, index, accentColor }: MetricsCardProps) {
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
      className="text-center p-6 sm:p-8 rounded-xl
                 bg-white dark:bg-neutral-800/50
                 border border-neutral-200/80 dark:border-neutral-700/50"
    >
      <motion.p
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        className="text-3xl sm:text-4xl font-bold mb-2"
        style={{ color: accentColor }}
      >
        {metric.value}
      </motion.p>
      <p className="text-sm font-semibold mb-1">{metric.label}</p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">
        {metric.description}
      </p>
    </motion.div>
  );
}
