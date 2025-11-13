"use client";
import { motion } from "framer-motion";

export default function AboutHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center py-20 bg-linear-to-r from-gray-100 via-white to-gray-50 border-b border-gray-200"
    >
      <motion.h2
        whileHover={{ scale: 1.03, color: "#d4af37" }}
        className="text-4xl font-bold text-gray-800 mb-3 tracking-wide"
      >
        เกี่ยวกับเรา
      </motion.h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        บริษัท ทีเจซี คอร์ปอเรชั่น จำกัด
        ดำเนินธุรกิจด้านการจัดจำหน่ายและให้บริการจัดซื้อจัดจ้าง สำหรับหน่วยงานภาครัฐ รัฐวิสาหกิจ และองค์กรเอกชนทั่วประเทศ
        โดยมุ่งเน้นการนำเสนอสินค้าและบริการที่มีคุณภาพ ตรงตามความต้องการของลูกค้าในทุกภาคส่วน
      </p>
    </motion.section>
  );
}
