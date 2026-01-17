// import React from "react";
// import { motion } from "framer-motion";

// export default function StatsSection() {
//   return (
//     <section className="bg-[#f6f5ef] overflow-hidden">
//       <div className="grid grid-cols-1 lg:grid-cols-2">

//         {/* LEFT PANEL ← */}
//         <motion.div
//           initial={{ x: -150, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="flex justify-end px-20 py-28"
//         >
//           {/* CONTENT ↓ */}
//           <motion.div
//             initial={{ y: -40, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="w-full max-w-2xl"
//           >
//             <h2 className="mb-3 text-6xl font-bold text-gray-900">
//               12,700+
//             </h2>

//             <p className="mb-8 text-xl font-medium text-gray-600">
//               Patients Treated Successfully
//             </p>

//             <p className="text-base leading-relaxed text-gray-600">
//               Over the years, Medenic has become a trusted name in healthcare,
//               serving thousands of patients across all age groups and health
//               conditions.
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* RIGHT PANEL → */}
//         <motion.div
//           initial={{ x: 150, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="bg-[#0b2f36] px-20 py-28 flex justify-start"
//         >
//           {/* CONTENT ↓ */}
//           <motion.div
//             initial={{ y: -40, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="w-full max-w-2xl text-white"
//           >
//             {/* ITEM 1 */}
//             <div className="flex items-start justify-between">
//               <div>
//                 <h3 className="mb-1 text-5xl font-semibold">
//                   20+ Doctors
//                 </h3>
//                 <p className="text-lg text-white/80">
//                   Qualified Healthcare Professionals
//                 </p>
//               </div>
//             </div>

//             {/* DIVIDER */}
//             <div className="h-px my-14 bg-white/20" />

//             {/* ITEM 2 */}
//             <div className="flex items-start justify-between">
//               <div>
//                 <h3 className="mb-1 text-5xl font-semibold">
//                   98% Satisfaction
//                 </h3>
//                 <p className="text-lg text-white/80">
//                   Nearly all patients satisfied
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <section className="bg-[#f6f5ef] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT PANEL ← */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex justify-end px-20 py-28"
        >
          {/* CONTENT ↓ */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-2xl"
          >
            <h2 className="mb-3 text-6xl font-bold text-gray-900">
              12,700+
            </h2>

            <p className="mb-8 text-xl font-medium text-gray-600">
              Patients Treated Successfully
            </p>

            <p className="text-base leading-relaxed text-gray-600">
              Over the years, Medenic has become a trusted name in healthcare,
              serving thousands of patients across all age groups and health
              conditions.
            </p>
          </motion.div>
        </motion.div>

        {/* RIGHT PANEL → */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="bg-[#0b2f36] px-20 py-28 flex justify-start"
        >
          {/* CONTENT ↓ */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-2xl text-white"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="mb-1 text-5xl font-semibold">
                  20+ Doctors
                </h3>
                <p className="text-lg text-white/80">
                  Qualified Healthcare Professionals
                </p>
              </div>
            </div>

            <div className="h-px my-14 bg-white/20" />

            <div className="flex items-start justify-between">
              <div>
                <h3 className="mb-1 text-5xl font-semibold">
                  98% Satisfaction
                </h3>
                <p className="text-lg text-white/80">
                  Nearly all patients satisfied
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
