"use client";

import Reveal from "./Reveal";

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    mutedTitle?: string;
    description?: string;
};

export default function SectionHeading({
    eyebrow,
    title,
    mutedTitle,
    description,
}: SectionHeadingProps) {
    return (
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
                <Reveal>
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
                        {eyebrow}
                    </p>
                </Reveal>

                <Reveal delay={0.1}>
                    <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                        {title}
                        {mutedTitle && (
                            <>
                                <br />
                                <span className="text-gray-400">{mutedTitle}</span>
                            </>
                        )}
                    </h2>
                </Reveal>
            </div>

            {description && (
                <Reveal delay={0.2}>
                    <p className="max-w-md leading-7 text-gray-600">
                        {description}
                    </p>
                </Reveal>
            )}
        </div>
    );
}