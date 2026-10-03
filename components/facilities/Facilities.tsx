"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import FacilityCard from "./FacilityCard";

const facilities = [
    {
        title: "Modern Classrooms",
        description:
            "Thoughtfully designed learning spaces that encourage collaboration, creativity and focused learning.",
        image: "/images/facilities/classroom.png",
        large: true,
    },
    {
        title: "Library",
        description:
            "A welcoming space where students can discover new ideas and develop a lifelong love of reading.",
        image: "/images/facilities/library.png",
    },
    {
        title: "Science Laboratories",
        description:
            "Hands-on environments where curiosity becomes experimentation and discovery.",
        image: "/images/facilities/laboratory.png",
    },
    {
        title: "Sports & Activities",
        description:
            "Spaces that encourage teamwork, discipline, movement and personal growth beyond academics.",
        image: "/images/facilities/sports.png",
        large: true,
    },
];

export default function Facilities() {
    return (
        <section
            id="facilities"
            className="bg-white px-6 py-24 text-black dark:bg-black dark:text-white lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Campus & Facilities"
                    title="Spaces that inspire"
                    mutedTitle="possibility."
                    description="From classrooms to laboratories and activity spaces, every environment is designed to support discovery and growth."
                />

                <div className="mt-16 grid gap-6 md:grid-cols-2">
                    {facilities.map((facility) => (
                        <FacilityCard
                            key={facility.title}
                            title={facility.title}
                            description={facility.description}
                            image={facility.image}
                            large={facility.large}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}