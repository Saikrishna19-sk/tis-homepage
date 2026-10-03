"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import AcademicCard from "./AcademicCard";

const programs = [
    {
        number: "01",
        title: "Early Years",
        description:
            "A nurturing beginning where children discover the joy of learning through exploration, creativity and play.",
    },
    {
        number: "02",
        title: "Primary School",
        description:
            "Strong foundations in knowledge, communication and collaboration help young learners become confident thinkers.",
    },
    {
        number: "03",
        title: "Middle School",
        description:
            "Students develop deeper subject knowledge while learning to think independently, solve problems and work together.",
    },
    {
        number: "04",
        title: "Senior School",
        description:
            "A focused academic environment prepares students for higher education and the opportunities ahead.",
    },
];

export default function Academics() {
    return (
        <section
            id="academics"
            className="bg-gray-50 px-6 py-24 text-black dark:bg-[#111111] dark:text-white lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Academics"
                    title="A journey designed"
                    mutedTitle="for every stage."
                    description="Thoughtfully structured learning experiences help students grow academically, creatively and personally."
                />

                <div className="mt-16 grid gap-x-12 md:grid-cols-2">
                    {programs.map((program) => (
                        <AcademicCard
                            key={program.number}
                            number={program.number}
                            title={program.title}
                            description={program.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}