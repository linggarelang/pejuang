"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

import { products } from "@/app/data/productLists";

const HomeProduct = () => {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                ease: 'easeOut',
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.4,
                ease: 'easeIn',
            },
        },
    };
    return (
        <div className="w-full h-auto my-10 py-10 px-7 lg:px-20">
            <motion.h1
                className="text-center font-bold text-5xl"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                Products
            </motion.h1>

            <motion.div
                className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.4 }}
            >
                {products.map((product) => (
                    <motion.div key={product.productId} variants={item}>
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={150}
                            height={150}
                            className="w-96 h-auto object-cover mb-4 rounded-lg shadow-md"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default HomeProduct;