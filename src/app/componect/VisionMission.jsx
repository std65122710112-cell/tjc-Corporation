"use client";
import { motion } from "framer-motion";

export default function VisionMission() {
  const items = [
    {
      title: "วิสัยทัศน์",
      desc: "เป็นพาร์ทเนอร์ทางเทคโนโลยีที่องค์กรไว้วางใจ พร้อมขับเคลื่อนธุรกิจไทยสู่อนาคตดิจิทัล",
    },
    {
      title: "พันธกิจ",
      desc: "พัฒนาเทคโนโลยีที่ตอบโจทย์ผู้ใช้งาน ออกแบบระบบที่เสถียร ใช้งานง่าย และสร้างคุณค่าให้กับองค์กร",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: false, amount: 0.3 }} // 👈 เล่นซ้ำทุกครั้งที่เลื่อนมาเห็น
          whileHover={{
            scale: 1.05,
            boxShadow: "10px 10px 0px rgba(212,175,55,0.5)",
            transition: { duration: 0.3 },
          }}
          className="bg-white border border-gray-200 rounded-2xl p-10 shadow-[6px_6px_0px_rgba(150,150,150,0.25)] hover:shadow-[10px_10px_0px_rgba(212,175,55,0.3)] transition-all duration-300"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-2xl font-semibold text-yellow-600 mb-3 tracking-wide"
          >
            {item.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-gray-700 leading-relaxed"
          >
            {item.desc}
          </motion.p>
        </motion.div>
      ))}
    </section>
  );
}
