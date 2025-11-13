"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "จัดส่งสินค้า",
      desc: "บริการจัดส่งรวดเร็ว ปลอดภัยทั่วประเทศ ด้วยระบบติดตามเรียลไทม์",
      images: "/images/delivery.png",
    },
    {
      title: "บริการติดตั้ง",
      desc: "ทีมช่างมืออาชีพ พร้อมให้บริการติดตั้งอุปกรณ์ครบวงจรถึงที่",
      images: "/images/install.png",
    },
    {
      title: "ตรวจเช็กการทำงาน",
      desc: "ดูแลลูกค้าตลอดอายุการใช้งาน พร้อมให้คำปรึกษาโดยผู้เชี่ยวชาญ",
      images: "/images/After-sales service.png",
    },
    {
      title: "รับประกันสินค้า",
      desc: "มั่นใจได้กับการรับประกันสินค้าทุกชิ้น พร้อมบริการเปลี่ยนทดแทน",
      images: "/images/Productguarantee.png",
    },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            บริการของเรา
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ครบวงจรด้านอุปกรณ์คอมพิวเตอร์ ตั้งแต่การจำหน่าย การติดตั้ง ไปจนถึงการบริการหลังการขาย
          </p>
          <motion.div
            className="w-20 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{
                y: -8,
                boxShadow:
                  "6px 6px 0px rgba(0,0,0,0.25), -3px -3px 0px rgba(255,255,255,0.6)",
              }}
              transition={{ duration: 0.3 }}
              className="group bg-white rounded-2xl p-6 border-l-3 border-b-3 border-yellow-500 shadow-[5px_5px_5px_rgba(0,0,0,0.25),-3px_-3px_0px_rgba(255,255,255,0.7)] transition-all duration-300"
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-6 flex justify-center"
              >
                <img
                  src={service.images}
                  alt={service.title}
                  className="w-40 h-40 object-contain drop-shadow-[2px_3px_3px_rgba(0,0,0,0.3)]"
                />
              </motion.div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.desc}
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm flex items-center gap-1 mx-auto group/btn"
                >
                  <span>เรียนรู้เพิ่มเติม</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 2,
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
