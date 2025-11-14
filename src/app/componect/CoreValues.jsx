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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-linear-to-r from-white via-gray-50 to-gray-100 py-20 border-t border-gray-200"
      id="core-values"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* หัวข้อหลัก */}
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-3xl font-bold text-gray-800 tracking-wide"
          >
            ค่านิยมองค์กร
          </motion.h3>

          {/* เส้นอนิเมชัน */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className="w-24 h-[3px] bg-linear-to-r from-yellow-500 to-yellow-600 mx-auto mt-3 rounded-full origin-center"
          />
        </div>

        {/* กล่องแต่ละค่านิยม */}
        <div className="grid sm:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: i === 0 ? -80 : i === 2 ? 80 : 0,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(255,255,240,0.95)",
                boxShadow: "0 0 25px rgba(212,175,55,0.4)",
                transition: { duration: 0.3 },
              }}
              className="bg-white border border-gray-200 rounded-2xl shadow-[6px_6px_0px_rgba(180,180,180,0.25)] p-8 text-center transition-all duration-300"
            >
              <motion.h4
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="text-xl font-semibold text-yellow-700 mb-3"
              >
                {item.title}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: false }}
                className="text-gray-700 leading-relaxed"
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
