"use client";

import React, { JSX } from "react";

import HamburgerMenu from "./HamburgerMenu";
import NavbarCollapse from "./NavbarCollapse";
import Link from "next/link";


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
        <nav className={`fixed bg-black top-0 left-0 w-full ${scrolled ? "backdrop-blur-sm" : "backdrop-blur-none"} z-50`}>
            <div className="flex px-7 lg:px-20 py-5 justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl text-center text-white font-semibold cursor-pointer"
                >
                    PEJUANG
                </ Link>
                <HamburgerMenu
                    isOpen={isOpen}
                    toggleMenu={toggleMenu}
                />

            </div>

            <NavbarCollapse isOpen={isOpen} scrolled={scrolled} />
        </nav>
    );
};

export default Navbar;