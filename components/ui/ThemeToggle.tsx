"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("tis-theme");

        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const nextTheme = !dark;

        setDark(nextTheme);

        if (nextTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("tis-theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("tis-theme", "light");
        }
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-sm transition-all duration-300 hover:scale-105 dark:border-white/20 dark:bg-white/10 dark:text-white"
        >
            {dark ? "☀" : "☾"}
        </button>
    );
}