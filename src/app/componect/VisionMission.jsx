"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VisionMission() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // เลื่อนแนวนอนนิดๆ และเฟดอินแบบ smooth ตาม scroll
  const xLeft = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

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
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10"
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          style={{
            opacity,
            x: i % 2 === 0 ? xLeft : xRight,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "10px 10px 0px rgba(212,175,55,0.5)",
            transition: { duration: 0.3 },
          }}
          className="bg-white border border-gray-200 rounded-2xl p-10 shadow-[6px_6px_0px_rgba(150,150,150,0.25)] hover:shadow-[10px_10px_0px_rgba(212,175,55,0.3)] transition-all duration-300"
        >
          <motion.h3
            className="text-2xl font-semibold text-yellow-600 mb-3 tracking-wide"
          >
            {item.title}
          </motion.h3>
          <motion.p className="text-gray-700 leading-relaxed">
            {item.desc}
          </motion.p>
        </motion.div>
      ))}
    </section>
  );
}
