"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";

const HomeMain = (): JSX.Element => {
    return (
        <div className="w-full h-auto mb-10 lg:px-20">
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .2, delay: 1.5, ease: 'easeInOut' }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="text-6xl md:text-7xl font-normal tracking-widest text-black"
                >
                    PEJUANG
                </motion.h1>
            </div>
        </div>
    );
};

export default HomeMain;