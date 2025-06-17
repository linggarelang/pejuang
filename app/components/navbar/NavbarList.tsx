"use client";

import Link from "next/link";
import React, { JSX } from "react";
import { PiUser } from "react-icons/pi";

import { navList } from "@/app/data/navigationList";

const NavbarList = (): JSX.Element => {
    const [userIsOpen, setUserIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const toggleUserMenu = () => {
        setUserIsOpen(!userIsOpen);
    };

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setUserIsOpen(false);
            };
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <ul className="hidden sm:flex sm:items-center space-x-7">
                {navList.map((item) => (
                    <li
                        className="font-thin hover:text-gray-400"
                        key={item.id}
                    >
                        <Link href={item.path}>
                            {item.name}
                        </Link>
                    </li>
                ))}

                <li
                    className="sm:hidden lg:flex text-black hover:text-gray-400 cursor-pointer"
                    onClick={toggleUserMenu}
                >
                    <PiUser />
                </li>
            </ul>

            <div
                ref={dropdownRef}
                className={`absolute top-16 right-1 w-42 bg-gray-800 text-white rounded-b-2xl shadow-lg transform transition-all duration-300 ease-in-out origin-top ${userIsOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible pointer-events-none"
                    }`}
            >
                <ul className="flex flex-col p-4 space-y-3">
                    <li className="font-extralight hover:text-gray-400 cursor-pointer">Login</li>
                    <li className="font-extralight hover:text-gray-400 cursor-pointer">Register</li>
                </ul>
            </div>
        </>
    );
};

export default NavbarList;