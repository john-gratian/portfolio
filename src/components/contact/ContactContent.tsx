"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
  { label: "Behance", href: "https://behance.net/yourname" },
  { label: "Dribbble", href: "https://dribbble.com/yourname" },
  { label: "Twitter", href: "https://twitter.com/yourname" },
];

export default function ContactContent() {
  return (
    <section className="pt-32 sm:pt-40 pb-24 sm:pb-32">
      <div className="page-container">
        <div className="max-w-3xl">
          {/* Header */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-caption uppercase tracking-widest text-sunset-500 mb-6"
          >
            Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-md sm:text-display-lg font-display mb-6"
          >
            Let&apos;s create something great together.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg text-neutral-500 dark:text-neutral-400 mb-16"
          >
            I&apos;m always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out.
          </motion.p>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <p className="text-caption uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
              Email
            </p>
            <a
              href="mailto:hello@yourname.com"
              className="text-2xl sm:text-3xl font-display hover:text-sunset-500 transition-colors duration-300"
            >
              hello@yourname.com
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <p className="text-caption uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
              Social
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-body-sm font-medium rounded-full
                             border border-neutral-200 dark:border-neutral-700
                             hover:border-sunset-300 dark:hover:border-sunset-700
                             hover:text-sunset-500
                             transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Resume Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-caption uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
              Resume
            </p>
            <Button href="/resume.pdf" external variant="secondary" size="md">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mr-1"
              >
                <path
                  d="M8 2v8m0 0l-3-3m3 3l3-3M3 13h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download Resume
            </Button>
          </motion.div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #F97316 0%, transparent 70%)",
          }}
        />
      </div>
    </section>
  );
}
