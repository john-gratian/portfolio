"use client";

import { motion } from "framer-motion";

export default function Bio() {
  return (
    <section className="pt-32 sm:pt-40 pb-16 sm:pb-24">
      <div className="page-container">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">
          {/* Bio text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-caption uppercase tracking-widest text-sunset-500 mb-6"
            >
              About Me
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-md font-display mb-8"
            >
              A psychologist who designs digital experiences people instinctively understand.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-body-lg text-neutral-500 dark:text-neutral-400"
            >
              <p>
                With a <strong className="text-neutral-700 dark:text-neutral-300">Masters in Clinical Psychology</strong>,
                I bring a deep understanding of human cognition, emotion, and behavior
                to every product I design. Where most designers rely on intuition, I apply
                validated psychological frameworks to make design decisions that genuinely
                work for people.
              </p>
              <p>
                My clinical training taught me to observe without bias, decode behavioral
                patterns, and understand the &quot;why&quot; behind human actions. I&apos;ve translated
                these skills into a design practice that spans fintech, healthcare,
                e-commerce, and enterprise SaaS — delivering 15+ products across mobile,
                web, and desktop.
              </p>
              <p>
                I don&apos;t just design interfaces — I design for the cognitive processes
                behind every tap, scroll, and decision. From reducing cognitive load to
                leveraging motivation theory, my work bridges the gap between behavioral
                science and product design to create experiences that feel effortless.
              </p>
            </motion.div>
          </div>

          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div
              className="aspect-[3/4] rounded-2xl overflow-hidden
                         bg-neutral-100 dark:bg-neutral-800
                         border border-neutral-200/50 dark:border-neutral-800/50"
            >
              {/* Replace with your photo using next/image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 mx-auto mb-3 text-neutral-300 dark:text-neutral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="text-sm text-neutral-400">Your photo</p>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div
              className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl opacity-20"
              style={{
                background: "linear-gradient(135deg, #F97316 0%, #FB923C 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
