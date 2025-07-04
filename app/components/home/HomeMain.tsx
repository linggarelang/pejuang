"use client";

import Link from "next/link";
import Image from "next/image";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import { IoIosCall } from "react-icons/io";
import { FaArrowRight, FaFacebook, FaInstagram } from "react-icons/fa6";

import { AnimatedNumber } from "@/app/components/Animated/AnimatedNumber";

{/* Hero Section as HomeMain */ }
const HomeMain = (): JSX.Element => {
    return (
        <section className="relative h-screen w-full bg-black overflow-hidden">
            {/* Background Image */}
            <div className="hidden lg:block absolute inset-0 z-0">
                <Image
                    src="/img/heroImage.jpg"
                    alt="Hero Coffee"
                    fill
                    priority
                    className="object-contain object-right lg:object-right-bottom"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Hero Content */}
            <div className="absolute w-full lg:w-3/4 h-full flex items-center top-20 lg:top-32 left-2/5 transform -translate-x-2/5 -translate-y-20">
                <article className="relative z-10 h-full flex flex-col justify-center px-6 md:px-8 lg:px-0 max-w-full text-white">

                    {/* Title & Description */}
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight mb-4"
                        >
                            Order Your <span className="text-[#B89475]">Coffee</span> in Seconds{" "}
                            <br className="hidden md:block" /> Anytime & Anywhere
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="w-3/4 text-base text-[#E3DAC9] font-extralight md:text-lg mb-6"
                        >
                            Fast, simple coffee ordering built for your busy routine
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            {/* Try It Now */}
                            <motion.button
                                whileHover="hover"
                                initial="initial"
                                transition={{ duration: 0.3 }}
                                variants={{
                                    initial: {},
                                    hover: {},
                                }}
                                className="bg-[#f4c289] hover:bg-[#B89475] text-black font-semibold px-6 py-3 rounded shadow cursor-pointer transition-colors duration-300 ease-in-out flex items-center justify-between"
                            >
                                Try It Now
                                <motion.span
                                    variants={{
                                        initial: { x: 0 },
                                        hover: { x: [0, 5, 0] },
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeInOut",
                                        times: [0, 0.5, 1],
                                        repeat: 0,
                                    }}
                                    className="ml-3"
                                >
                                    <FaArrowRight />
                                </motion.span>
                            </motion.button>

                            {/* Call to Reserve */}
                            <motion.button
                                whileHover="hover"
                                initial="initial"
                                className="bg-black text-[#f4c289] font-semibold border border-[#f4c289] px-6 py-3 rounded shadow flex items-center justify-between hover:bg-[#f4c289] hover:text-black cursor-pointer transition-colors duration-300 ease-in-out"
                            >
                                <motion.span
                                    variants={{
                                        initial: { x: 0 },
                                        hover: {
                                            x: [0, -2, 2, -2, 2, 0],
                                        },
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                        times: [0, 0.16, 0.32, 0.48, 0.64, 1],
                                        repeat: 0,
                                    }}
                                    className="mr-3"
                                >
                                    <IoIosCall className="text-xl" />
                                </motion.span>
                                Call to Reserve
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="my-5 lg:my-10" />

                    {/* Stats */}
                    <section
                        className="w-full lg:w-[70%] flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0"
                        aria-label="Coffee Stats"
                    >
                        {/* Item Count */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl lg:text-5xl font-semibold -tracking-wider">
                                <AnimatedNumber target={120} duration={3000} />
                            </h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
                                className="text-lg lg:text-base font-extralight mt-1"
                            >
                                Items of Coffee
                            </motion.p>
                        </div>

                        {/* Happy Customers */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl lg:text-5xl font-semibold -tracking-wider">
                                <AnimatedNumber target={1200} duration={3000} />
                            </h2>
                            <motion.p
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                                className="text-lg lg:text-base font-extralight mt-1"
                            >
                                Happy Customers
                            </motion.p>
                        </div>
                    </section>
                </article>

                {/* Social Media */}
                <aside
                    className="hidden fixed -right-20 top-2/6 lg:flex flex-col items-center space-y-2 z-50"
                    aria-label="Social Media Links"
                >
                    <div className="relative flex flex-col items-center">
                        <motion.span
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
                            className="text-white text-sm font-bold tracking-[.2em] [writing-mode:vertical-rl] rotate-360"
                        >
                            FOLLOW US
                        </motion.span>

                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
                            className="w-px h-40 bg-white mt-2 origin-top"
                        />
                    </div>

                    <div className="flex flex-col items-center space-y-3 mt-4">
                        {/* Facebook */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 1.6 }}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                        >
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="w-6 h-6 text-white hover:text-[#B89475] transition-colors duration-300" />
                            </Link>
                        </motion.div>

                        {/* Instagram */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 1.8 }}
                            whileHover={{ scale: 1.2, rotate: -5 }}
                        >
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="w-6 h-6 text-white hover:text-[#B89475] transition-colors duration-300" />
                            </Link>
                        </motion.div>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default HomeMain;