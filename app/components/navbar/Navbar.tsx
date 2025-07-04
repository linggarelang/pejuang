"use client";

import React, { JSX } from "react";

import HamburgerMenu from "./HamburgerMenu";
import NavbarCollapse from "./NavbarCollapse";
import Link from "next/link";
import { navigationLists } from "@/app/data/navigationLists";


const Navbar = (): JSX.Element => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="absolute w-full lg:w-4/5 top-0 lg:top-5 left-0 lg:left-1/2 transform lg:-translate-x-1/2 px-4 lg:px-0 z-50" aria-label="Main Navigation">
            <div className="bg-transparent lg:bg-[#3b2f2f]/80 backdrop-blur-md px-4 py-3 lg:px-8 rounded-md flex items-center justify-between text-white shadow-md">
                {/* Logo */}
                <div className="font-semibold text-lg flex items-center space-x-2">
                    <Link href="/" className="cursor-pointer">
                        PEJUANG
                    </Link>
                </div>

                {/* Desktop Nav Links */}
                <ul className="hidden lg:flex space-x-6 text-sm font-light">
                    {navigationLists.map((item) => (
                        <li key={item.id} className="hover:underline underline-offset-4 transition-colors duration-300 hover:text-[#B89475]">
                            <Link href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                    <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>
            </div>

            {/* Mobile Nav Collapse */}
            <NavbarCollapse isOpen={isOpen} scrolled={scrolled} />
        </nav>
    );
};

export default Navbar;