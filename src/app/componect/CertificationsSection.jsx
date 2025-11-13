"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function CertificationsSection() {
    const [selectedImage, setSelectedImage] = useState(null);

    const certs = [
        {
            title: "ISO 14001:2015",
            desc: "มาตรฐานระบบบริหารสิ่งแวดล้อมสากล ที่ช่วยให้องค์กรวางกรอบการจัดการด้านสิ่งแวดล้อม ลดผลกระทบจากการดำเนินงาน ปฏิบัติตามกฎหมาย และพัฒนาการดำเนินงานอย่างยั่งยืน",
            img: "/images/รับรอง01.png",
        },
        {
            title: "ISO 9001:2015",
            desc: "มาตรฐานระบบบริหารคุณภาพสากล ที่กำหนดข้อกำหนดในการจัดตั้ง รักษา และปรับปรุงระบบบริหารคุณภาพ (QMS) เพื่อให้บริการหรือผลิตภัณฑ์ขององค์กรตรงตามความต้องการของลูกค้า และสร้างความมั่นใจในคุณภาพอย่างต่อเนื่อง",
            img: "/images/รับรอง02.png",
        },
    ];

    return (
        <>
            <motion.section
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                viewport={{ once: false, amount: 0.3 }}
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
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.3 }}
                                variants={fadeUp}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "8px 8px 0px rgba(212,175,55,0.4)",
                                    transition: { duration: 0.3 },
                                }}
                                className="bg-white rounded-2xl border border-gray-200 shadow-[6px_6px_0px_rgba(180,180,180,0.3)] hover:shadow-[8px_8px_0px_rgba(212,175,55,0.3)] p-6 transition-all duration-500 cursor-pointer"
                                onClick={() => setSelectedImage(cert.img)}
                            >
                                <motion.img
                                    src={cert.img}
                                    alt={cert.title}
                                    className="w-24 h-24 mx-auto mb-6 object-contain"
                                    whileInView={{ scale: [0.9, 1] }}
                                    transition={{ duration: 0.5 }}
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

            {/* 🔍 Modal แสดงภาพใหญ่ */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.img
                            src={selectedImage}
                            alt="ใบรับรอง"
                            className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl"
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
