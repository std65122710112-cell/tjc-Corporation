"use client";
import React, { useRef, useEffect } from "react";

export default function NewsSlider() {
    const containerRef = useRef(null);

    const news = [
        {
            id: 1,
            title: "ร่วมสนับสนุนการเเข่งขันกีฬา",
            desc: "ระบบจัดส่งอัจฉริยะและบริการติดตั้งแบบ Smart Installation",
            date: "12 พ.ย. 2025",
            image: "/images/05.jpg",
        },
        {
            id: 2,
            title: "กิจกรรมการประกวดราคาอิเล็กทรอนิกส์",
            desc: "รองรับการจัดส่งรวดเร็วทั่วประเทศมากขึ้น",
            date: "6 มิ.ย. 2567",
            image: "/images/3.jpg",
        },
        {
            id: 3,
            title: "บันทึกข้อตกลงความร่วมมือบริษัท ทีเจซี คอรปอเรชั่น จำกัด",
            desc: "ลดสูงสุด 30% สำหรับลูกค้าองค์กร",
            date: "14 พ.ย. 2568",
            image: "/images/04.jpg",
        },
        {
            id: 4,
            title: "สนับสนุนทีมปิงปองหงส์ขาว",
            desc: "ระบบจัดส่งอัจฉริยะและบริการติดตั้งแบบ Smart Installation",
            date: "6 มี.ค. 2568",
            image: "/images/Screenshot 2025-06-03 101538.png",
        },
    ];

    const scroll = (direction) => {
        if (!containerRef.current) return;
        const el = containerRef.current;

        const cardWidth = el.querySelector(".news-card")?.clientWidth || 350;

        el.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            const el = containerRef.current;
            if (!el) return;

            const cardWidth = el.querySelector(".news-card")?.clientWidth || 350;
            const maxScroll = el.scrollWidth - el.clientWidth;

            if (el.scrollLeft + cardWidth >= maxScroll - 10) {
                el.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                el.scrollBy({ left: cardWidth, behavior: "smooth" });
            }
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full py-16 bg-white">
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { scrollbar-width: none; }
            `}</style>

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 relative">

                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
                    ข่าวสารบริษัท
                </h2>

                {/* LEFT BUTTON */}
                <button
                    onClick={() => scroll("left")}
                    className="
                        absolute top-1/2 -translate-y-1/2
                        xl:flex lg:flex hidden
                        left-2 z-20 bg-white/90 backdrop-blur
                        border border-gray-300 shadow p-4 rounded-full
                        hover:bg-gray-100 transition
                    "
                >
                    {"<"}
                </button>

                {/* RIGHT BUTTON */}
                <button
                    onClick={() => scroll("right")}
                    className="
                        absolute top-1/2 -translate-y-1/2
                        xl:flex lg:flex hidden
                        right-2 z-20 bg-white/90 backdrop-blur
                        border border-gray-300 shadow p-4 rounded-full
                        hover:bg-gray-100 transition
                    "
                >
                    {">"}
                </button>

                {/* SLIDER LIST */}
                <div
                    ref={containerRef}
                    className="
                        flex gap-6 overflow-x-auto no-scrollbar pb-4
                        snap-x snap-mandatory select-none
                    "
                >
                    {news.map((n) => (
                        <div
                            key={n.id}
                            className="
                                news-card snap-start
                                bg-white border border-gray-200 shadow-md rounded-2xl overflow-hidden
                                w-full min-w-full                 /* Mobile */
                                sm:min-w-[60%] sm:w-[60%]        /* Tablet */
                                lg:min-w-[33.33%] lg:w-[33.33%]  /* Desktop */
                                2xl:min-w-[25%] 2xl:w-[25%]       /* Ultra Wide */
                                transition-all duration-300
                            "
                        >
                            <img
                                src={n.image}
                                className="w-full h-56 sm:h-48 object-cover"
                                alt={n.title}
                            />

                            <div className="p-6">
                                <p className="text-sm text-yellow-700 font-medium">
                                    {n.date}
                                </p>

                                <h3 className="text-xl sm:text-lg font-semibold text-gray-900 mt-1">
                                    {n.title}
                                </h3>

                                <p className="text-gray-600 mt-2 leading-relaxed">
                                    {n.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
