"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
    {
        quote:
            "TIS creates an environment where children are encouraged to ask questions, explore ideas and grow with confidence.",
        name: "Parent Community",
        role: "TIS Family",
    },
    {
        quote:
            "The balance between academics, activities and personal development gives students space to discover what they are capable of.",
        name: "Student Experience",
        role: "TIS Community",
    },
    {
        quote:
            "A supportive learning environment can make a meaningful difference in how students approach challenges and opportunities.",
        name: "School Community",
        role: "TIS Family",
    },
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="bg-gray-50 px-6 py-24 text-black dark:bg-[#111111] dark:text-white lg:px-8 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="The TIS Experience"
                    title="Growing together,"
                    mutedTitle="learning together."
                    description="A school community built around curiosity, encouragement and shared growth."
                />

                <div className="mt-16 grid gap-6 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="rounded-[2rem] border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-black"
                        >
                            <div className="flex gap-1 text-lg">
                                <span>“</span>
                                <span>“</span>
                            </div>

                            <p className="mt-8 text-lg leading-8 text-gray-700 dark:text-white/70">
                                {testimonial.quote}
                            </p>

                            <div className="mt-10 border-t border-black/10 pt-6 dark:border-white/10">
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="mt-1 text-sm text-gray-500 dark:text-white/40">
                                    {testimonial.role}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}