"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Admissions() {
    return (
        <section
            id="admissions"
            className="relative overflow-hidden bg-black px-6 py-24 text-white lg:px-8 lg:py-32"
        >
            <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />
            <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full border border-white/10" />

            <div className="relative mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                    <div>
                        <Reveal>
                            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
                                Admissions
                            </p>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                                Your journey
                                <br />
                                <span className="text-white/40">starts here.</span>
                            </h2>
                        </Reveal>
                    </div>

                    <Reveal delay={0.2}>
                        <div>
                            <p className="text-lg leading-8 text-white/60">
                                Discover an environment where every student is encouraged to
                                learn, explore and become their most confident self.
                            </p>

                            <div className="mt-8">
                                <Button
                                    href="#contact"
                                    className="bg-white text-black hover:bg-white/90"
                                >
                                    Begin Admissions
                                </Button>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 h-px origin-left bg-white/15"
                />

                <div className="mt-8 flex flex-col justify-between gap-4 text-sm text-white/40 sm:flex-row">
                    <span>Admissions open</span>
                    <span>Tulas International School</span>
                    <span>Explore your possibilities ↗</span>
                </div>
            </div>
        </section>
    );
}