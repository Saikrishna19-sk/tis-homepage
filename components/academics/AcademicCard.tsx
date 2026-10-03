"use client";

import { motion } from "framer-motion";

type AcademicCardProps = {
    number: string;
    title: string;
    description: string;
};

export default function AcademicCard({
    number,
    title,
    description,
}: AcademicCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="group border-t border-black/15 py-8 transition-colors dark:border-white/15"
        >
            <div className="flex items-start justify-between gap-6">
                <span className="text-sm text-gray-400">{number}</span>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-lg transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white dark:border-white/15 dark:group-hover:bg-white dark:group-hover:text-black">
                    ↗
                </span>
            </div>

            <h3 className="mt-10 text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
            </h3>

            <p className="mt-4 max-w-md leading-7 text-gray-600 dark:text-white/55">
                {description}
            </p>
        </motion.article>
    );
}