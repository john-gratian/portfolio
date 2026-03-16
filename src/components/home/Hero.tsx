"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Subtle warm gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07] dark:opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #F97316 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05] dark:opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #FB923C 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="page-container relative w-full">
        <div className="max-w-5xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-caption uppercase tracking-widest text-sunset-500 mb-6"
          >
            UI/UX Designer &amp; Researcher
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-display mb-8"
          >
            Crafting digital experiences{" "}
            <span className="sunset-gradient-text">that people</span>{" "}
            love to use
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-body-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mb-10"
          >
            I design thoughtful, research-driven products that bridge the gap
            between user needs and business goals. Specializing in complex
            problem spaces where great UX makes the difference.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/work" size="lg">
              View My Work
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
            <Button href="/about" variant="secondary" size="lg">
              About Me
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-caption uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-neutral-300 dark:border-neutral-700 flex items-start justify-center p-1"
          >
            <div className="w-1 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
