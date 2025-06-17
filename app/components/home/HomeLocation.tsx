"use client";

import React, { JSX } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomeLocation = (): JSX.Element => {
    const [isInteractive, setIsInteractive] = React.useState(false);
    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    React.useEffect(() => {
        if (!inView && isInteractive) {
            setIsInteractive(false);
        }
    }, [inView, isInteractive]);

    return (
        <div
            ref={ref}
            className="relative w-full h-auto rounded-lg overflow-hidden my-10 py-10 px-7 lg:px-20"
        >
            <motion.h1
                className="text-center font-bold text-5xl mb-10"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
            >
                Our Location
            </motion.h1>

            {/* Overlay yang menahan interaksi iframe */}
            {!isInteractive && (
                <div
                    className="absolute inset-0 z-10 bg-transparent cursor-pointer"
                    onClick={() => setIsInteractive(true)}
                    title="Klik untuk aktifkan peta"
                />
            )}

            {/* iframe Maps dengan pointerEvents toggle */}
            <div className="relative w-full h-[500px]">
                <motion.iframe
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    title="Google Map"
                    style={{
                        border: 0,
                        pointerEvents: isInteractive ? "auto" : "none", // penting!
                    }}
                    src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL as string || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.2818903271213!2d110.40647117415492!3d-7.759899576954625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599bd3bdc4ef%3A0x6f1714b0c4544586!2sUniversitas%20Amikom%20Yogyakarta!5e0!3m2!1sid!2sid!4v1750122194727!5m2!1sid!2sid"}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    className="absolute inset-0 w-full h-full"
                />
            </div>
        </div>
    );
};

export default HomeLocation;