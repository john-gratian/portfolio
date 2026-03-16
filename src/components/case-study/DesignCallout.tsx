"use client";

import { motion } from "framer-motion";
import type { DesignDecision } from "@/data/projects";

interface DesignCalloutProps {
  decisions: DesignDecision[];
}

export default function DesignCallout({ decisions }: DesignCalloutProps) {
  if (decisions.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-caption uppercase tracking-widest text-sunset-500 mb-2">
            Design Decisions
          </p>
          <h2 className="text-2xl font-display">Why we made these choices</h2>
        </motion.div>

        <div className="space-y-6">
          {decisions.map((decision, i) => (
            <motion.div
              key={decision.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-xl
                         bg-white dark:bg-neutral-800/50
                         border-l-4 border-sunset-400
                         shadow-sm"
            >
              <h4 className="text-lg font-semibold mb-3">{decision.title}</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-caption uppercase tracking-widest text-neutral-400 mb-1">
                    Rationale
                  </p>
                  <p className="text-body-sm text-neutral-600 dark:text-neutral-400">
                    {decision.rationale}
                  </p>
                </div>
                <div>
                  <p className="text-caption uppercase tracking-widest text-sunset-500 mb-1">
                    Outcome
                  </p>
                  <p className="text-body-sm text-neutral-600 dark:text-neutral-400">
                    {decision.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
