import React, { useEffect, useState } from "react";
import amenitiesData from "../assets/services.json";
import { Plus, Minus, CheckCircle, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Amenities() {
  const [activeAmenity, setActiveAmenity] = useState(null);

  useEffect(() => {
    if (amenitiesData.length > 0) {
      setActiveAmenity(amenitiesData[0]);
    }
  }, []);

  return (
    <>
      {/* ================= TOP CONTENT ================= */}
      {/* ✅ FIX: relative z-10 added so it stays ABOVE background */}
      <section className="bg-[#4f7eff]">
  <div className="px-4 py-20 mx-auto max-w-7xl">
    <div className="mt-2">
      <h1 className="mb-3 text-4xl font-semibold text-white translate-y-4">
        Services
      </h1>
      <p className="max-w-xl text-sm translate-y-4 text-white/90">
        Our team of experienced doctors delivers advanced medical care with compassion, precision, and a strong focus on patient well-being.
      </p>
    </div>
  </div>
</section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="relative pt-24 pb-28">
        {/* ===== BACKGROUND LAYER ===== */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/contact-bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* CONTENT */}
        <div
          className="
            relative z-10
            max-w-[1400px] mx-auto px-6
            grid grid-cols-1 lg:grid-cols-[300px_1fr]
            gap-14
          "
        >
          {/* ================= SIDEBAR ================= */}
          <aside className="sticky self-start w-full top-28">
            <div className="mb-4">
              <h3 className="text-[18px] font-normal text-red-700">
                Our Treatments
              </h3>
              <p className="text-sm text-gray-500">
                Services under one roof
              </p>
            </div>

            <ul className="overflow-hidden bg-white border-t border-gray-100 divide-y divide-gray-100 rounded-xl">
              {amenitiesData.map((amenity) => {
                const isActive = activeAmenity?.id === amenity.id;

                return (
                  <li key={amenity.id}>
                    <button
                      onClick={() => setActiveAmenity(amenity)}
                      className={`
                        w-full flex items-center justify-between
                        px-4 py-3 text-left transition-colors
                        ${
                          isActive
                            ? "bg-blue-100 text-blue-700"
                            : "text-gray-800 hover:bg-blue-50"
                        }
                      `}
                    >
                      <span className="text-[15px] font-medium">
                        {amenity.title}
                      </span>

                      {isActive ? (
                        <Minus className="w-4 h-4 text-gray-500" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* ================= RIGHT CONTENT ================= */}
          <div className=" relative bg-white/10 backdrop-blur-sm rounded-[28px] shadow-[0_40px_90px_rgba(0,0,0,0.08)] p-8 lg:p-12 min-h-[420px] " >
             {activeAmenity && ( <div className="animate-fadeIn"> 
              {/* INTRO */}
               {activeAmenity.intro && ( 
                <div className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-2"> 
                <div>
                   <p className="mb-3 text-sm text-gray-500"> 
                    {activeAmenity.intro.breadcrumb} </p>
                     <h2 className="mb-4 text-3xl font-semibold text-gray-900 lg:text-4xl">
                       {activeAmenity.intro.title} 
                       </h2>
                        <p className="leading-relaxed text-gray-700"> 
                          {activeAmenity.intro.description} </p>
                           </div>
                            <div className=" overflow-hidden bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.12)] " > 
                              <img src={activeAmenity.intro.image} alt={activeAmenity.title} className="w-full h-[320px] object-cover" />
                               </div> 
                              </div> )}
                               {/* SECTIONS */}
                                {activeAmenity.sections && ( 
                                  <div className="grid grid-cols-1 gap-6 mb-16 md:grid-cols-2"> 
                                  {activeAmenity.sections.map((section, i) => (
                                     <div key={i} className="p-6 bg-white border border-gray-200 rounded-xl" >
                                       <h3 className="mb-4 text-lg font-semibold"> {section.heading}
                                         </h3>
                                          <ul className="space-y-3">
                                             {section.points.map(
                                              (point, idx) => 
                                              ( <li key={idx} className="flex gap-2 text-gray-700"> 
                                              <CheckCircle className="w-4 h-4 text-[#7a1f16]" />
                                               {point} </li> ))}
                                                </ul> 
                                                </div> ))} 
                                                </div> )} 
                                                {/* GALLERY */} 
                                                {activeAmenity.gallery && ( 
                                                  <div className="mt-16"> 
                                                  <div className="flex items-center gap-2 mb-6"> 
                                                    <ImageIcon className="w-5 h-5 text-[#7a1f16]" />
                                                     <h3 className="text-xl font-semibold text-gray-900"> Gallery </h3>
                                                      </div> 
                                                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"> {activeAmenity.gallery.map((item, i) => ( <div key={i} className="overflow-hidden bg-white border border-gray-200 rounded-2xl" > 
                                                        <img src={item.image} alt={item.title} className="object-cover w-full aspect-square" />
                                                         <div className="p-4"> 
                                                          <h4 className="mb-1 text-base font-medium text-gray-900"> 
                                                            {item.title} </h4> 
                                                            <p className="text-sm leading-relaxed text-gray-600"> {item.description} 
                                                              
                                                            </p>
                                                             </div> 
                                                             </div> ))} 
                                                             </div>
                                                              </div> )} 
                                                              </div> )} 
                                                              </div>
        </div>
      </section>

      {/* ================= FADE ANIMATION ================= */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.35s ease-out forwards;
          }
        `}
      </style>
    </>
  );
}
