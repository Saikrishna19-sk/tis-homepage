"use client";

import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "secondary";
    className?: string;
};

export default function Button({
    children,
    href,
    variant = "primary",
    className = "",
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold transition-all duration-300 hover:scale-105";

    const variants = {
        primary:
            "bg-black text-white hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/90",
        secondary:
            "border border-black/15 bg-transparent text-black hover:bg-black hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black",
    };

    const styles = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={styles}>
                {children}
            </a>
        );
    }

    return (
        <button type="button" className={styles}>
            {children}
        </button>
    );
}