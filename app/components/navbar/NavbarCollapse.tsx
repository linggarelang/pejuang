"use client";

import React, { JSX } from "react";
import Link from "next/link";
import { navList } from "@/app/data/navigationList";

const NavbarCollapse = ({ isOpen, scrolled }: { isOpen: boolean, scrolled: boolean }): JSX.Element => {
    return (
        <ul
            className={`shadow-md px-2 text-black origin-top text-center overflow-hidden transition-all transform duration-500 
                ${isOpen
                    ? "max-h-96 scale-y-100"
                    : "max-h-0 scale-y-0"
                }
                ${scrolled || isOpen
                    ? "backdrop-blur-md"
                    : "backdrop-blur-none"
                }`
            }
            id="mobile-menu"
        >
            {navList.map((item) => (
                <li
                    key={item.id}
                    className="text-xl text-white py-7"
                >
                    <Link href={item.path}>{item.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default NavbarCollapse;