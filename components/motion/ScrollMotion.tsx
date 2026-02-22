"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Transition, type Variants } from "framer-motion";

type RevealPreset =
  | "fade-up"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "pop"
  | "blur-up";

type RevealProps = {
  children: ReactNode;
  className?: string;
  preset?: RevealPreset;
  delay?: number;
  duration?: number;
  amount?: number;
  margin?: string;
  once?: boolean;
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  amount?: number;
  margin?: string;
  once?: boolean;
};

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  preset?: RevealPreset;
};

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function getPresetVariants(preset: RevealPreset): Variants {
  switch (preset) {
    case "fade-left":
      return {
        hidden: { opacity: 0, x: 36 },
        visible: { opacity: 1, x: 0 },
      };
    case "fade-right":
      return {
        hidden: { opacity: 0, x: -36 },
        visible: { opacity: 1, x: 0 },
      };
    case "zoom-in":
      return {
        hidden: { opacity: 0, scale: 0.9, y: 18 },
        visible: { opacity: 1, scale: 1, y: 0 },
      };
    case "pop":
      return {
        hidden: { opacity: 0, scale: 0.95, y: 14, rotate: -1.5 },
        visible: { opacity: 1, scale: 1, y: 0, rotate: 0 },
      };
    case "blur-up":
      return {
        hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      };
    case "fade-up":
    default:
      return {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0 },
      };
  }
}

export function Reveal({
  children,
  className,
  preset = "fade-up",
  delay = 0,
  duration = 0.65,
  amount = 0.2,
  margin = "0px 0px -18% 0px",
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const resolvedAmount = Math.min(0.9, Math.max(amount, 0.24));

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={getPresetVariants(preset)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: resolvedAmount, margin }}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0,
  amount = 0.15,
  margin = "0px 0px -16% 0px",
  once = true,
}: StaggerProps) {
  const prefersReducedMotion = useReducedMotion();
  const resolvedAmount = Math.min(0.9, Math.max(amount, 0.22));

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: resolvedAmount, margin }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren,
          } satisfies Transition,
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  preset = "fade-up",
}: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={getPresetVariants(preset)}
      transition={{ duration: 0.6, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
