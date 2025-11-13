"use client";
import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <div id="about" >
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }} // 👈 ให้อนิเมชันเล่นทุกครั้งที่เห็น

        className="text-center py-20 bg-linear-to-r from-gray-100 via-white to-gray-50 border-b border-gray-200"
      >
        {/* หัวข้อ */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05, color: "#d4af37" }}
          className="text-4xl font-bold text-gray-800 mb-3 tracking-wide"
        >
          เกี่ยวกับเรา
        </motion.h2>

        {/* เส้นคั่น */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="w-24 h-[3px] bg-linear-to-r from-yellow-500 to-yellow-600 mx-auto mb-6 rounded-full origin-center"
        />

        {/* ข้อความ */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          บริษัท ทีเจซี คอร์ปอเรชั่น จำกัด
          ดำเนินธุรกิจด้านการจัดจำหน่ายและให้บริการจัดซื้อจัดจ้าง สำหรับหน่วยงานภาครัฐ รัฐวิสาหกิจ
          และองค์กรเอกชนทั่วประเทศ โดยมุ่งเน้นการนำเสนอสินค้าและบริการที่มีคุณภาพ
          ตรงตามความต้องการของลูกค้าในทุกภาคส่วน
        </motion.p>
      </motion.section>
    </div>
  );
}
