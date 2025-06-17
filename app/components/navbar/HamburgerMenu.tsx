import { JSX } from "react";
import React from "react";
import { ToggleMenuProps } from "@/app/types/navbar";

const HamburgerMenu = ({ isOpen, toggleMenu }: ToggleMenuProps): JSX.Element => {

    return (
        <div className="block cursor-pointer z-50">
            <button
                onClick={toggleMenu}
                className="relative w-8 h-8 flex flex-col justify-center items-center group cursor-pointer"
            >
                <span className={`absolute w-6 h-0.5 bg-white transform transition duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"}`}
                />
                <span className={`absolute w-6 h-0.5 bg-white transition-all duration-150 ${isOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span className={`absolute ${isOpen ? "right-auto w-6" : "right-1 w-3"} h-0.5 bg-white transform transition duration-300 ${isOpen ? "-rotate-45 " : "translate-y-2"}`}
                />
            </button>
        </div>
    );
};

export default HamburgerMenu;