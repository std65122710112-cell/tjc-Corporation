"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function CertificationsSection() {
    const certs = [
        {
            title: "ISO 9001:2015",
            desc: "มาตรฐานระบบบริหารคุณภาพที่รับรองการดำเนินงานทุกขั้นตอนอย่างมีประสิทธิภาพ",
            img: "/images/รับรอง01.png",
        },
        {
            title: "ISO/IEC 27001",
            desc: "มาตรฐานระบบบริหารความมั่นคงปลอดภัยสารสนเทศ เพื่อการจัดการข้อมูลอย่างปลอดภัย",
            img: "/images/รับรอง02.png",
        },

    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-linear-to-b from-gray-50 via-white to-gray-100 py-20 border-t border-gray-200"
        >
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* 🏅 หัวข้อ */}
                <motion.h2
                    className="text-4xl font-bold text-gray-800 mb-4"
                    variants={fadeUp}
                >
                    มาตรฐานและการรับรองคุณภาพ
                </motion.h2>
                <motion.p
                    className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
                    variants={fadeUp}
                >
                    เราดำเนินธุรกิจด้วยมาตรฐานระดับสากล เพื่อให้มั่นใจว่าลูกค้าจะได้รับบริการ
                    ที่มีคุณภาพ ความปลอดภัย และความเชื่อถือได้สูงสุด
                </motion.p>

                {/* 📜 รายการใบรับรอง */}
                <div className="grid md:grid-cols-2 gap-10">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl border border-gray-200 shadow-[6px_6px_0px_rgba(180,180,180,0.3)] hover:shadow-[8px_8px_0px_rgba(212,175,55,0.3)] p-6 transition-all duration-500"
                        >
                            <img
                                src={cert.img}
                                alt={cert.title}
                                className="w-24 h-24 mx-auto mb-6 object-contain"
                            />
                            <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                                {cert.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{cert.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
