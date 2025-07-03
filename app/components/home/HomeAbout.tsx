"use client";

import React, { type MouseEventHandler, JSX } from "react";
import {
    motion,
    type MotionValue,
    useMotionValue,
    useTransform,
    useSpring
} from "framer-motion";
import Image from "next/image";

const HomeAbout = (): JSX.Element => {
    const ref = React.useRef<HTMLDivElement>(null)

    const rawX: MotionValue<number> = useMotionValue(0);
    const rawY: MotionValue<number> = useMotionValue(0);

    const mouseX: MotionValue<number> = useSpring(rawX, { stiffness: 150, damping: 15 });
    const mouseY: MotionValue<number> = useSpring(rawY, { stiffness: 150, damping: 15 });

    const rotateX: MotionValue<number> = useTransform(mouseY, [-100, 100], [5, -5]);
    const rotateY: MotionValue<number> = useTransform(mouseX, [-100, 100], [-5, 5]);

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e: React.MouseEvent): void => {
        const rect: DOMRect | undefined = ref.current?.getBoundingClientRect()

        if (!rect) return

        const { left, top, width, height } = rect

        const x: number = e.clientX - (left ?? 0)
        const y: number = e.clientY - (top ?? 0)

        const xPercent: number = x / (width ?? 1)
        const yPercent: number = y / (height ?? 1)

        rawX.set(xPercent * 200 - 100);
        rawY.set(yPercent * 200 - 100);
    }

    const handleMouseLeave: MouseEventHandler<HTMLDivElement> = (): void => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <div className="w-full h-auto my-10 py-10 px-7 lg:px-20">
            <motion.h1
                className="text-center font-bold text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.5 }}
            >
                ABOUT US
            </motion.h1>

            <div className="flex flex-col lg:flex-row items-center justify-center space-y-5 space-x-0 lg:space-x-10 mt-10">
                <motion.div
                    className="w-full h-auto"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <p
                        className="text-justify"
                    >
                        Pejuang Coffee hadir sebagai tempat berlabuh bagi para pencinta kopi yang tak hanya mencari rasa, tapi juga makna. Lahir dari semangat para pejuang pagi, siang, hingga malam, kami percaya bahwa secangkir kopi mampu menjadi teman terbaik dalam setiap langkah perjuangan hidup.

                        Kami memadukan cita rasa kopi lokal terbaik Indonesia dengan suasana hangat yang mendukung produktivitas dan kreativitas. Lewat aplikasi ini, Pejuang Coffee ingin lebih dekat denganmu — memudahkan pemesanan, berbagi cerita, hingga menikmati promo spesial hanya dalam genggaman.

                        Pejuang bukan sekadar coffee shop. Kami adalah komunitas, tempat bertemu, dan ruang tumbuh bersama. Karena setiap pejuang pantas mendapatkan kopi terbaik.
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    style={{
                        rotateX,
                        rotateY,
                        transformPerspective: 1200,
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="w-full lg:w-1/2 h-auto overflow-hidden"
                >
                    <motion.div
                        className="w-auto h-auto"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <Image
                            src="/img/others-6.jpg"
                            alt="Background Image"
                            width={500}
                            height={500}
                            className="w-full max-w-xs sm:max-w-md h-auto bg-cover object-cover rounded-md"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div >
    );
};

export default HomeAbout;