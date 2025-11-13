"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Work() {
    const shouldReduceMotion = useReducedMotion();

    const products = [
        {
            id: 1,
            name: "อุปกรณ์วิทยาศาสตร์และเครื่องมือทดลองทางการศึกษา",
            image: "/images/JTEC.png",
            desc: "อุปกรณ์และเครื่องมือทดลองคุณภาพสูงสำหรับการเรียนการสอนและห้องปฏิบัติการ",
        },
        {
            id: 2,
            name: "อุปกรณ์ฉายภาพ, สื่อโฆษณา และมัลติมีเดีย",
            image: "/images/origina.png",
            desc: "โซลูชันมัลติมีเดียสำหรับงานนำเสนอและโฆษณา ตั้งแต่โปรเจคเตอร์ถึงจอ LED",
        },
        {
            id: 3,
            name: "อุปกรณ์ไอทีและคอมพิวเตอร์",
            image: "/images/page.png",
            desc: "พีซี โน้ตบุ๊ค อุปกรณ์เครือข่ายและโซลูชันไอทีสำหรับองค์กรทุกขนาด",
        },
        {
            id: 4,
            name: "ครุภัณฑ์ทางการศึกษา และ ครุภัณฑ์สำนักงาน",
            image: "/images/SMEGP.png",
            desc: "ครุภัณฑ์ที่ทนทาน ออกแบบเพื่อการเรียนการสอนและการใช้งานในสำนักงาน",
        },
    ];

    const container = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.15, when: "beforeChildren" },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section
            id="work"
            aria-labelledby="work-heading"
            className="relative bg-linear-to-b from-white via-gray-50 to-white py-20 overflow-hidden"
        >
            {/* soft gold glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full bg-yellow-200/20 blur-3xl"
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.4 }} // 👈 animate every scroll into view
                    className="text-center mb-12"
                >
                    <h2
                        id="work-heading"
                        className="text-3xl md:text-4xl font-extrabold text-gray-800"
                    >
                        สินค้าและโซลูชันของเรา
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        เราเลือกสรรสินค้าที่เน้นคุณภาพ ทนทาน และตอบโจทย์การใช้งานจริงสำหรับองค์กร สถาบันการศึกษา และธุรกิจ
                    </p>
                    <div className="mt-6 flex justify-center">
                        <span className="inline-block h-1 w-28 rounded-full bg-linear-to-r from-yellow-400 to-yellow-500" />
                    </div>
                </motion.div>

                {/* Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }} // 👈 animate every time visible
                    variants={container}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {products.map((p) => (
                        <motion.article
                            key={p.id}
                            variants={item}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="relative group rounded-2xl bg-white border border-gray-200 overflow-hidden"
                            aria-labelledby={`product-${p.id}-title`}
                        >
                            <div
                                className="absolute inset-0 rounded-2xl pointer-events-none"
                                style={{
                                    boxShadow:
                                        "inset 0 0 0 1.5px rgba(212,175,55,0.18), inset -6px -6px 20px rgba(255,255,255,0.6)",
                                }}
                            />
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="h-48 sm:h-44 md:h-48 overflow-hidden bg-gray-50">
                                    <motion.img
                                        src={p.image}
                                        alt={p.name}
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3
                                            id={`product-${p.id}-title`}
                                            className="text-lg font-semibold text-gray-800 mb-2"
                                        >
                                            {p.name}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                                            {p.desc}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <a
                                            href="#"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-yellow-700 border border-yellow-200 bg-yellow-50 hover:bg-yellow-100 transition"
                                        >
                                            ดูรายละเอียด
                                            <span
                                                aria-hidden="true"
                                                className="transform transition-transform group-hover:translate-x-1"
                                            >
                                                →
                                            </span>
                                        </a>
                                        <div className="text-xs text-gray-400">
                                            SKU: {1000 + p.id}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                aria-hidden="true"
                                className="absolute -bottom-4 -left-4 w-[85%] h-10 rounded-2xl"
                                style={{
                                    boxShadow:
                                        "8px 8px 30px rgba(0,0,0,0.08), -8px -8px 20px rgba(255,255,255,0.7)",
                                }}
                            />
                        </motion.article>
                    ))}
                </motion.div>
            </div>

            <motion.div
                aria-hidden="true"
                className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-[700px] h-[420px] rounded-full blur-3xl bg-yellow-100/30 pointer-events-none"
                initial={shouldReduceMotion ? {} : { opacity: 0.08, x: -200 }}
                animate={shouldReduceMotion ? {} : { opacity: 0.18, x: [-200, 200, -200] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
        </section>
    );
}
