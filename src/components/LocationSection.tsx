"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  GraduationCap,
  Hospital,
  Utensils,
  TreePine,
  Train,
  ArrowRight,
} from "lucide-react";

const LocationSection = () => {
  const [active, setActive] = useState("Schools");

  const items = [
    { name: "Schools", icon: <GraduationCap size={30} /> },
    { name: "Hospitals", icon: <Hospital size={30} /> },
    { name: "Restaurants", icon: <Utensils size={30} /> },
    { name: "Parks", icon: <TreePine size={30} /> },
    { name: "Railway Station", icon: <Train size={30} /> },
  ];

  return (
    <section
      className="relative
 w-full h-[120vh] px-20 py-20 bg-[#EDEDED] "
    >
      <div className="">
        <p className="uppercase text-sm opacity-70 mb-4 tracking-tight">
          Location
        </p>
        <h2 className="text-6xl gilda-display-regular font-medium  max-w-xl text-gray-900">
          Explore your neighborhood
        </h2>
      </div>

      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-white w-[270px]  shadow-md p-5 max-h-[400px] overflow-y-auto">
        <ul className="space-y-2">
          {items.map((item, index) => {
            const isActive = active === item.name;
            return (
              <li
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-5  border-gray-200 py-3 px-3 cursor-pointer transition-colors ${
                  isActive ? "text-black" : "text-gray-500 hover:text-gray-700"
                } 
                  ${index !== items.length - 1 ? "border-b" : ""}`}
              >
                <span
                  className={`${
                    isActive ? "text-black" : "text-gray-400"
                  } transition-colors`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-md font-medium ${
                    isActive ? "text-black" : "text-gray-500"
                  }`}
                >
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          <div className="w-10 h-10 bg-[#0C7075] rounded-full flex items-center justify-center text-white">
            <Utensils size={18} />
          </div>
          <p className="mt-2 text-sm font-semibold tracking-wide">
            HIGHLAND MAYFIELD
          </p>
          <div className="absolute inset-0 w-[150px] h-[100px] border-2 border-red-400/50 rounded-md -z-10" />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
