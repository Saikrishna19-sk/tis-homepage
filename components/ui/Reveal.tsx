"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    delay?: number;
    duration?: number;
    y?: number;
    className?: string;
};

export default function Reveal({
    children,
    delay = 0,
    duration = 0.7,
    y = 30,
    className = "",
}: RevealProps) {
    const variants: Variants = {
        hidden: {
            opacity: 0,
            y,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration,
                delay,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.2,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}