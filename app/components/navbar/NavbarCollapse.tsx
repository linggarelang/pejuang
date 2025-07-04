"use client";

import Link from "next/link";
import React, { JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { navigationLists } from "@/app/data/navigationLists";
interface Props {
    isOpen: boolean;
    scrolled: boolean;
}

const NavbarCollapse = ({ isOpen, scrolled }: Props): JSX.Element => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    key="mobile-nav"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`lg:hidden px-6 py-4 space-y-4 text-white ${scrolled ? "bg-[#3b2f2f]/90 backdrop-blur-md" : "bg-black/80"
                        } rounded-b-md shadow-md transition-colors duration-300`}
                >
                    <ul className="space-y-2 text-sm font-light">
                        {navigationLists.map((item) => (
                            <li
                                key={item.id}
                                className="block hover:underline text-xl text-white py-5 transition-colors duration-300 hover:text-[#B89475] text-center"
                            >
                                <Link href={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NavbarCollapse;
