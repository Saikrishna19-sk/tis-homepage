"use client";

import { motion } from "framer-motion";

type FacilityCardProps = {
    title: string;
    description: string;
    image: string;
    large?: boolean;
};

export default function FacilityCard({
    title,
    description,
    image,
    large = false,
}: FacilityCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className={`group relative overflow-hidden rounded-[2rem] ${large ? "min-h-[520px]" : "min-h-[360px]"
                }`}
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 text-white lg:p-9">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-semibold sm:text-3xl">
                            {title}
                        </h3>

                        <p className="mt-3 max-w-lg text-sm leading-6 text-white/75">
                            {description}
                        </p>
                    </div>

                    <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45 sm:flex">
                        ↗
                    </span>
                </div>
            </div>
        </motion.article>
    );
}