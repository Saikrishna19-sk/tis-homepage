"use client";

import Reveal from "@/components/ui/Reveal";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="bg-black px-6 pb-8 pt-20 text-white lg:px-8 lg:pt-28"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-2">
                    <Reveal>
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/40">
                                Tulas International School
                            </p>

                            <h2 className="mt-6 max-w-2xl text-5xl font-semibold leading-none tracking-tight sm:text-6xl">
                                Let&apos;s build
                                <br />
                                <span className="text-white/40">the future.</span>
                            </h2>
                        </div>
                    </Reveal>

                    <Reveal delay={0.15}>
                        <div className="lg:ml-auto lg:max-w-sm">
                            <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                                Get in touch
                            </p>

                            <div className="mt-6 space-y-4 text-lg">
                                <a
                                    href="mailto:info@tulasinternationalschool.com"
                                    className="block transition-colors hover:text-white/60"
                                >
                                    info@tulasinternationalschool.com
                                </a>

                                <a
                                    href="#admissions"
                                    className="inline-flex items-center gap-3 transition-transform duration-300 hover:translate-x-2"
                                >
                                    Start your journey
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="mt-20 border-t border-white/10 pt-6">
                    <div className="flex flex-col justify-between gap-4 text-xs uppercase tracking-[0.15em] text-white/30 sm:flex-row">
                        <p>© {new Date().getFullYear()} Tulas International School</p>

                        <div className="flex gap-6">
                            <a href="#home" className="hover:text-white transition-colors">
                                Back to top
                            </a>

                            <span>Designed for the future</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}