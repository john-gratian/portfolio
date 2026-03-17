"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import type { AppliedPsychologyItem } from "@/data/projects";

interface Props {
  items: AppliedPsychologyItem[];
}

export default function AppliedPsychology({ items }: Props) {
  return (
    <section className="section-spacing">
      <div className="page-container">
        <SectionHeading
          label="Applied Psychology"
          title="Psychological principles that shaped the design"
          description="Every major design decision was grounded in a validated psychological principle — here's how theory became practice."
        />

        <div className="space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={item.principle}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-10 p-8 rounded-2xl
                         bg-neutral-50 dark:bg-neutral-800/30
                         border border-neutral-200/60 dark:border-neutral-700/40"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-sunset-500 flex items-center justify-center text-white text-sm font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="text-caption uppercase tracking-widest text-sunset-500">
                    Principle
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{item.principle}</h3>
              </div>
              <div className="flex items-center">
                <p className="text-body-md text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {item.application}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
