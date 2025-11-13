"use client";
import { motion } from "framer-motion";

export default function CoreValues() {
  const values = [
    { title: "💡 นวัตกรรม", desc: "กล้าคิด กล้าทำสิ่งใหม่ ๆ เพื่อสร้างคุณค่า" },
    { title: "🤝 ความร่วมมือ", desc: "ทำงานเป็นทีมอย่างแข็งแกร่งเพื่อผลลัพธ์ที่ดีที่สุด" },
    { title: "🎯 คุณภาพ", desc: "มุ่งมั่นสร้างงานคุณภาพและมาตรฐานระดับสูง" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-linear-to-r from-white to-gray-50 py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-semibold text-gray-800 text-center mb-10">
          ค่านิยมองค์กร
        </h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.06,
                backgroundColor: "rgba(255,255,240,0.9)",
                boxShadow: "0 0 20px rgba(212,175,55,0.3)",
              }}
              className="bg-white border border-gray-200 rounded-2xl shadow-[4px_4px_0px_rgba(180,180,180,0.3)] p-6 text-center transition-all"
            >
              <h4 className="text-xl font-semibold text-yellow-700 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
