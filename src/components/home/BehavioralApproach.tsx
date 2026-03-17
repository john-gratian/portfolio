"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const approaches = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 1 7 7c0 3-2 5.5-4 7.5L12 20l-3-3.5C7 14.5 5 12 5 9a7 7 0 0 1 7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "Cognitive Biases",
    description:
      "Leveraging anchoring, framing effects, and recognition over recall to design interfaces that work with human cognition, not against it.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12h4l3-9 4 18 3-9h4" />
      </svg>
    ),
    title: "Decision-Making Patterns",
    description:
      "Applying Hick's Law, choice architecture, and paradox of choice to reduce friction and guide users toward confident decisions.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Emotional Design",
    description:
      "Crafting visceral, behavioral, and reflective layers of experience that create lasting emotional connections with products.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Habit Formation",
    description:
      "Using the Hook Model, variable rewards, and behavioral loops to design products that naturally integrate into users' daily routines.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "User Motivation",
    description:
      "Applying Self-Determination Theory and intrinsic/extrinsic motivation frameworks to drive engagement without dark patterns.",
  },
];

export default function BehavioralApproach() {
  return (
    <section className="section-spacing bg-neutral-50 dark:bg-neutral-900/50">
      <div className="page-container">
        <SectionHeading
          label="What Sets Me Apart"
          title="Behavioral Design Approach"
          description="I bring a rare combination of psychology and UX design to create experiences grounded in how humans actually behave — not how we assume they do."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {approaches.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative p-8 rounded-2xl
                         bg-white dark:bg-neutral-800/50
                         border border-neutral-200/80 dark:border-neutral-700/50
                         hover:border-sunset-300 dark:hover:border-sunset-700
                         transition-all duration-500 hover:shadow-lg hover:shadow-sunset-500/5"
            >
              <div className="text-sunset-500 mb-5">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-body-md text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual: Decision Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 p-10 rounded-2xl bg-white dark:bg-neutral-800/50 border border-neutral-200/80 dark:border-neutral-700/50"
        >
          <h3 className="text-lg font-semibold mb-2 text-center">
            How Psychology Shapes My Design Process
          </h3>
          <p className="text-body-sm text-neutral-400 dark:text-neutral-500 text-center mb-10">
            Every design decision is filtered through a behavioral lens
          </p>

          {/* Flow Diagram */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
            {[
              { label: "Observe", sub: "Behavioral Research", color: "#F97316" },
              { label: "Identify", sub: "Cognitive Patterns", color: "#FB923C" },
              { label: "Apply", sub: "Psychology Principles", color: "#F59E0B" },
              { label: "Design", sub: "Behavioral Solutions", color: "#EF4444" },
              { label: "Measure", sub: "Behavior Change", color: "#F97316" },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex items-center gap-0">
                <div className="flex flex-col items-center text-center min-w-[140px]">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold text-sm mb-3"
                    style={{ backgroundColor: step.color }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="font-semibold text-sm">{step.label}</p>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">
                    {step.sub}
                  </p>
                </div>
                {i < arr.length - 1 && (
                  <svg
                    className="w-8 h-8 text-neutral-300 dark:text-neutral-600 shrink-0 hidden lg:block"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
