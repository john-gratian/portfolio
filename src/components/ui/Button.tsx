"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  external?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  external = false,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full overflow-hidden";

  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100",
    secondary:
      "border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800",
    ghost:
      "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-2 text-body-sm gap-2",
    md: "px-7 py-3 text-body-sm gap-2.5",
    lg: "px-9 py-4 text-body-md gap-3",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <motion.span
      className="flex items-center gap-2"
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
