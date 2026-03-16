"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { JourneyStep } from "@/data/projects";

interface UserJourneyProps {
  steps: JourneyStep[];
}

const emotionColors = {
  positive: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800",
  neutral: "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700",
  negative: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800",
};

const emotionEmoji = {
  positive: "+",
  neutral: "~",
  negative: "-",
};

export default function UserJourney({ steps }: UserJourneyProps) {
  if (steps.length === 0) return null;

  return (
    <section className="py-16 sm:py-24">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-caption uppercase tracking-widest text-sunset-500 mb-2">
            User Journey
          </p>
          <h2 className="text-2xl font-display">Mapping the experience</h2>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-8 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-800 hidden sm:block" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Step number circle */}
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-4 border",
                    emotionColors[step.emotion]
                  )}
                >
                  {emotionEmoji[step.emotion]}
                </div>

                <h4 className="text-sm font-semibold mb-1">{step.step}</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                  {step.action}
                </p>
                <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800">
                  <p className="text-caption uppercase tracking-widest text-neutral-400 mb-1">
                    Opportunity
                  </p>
                  <p className="text-xs text-sunset-600 dark:text-sunset-400">
                    {step.opportunity}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
