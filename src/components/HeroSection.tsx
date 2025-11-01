const projectDetails = [
  { label: "On-Going", description: "PROJECT STATUS" },
  { label: "Mohali", description: "LOCATION" },
  { label: "₹3.23 Cr", description: "STARTING PRICE" },
  { label: "3bhk, Villas", description: "UNIT TYPE" },
  { label: "20th December", description: "COMPLETION" },
  { label: "15 Acres", description: "AREA" },
];
const HeroSection = () => (
  <section
    className="
  relative bg-animate w-full flex flex-col gap-36 text-white overflow-hidden py-6 px-20
  bg-gradient-to-br from-[#2d3a4a] to-[#6e7b8b]/50
  bg-[url('/436b87916df1996ef87c189924d463b517b99f87.png')] bg-cover bg-center bg-no-repeat
"
  >
    <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-black/40 to-black/60 pointer-events-none"></div>

    <nav className="flex justify-between z-20 items-center">
      <img
        width="160"
        height="132"
        src="https://highlandlifespaces.com/wp-content/uploads/2019/10/Highland-Building-Lifespaces-Logo-2.png"
        class="attachment-1536x1536 size-1536x1536 wp-image-8880"
        alt
        decoding="async"
        loading="lazy"
        srcset="https://highlandlifespaces.com/wp-content/uploads/2019/10/Highland-Building-Lifespaces-Logo-2.png 393w, https://highlandlifespaces.com/wp-content/uploads/2019/10/Highland-Building-Lifespaces-Logo-2-300x101.png 300w"
        sizes="(max-width: 393px) 100vw, 393px"
      ></img>
      <div className="menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="rgba(252,247,247,1)"
        >
          <path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path>
        </svg>
      </div>
    </nav>
    <div className="z-10 flex justify-between">
      <div className="left-animate flex gap-15 flex-col">
        <h1 className="text-4xl md:text-7xl gilda-display-regular tracking-tighter ">
          Highland Mayfield
        </h1>
        <p className=" text-xl max-w-lg md:text-[17px]   font-thin opacity-70  ">
          Highland Mayfields embodies meticulous design and a commitment to
          excellence. From the grand lobby to personalized services, every
          detail enhances your living experience. It's more than a
          residence—it's a symbol of refined, functional elegance.
        </p>
        <button className="hover:bg-teal-700 w-40 bg-teal-800 px-2 py-4  text-sm font-normal transition">
          ENQUIRE NOW
        </button>
      </div>

      <img
        src="/0ac428ae28f0cdaeb7149cd20f85f333e20f484c.png"
        alt="Highland Building"
        className="
        hidden md:block  right-animate absolute -right-1/3 bottom-0 w-[100vw] max-w-9xl
        animate-slideIn 
      "
      />
    </div>

    <div
      style={{
        backdropFilter: " blur(2px)",
        background:
          " linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)",
      }}
      className="absolute z-10 bottom-0 inset-x-0 h-30 backdrop-blur-3xl  "
    ></div>
    <div className="flex  z-10 px-4 justify-between text-center">
      {projectDetails.map((item, index) => (
        <>
          <div className={`text-xl `}>
            <p className="gilda-display-regular "> {item.label}</p>
            <span className="text-sm tracking-tight opacity-50">
              {item.description}
            </span>
          </div>
          {index !== projectDetails.length - 1 && (
            <div className="border-r border-white/35 h-16 "></div>
          )}
        </>
      ))}
    </div>
  </section>
);

export default HeroSection;
