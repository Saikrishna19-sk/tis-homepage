"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Facilities", href: "#facilities" },
    { label: "Admissions", href: "#admissions" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <nav className="mx-auto mt-4 flex h-16 max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/80 px-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-black/70 sm:px-6">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="flex items-center gap-3"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-bold text-white dark:bg-white dark:text-black">
                        TIS
                    </span>

                    <span className="hidden text-sm font-semibold tracking-tight sm:block">
                        Tulas International School
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-black/60 transition-colors duration-300 hover:text-black dark:text-white/60 dark:hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}

                    <ThemeToggle />
                </div>

                {/* Mobile Controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-sm dark:border-white/10"
                    >
                        {isOpen ? "×" : "☰"}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`mx-4 mt-2 overflow-hidden rounded-3xl border border-black/10 bg-white/95 shadow-xl backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-black/95 md:hidden ${isOpen
                        ? "max-h-[500px] opacity-100"
                        : "pointer-events-none max-h-0 opacity-0"
                    }`}
            >
                <div className="flex flex-col p-5">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={closeMenu}
                            className="border-b border-black/10 py-4 text-sm font-medium last:border-0 dark:border-white/10"
                            style={{
                                transitionDelay: `${index * 40}ms`,
                            }}
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#admissions"
                        onClick={closeMenu}
                        className="mt-4 rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white dark:bg-white dark:text-black"
                    >
                        Start Your Journey
                    </a>
                </div>
            </div>
        </header>
    );
}