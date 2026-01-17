import React from "react";

export default function AboutIntro() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="relative px-6 mx-auto max-w-7xl">

        {/* MAIN LAYOUT */}
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-3">

          {/* LEFT IMAGE CARD */}
          <div className="relative flex justify-center">
            <div className="w-[320px] h-[420px] bg-gray-200 overflow-hidden rounded-b-[160px]">
              <img
                src="/images/hospital2.jpg"
                alt="Left Image"
                className="object-cover w-full h-full"
              />
            </div>

    {/* BLUE SPARKLES */}
<div className="absolute inset-0 pointer-events-none">
  {[
    { top: "-24px", left: "40px", size: "w-6 h-6", color: "bg-blue-600" },
    { top: "40px", left: "8px", size: "w-4 h-4", color: "bg-blue-400" },
    { top: "120px", left: "-20px", size: "w-5 h-5", color: "bg-blue-500" },
    { top: "220px", left: "10px", size: "w-3 h-3", color: "bg-blue-300" },
    { top: "60px", left: "220px", size: "w-4 h-4", color: "bg-blue-400" },
  ].map((s, i) => (
    <span
      key={i}
      className={`absolute rotate-45 rounded-sm ${s.size} ${s.color}`}
      style={{ top: s.top, left: s.left }}
    />
  ))}
</div>

         
          </div>

          {/* CENTER CONTENT */}
          <div className="text-center lg:text-left">
  <p className="text-sm tracking-[0.25em] text-gray-500 mb-5">
         <span className="text-lg">✚</span> About Us
      </p>
      
  <h2 className="text-4xl font-normal text-gray-900 leadinpong-tight">
    Advanced Healthcare <br /> with <span className="text-red-700">Compassion & Trust</span> 
  </h2>

 <p className="max-w-md mt-6 font-normal leading-relaxed text-gray-600">
    Our hospital is a modern, multi-specialty healthcare institution committed to delivering high-quality medical services with precision and compassion. Supported by experienced doctors, skilled nursing staff, and advanced medical technology, we focus on accurate diagnosis, effective treatment, and patient safety at every step of care.
  </p>

  <p className="max-w-md mt-4 font-normal leading-relaxed text-gray-600">
   With well-equipped operation theatres, intensive care units, advanced diagnostic facilities, and 24/7 emergency services, our hospital offers comprehensive healthcare solutions across multiple specialties. We follow ethical medical practices and patient-centered care models to ensure comfort, trust, and faster recovery for every patient.
  </p>
  
  {/* <button className="relative inline-flex items-center gap-2 px-8 py-3 mt-8 overflow-hidden font-semibold text-blue-600 transition border-2 border-blue-600 rounded-full group">
    <span className="absolute inset-0 w-0 transition-all duration-300 bg-blue-600 group-hover:w-full"></span>
    <span className="relative z-10 transition group-hover:text-white">
      Learn More
    </span>
    <span className="relative z-10 transition group-hover:translate-x-1">
      →
    </span>
  </button> */}
</div>


          {/* RIGHT IMAGE CARD */}
          <div className="flex justify-center">
            <div className="w-[220px] h-[300px] bg-gray-200 overflow-hidden rounded-t-[140px]">
              <img
                src="/images/hospital1.jpg"
                alt="Right Image"
                className="object-cover w-full h-full"
              />
              {/* BLUE SPARKLES (MIRRORED – RIGHT IMAGE) */}
<div className="absolute inset-0 pointer-events-none">
  {[
    { bottom: "-24px", right: "40px", size: "w-6 h-6", color: "bg-blue-600" },
    { bottom: "40px", right: "8px", size: "w-4 h-4", color: "bg-blue-400" },
    { bottom: "120px", right: "-20px", size: "w-5 h-5", color: "bg-blue-500" },
    { bottom: "220px", right: "10px", size: "w-3 h-3", color: "bg-blue-300" },
    { bottom: "60px", right: "220px", size: "w-4 h-4", color: "bg-blue-400" },
  ].map((s, i) => (
    <span
      key={i}
      className={`absolute rotate-45 rounded-sm ${s.size} ${s.color}`}
      style={{ bottom: s.bottom, right: s.right }}
    />
  ))}
</div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
