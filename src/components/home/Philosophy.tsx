"use client";

import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

const principles = [
  {
    number: "01",
    title: "Research First",
    description:
      "Every design decision starts with understanding users. I believe empathy is the foundation of exceptional product design.",
  },
  {
    number: "02",
    title: "Systems Thinking",
    description:
      "I design holistic experiences, not isolated screens. Every element connects to a larger ecosystem of user needs.",
  },
  {
    number: "03",
    title: "Measurable Impact",
    description:
      "Beautiful design means nothing without outcomes. I tie every project to metrics that prove real-world value.",
  },
];

export default function Philosophy() {
  return (
    <section className="section-spacing bg-neutral-50 dark:bg-neutral-900/50">
      <div className="page-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Statement */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-caption uppercase tracking-widest text-sunset-500 mb-6"
            >
              Design Philosophy
            </motion.p>

            <AnimatedText
              as="h2"
              text="Design is not just what it looks like. Design is how it works — and why it matters."
              className="text-display-sm sm:text-display-md font-display"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 text-body-lg text-neutral-500 dark:text-neutral-400"
            >
              I approach every project with curiosity, rigor, and a deep respect
              for the people who will use what I create.
            </motion.p>
          </div>

          {/* Right: Principles */}
          <div className="space-y-10">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex gap-6"
              >
                <span className="text-caption text-sunset-500 font-mono mt-1.5 shrink-0">
                  {principle.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                  <p className="text-body-md text-neutral-500 dark:text-neutral-400">
                    {principle.description}
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
