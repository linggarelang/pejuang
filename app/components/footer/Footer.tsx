import Link from "next/link";
import React, { JSX } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = (): JSX.Element => {
    return (
        <React.Fragment>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo & Description */}
                <div>
                    <h3 className="text-2xl font-bold mb-3 text-[#f4c289]">PEJUANG</h3>
                    <p className="text-sm leading-relaxed text-[#e0dcd6]">
                        Brewing comfort in every cup. Serving quality coffee with speed, style, and soul wherever you are.
                    </p>

                    <h2 className="text-base leading-relaxed text-[#e0dcd6] mt-5">Follow Us</h2>
                    <div className="flex items-center gap-4 my-2 text-lg">
                        <Link
                            href={"https://facebook.com"}
                            target="blank"
                        >
                            <FaFacebook className="w-6 h-6 hover:text-[#B89475] cursor-pointer" />
                        </Link>

                        <Link
                            href={"https://instagram.com"}
                            target="blank"
                        >
                            <FaInstagram className="w-6 h-6 hover:text-[#B89475] cursor-pointer" />
                        </Link>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col justify-center">
                    <h4 className="text-lg font-semibold mb-3 text-[#f4c289]">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:underline">Home</li>
                        <li className="hover:underline">Menu</li>
                        <li className="hover:underline">About Us</li>
                        <li className="hover:underline">Testimonials</li>
                        <li className="hover:underline">Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#f4c289]">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:underline">Address: Jl. Ringroad Utara, Ngringin, Condongcatur, Sleman, DIY</li>
                        <li className="hover:underline">Email: pejuang@pejuang.co.id</li>
                        <li className="hover:underline">Phone: +62 812 8899 7788</li>
                    </ul>
                </div>

                {/* Newsletter / Contact */}
                <div>
                    <h4 className="text-lg font-semibold mb-3 text-[#f4c289]">Stay Updated</h4>
                    <p className="text-sm mb-4 text-[#e0dcd6]">
                        Subscribe to get the latest news and exclusive offers.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 rounded bg-[#432a1e] text-white placeholder:text-[#cbb8aa] text-sm border border-[#5c4337] focus:outline-none focus:ring-2 focus:ring-[#f4c289]"
                        />
                        <button
                            className="bg-[#f4c289] hover:bg-[#b89475] cursor-pointer text-black px-4 py-2 rounded font-medium text-sm transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#5c4337] mt-12 pt-6 text-center text-xs text-[#c9c2b8]">
                © {new Date().getFullYear()} PEJUANG. All rights reserved.
            </div>
        </React.Fragment >
    );
};

export default Footer;