"use client";

import Image from "next/image";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
    {
        quote:
            "The coffee is absolutely amazing, and the convenience of ordering online is unmatched. A must-try for any coffee lover.",
        name: "Carlos T.",
        title: "Student",
        image: "/user/user-random-1.jpg",
    },
    {
        quote:
            "Quick service, great taste, and beautiful packaging. I can’t start my day without it anymore!",
        name: "Emily R.",
        title: "Marketing Lead",
        image: "/user/user-random-2.jpg",
    },
    {
        quote:
            "Easy to order, delicious, and always arrives hot. Highly recommended for busy folks.",
        name: "Derek S.",
        title: "Developer",
        image: "/user/user-random-3.jpg",
    },
];

const fadeUpCard = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.3 },
    }),
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};


{/* Testimonials Section as HomeTestimonials */ }
const HomeTestimonials = (): JSX.Element => {
    return (
        <motion.section
            id="testimonials"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="relative min-h-screen w-full bg-[#AF8D72] flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
        >
            {/* Decorative Blob */}
            <div className="absolute top-0 left-0 w-60 h-60 bg-[#fff]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#fff]/10 rounded-full blur-2xl -z-10" />

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.6 }}
                className="text-3xl md:text-5xl font-bold text-[#2f1b0c] text-center tracking-tight mb-7"
            >
                What Our Customers Say
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.6 }}
                className="text-xl md:text-2xl text-[#3e2c1f] text-center italic mb-20"
            >
                Real Stories. Real Smiles.
            </motion.p>

            {/* Cards */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl z-10"
                variants={staggerContainer}
            >
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        className="bg-[#F5F3EE] border border-[#e3dbd1] rounded-xl shadow-lg p-7 flex-1 min-w-[280px] max-w-md flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                        custom={i}
                        variants={fadeUpCard}
                    >
                        <div className="mb-4">
                            <FaQuoteLeft className="text-[#B89475] text-xl mb-2" />
                            <div className="flex gap-1 mb-2 text-[#FFD700] text-xl">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                            </div>
                            <p className="text-black text-base md:text-lg italic">“{t.quote}“</p>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <Image
                                src={t.image}
                                alt={t.name}
                                width={48}
                                height={48}
                                className="rounded-full object-cover"
                            />

                            <div>
                                <div className="font-semibold text-black">{t.name}</div>
                                <div className="text-sm text-gray-500">{t.title}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default HomeTestimonials