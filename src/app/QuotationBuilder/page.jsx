"use client";
import React, { useState, useRef } from "react";
import * as htmlToImage from "html-to-image";


export default function QuotationBuilder() {
    const previewRef = useRef(null);

    // 🏢 ข้อมูลบริษัท (คงที่)
    const [company] = useState({
        name: "บริษัท ทีเจซี คอร์ปอเรชั่น จำกัด",
        address: "311/1 ม.4 ต.คำน้ำแซบ อ.วารินชำราบ",
        address2: "จ.อุบลราชธานี 34190",
        phone: "080-474-6169",
        email: "contact@tjc.co.th",
        taxId: "0105567890123",
        logo: "/images/logo.png",
    });

    // 👤 ข้อมูลลูกค้า
    const [customer, setCustomer] = useState({
        name: "คุณสมชาย ใจดี",
        org: "บริษัท สมาร์ทโซลูชั่น จำกัด",
        address: "99/1 ถ.สุขสวัสดิ์ แขวงบางปะกอก เขตบางคอแหลม กรุงเทพฯ 10120",
        phone: "081-234-5678",
        email: "somchai@smart.co.th",
    });

    // 📅 ข้อมูลทั่วไปของใบเสนอราคา
    const [quoteMeta, setQuoteMeta] = useState({
        ref: "TJC-QT-2025-001",
        date: new Date().toLocaleDateString("th-TH"),
        note: "ราคานี้ยังไม่รวมค่าขนส่งและติดตั้ง",
    });

    // 📦 รายการสินค้า
    const [items, setItems] = useState([
        { id: 1, name: "คอมพิวเตอร์ตั้งโต๊ะ Dell OptiPlex 7010", qty: 3, unit: "ชุด", price: 18500 },
        { id: 2, name: "จอมอนิเตอร์ Dell 24 นิ้ว", qty: 3, unit: "เครื่อง", price: 5200 },
        { id: 3, name: "บริการติดตั้งและเซ็ตระบบเบื้องต้น", qty: 1, unit: "งาน", price: 1500 },
    ]);
    const [includeVAT, setIncludeVAT] = useState(true);

    // ➕ เพิ่ม / ลบ / อัปเดตสินค้า
    const addItem = () => {
        setItems([...items, { id: Date.now(), name: "", qty: 1, unit: "", price: 0 }]);
    };
    const removeItem = (id) => setItems(items.filter((i) => i.id !== id));
    const updateItem = (id, key, value) =>
        setItems(items.map((i) => (i.id === id ? { ...i, [key]: value } : i)));

    // 💰 คำนวณราคารวม
    const subtotal = items.reduce(
        (sum, i) => sum + (Number(i.qty) || 0) * (Number(i.price) || 0),
        0
    );
    const vatAmount = includeVAT ? subtotal * 0.07 : 0;
    const total = subtotal + vatAmount;
    const formatTHB = (num) =>
        num?.toLocaleString("th-TH", { style: "currency", currency: "THB" });

    // 📥 ดาวน์โหลดเป็นภาพ
    const handleDownload = async () => {
        if (!previewRef.current) return alert("ไม่พบใบเสนอราคา");
        try {
            const dataUrl = await htmlToImage.toPng(previewRef.current, {
                backgroundColor: "#ffffff",
                pixelRatio: 2,
                cacheBust: true,
            });
            const link = document.createElement("a");
            link.download = `${quoteMeta.ref}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error(err);
            alert("เกิดข้อผิดพลาดในการสร้างภาพ 😢");
        }
    };

    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 py-8 font-[Prompt]">

                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                    🧾 สร้างใบเสนอราคา (Quotation)
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* 🧾 ฟอร์มกรอกข้อมูล */}
                    <div className="space-y-5">
                        {/* Customer */}
                        <section className="bg-white rounded-xl p-4 shadow border border-gray-100">
                            <h3 className="font-semibold text-lg text-gray-700 mb-2">ข้อมูลลูกค้า</h3>
                            <div className="grid gap-2">
                                {["name", "org", "address", "phone", "email"].map((field) => (
                                    <input
                                        key={field}
                                        value={customer[field]}
                                        onChange={(e) =>
                                            setCustomer({ ...customer, [field]: e.target.value })
                                        }
                                        placeholder={
                                            {
                                                name: "ชื่อลูกค้า",
                                                org: "บริษัท/หน่วยงาน",
                                                address: "ที่อยู่",
                                                phone: "โทรศัพท์",
                                                email: "อีเมล",
                                            }[field]
                                        }
                                        className="p-2 border rounded"
                                    />
                                ))}
                            </div>
                        </section>

                        {/* Items */}
                        <section className="bg-white rounded-xl p-4 shadow border border-gray-100">
                            <h3 className="font-semibold text-lg text-gray-700 mb-2">
                                รายการสินค้า / บริการ
                            </h3>
                            <div className="space-y-3">
                                {items.map((it) => (
                                    <div
                                        key={it.id}
                                        className="grid grid-cols-12 gap-2 items-center text-sm"
                                    >
                                        <input
                                            className="col-span-5 p-2 border rounded"
                                            placeholder="ชื่อสินค้า"
                                            value={it.name}
                                            onChange={(e) => updateItem(it.id, "name", e.target.value)}
                                        />
                                        <input
                                            className="col-span-2 p-2 border rounded"
                                            type="number"
                                            placeholder="จำนวน"
                                            value={it.qty}
                                            onChange={(e) => updateItem(it.id, "qty", e.target.value)}
                                        />
                                        <input
                                            className="col-span-2 p-2 border rounded"
                                            placeholder="หน่วย"
                                            value={it.unit}
                                            onChange={(e) => updateItem(it.id, "unit", e.target.value)}
                                        />
                                        <input
                                            className="col-span-2 p-2 border rounded text-right"
                                            type="number"
                                            placeholder="ราคาต่อหน่วย"
                                            value={it.price}
                                            onChange={(e) => updateItem(it.id, "price", e.target.value)}
                                        />
                                        <button
                                            className="col-span-1 text-red-500 hover:text-red-700"
                                            onClick={() => removeItem(it.id)}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                                <div className="flex gap-2">
                                    <button
                                        onClick={addItem}
                                        className="px-4 py-2 rounded bg-gray-100 border hover:bg-gray-50"
                                    >
                                        ➕ เพิ่มรายการ
                                    </button>
                                    <label className="ml-auto inline-flex items-center gap-2 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={includeVAT}
                                            onChange={(e) => setIncludeVAT(e.target.checked)}
                                        />
                                        รวม VAT 7%
                                    </label>
                                </div>
                            </div>
                        </section>

                        {/* Meta */}
                        <section className="bg-white rounded-xl p-4 shadow border border-gray-100">
                            <h3 className="font-semibold text-lg text-gray-700 mb-2">
                                รายละเอียดใบเสนอราคา
                            </h3>
                            <input
                                className="p-2 border rounded mb-2"
                                value={quoteMeta.ref}
                                onChange={(e) =>
                                    setQuoteMeta({ ...quoteMeta, ref: e.target.value })
                                }
                                placeholder="เลขที่ใบเสนอราคา"
                            />
                            <input
                                className="p-2 border rounded mb-2"
                                value={quoteMeta.date}
                                onChange={(e) =>
                                    setQuoteMeta({ ...quoteMeta, date: e.target.value })
                                }
                                placeholder="วันที่ออกใบเสนอราคา"
                            />
                            <textarea
                                className="p-2 border rounded"
                                rows={3}
                                value={quoteMeta.note}
                                onChange={(e) =>
                                    setQuoteMeta({ ...quoteMeta, note: e.target.value })
                                }
                                placeholder="หมายเหตุ / เงื่อนไขเพิ่มเติม"
                            />
                        </section>

                        <button
                            onClick={handleDownload}
                            className="px-4 py-2 w-full rounded bg-linear-to-r from-[#b89b4f] to-[#d4c18a] text-white font-semibold shadow-md hover:from-[#a4883f] hover:to-[#c1b06f]"
                        >
                            💾 บันทึกเป็นภาพ (PNG)
                        </button>
                    </div>

                    {/* 📜 พรีวิวใบเสนอราคา */}
                    <div>
                        <div
                            ref={previewRef}
                            className="p-6 rounded-xl border border-[#d4af37]/30 bg-white shadow-sm"
                        >
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={company.logo}
                                        alt="logo"
                                        className="w-14 h-14 object-contain"
                                    />
                                    <div>
                                        <div className="text-xl font-bold text-gray-800">{company.name}</div>
                                        <div className="text-sm text-gray-600">{company.address}</div>
                                        <div className="text-sm text-gray-600">{company.address2}</div>
                                        <div className="text-sm text-gray-600">
                                            โทร: {company.phone} | อีเมล: {company.email}
                                        </div>
                                        <div className="text-sm text-gray-600">
                                            เลขผู้เสียภาษี: {company.taxId}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-gray-500">วันที่</div>
                                    <div className="font-medium">{quoteMeta.date}</div>
                                    <div className="mt-2 text-sm text-gray-500">เลขที่</div>
                                    <div className="font-medium">{quoteMeta.ref}</div>
                                </div>
                            </div>

                            <hr className="my-4 border-gray-200" />

                            <div className="mb-4">
                                <div className="text-sm text-gray-500">เสนอให้</div>
                                <div className="font-semibold text-gray-800">{customer.name}</div>
                                <div className="text-sm text-gray-600">{customer.org}</div>
                                <div className="text-sm text-gray-600">{customer.address}</div>
                                <div className="text-sm text-gray-600">
                                    โทร: {customer.phone} | อีเมล: {customer.email}
                                </div>
                            </div>

                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="text-left text-gray-600 border-b">
                                        <th className="pb-2">ลำดับ</th>
                                        <th className="pb-2">รายการ</th>
                                        <th className="pb-2">จำนวน</th>
                                        <th className="pb-2">หน่วย</th>
                                        <th className="pb-2 text-right">ราคาต่อหน่วย</th>
                                        <th className="pb-2 text-right">ราคารวม</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((it, i) => (
                                        <tr key={it.id} className="border-t">
                                            <td className="py-3">{i + 1}</td>
                                            <td className="py-3">{it.name}</td>
                                            <td className="py-3">{it.qty}</td>
                                            <td className="py-3">{it.unit}</td>
                                            <td className="py-3 text-right">{formatTHB(it.price)}</td>
                                            <td className="py-3 text-right">
                                                {formatTHB(it.qty * it.price)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="mt-5 flex justify-end gap-4">
                                <div className="w-80 bg-gray-50 p-3 rounded">
                                    <div className="flex justify-between text-sm text-gray-600">
                                        <div>รวมเป็นเงิน</div>
                                        <div>{formatTHB(subtotal)}</div>
                                    </div>
                                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                                        <div>VAT {includeVAT ? "7%" : "0%"}</div>
                                        <div>{formatTHB(vatAmount)}</div>
                                    </div>
                                    <div className="flex justify-between text-base font-semibold text-gray-800 mt-2">
                                        <div>รวมทั้งสิ้น</div>
                                        <div>{formatTHB(total)}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-sm text-gray-500">เงื่อนไขการเสนอราคา</div>
                                    <ol className="text-xs text-gray-600 mt-1 list-decimal list-inside">
                                        <li>ใบเสนอราคานี้มีอายุ 30 วันนับจากวันที่ออก</li>
                                        <li>ราคานี้{includeVAT ? "รวมภาษีมูลค่าเพิ่มแล้ว" : "ยังไม่รวม VAT"}</li>
                                        <li>ระยะเวลาจัดส่ง: 7 วันทำการหลังยืนยันใบสั่งซื้อ</li>
                                    </ol>
                                </div>
                                <div className="text-center">
                                    <div className="text-sm text-gray-500">ผู้เสนอราคา</div>
                                    <div className="mt-8">
                                        <div className="inline-block border-t border-gray-300 pt-2 text-sm text-gray-700">
                                            (...........................................)</div>
                                        <div className="text-sm text-gray-700 mt-1">ผู้จัดการฝ่ายขาย</div>
                                    </div>
                                </div>
                            </div>

                            {quoteMeta.note && (
                                <div className="mt-6 text-xs text-gray-500 italic">
                                    หมายเหตุ: {quoteMeta.note}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
