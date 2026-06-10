'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "initial" | "animate" | "whileInView" | "viewport" | "transition"> {
  children: React.ReactNode;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Animation duration in seconds (default 0.5) */
  duration?: number;
  /** Vertical offset in px (default 24) */
  y?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  y = 24,
  className,
  ...rest
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={className} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
