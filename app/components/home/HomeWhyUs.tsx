"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion"
import { FaLeaf } from "react-icons/fa6";
import { FaCoffee, FaShippingFast } from "react-icons/fa";

{/* Why Us Section as HoneWhyUs */ }
const HomeWhyUs = (): JSX.Element => {
    return (
        <section className="relative w-full bg-[#F5F3EE] py-20 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-[#2f1b0c] tracking-tight mb-7"
                >
                    Why Choose Us?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-[#3e2c1f] italic"
                >
                    We blend quality, speed, and care in every cup.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                {/* Feature 1 */}
                <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: 'easeOut' } }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                    <FaCoffee className="text-4xl text-[#B89475] mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-[#2f1b0c] mb-2">Freshly Brewed</h3>
                    <p className="text-sm text-[#4d3b2c]">
                        Every cup is made fresh with premium beans, ensuring top-notch taste and aroma.
                    </p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: 'easeOut' } }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                    <FaLeaf className="text-4xl text-[#B89475] mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-[#2f1b0c] mb-2">Sustainably Sourced</h3>
                    <p className="text-sm text-[#4d3b2c]">
                        We care for the planet — sourcing our ingredients from ethical and sustainable farms.
                    </p>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: 'easeOut' } }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                    <FaShippingFast className="text-4xl text-[#B89475] mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-[#2f1b0c] mb-2">Quick Delivery</h3>
                    <p className="text-sm text-[#4d3b2c]">
                        With just a few taps, your favorite coffee is on its way — hot, fast, and fresh.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeWhyUs;