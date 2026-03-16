"use client";

import { motion } from "framer-motion";

interface DesignStrategyProps {
  strategy: string;
}

export default function DesignStrategy({ strategy }: DesignStrategyProps) {
  return (
    <section className="py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="page-container">
        <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-caption uppercase tracking-widest text-sunset-500 mb-2">
              Design Strategy
            </p>
            <h2 className="text-2xl font-display">
              Our approach
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-body-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {strategy}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
