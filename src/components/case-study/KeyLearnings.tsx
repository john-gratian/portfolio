"use client";

import { motion } from "framer-motion";

interface KeyLearningsProps {
  learnings: string[];
}

export default function KeyLearnings({ learnings }: KeyLearningsProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="page-container">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-caption uppercase tracking-widest text-sunset-500 mb-2">
              Key Learnings
            </p>
            <h2 className="text-2xl font-display">What I took away</h2>
          </motion.div>

          <div className="space-y-6">
            {learnings.map((learning, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex gap-4"
              >
                <span className="text-caption font-mono text-sunset-500 mt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-body-md text-neutral-600 dark:text-neutral-400">
                  {learning}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
