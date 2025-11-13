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
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{
            scale: 1.03,
            boxShadow: "8px 8px 0px rgba(212,175,55,0.5)",
            transition: { duration: 0.3 },
          }}
          className="bg-white border border-gray-200 rounded-2xl p-8 shadow-[6px_6px_0px_rgba(150,150,150,0.3)]"
        >
          <h3 className="text-2xl font-semibold text-yellow-600 mb-3">{item.title}</h3>
          <p className="text-gray-700 leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
