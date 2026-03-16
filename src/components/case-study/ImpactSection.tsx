"use client";

import { motion } from "framer-motion";
import MetricsCard from "./MetricsCard";
import type { Metric } from "@/data/projects";

interface ImpactSectionProps {
  metrics: Metric[];
  accentColor: string;
}

export default function ImpactSection({ metrics, accentColor }: ImpactSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-caption uppercase tracking-widest text-sunset-500 mb-2">
            Impact &amp; Results
          </p>
          <h2 className="text-2xl sm:text-3xl font-display">
            Measurable outcomes
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <MetricsCard
              key={metric.label}
              metric={metric}
              index={i}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
