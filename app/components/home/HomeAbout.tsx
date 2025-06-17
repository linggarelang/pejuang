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

            <div className="flex flex-col lg:flex-row items-center justify-between space-y-5 space-x-0 lg:space-x-24 mt-10">
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ratione quas, reiciendis ab architecto placeat iusto voluptate eius consectetur molestias nostrum adipisci labore esse quibusdam consequuntur. Expedita velit sapiente ipsum officia aliquid pariatur sit nihil veniam itaque, deserunt eligendi illo possimus suscipit enim harum accusantium nostrum consectetur molestiae deleniti voluptatibus alias. Iure architecto necessitatibus sapiente est labore voluptatibus, reprehenderit, adipisci consequuntur ad distinctio ullam suscipit, corrupti veritatis? Tenetur saepe repellat ducimus sit distinctio, doloremque id impedit autem eum veritatis minus! Accusantium ea repellendus tempora quos saepe delectus minus provident inventore hic possimus, repellat nam excepturi, aut labore, quasi fugit? Quisquam?
                    </p>
                </motion.div>

                <motion.div
                    ref={ref}
                    style={{
                        rotateX,
                        rotateY,
                        transformPerspective: 1000,
                    }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="w-full h-auto"
                >
                    <motion.div
                        className="w-full h-auto"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        <Image
                            src="/bg-image-pejuang.jpg"
                            alt="Background Image"
                            objectFit="cover"
                            width={500}
                            height={500}
                            className="w-full rounded-md"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div >
    );
};

export default HomeAbout;