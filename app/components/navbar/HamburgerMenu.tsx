"use client";

import { motion } from "framer-motion";
import { JSX } from "react";
import { ToggleMenuProps } from "@/app/types/navbar";

const HamburgerMenu = ({ isOpen, toggleMenu }: ToggleMenuProps): JSX.Element => {
    return (
        <div className="block cursor-pointer z-50">
            <button
                onClick={toggleMenu}
                className="relative w-8 h-8 flex flex-col justify-center items-center group"
                aria-label="Toggle menu"
            >
                {/* Line 1 */}
                <motion.span
                    variants={{
                        closed: { rotate: 0, y: -8 },
                        open: { rotate: 45, y: 0 },
                    }}
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                    className="absolute w-6 h-0.5 bg-white"
                />

                {/* Line 2 */}
                <motion.span
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: 0.2 }}
                    className="absolute w-6 h-0.5 bg-white"
                />

                {/* Line 3 */}
                <motion.span
                    variants={{
                        closed: { rotate: 0, y: 8, width: 12, x: 6 },
                        open: { rotate: -45, y: 0, width: 24, x: 0 },
                    }}
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                    className="absolute h-0.5 bg-white"
                />
            </button>
        </div>
    );
};

export default HamburgerMenu;
