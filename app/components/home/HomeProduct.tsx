import React, { JSX } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { productsLists } from "@/app/data/productLists";

{/* Product Section */ }
const HomeProduct = (): JSX.Element => {
    return (
        <section className="relative min-h-screen w-full bg-[#E3DAC9] py-20 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-[#2f1b0c]"
                >
                    Explore Our Signature Brews
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-2xl text-[#3e2c1f] italic mt-3"
                >
                    Crafted with care. Served with passion.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {productsLists.map((product) => (
                    <motion.div
                        key={product.productId}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
                    >

                        <div className="relative h-64 w-full mb-4">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover object-center bg-center"
                            />

                            {product.isBestSeller && (
                                <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                                    Best Seller
                                </span>
                            )}
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between">
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-[#2f1b0c] mb-4">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-[#4d3b2c]">
                                    {product.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-md font-bold text-[#B89475]">
                                    ${product.price.toFixed(2)}
                                </p>
                                <button
                                    disabled={!product.isAvailable}
                                    className={`px-4 py-2 text-sm rounded font-medium text-white transition-colors duration-300 ease-in-out ${product.isAvailable
                                        ? "bg-[#B89475] hover:bg-[#a57e5d] cursor-pointer"
                                        : "bg-gray-400 cursor-not-allowed"
                                        }`}
                                >
                                    {product.isAvailable ? "Order Now" : "Unavailable"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default HomeProduct