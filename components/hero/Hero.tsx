"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-black text-white"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <motion.div
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 bg-black"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-gray-900" />

                {/* Decorative circles */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full border border-white/10"
                />

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-40 right-20 h-[450px] w-[450px] rounded-full border border-white/5"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
                <div className="max-w-5xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-white/50"
                    >
                        Tulas International School
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
                    >
                        Inspiring
                        <br />
                        <span className="text-white/40">young minds.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg"
                    >
                        A place where curiosity, creativity, knowledge and character
                        come together to shape confident learners for the future.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-10 flex flex-col gap-4 sm:flex-row"
                    >
                        <Button
                            href="#admissions"
                            className="bg-white text-black hover:bg-white/90"
                        >
                            Explore Admissions
                        </Button>

                        <Button
                            href="#about"
                            variant="secondary"
                            className="border-white/30 text-white hover:bg-white hover:text-black"
                        >
                            Discover TIS
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Bottom information */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-6 z-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50 lg:left-8"
            >
                <span className="h-px w-10 bg-white/30" />
                Scroll to explore
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute bottom-8 right-6 hidden text-right text-xs uppercase tracking-[0.2em] text-white/40 lg:right-8 lg:block"
            >
                <p>Excellence</p>
                <p>Character</p>
                <p>Future</p>
            </motion.div>
        </section>
    );
}