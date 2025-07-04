"use client";

import Image from "next/image";
import React, { JSX } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Variants, motion } from "framer-motion";

const textFadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const textFadeLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textFadeRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageFadeLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageFadeRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonFadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.4,
        },
    },
};

{/* About Section as HomeAbout */ }
const HomeAbout = (): JSX.Element => {
    return (
        <motion.section
            className="relative w-full min-h-screen bg-[#432A1E] flex items-center justify-center py-20 px-4 md:px-0 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerContainer}
        >
            {/* Decorative Background Shape */}
            <div className="absolute -top-10 -left-20 w-72 h-72 bg-[#f4c289]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left: Text Content */}
                <motion.div
                    variants={staggerContainer}
                    className="flex flex-col justify-center h-full md:pr-10 text-white"
                >
                    <motion.div
                        variants={textFadeUp}
                        className="w-14 h-[2px] bg-[#f4c289] mb-4 origin-left"
                    />

                    <motion.h1
                        variants={textFadeUp}
                        className="text-3xl md:text-5xl font-bold mb-3 leading-tight"
                    >
                        Our Story
                    </motion.h1>

                    <motion.h2
                        variants={textFadeLeft}
                        className="text-lg md:text-2xl font-serif italic font-medium mb-6 text-[#E3DAC9]"
                    >
                        Coffee with a Purpose — Anytime, Anywhere
                    </motion.h2>

                    <motion.p
                        variants={textFadeRight}
                        className="text-sm md:text-base font-extralight leading-relaxed text-[#e4dbd1] mb-4 first-letter:text-[#f4c289]"
                    >
                        Our journey began with a single cup — and a desire to share warmth
                        and comfort in a fast-paced world. Every brew we serve is crafted
                        with care: from handpicked beans to precise brewing, because we
                        believe that everyone deserves a pause that feels just right.
                    </motion.p>

                    <motion.p
                        variants={textFadeUp}
                        className="text-sm md:text-base font-extralight leading-relaxed text-[#e4dbd1] mb-8 first-letter:text-[#f4c289]"
                    >
                        Through this platform, we&apos;ve made your favorite coffee just a few
                        taps away. No queues, no fuss — just great coffee, on demand. More
                        than a drink, it&apos;s an experience built to fit right into your
                        lifestyle.
                    </motion.p>

                    <motion.div
                        variants={buttonFadeUp}
                    >
                        <motion.button
                            whileHover="hover"
                            initial="initial"
                            transition={{ duration: 0.3 }}
                            variants={{
                                initial: {},
                                hover: {},
                            }}
                            className="group w-fit bg-[#f4c289] hover:bg-[#B89475] text-black font-semibold px-6 py-3 rounded shadow cursor-pointer transition-colors duration-300 ease-in-out flex items-center"
                        >
                            Read More

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
                    </motion.div>
                </motion.div>

                {/* Right: Images Grid Asymmetric */}
                <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-5 grid-rows-2 gap-4 h-[340px] md:h-[400px]"
                >
                    {/* Image 1 */}
                    <motion.div
                        variants={imageFadeLeft}
                        className="relative col-span-3 row-span-1 rounded-lg overflow-hidden"
                    >
                        <Image
                            src="/img/latte.jpg"
                            alt="Pour Over"
                            fill
                            className="object-cover object-center bg-center w-full h-full"
                            priority
                        />
                    </motion.div>

                    {/* Image 2 */}
                    <motion.div
                        variants={imageFadeRight}
                        className="relative col-span-2 row-span-1 rounded-lg overflow-hidden"
                    >
                        <Image
                            src="/img/americano.jpg"
                            alt="Cafe Interior"
                            fill
                            className="object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Image 3 */}
                    <motion.div
                        variants={imageFadeLeft}
                        className="relative col-span-2 row-span-1 rounded-lg overflow-hidden"
                    >
                        <Image
                            src="/img/matcha.jpg"
                            alt="Open Sign"
                            fill
                            className="object-cover w-full h-full"
                        />
                    </motion.div>

                    {/* Image 4 */}
                    <motion.div
                        variants={imageFadeRight}
                        className="relative col-span-3 row-span-1 rounded-lg overflow-hidden"
                    >
                        <Image
                            src="/img/others-6.jpg"
                            alt="Coffee Grounds"
                            fill
                            className="object-cover object-center bg-center w-full h-full"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HomeAbout;