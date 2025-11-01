"use client";

import { useState } from "react";
import Image from "next/image";

const amenities = [
  {
    icon: "/icons/clubhouse.svg",
    label: "Clubhouse",
    bg: "/70ce0051ff1660b4fd019ba8e1247b6b8ee809d0.png",
  },
  {
    icon: "/icons/sports.svg",
    label: "Sports Hub",
    bg: "/images/sports-bg.jpg",
  },
  {
    icon: "/icons/ballroom.svg",
    label: "Ballroom",
    bg: "/images/ballroom-bg.jpg",
  },
  {
    icon: "/icons/coworking.svg",
    label: "Co-working Space",
    bg: "/images/coworking-bg.jpg",
  },
  {
    icon: "/icons/kids.svg",
    label: "Kids Play Area",
    bg: "/images/kids-bg.jpg",
  },
  {
    icon: "/icons/fitness.svg",
    label: "Fitness Centre",
    bg: "/images/fitness-bg.jpg",
  },
  {
    icon: "/icons/hostings.svg",
    label: "Hostings",
    bg: "/images/hostings-bg.jpg",
  },
  {
    icon: "/icons/pool.svg",
    label: "Pools & Leisure",
    bg: "/images/pool-bg.jpg",
  },
];

export default function AmenitiesSection() {
  const [selected, setSelected] = useState(amenities[0]);

  return (
    <section className="relative h-[120vh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 transition-all duration-700">
        <Image
          src={selected.bg}
          alt={selected.label}
          fill
          priority
          className="object-cover  transition-opacity duration-700"
        />
      </div>

      <div
        style={{
          backdropFilter: "blur(2px)",
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 27.1%, rgba(0, 0, 0, 0) 100%)",
        }}
        className="absolute bottom-0 inset-x-0 h-40   "
      ></div>

      <div className="absolute bottom-10 left-0 right-0 px-20 flex justify-between items-center">
        {amenities.map((item, index) => {
          const isActive = item.label === selected.label;
          return (
            <>
              <div
                key={item.label}
                onClick={() => setSelected(item)}
                className="flex  flex-col items-center  cursor-pointer group transition-all duration-300"
              >
                <div className="relative h-10 w-10 mb-2">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    fill
                    className={`transition-all duration-300 ${
                      isActive
                        ? "opacity-100 invert"
                        : "opacity-50 group-hover:opacity-75"
                    }`}
                  />
                </div>
                <span
                  className={`text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-gray-300 group-hover:text-gray-100"
                  }`}
                >
                  {item.label}
                </span>
              </div>
              {index !== amenities.length - 1 && (
                <div className="border-r border-white/35 h-10 "></div>
              )}
            </>
          );
        })}
      </div>
    </section>
  );
}
