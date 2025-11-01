import React from "react";

const progress = [
  {
    title: "Mayfield's C pocket",
    img: "/progress1.jpg",
    label: "Basement completed",
  },
  {
    title: "Highland Industrial City",
    img: "/progress2.jpg",
    label: "Possession started",
  },
  {
    title: "Highland Luxuria",
    img: "/progress3.jpg",
    label: "Possession started",
  },
];

const ConstructionProgress = () => (
  <section className="bg-gray-50 ">
    <div className="container  px-2 py-20 ">
      <p className="uppercase text-center mb-5 opacity-60 tracking-tight text-[13px]">construction progress</p>
      <h2 className="text-6xl gilda-display-regular  text-center mb-10">
        From Blueprint to Reality
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {progress.map((item) => (
          <div key={item.title}>
            <div className="bg-white  shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 object-cover"
                />
                <span className="absolute gilda-display-regular top-4 left-4 bg-black/60 text-white text-xs px-2 py-1 ">
                  {item.label}
                </span>
              </div>
            </div>
            <div className="py-4 text-start font-serif font-medium text-2xl">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ConstructionProgress;
