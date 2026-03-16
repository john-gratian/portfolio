"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HomeCTA() {
  return (
    <section className="section-spacing relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.06] dark:opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #F97316 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="page-container relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-caption uppercase tracking-widest text-sunset-500 mb-6"
        >
          Let&apos;s work together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-display-md sm:text-display-lg font-display max-w-4xl mx-auto mb-8"
        >
          Have a project in mind?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-body-lg text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto mb-10"
        >
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button href="/contact" size="lg">
            Get In Touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button href="/work" variant="secondary" size="lg">
            Browse All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
