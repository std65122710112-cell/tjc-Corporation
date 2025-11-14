"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function CustomersCarousel({
    logos = [
        "/images/customers/c01-removebg-preview.png",
        "/images/customers/c02-removebg-preview.png",
        "/images/customers/c03-removebg-preview.png",
        "/images/customers/c04-removebg-preview.png",
        "/images/customers/c05-removebg-preview.png",
        "/images/customers/c06-removebg-preview.png",
        "/images/customers/c07-removebg-preview.png",
        "/images/customers/c08-removebg-preview.png",
        "/images/customers/c09-removebg-preview.png",
        "/images/customers/c010-removebg-preview.png",
        "/images/customers/c11-removebg-preview.png",
        "/images/customers/c01.png",
    ],
    height = 120,
    duration = 22,
}) {
    const controls = useAnimation();
    const [paused, setPaused] = useState(false);
    const loopLogos = [...logos, ...logos];

    // ฟังก์ชันสั่งให้ Slide เล่นต่อ
    const startSlide = () => {
        controls.start({
            x: ["0%", "-50%"],
            transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration,
                ease: "linear",
            },
        });
    };

    // เริ่ม Slide อัตโนมัติ
    useEffect(() => {
        startSlide();
    }, []);

    // คลิก = หยุด / เล่นต่อ
    const togglePause = () => {
        if (paused) {
            startSlide(); // เล่นต่อ
        } else {
            controls.stop(); // หยุด
        }
        setPaused(!paused);
    };

    return (
        <section className="py-16 bg-white relative">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h3 className="text-center text-3xl sm:text-4xl font-extrabold tracking-wide text-black mb-10">
                    ลูกค้าที่ไว้วางใจเรา
                </h3>

                <div className="relative overflow-hidden">

                    {/* motion div: Hover จะไม่หยุด, คลิกแทน */}
                    <motion.div
                        className="flex items-center gap-10 cursor-pointer"
                        animate={controls}
                        onClick={togglePause}
                    >
                        {loopLogos.map((src, idx) => (
                            <div
                                key={idx}
                                className="
                                    shrink-0 
                                    flex items-center justify-center 
                                    bg-white 
                                    rounded-xl 
                                    shadow-md 
                                    hover:shadow-xl
                                    transition-all 
                                    duration-300 
                                    p-4 
                                    border border-transparent
                                    hover:border-[#d5b14b]/60
                                "
                                style={{
                                    width: 180,
                                    height: height,
                                }}
                            >
                                <img
                                    src={src}
                                    alt={`ลูกค้า ${idx}`}
                                    className="
                                        w-full h-full 
                                        object-contain 
                                        opacity-90 
                                        hover:opacity-100
                                        hover:scale-[1.08]
                                        transition-all 
                                        duration-300
                                    "
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </motion.div>

                    {/* Fade ซ้าย–ขวา */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white via-white/70 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white via-white/70 to-transparent" />
                </div>
            </div>
        </section>
    );
}
