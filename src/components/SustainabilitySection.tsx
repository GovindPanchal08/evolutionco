import React from "react";
import { DownloadIcon } from "lucide-react";
const features = [
  { icon: "/icons/rainwater.svg", label: "Rainwater harvesting" },
  { icon: "/icons/solar.svg", label: "Solar facilities" },
  { icon: "/icons/hvac.svg", label: "High-efficiency HVAC systems" },
  {
    icon: "/icons/ventilation.svg",
    label: "Natural ventilation interior design",
  },
  { icon: "/icons/water.svg", label: "Water-saving fixtures and appliances" },
];

const certificates = [
  { type: "Certificate", year: 2024, label: "IGBC Net Zero Waste" },
  { type: "Report", year: 2024, label: "Zero Waste + Energy Homes" },
  { type: "Report", year: 2024, label: "Environmental Clearance" },
  { type: "Report", year: 2024, label: "Zero Waste + Energy Homes" },
];

const SustainabilitySection = () => (
  <section className="bg-white py-30 px-20">
    <div className=" ">
      <p className="uppercase text-center mb-5 tracking-tight opacity-70 text-[13px]">
        Sustainability
      </p>
      <h2 className="text-6xl gilda-display-regular text-center mb-10">
        Built to respect the Planet
      </h2>
    </div>

    <div className="flex justify-between gap-10 ">
      <div className="w-1/2 relative overflow-hidden bottom-10 rotate-y-180 h-[540px]">
        <div className="absolute bottom-0 left-0  w-full h-[60%] bg-[#006767]"></div>
        <img
          src="/b95b2187610f14bf19ef419a87c4ae49eef9a753.png"
          className="absolute  left-1/2 -translate-x-1/2 "
        />
      </div>
      <div className="w-[45%]">
        {features.map((f, index) => (
          <div
            key={f.label}
            className={`flex items-center justify-between py-8  ${
              index !== features.length - 1
                ? "  border-b-gray-300 border-b "
                : ""
            }`}
          >
            <img src={f.icon} alt={f.label} className="h-6" />
            <span className="text-lg w-1/3 Inter ">{f.label}</span>
          </div>
        ))}
      </div>
    </div>

    <div className=" flex flex-col items-center">
      <div className="grid grid-cols-4 gap-4 w-full">
        {certificates.map((c, i) => (
          <div key={i} className="bg-[#E6F0F0] gap-10 p-4 flex flex-col ">
            <div className="flex justify-between items-center">
              <span className="text-xs bg-[#8A9090] text-white px-3 ">
                {c.type}
              </span>
              <span className="text-xs text-gray-500">{c.year}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm mb-1">{c.label}</span>
              <a href="">
                <DownloadIcon size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SustainabilitySection;
