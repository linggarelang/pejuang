"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";

{/* CTA Button Section as HomeEnd */ }
const HomeEnd = (): JSX.Element => {
    return (
        <section className="relative w-full bg-[#2F1B0C] py-20 px-4 overflow-hidden">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10 relative">

                {/* Background Shape (Optional Decorative) */}
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#f4c289]/10 rounded-full blur-3xl pointer-events-none z-0"></div>
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#f4c289]/10 rounded-full blur-3xl pointer-events-none z-0"></div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6"
                >
                    Make Every Sip Count.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-[#E3DAC9] italic mb-10 max-w-xl"
                >
                    Order your favorite coffee in seconds — fresh, fast, and just the way you like it.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-[#f4c289] hover:bg-[#B89475] text-black font-semibold px-8 py-3 rounded-full shadow-md transition duration-300 cursor-pointer"
                >
                    Order Now
                </motion.button>
            </div>
        </section>
    )
}

export default HomeEnd