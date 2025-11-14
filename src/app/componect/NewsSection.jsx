"use client";
import React, { useEffect, useRef, useState } from "react";

export default function NewsSlider() {
    const trackRef = useRef(null);

    const [isPaused, setIsPaused] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const news = [
        { id: 1, title: "ร่วมสนับสนุนแข่งขันกีฬา", desc: "Smart Installation", date: "12 พ.ย. 2025", image: "/images/05.jpg" },
        { id: 2, title: "ประกวดราคาอิเล็กทรอนิกส์", desc: "จัดส่งทั่วประเทศ", date: "6 มิ.ย. 2567", image: "/images/3.jpg" },
        { id: 3, title: "บันทึกข้อตกลงความร่วมมือ", desc: "ลดสูงสุด 30%", date: "14 พ.ย. 2568", image: "/images/04.jpg" },
        { id: 4, title: "สนับสนุนทีมปิงปอง", desc: "Smart Installation", date: "6 มี.ค. 2568", image: "/images/Screenshot 2025-06-03 101538.png" },
    ];

    const loopNews = [...news, ...news, ...news];

    // --------------------------------
    // Auto Slide แบบทีละกล่อง
    // --------------------------------
    useEffect(() => {
        if (isPaused || dragging) return;

        const track = trackRef.current;
        if (!track) return;

        const interval = setInterval(() => {
            const card = track.querySelector(".slide-card");
            if (!card) return;

            const cardWidth = card.clientWidth + 20; // + gap
            let newPos = translateX - cardWidth;

            // ถ้าถึงท้าย → รีเซ็ต
            const limit = -(track.scrollWidth / 3);
            if (newPos <= limit) newPos = 0;

            setTranslateX(newPos);
        }, 2500);

        return () => clearInterval(interval);
    }, [translateX, isPaused, dragging]);

    // อัปเดตตำแหน่ง transform
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        track.style.transform = `translateX(${translateX}px)`;
    }, [translateX]);

    // --------------------------------
    // Drag / Swipe
    // --------------------------------
    const handleStart = (e) => {
        setDragging(true);
        setIsPaused(true);
        setStartX(e.clientX || e.touches?.[0]?.clientX);
    };

    const handleMove = (e) => {
        if (!dragging) return;

        const x = e.clientX || e.touches?.[0]?.clientX;
        const delta = x - startX;

        const track = trackRef.current;
        track.style.transform = `translateX(${translateX + delta}px)`;
    };

    const handleEnd = (e) => {
        if (!dragging) return;

        const x = e.clientX || e.changedTouches?.[0]?.clientX;
        const delta = x - startX;

        const newPos = translateX + delta;

        setTranslateX(newPos);
        setDragging(false);

        setTimeout(() => setIsPaused(false), 300);
    };

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                    ข่าวสารบริษัท
                </h2>

                {/* CLICK = Pause / Play */}
                <div
                    onClick={() => {
                        if (!dragging) setIsPaused(!isPaused);
                    }}
                    className="cursor-pointer select-none overflow-hidden w-full"
                >
                    <div
                        ref={trackRef}
                        className="flex gap-5 transition-transform duration-500"
                        style={{ whiteSpace: "nowrap" }}

                        onPointerDown={handleStart}
                        onPointerMove={handleMove}
                        onPointerUp={handleEnd}
                        onPointerCancel={handleEnd}

                        onTouchStart={handleStart}
                        onTouchMove={handleMove}
                        onTouchEnd={handleEnd}
                    >
                        {loopNews.map((n, i) => (
                            <div
                                key={i}
                                className="
                                    slide-card bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden
                                    inline-block
                                    min-w-[85%] max-w-[85%]
                                    sm:min-w-[55%] sm:max-w-[55%]
                                    md:min-w-[45%] md:max-w-[45%]
                                    lg:min-w-[30%] lg:max-w-[30%]
                                    xl:min-w-[25%] xl:max-w-[25%]
                                "
                            >
                                <img
                                    src={n.image}
                                    className="w-full h-48 sm:h-56 md:h-60 object-cover"
                                    alt={n.title}
                                />

                                <div className="p-5">
                                    <p className="text-sm text-yellow-700 font-medium">{n.date}</p>
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-1">{n.title}</h3>
                                    <p className="text-gray-600 mt-2 text-sm md:text-base">{n.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-center text-gray-500 mt-3 text-sm">
                    (คลิกเพื่อ {isPaused ? "เล่นต่อ" : "หยุด"} / ลากเพื่อเลื่อนเอง)
                </p>
            </div>
        </section>
    );
}
