"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

const offset = 28;

const directionOffsets: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: offset },
  down: { x: 0, y: -offset },
  left: { x: offset, y: 0 },
  right: { x: -offset, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  as = "div",
  once = true,
}: {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "span" | "li";
  once?: boolean;
}) {
  const { x, y } = directionOffsets[direction];

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}
