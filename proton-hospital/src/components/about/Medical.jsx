// import React from "react";
// import { Link } from "react-router-dom";

// export default function Medical() {
//   return (
//     <section className="flex items-center justify-center w-full min-h-screen bg-white">
//       <div className="grid items-center w-full grid-cols-1 gap-16 px-6 max-w-7xl md:grid-cols-2">

//         {/* LEFT */}
      
// <div className="flex items-center justify-center">
//   <img
//     src="/images/MedicalServices-image.png"
//     alt="Medical Services"
//     className="w-[360px] md:w-[420px] lg:w-[460px] h-auto object-contain"
//   />
// </div>


//         {/* RIGHT */}
//         <div>
//          <p className="text-sm tracking-[0.25em] text-gray-500 mb-5">
//          <span className="text-lg">✚</span> Medical Services
//       </p>
      
//           <h2 className="mb-6 text-4xl font-normal">
//             Our Medical Services
//           </h2>

//           <h3 className="mb-4 text-2xl font-normal text-red-700">
//             Critical Care Services
//           </h3>

//             <p className="max-w-md mt-6 font-normal leading-relaxed text-gray-600">
//     Our hospital is a modern multi-specialty healthcare center designed to
//     deliver comprehensive medical care under one roof. We bring together
//     expert doctors, skilled nursing staff, and advanced technology to ensure
//     accurate diagnosis, effective treatment, and faster recovery for every
//     patient.
//   </p>

//   <p className="max-w-md mt-4 leading-relaxed text-gray-600">
//     We offer specialized services across Cardiology, Nephrology, Orthopedics,
//     Gynecology & Obstetrics, Oncology, Pediatrics, General Medicine, Surgery,
//     Radiology, Pathology, Physiotherapy, and Critical Care. Supported by
//     modular operation theatres, ICU facilities, dialysis units, and 24/7
//     emergency services, we are committed to providing safe, ethical, and
//     patient-centered care at every stage of life.
//   </p>

          
// <Link to="/ourservices" className="relative z-10 inline-block">
//   <button className="relative inline-flex items-center gap-2 px-8 py-3 mt-8 overflow-hidden font-semibold text-blue-600 transition border-2 border-blue-600 rounded-full group">
//     <span className="absolute inset-0 w-0 transition-all duration-300 bg-blue-600 group-hover:w-full"></span>
//     <span className="relative z-10 transition group-hover:text-white">
//       Learn More
//     </span>
//     <span className="relative z-10 transition group-hover:translate-x-1">
//       →
//     </span>
//   </button>
// </Link>
  
//         </div>

//       </div>
//     </section>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Medical() {
  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-white">
      <div className="grid items-center w-full grid-cols-1 gap-16 px-6 max-w-7xl md:grid-cols-2">

        {/* LEFT IMAGE – LEFT ➜ RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <img
            src="/images/services-bg.jpg"
            alt="Medical Services"
            className="w-[360px] md:w-[420px] lg:w-[460px] h-auto object-contain"
          />
        </motion.div>
  


  
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
        {/* RIGHT CONTENT */}
        <div>

          {/* TOP LINE – TOP ➜ BOTTOM */}
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.25em] text-gray-500 mb-5"
          >
            <span className="text-lg">✚</span> Medical Services
          </motion.p>

          {/* HEADINGS – RIGHT ➜ LEFT */}
          <motion.h2
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-normal"
          >
            Our Medical Services
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-4 text-2xl font-normal text-red-700"
          >
            Critical Care Services
          </motion.h3>





          {/* CONTENT – BOTTOM ➜ TOP */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-md mt-6 font-normal leading-relaxed text-gray-600"
          >
            Our hospital is a modern multi-specialty healthcare center designed to
            deliver comprehensive medical care under one roof. We bring together
            expert doctors, skilled nursing staff, and advanced technology to ensure
            accurate diagnosis, effective treatment, and faster recovery for every
            patient.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-md mt-4 leading-relaxed text-gray-600"
          >
            We offer specialized services across Cardiology, Nephrology, Orthopedics,
            Gynecology & Obstetrics, Oncology, Pediatrics, General Medicine, Surgery,
            Radiology, Pathology, Physiotherapy, and Critical Care. Supported by
            modular operation theatres, ICU facilities, dialysis units, and 24/7
            emergency services, we are committed to providing safe, ethical, and
            patient-centered care at every stage of life.
          </motion.p>

          {/* BUTTON – FADE + UP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <Link to="/ourservices" className="relative z-10 inline-block">
              <button className="relative inline-flex items-center gap-2 px-8 py-3 mt-8 overflow-hidden font-semibold text-blue-600 transition border-2 border-blue-600 rounded-full group">
                <span className="absolute inset-0 w-0 transition-all duration-300 bg-blue-600 group-hover:w-full"></span>
                <span className="relative z-10 transition group-hover:text-white">
                  Learn More
                </span>
                <span className="relative z-10 transition group-hover:translate-x-1">
                  →
                </span>
              </button>
            </Link>
          </motion.div>


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
    </section>
  );
}
