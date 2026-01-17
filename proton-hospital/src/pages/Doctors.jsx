
// import React, { useEffect, useState } from "react";
// import Doctorsdata from "../assets/doctor.json";
// import { Plus, Minus, CheckCircle } from "lucide-react";
// import { motion } from "framer-motion"; // ✅ FIX 1: REQUIRED IMPORT

// export default function Doctors() {
//   const [activeDoctor, setActiveDoctor] = useState(null);

//   useEffect(() => {
//     if (Doctorsdata.length > 0) {
//       setActiveDoctor(Doctorsdata[0]);
//     }
//   }, []);

//   return (
//     <>
//     <section className="bg-[#4f7eff]">
//           <div className="px-4 py-20 mx-auto max-w-7xl">
//             <h1 className="mb-3 text-4xl font-semibold text-white translate-y-4">
//               Our Doctors
//             </h1>
//             <p className="max-w-xl text-sm translate-y-4 text-white/90">
//            Our team of doctors combines advanced medical knowledge with compassionate care for better patient outcomes.
//             </p>
//           </div>
//         </section>

//       {/* ================= MAIN SECTION ================= */}
//       <section className="relative pt-24 pb-28"> {/* ✅ FIX 2: relative added */}

//         {/* ===== BACKGROUND LAYER ===== */}
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: "url(/images/bg-services2.jpg)",
//             backgroundRepeat: "no-repeat",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         <div
//           className="
//             relative z-10
//             max-w-[1400px] mx-auto px-6
//             grid grid-cols-1 lg:grid-cols-[300px_1fr]
//             gap-14
//           "
//         >
//           {/* ================= SIDEBAR ================= */}
//           <aside className="sticky self-start w-full top-28">
//             <div className="mb-4">
//               <h3 className="text-[18px] font-normal text-blue-700">
//                 Our Doctors
//               </h3>
//               <p className="text-sm text-gray-500">
//                 Experienced medical specialists
//               </p>
//             </div>

//             <ul className="overflow-hidden bg-white border-t border-gray-100 divide-y divide-gray-100 rounded-xl">
//               {Doctorsdata.map((doctor) => {
//                 const isActive = activeDoctor?.id === doctor.id;

//                 return (
//                   <li key={doctor.id}>
//                     <button
//                       onClick={() => setActiveDoctor(doctor)}
//                       className={`
//                         w-full flex items-center justify-between
//                         px-4 py-3 text-left transition-colors
//                         ${
//                           isActive
//                             ? "bg-blue-100 text-blue-700"
//                             : "text-gray-800 hover:bg-blue-50"
//                         }
//                       `}
//                     >
//                       <span className="text-[15px] font-medium">
//                         {doctor.name}
//                       </span>

//                       {isActive ? (
//                         <Minus className="w-4 h-4 text-gray-500" />
//                       ) : (
//                         <Plus className="w-4 h-4 text-gray-400" />
//                       )}
//                     </button>
//                   </li>
//                 );
//               })}
//             </ul>
//           </aside>

//           {/* ================= RIGHT CONTENT ================= */}
//           <div
//             className="
//               relative bg-white/10 backdrop-blur-sm
//  rounded-[28px]
//               shadow-[0_40px_90px_rgba(0,0,0,0.08)]
//               p-8 lg:p-12
//               max-h-[calc(100vh-160px)]
//               overflow-y-auto
//             "
//           >
//             {activeDoctor && (
//               <div className="space-y-16">

//                 {/* ===== INTRO ===== */}
//                 <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
//                   <div>
//                     <p className="mb-2 text-sm text-gray-500">
//                       {activeDoctor.department}
//                     </p>
//                     <h2 className="mb-4 text-3xl font-semibold text-gray-900 lg:text-4xl">
//                       {activeDoctor.name}
//                     </h2>
//                     <p className="leading-relaxed text-gray-700">
//                       {activeDoctor.shortDescription}
//                     </p>
//                   </div>

//                   <div className="overflow-hidden rounded-[24px] shadow-md">
//                     <img
//                       src={activeDoctor.image}
//                       alt={activeDoctor.name}
//                       className="w-full h-[320px] object-cover object-top"
//                     />
//                   </div>
//                 </div>

//                 {/* ===== ABOUT ===== */}
//                 <section>
//                   <h3 className="mb-4 text-xl font-semibold text-gray-900">
//                     About Doctor
//                   </h3>
//                   <p className="leading-relaxed text-gray-700">
//                     {activeDoctor.about}
//                   </p>
//                 </section>

//                 {activeDoctor.internationalExperience && (
//                   <section>
//                     <h3 className="mb-4 text-xl font-semibold text-gray-900">
//                       International Experience
//                     </h3>
//                     <p className="leading-relaxed text-gray-700">
//                       {activeDoctor.internationalExperience}
//                     </p>
//                   </section>
//                 )}

//                 {activeDoctor.indiaPractice && (
//                   <section>
//                     <h3 className="mb-4 text-xl font-semibold text-gray-900">
//                       Practice in India
//                     </h3>
//                     <p className="leading-relaxed text-gray-700">
//                       {activeDoctor.indiaPractice}
//                     </p>
//                   </section>
//                 )}

//                 {activeDoctor.socialWork && (
//                   <section>
//                     <h3 className="mb-4 text-xl font-semibold text-gray-900">
//                       Social Contribution
//                     </h3>
//                     <p className="leading-relaxed text-gray-700">
//                       {activeDoctor.socialWork}
//                     </p>
//                   </section>
//                 )}

//                 {activeDoctor.achievements && (
//                   <section>
//                     <h3 className="mb-4 text-xl font-semibold text-gray-900">
//                       Achievements
//                     </h3>
//                     <ul className="space-y-3">
//                       {activeDoctor.achievements.map((item, i) => (
//                         <li key={i} className="flex gap-2 text-gray-700">
//                           <CheckCircle className="w-4 h-4 text-blue-600" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </section>
//                 )}

//                 {activeDoctor.specialInterests && (
//                   <section>
//                     <h3 className="mb-4 text-xl font-semibold text-gray-900">
//                       Areas of Special Interest
//                     </h3>
//                     <ul className="space-y-3">
//                       {activeDoctor.specialInterests.map((item, i) => (
//                         <li key={i} className="flex gap-2 text-gray-700">
//                           <CheckCircle className="w-4 h-4 text-blue-600" />
//                           {item}
//                         </li>
//                       ))}
//                     </ul>
//                   </section>
//                 )}

//                 {activeDoctor.professionalExperience && (
//                   <section>
//                     <h3 className="mb-4 text-xl font-semibold text-gray-900">
//                       Professional Experience
//                     </h3>
//                     <p className="leading-relaxed text-gray-700">
//                       {activeDoctor.professionalExperience}
//                     </p>
//                   </section>
//                 )}

//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import Doctorsdata from "../assets/doctor.json";
import { Plus, Minus, CheckCircle } from "lucide-react";
import { motion } from "framer-motion"; // already present ✅

export default function Doctors() {
  const [activeDoctor, setActiveDoctor] = useState(null);

  useEffect(() => {
    if (Doctorsdata.length > 0) {
      setActiveDoctor(Doctorsdata[0]);
    }
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <motion.section
        className="bg-[#4f7eff]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="px-4 py-20 mx-auto max-w-7xl">
          <h1 className="mb-3 text-4xl font-semibold text-white translate-y-4">
            Our Doctors
          </h1>
          <p className="max-w-xl text-sm translate-y-4 text-white/90">
            Our team of doctors combines advanced medical knowledge with compassionate care for better patient outcomes.
          </p>
        </div>
      </motion.section>

      {/* ================= MAIN SECTION ================= */}
      <section className="relative pt-24 pb-28">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/contact-bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

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
              <h3 className="text-[18px] font-normal text-blue-700">
                Our Doctors
              </h3>
              <p className="text-sm text-gray-500">
                Experienced medical specialists
              </p>
            </div>

            <ul className="overflow-hidden bg-white border-t border-gray-100 divide-y divide-gray-100 rounded-xl">
              {Doctorsdata.map((doctor, index) => {
                const isActive = activeDoctor?.id === doctor.id;

                return (
                  <motion.li
                    key={doctor.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => setActiveDoctor(doctor)}
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
                        {doctor.name}
                      </span>

                      {isActive ? (
                        <Minus className="w-4 h-4 text-gray-500" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </aside>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            className="
              relative bg-white/10 backdrop-blur-sm
              rounded-[28px]
              shadow-[0_40px_90px_rgba(0,0,0,0.08)]
              p-8 lg:p-12
              max-h-[calc(100vh-160px)]
              overflow-y-auto
            "
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {activeDoctor && (
              <motion.div
                key={activeDoctor.id}
                className="space-y-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {/* ===== INTRO ===== */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                  <div>
                    <p className="mb-2 text-sm text-gray-500">
                      {activeDoctor.department}
                    </p>
                    <h2 className="mb-4 text-3xl font-semibold text-gray-900 lg:text-4xl">
                      {activeDoctor.name}
                    </h2>
                    <p className="leading-relaxed text-gray-700">
                      {activeDoctor.shortDescription}
                    </p>
                  </div>

                  <motion.div
                    className="overflow-hidden rounded-[24px] shadow-md"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={activeDoctor.image}
                      alt={activeDoctor.name}
                      className="w-full h-[320px] object-cover object-top"
                    />
                  </motion.div>
                </div>

                {/* ===== SECTIONS (AUTO FADE) ===== */}
                {[
                  activeDoctor.about,
                  activeDoctor.internationalExperience,
                  activeDoctor.indiaPractice,
                  activeDoctor.socialWork,
                  activeDoctor.professionalExperience,
                ].map(
                  (item, i) =>
                    item && (
                      <motion.section
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <p className="leading-relaxed text-gray-700">
                          {item}
                        </p>
                      </motion.section>
                    )
                )}

                {/* ===== LIST SECTIONS ===== */}
                {(activeDoctor.achievements ||
                  activeDoctor.specialInterests) && (
                  <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <ul className="space-y-3">
                      {[...(activeDoctor.achievements || []), ...(activeDoctor.specialInterests || [])].map(
                        (item, i) => (
                          <motion.li
                            key={i}
                            className="flex gap-2 text-gray-700"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 }}
                          >
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            {item}
                          </motion.li>
                        )
                      )}
                    </ul>
                  </motion.section>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
