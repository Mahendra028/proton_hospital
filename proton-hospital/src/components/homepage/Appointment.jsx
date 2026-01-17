
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import appointmentImg from "../../assets/appointment.jpg";

// export default function Appointment() {
//   return (
//     <section className="relative w-full h-[520px] overflow-hidden">

//       <img
//         src={appointmentImg}
//         alt="Appointment"
//         className="absolute inset-0 object-cover w-full h-full"
//       />

//       <div className="absolute inset-0 bg-black/40" />

//       <motion.div
//         initial={{ y: 60, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         viewport={{ once: true, amount: 0.4 }}
//         className="relative z-10 flex items-center h-full"
//       >
//         <div className="px-6 mx-auto text-center max-w-7xl">

//           <h1 className="mb-4 text-5xl font-semibold text-white">
//             BOOK AN APPOINTMENT
//           </h1>

//           <p className="max-w-xl mx-auto text-sm text-white/90">
//             Book an appointment with our trusted medical team to experience care
//             that’s personal, & compassionate.
//           </p>

//           {/* ARROW LINK */}
//           <div className="flex justify-center mt-8">
//             <motion.div
//               initial={{ x: -30, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//               viewport={{ once: true }}
//             >
//               <Link
//                 to="/BookAppointment"
//                 className="flex items-center justify-center text-4xl text-white transition-all duration-300 border rounded-full w-14 h-14 border-white/60 hover:bg-white hover:text-black"
//               >
//                 →
//               </Link>
//             </motion.div>
//           </div>

//         </div>
//       </motion.div>

//     </section>
//   );
// }

// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function Appointment() {
//   return (
//     <section className="relative w-full h-[520px] overflow-hidden bg-[#f7e9f2]">
      
//       {/* ===== GRADIENT BACKGROUND ===== */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#b48ab6] via-[#c7a0c8] to-[#e7c7dd]" />

//       {/* ===== RIGHT IMAGE (PUBLIC FOLDER) ===== */}
//       <div className="absolute right-0 top-0 h-full w-[45%]">
//         <img
//           src="/images/hospital.png"
//           alt="Skin Care"
//           className="object-cover w-full h-full"
//         />
//       </div>

//       {/* ===== CONTENT ===== */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="relative z-10 flex items-center h-full"
//       >
//         <div className="w-full px-6 mx-auto max-w-7xl">
          
//           <div className="max-w-xl text-left">
            
//             <h1 className="text-[44px] leading-tight font-semibold text-white">
//               Your Skin Deserves <br /> The Best Care
//             </h1>

//             <p className="mt-4 text-sm text-white/90">
//               Transform your skin with advanced dermatology treatments designed
//               exclusively for natural beauty and confidence.
//             </p>

//             {/* ===== BUTTON ===== */}
//             <div className="mt-8">
//               <Link
//                 to="/BookAppointment"
//                 className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-purple-600 transition-all duration-300 bg-white rounded-full shadow-md hover:scale-105"
//               >
//                 Book Appointment
//               </Link>
//             </div>

//           </div>

//         </div>
//       </motion.div>

//     </section>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function Appointment() {
//   return (
//     <section className="relative w-full h-[420px]   overflow-hidden bg-[#f7e9f2]">
      
//       {/* ===== GRADIENT BACKGROUND ===== */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[blue] via-[#7bd9f3] to-[sky]" />

//       {/* ===== RIGHT IMAGE ===== */}
//       <div className="absolute right-0 top-0 h-full w-[45%]">
//         <img
//           src="/images/hospital.png"
//           alt="Skin Care"
//           className="object-cover object-top w-full h-full"
//         />
//       </div>

//       {/* ===== CONTENT ===== */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="relative z-10 flex items-start h-full pt-20"
//       >
//         <div className="w-full px-6 mx-auto max-w-7xl">
          
//           <div className="max-w-xl text-left">
            
//             <h1 className="text-[42px] leading-tight font-semibold text-white">
//               Your Health Deserves <br /> The Best Care
//             </h1>

//             <p className="mt-4 text-sm text-white/90">
//           Advanced medical treatments focused on complete care, wellness, and confidence.
//             </p>

//             <div className="mt-8">
//               <Link
//                 to="/BookAppointment"
//                 className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-red-600 transition-all duration-300 bg-white rounded-full shadow-md mb-26 hover:scale-105"
//               >
//                 Book Appointment
//               </Link>
//             </div>

//           </div>

//         </div>
//       </motion.div>

//     </section>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function Appointment() {
//   return (
//     <section className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] overflow-hidden bg-[#f7e9f2]">
      
//       {/* ===== GRADIENT BACKGROUND ===== */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[blue] via-[#7bd9f3] to-[sky]" />

//       {/* ===== RIGHT IMAGE ===== */}
//       <div className="absolute right-0 top-0 h-full w-full sm:w-full md:w-[45%]">
//         <img
//           src="/images/hospital.png"
//           alt="Skin Care"
//           className="object-cover object-top w-full h-full"
//         />
//       </div>

//       {/* ===== CONTENT ===== */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: true }}
//         className="relative z-10 flex items-start h-full pt-16 sm:pt-20 md:pt-24"
//       >
//         <div className="w-full px-6 mx-auto max-w-7xl">
          
//           {/* 🔹 TRANSPARENT BOX ADDED HERE */}
//           <div className="max-w-xl p-6 text-left text-center shadow-lg md:text-left bg-white/70 backdrop-blur-md sm:p-8 rounded-2xl">
            
//             <h1 className="text-[28px] sm:text-[34px] md:text-[42px] leading-tight font-semibold text-black">
//               Your Health Deserves <br className="hidden sm:block" /> The Best Care
//             </h1>

//             <p className="mt-4 text-sm sm:text-base text-black/80">
//               Advanced medical treatments focused on complete care, wellness, and confidence.
//             </p>

//             <div className="flex justify-center mt-8 md:justify-start">
//               <Link
//                 to="/BookAppointment"
//                 className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-300 bg-red-600 rounded-full shadow-md mb-26 hover:scale-105"
//               >
//                 Book Appointment
//               </Link>
//             </div>

//           </div>

//         </div>
//       </motion.div>

//     </section>
//   );
// }
















import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Appointment() {
  return (
    <section className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] overflow-hidden bg-[#f7e9f2]">
      
      {/* ===== GRADIENT BACKGROUND ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-[blue] via-[#7bd9f3] to-[sky]" />

      {/* ===== RIGHT IMAGE ===== */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-full md:w-[45%]">
        <img
          src="/images/hospital.png"
          alt="Skin Care"
          className="object-cover object-top w-full h-full"
        />
      </div>

      {/* ===== CONTENT ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex items-start h-full pt-16 sm:pt-20 md:pt-24"
      >
        <div className="w-full px-6 mx-auto max-w-7xl">
          
          {/* TRANSPARENT GLASS BOX */}
          <div className="max-w-xl text-center md:text-left bg-white/90 backdrop-blur-[2px] p-4 sm:p-6 rounded-xl">
            
            <h1 className="text-[28px] sm:text-[34px] md:text-[42px] leading-tight font-semibold text-black">
              Your Health Deserves <br className="hidden sm:block" /> The Best Care
            </h1>

            <p className="mt-4 text-sm sm:text-base text-black/80">
              Advanced medical treatments focused on complete care, wellness, and confidence.
            </p>

            <div className="flex justify-center mt-8 md:justify-start">
              <Link
                to="/BookAppointment"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white transition-all duration-300 bg-red-600 rounded-full shadow-md hover:scale-105"
              >
                Book Appointment
              </Link>
            </div>

          </div>

        </div>
      </motion.div>

    </section>
  );
}







