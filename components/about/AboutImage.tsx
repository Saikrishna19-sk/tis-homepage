"use client";

import { motion } from "framer-motion";

export default function AboutImage() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[2rem]"
        >
            <img
                src="/images/campus/campus-01.webp"
                alt="Tulas International School campus"
                className="h-[500px] w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Tulas International School
                </p>
                <p className="mt-1 text-sm font-semibold text-black">
                    Learning beyond classrooms
                </p>
            </div>
        </motion.div>
    );
}