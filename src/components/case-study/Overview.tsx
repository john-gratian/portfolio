"use client";

import { motion } from "framer-motion";

interface OverviewProps {
  overview: string;
}

export default function Overview({ overview }: OverviewProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="page-container">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-caption uppercase tracking-widest text-sunset-500 mb-4"
          >
            Overview
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-sm font-display leading-snug"
          >
            {overview}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
