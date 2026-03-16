"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface BeforeAfterProps {
  items: NonNullable<Project["beforeAfter"]>;
}

export default function BeforeAfter({ items }: BeforeAfterProps) {
  if (items.length === 0) return null;

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
            Before &amp; After
          </p>
          <h2 className="text-2xl font-display">The transformation</h2>
        </motion.div>

        <div className="space-y-12">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-4">
                {/* Before */}
                <div>
                  <p className="text-caption uppercase tracking-widest text-neutral-400 mb-3">
                    Before
                  </p>
                  <div
                    className="relative aspect-[4/3] rounded-xl overflow-hidden
                               bg-neutral-100 dark:bg-neutral-800
                               border border-neutral-200/50 dark:border-neutral-800/50"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-sm text-neutral-400">Before image</p>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div>
                  <p className="text-caption uppercase tracking-widest text-sunset-500 mb-3">
                    After
                  </p>
                  <div
                    className="relative aspect-[4/3] rounded-xl overflow-hidden
                               bg-neutral-100 dark:bg-neutral-800
                               border border-sunset-200/50 dark:border-sunset-800/50"
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-sm text-neutral-400">After image</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-body-md text-neutral-500 dark:text-neutral-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
