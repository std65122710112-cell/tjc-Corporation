"use client";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-linear-to-br from-white via-gray-50 to-gray-100 border-t border-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">

                {/* 🔸 โลโก้ + ชื่อบริษัท */}
                <div className="flex items-center gap-3">
                    <img src="images/logo.png" alt="" className=" w-14 "  />
                    <div>
                        <p className="text-base font-semibold text-gray-800">
                            TJC Corporation
                        </p>
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} TJC Corporation. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* 🔸 ลิงก์เมนูฟุตเตอร์ */}
                <nav className="flex gap-6 text-sm text-gray-600 font-medium">
                    <a
                        href="#privacy"
                        className="hover:text-[#bfa334] transition-colors duration-200"
                    >
                        นโยบายความเป็นส่วนตัว
                    </a>
                    <a
                        href="#terms"
                        className="hover:text-[#bfa334] transition-colors duration-200"
                    >
                        เงื่อนไขการใช้งาน
                    </a>
                </nav>
            </div>
        </footer>
    );
}
