"use client";
import { motion } from "framer-motion";

export default function TeamSection() {
  const members = [
    { name: "นายธวัชชัย เจริญผล", role: "ประธานกรรมการบริหาร (CEO)", img: "/images/ceo.jpg" },
    { name: "นางสาวพัชราภา มณีวงศ์", role: "ผู้อำนวยการฝ่ายเทคโนโลยี (CTO)", img: "/images/cto.jpg" },
    { name: "นายปิยะพงษ์ สุวรรณโชติ", role: "ผู้อำนวยการฝ่ายการตลาด (CMO)", img: "/images/cmo.jpg" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" },
      }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-linear-to-br from-white via-gray-50 to-gray-100 py-24 border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* 📸 ภาพฝั่งซ้าย */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.0, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative group rounded-3xl overflow-hidden shadow-[10px_10px_30px_rgba(0,0,0,0.1)] border border-gray-200"
        >
          <motion.img
            src="/images/tjc.jpg"
            alt="Company Building"
            className="w-full h-full object-cover rounded-3xl transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900/50 via-gray-900/10 to-transparent rounded-3xl"></div>
          <div className="absolute inset-0 border-[3px] border-yellow-500/40 rounded-3xl"></div>
        </motion.div>

        {/* 👨‍💼 ข้อมูลทีม */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.0, ease: "easeOut" },
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-4xl font-extrabold text-gray-800 mb-6 tracking-wide">
            ทีมผู้บริหารของเรา
          </h3>
          <p className="text-gray-700 leading-relaxed mb-10 text-lg max-w-lg">
            ทีมผู้บริหารของเราประกอบด้วยผู้เชี่ยวชาญในหลากหลายสาขา
            ทั้งเทคโนโลยี การตลาด และการบริหารจัดการ
            มุ่งมั่นสร้างองค์กรที่เติบโตอย่างมั่นคงและยั่งยืน
            ด้วยความเป็นมืออาชีพและจิตวิญญาณแห่งนวัตกรรม
          </p>

          <div className="space-y-6">
            {members.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8 + i * 0.15, ease: "easeOut" },
                }}
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 6px 25px rgba(212,175,55,0.3)",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="flex items-center gap-4 bg-white rounded-2xl border border-gray-200 shadow-[6px_6px_0px_rgba(180,180,180,0.3)] p-5 transition-all"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500 shadow-md"
                />
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-gray-800">{m.name}</h4>
                  <p className="text-yellow-700 text-sm font-medium">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
