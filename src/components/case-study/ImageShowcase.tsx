"use client";

import { motion } from "framer-motion";

interface ImageShowcaseProps {
  label: string;
  title: string;
  images: string[];
  columns?: 1 | 2 | 3;
}

export default function ImageShowcase({
  label,
  title,
  images,
  columns = 2,
}: ImageShowcaseProps) {
  if (images.length === 0) return null;

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };

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
            {label}
          </p>
          <h2 className="text-2xl font-display">{title}</h2>
        </motion.div>

        <div className={`grid ${gridCols[columns]} gap-6`}>
          {images.map((image, i) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden
                         bg-neutral-100 dark:bg-neutral-800
                         border border-neutral-200/50 dark:border-neutral-800/50"
            >
              {/* Placeholder for images — replace src with actual images */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="w-10 h-10 mx-auto mb-3 text-neutral-300 dark:text-neutral-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-xs text-neutral-400 dark:text-neutral-500">
                    {label} {i + 1}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
