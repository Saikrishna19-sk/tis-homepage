"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });

            setVisible(true);
        };

        const handleMouseLeave = () => {
            setVisible(false);
        };

        const handleMouseEnter = () => {
            setVisible(true);
        };

        const handlePointerOver = (event: PointerEvent) => {
            const target = event.target as HTMLElement;

            setHovering(
                Boolean(
                    target.closest("a") ||
                    target.closest("button") ||
                    target.closest("[data-cursor-hover]")
                )
            );
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("pointerover", handlePointerOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
            document.removeEventListener("pointerover", handlePointerOver);
        };
    }, []);

    return (
        <div
            className={`pointer-events-none fixed left-0 top-0 z-[200] hidden transition-opacity duration-200 md:block ${visible ? "opacity-100" : "opacity-0"
                }`}
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
        >
            <div
                className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-black transition-all duration-200 ${hovering
                        ? "h-12 w-12 bg-black/10"
                        : "h-5 w-5 bg-black"
                    }`}
            />
        </div>
    );
}