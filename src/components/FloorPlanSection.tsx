"use client";

import React, { useState } from "react";
import Image from "next/image";

const bhkPlans = [
  {
    type: "Master Plan",
    carpet: "70.12 - 71.20 Sq.Ft",
    superArea: "₹2.45 Cr",
    balcony: "85.12 Sqm",
    image: "/floorplan-1bhk.png",
  },
  {
    type: "Floor Plan",
    carpet: "89.23 - 89.45 Sq.Ft",
    superArea: "₹3.23 Cr",
    balcony: "110.39 Sqm",
    image: "/floorplan-2bhk.png",
  },
  {
    type: "1 BHK",
    carpet: "70.12 - 71.20 Sq.Ft",
    superArea: "₹2.45 Cr",
    balcony: "85.12 Sqm",
    image: "/floorplan-1bhk.png",
  },
  {
    type: "2 BHK",
    carpet: "89.23 - 89.45 Sq.Ft",
    superArea: "₹3.23 Cr",
    balcony: "110.39 Sqm",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRWoXWJohcHo5NSNS5NXOBYqjFzjwsfYKmg&s",
  },
  {
    type: "3 BHK",
    carpet: "125.62 - 126.05 Sq.Ft",
    superArea: "₹4.85 Cr",
    balcony: "145.22 Sqm",
    image: "/floorplan-3bhk.png",
  },
];

export default function FloorPlanSection() {
  const [selectedBhk, setSelectedBhk] = useState("2 BHK");

  const activePlan = bhkPlans.find((plan) => plan.type === selectedBhk);

  return (
    <section className="bg-white  py-28 ">
      <div className="w-[89vw] mx-auto px-16 py-10 flex flex-col bg-[#F5F5F5]   gap-11 ">
        <div className="flex items-center gap-8 px-52   border-gray-200  ">
          {/*  selector */}
          <div className="flex gap-16   ">
            {bhkPlans.map((plan) => (
              <button
                key={plan.type}
                onClick={() => setSelectedBhk(plan.type)}
                className={`gilda-display-regular text-black text-xl tracking-tight font-bold uppercase transition-all cursor-pointer duration-300 ${
                  selectedBhk === plan.type
                    ? " border-b-2 border-black pb-1"
                    : ""
                }`}
              >
                {plan.type}
              </button>
            ))}
          </div>
        </div>

        <div className="flex w-full ">
          {/* LEFT PANEL */}
          <div className="flex flex-col gap-6 w-md">
            <div>
              <p className="text-[12px] font-medium uppercase  opacity-70 tracking-wide">
                Carpet Area
              </p>
              <h3 className="text-4xl gilda-display-regular font-light text-black">
                {activePlan?.carpet}
              </h3>
            </div>

            <div className="h-px bg-gray-400 w-full opacity-60" />

            <div>
              <p className="text-[12px] font-medium uppercase opacity-70 tracking-wide">
                Super Area
              </p>
              <h3 className="text-4xl gilda-display-regular font-light text-black">
                {activePlan?.superArea}
              </h3>
            </div>

            <div className="h-px bg-gray-400 w-full opacity-60" />

            <div>
              <p className="text-[12px] font-medium uppercase opacity-70 tracking-wide">
                Balcony Area
              </p>
              <h3 className="text-4xl gilda-display-regular font-light text-black">
                {activePlan?.balcony}
              </h3>
            </div>

            {/* Button */}
            <button className="w-fit mt-20 border border-gray-800 px-6 py-3 text-sm tracking-wide hover:bg-black hover:text-white transition-all">
              DOWNLOAD FLOOR PLAN
            </button>
          </div>

          {/* RIGHT PANEL - IMAGE */}
          <div className="w-full  px-10 ">
            <div className="relative w-full h-full max-w-4xl   ">
              <Image
                src={activePlan.image}
                alt={`${selectedBhk} Floor Plan`}
                fill
                className="object-cover  transition-opacity duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
