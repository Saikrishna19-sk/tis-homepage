"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import AboutImage from "./AboutImage";

export default function About() {
    return (
        <section
            id="about"
            className="bg-white px-6 py-24 text-black transition-colors duration-300 dark:bg-black dark:text-white lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="About TIS"
                    title="Education that goes"
                    mutedTitle="beyond the classroom."
                    description="At Tulas International School, we create an environment where students are encouraged to explore, question, create and grow."
                />

                <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-center">
                    <AboutImage />

                    <div className="lg:pl-10">
                        <Reveal>
                            <p className="text-lg leading-8 text-gray-600 dark:text-white/60">
                                Our approach combines academic excellence with creativity,
                                collaboration and character development. Every learner is
                                encouraged to discover their strengths and build the confidence
                                to shape their own future.
                            </p>
                        </Reveal>

                        <div className="mt-10 grid grid-cols-2 gap-6 border-t border-black/10 pt-8 dark:border-white/10">
                            <Reveal delay={0.1}>
                                <div>
                                    <p className="text-4xl font-semibold tracking-tight">
                                        01
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-white/50">
                                        Curious learning
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.2}>
                                <div>
                                    <p className="text-4xl font-semibold tracking-tight">
                                        02
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-white/50">
                                        Confident learners
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.3}>
                                <div>
                                    <p className="text-4xl font-semibold tracking-tight">
                                        03
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-white/50">
                                        Strong character
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delay={0.4}>
                                <div>
                                    <p className="text-4xl font-semibold tracking-tight">
                                        04
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-white/50">
                                        Future ready
                                    </p>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}