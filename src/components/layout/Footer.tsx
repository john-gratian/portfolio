"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="page-container py-16 sm:py-20">
        {/* CTA Section */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-caption uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4"
          >
            Get in touch
          </motion.p>
          <motion.a
            href="mailto:hello@yourname.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-sm sm:text-display-md font-display hover:text-sunset-500
                       transition-colors duration-500 cursor-pointer block"
          >
            hello@yourname.com
          </motion.a>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white
                           transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <Link
              href="/contact"
              className="text-body-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white
                         transition-colors duration-300"
            >
              Contact
            </Link>
            <p className="text-body-sm text-neutral-400 dark:text-neutral-600">
              &copy; {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
