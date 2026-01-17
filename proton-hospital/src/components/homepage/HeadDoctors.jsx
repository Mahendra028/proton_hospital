
// import { useState } from "react";
// import { motion } from "framer-motion";

// /* ================= ANIMATION VARIANTS ================= */
// const sectionVariant = {
//   hidden: {
//     opacity: 0,
//     y: 60,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       ease: [0.22, 1, 0.36, 1],
//       when: "beforeChildren",
//       staggerChildren: 0.12,
//     },
//   },
// };

// const itemVariant = {
//   hidden: {
//     opacity: 0,
//     y: 24,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };
// /* ===================================================== */

// export default function HeadDoctors() {
//   const headDoctors = [
//     { dept: "Nephrology", name: " Leslie Alexander" },
//     { dept: "Cardiology", name: " Robert Fox" },
//     { dept: "Oncology", name: " Sophia Turner" },
//     { dept: "Orthopedics", name: "Michael Brown" },
//     { dept: "Neurology", name: "Emily Carter" },
//   ];

//   const [activeDoctor, setActiveDoctor] = useState(null);

//   const doctorDetails = {
//     " Leslie Alexander": {
//       image: "/doctors/leslie-alexander.jpg",
//       degree: "MBBS, MD (Nephrology)",
//       exp: "15+ Years Experience",
//     },
//     " Robert Fox": {
//       image: "/doctors/robert-fox.jpg",
//       degree: "MBBS, DM (Cardiology)",
//       exp: "18+ Years Experience",
//     },
//     " Sophia Turner": {
//       image: "/doctors/sophia-turner.jpg",
//       degree: "MBBS, MD (Oncology)",
//       exp: "14+ Years Experience",
//     },
//     "Michael Brown": {
//       image: "/doctors/michael-brown.jpg",
//       degree: "MBBS, MS (Orthopedics)",
//       exp: "20+ Years Experience",
//     },
//     "Emily Carter": {
//       image: "/doctors/emily-carter.jpg",
//       degree: "MBBS, DM (Neurology)",
//       exp: "16+ Years Experience",
//     },
//   };

//   return (
//     <motion.section
//       className="bg-[#fbf9f5] py-24"
//       variants={sectionVariant}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.25 }}
//     >
//       <div className="max-w-[1200px] mx-auto px-6">

//         {/* LABEL */}
//         <motion.p
//           variants={itemVariant}
//           className="flex items-center justify-center gap-1 mb-4 text-sm text-black"
//         >
//           ✦ <span>Our Experts</span>
//         </motion.p>

//         {/* TITLE */}
//         <motion.h2
//           variants={itemVariant}
//           className="text-4xl font-semibold text-center text-black mb-14"
//         >
//           Meet Our Doctors
//         </motion.h2>

//         {/* LIST */}
//         <div className="border-t border-[#e6e6e6]">
//           {headDoctors.map((doc, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariant}
//               className="relative flex items-center justify-center py-8 border-b border-[#e6e6e6]"
//               onMouseEnter={() => setActiveDoctor(doc.name)}
//               onMouseLeave={() => setActiveDoctor(null)}
//             >
//               {/* DEPARTMENT */}
//               <span className="absolute left-1/2 -translate-x-[300px] text-sm text-[#bab4b4]">
//                 {doc.dept}
//               </span>

//               {/* NAME */}
//               <h3
//                 className={`text-[52px] leading-none transition-all duration-300 ease-in-out ${
//                   activeDoctor === doc.name
//                     ? "text-black font-semibold"
//                     : "text-[#918d8d] font-semibold"
//                 }`}
//               >
//                 {doc.name}
//               </h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT IMAGE PANEL */}
//       {activeDoctor && (
//         <div className="fixed z-40 -translate-y-1/2 top-1/2 right-16">
//           <motion.div
//             initial={{ opacity: 0, y: 24, scale: 0.96 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.45, ease: "easeOut" }}
//             className="w-[260px] bg-white shadow-lg overflow-hidden"
//           >
//             <img
//               src={doctorDetails[activeDoctor].image}
//               alt={activeDoctor}
//               className="w-full h-[340px] object-cover"
//             />

//             <div className="p-4">
//               <h4 className="text-lg font-semibold text-black">
//                 {activeDoctor}
//               </h4>
//               <p className="text-sm text-gray-700">
//                 {doctorDetails[activeDoctor].degree}
//               </p>
//               <p className="text-sm text-gray-700">
//                 {doctorDetails[activeDoctor].exp}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </motion.section>
//   );
// }

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";


// /* ================= ANIMATION VARIANTS ================= */
// const sectionVariant = {
//   hidden: { opacity: 0, y: 60 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       ease: [0.22, 1, 0.36, 1],
//       when: "beforeChildren",
//       staggerChildren: 0.12,
//     },
//   },
// };

// const itemVariant = {
//   hidden: { opacity: 0, y: 24 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };
// /* ===================================================== */

// export default function HeadDoctors() {
//   const headDoctors = [
//     { dept: "Nephrology", name: " Leslie Alexander" },
//     { dept: "Cardiology", name: " Robert Fox" },
//     { dept: "Oncology", name: " Sophia Turner" },
//     { dept: "Orthopedics", name: "Michael Brown" },
//     { dept: "Neurology", name: "Emily Carter" },
//   ];

//   const [activeDoctor, setActiveDoctor] = useState(null);

//   const doctorDetails = {
//     " Leslie Alexander": {
//       image: "/doctors/leslie-alexander.jpg",
//       degree: "MBBS, MD (Nephrology)",
//       exp: "15+ Years Experience",
//     },
//     " Robert Fox": {
//       image: "/doctors/robert-fox.jpg",
//       degree: "MBBS, DM (Cardiology)",
//       exp: "18+ Years Experience",
//     },
//     " Sophia Turner": {
//       image: "/doctors/sophia-turner.jpg",
//       degree: "MBBS, MD (Oncology)",
//       exp: "14+ Years Experience",
//     },
//     "Michael Brown": {
//       image: "/doctors/michael-brown.jpg",
//       degree: "MBBS, MS (Orthopedics)",
//       exp: "20+ Years Experience",
//     },
//     "Emily Carter": {
//       image: "/doctors/emily-carter.jpg",
//       degree: "MBBS, DM (Neurology)",
//       exp: "16+ Years Experience",
//     },
//   };

//   return (
//     <motion.section
//       className="bg-[#EDF2F9] py-16 sm:py-20 lg:py-24"
//       variants={sectionVariant}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.25 }}
//     >
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

//         {/* LABEL */}
//         <motion.p
//           variants={itemVariant}
//           className="flex items-center justify-center gap-1 mb-3 text-sm text-black"
//         >
//           ✦ <span>Our Experts</span>
//         </motion.p>

//         {/* TITLE */}
//         <motion.h2
//           variants={itemVariant}
//           className="mb-10 text-2xl font-semibold text-center text-black sm:text-3xl lg:text-4xl sm:mb-14"
//         >
//           Meet Our Doctors
//         </motion.h2>

//         {/* LIST */}
//         <div className="border-t border-[#e6e6e6]">
//           {headDoctors.map((doc, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariant}
//               className="relative flex items-center justify-center py-6 sm:py-8 border-b border-[#e6e6e6]"
//               onMouseEnter={() => setActiveDoctor(doc.name)}
//               onMouseLeave={() => setActiveDoctor(null)}
//             >
//               {/* DEPARTMENT */}
//               <span className="hidden sm:block absolute left-1/2 -translate-x-[220px] lg:-translate-x-[300px] text-sm text-[#bab4b4]">
//                 {doc.dept}
//               </span>

//               {/* NAME */}
//               {/* <h3
//                 className={`text-[28px] sm:text-[36px] lg:text-[52px] leading-none transition-all duration-300 ease-in-out ${
//                   activeDoctor === doc.name
//                     ? "text-black font-semibold"
//                     : "text-[#918d8d] font-semibold"
//                 }`}
//               >
//                 {doc.name}
//               </h3> */}
//               <h3
//   onClick={() => (window.location.href = "/doctors")}
//   className={`cursor-pointer text-[28px] sm:text-[36px] lg:text-[52px] leading-none transition-all duration-300 ease-in-out ${
//     activeDoctor === doc.name
//       ? "text-black font-semibold"
//       : "text-[#918d8d] font-semibold"
//   }`}
// >
//   {doc.name}
// </h3>

              
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* RIGHT IMAGE PANEL — DESKTOP ONLY */}
//       {activeDoctor && (
//         <div className="fixed z-40 hidden -translate-y-1/2 lg:block top-1/2 right-16">
//           <motion.div
//             initial={{ opacity: 0, y: 24, scale: 0.96 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             transition={{ duration: 0.45, ease: "easeOut" }}
//             className="w-[260px] bg-white shadow-lg overflow-hidden"
//           >
//             <img
//               src={doctorDetails[activeDoctor].image}
//               alt={activeDoctor}
//               className="w-full h-[340px] object-cover"
//             />

//             <div className="p-4">
//               <h4 className="text-lg font-semibold text-black">
//                 {activeDoctor}
//               </h4>
//               <p className="text-sm text-gray-700">
//                 {doctorDetails[activeDoctor].degree}
//               </p>
//               <p className="text-sm text-gray-700">
//                 {doctorDetails[activeDoctor].exp}
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </motion.section>
//   );
// }


export default function HeadDoctors() {
  const headDoctors = [
    { name: " Leslie Alexander", dept: "Nephrology" },
    { name: " Robert Fox", dept: "Cardiology" },
    { name: " Sophia Turner", dept: "Oncology" },
    { name: "Michael Brown", dept: "Orthopedics" },
    { name: "Emily Carter", dept: "Neurology" },
  ];

  const doctorDetails = {
    " Leslie Alexander": { image: "/doctors/leslie-alexander.jpg" },
    " Robert Fox": { image: "/doctors/robert-fox.jpg" },
    " Sophia Turner": { image: "/doctors/sophia-turner.jpg" },
    "Michael Brown": { image: "/doctors/michael-brown.jpg" },
    "Emily Carter": { image: "/doctors/emily-carter.jpg" },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADING */}
        <p className="text-sm tracking-[0.25em] text-center text-gray-500 mb-5">
         <span className="text-lg">✚</span> Our Specialistics
      </p>

        <h2 className="text-[42px] leading-tight font-semibold text-gray-900 text-center mb-14 ">
            Meet Our  <span className="font-normal text-red-500">Doctors</span>  
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* LEFT BIG CARD */}
          <div
            onClick={() => (window.location.href = "/doctors")}
            className="relative group rounded-2xl overflow-hidden cursor-pointer lg:row-span-2 h-[520px]"
          >
            {/* IMAGE */}
            <img
              src={doctorDetails[headDoctors[0].name].image}
              alt=""
              className="object-cover object-top w-full h-full"
            />

            {/* FULL BLACK OVERLAY */}
            <div
              className="absolute inset-0 transition-opacity duration-500 bg-black opacity-0 group-hover:opacity-70"
            />

            {/* LEFT PANEL */}
            <div
              className="
                absolute top-0 left-0 h-full w-0
                bg-black
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:w-1/2
              "
            />

            {/* RIGHT PANEL */}
            <div
              className="
                absolute top-0 right-0 h-full w-0
                bg-black
                transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:w-1/2
              "
            />

            {/* INFO */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-sm tracking-wide text-white transition-all duration-500 delay-200 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100"
            >
              <p>Leslie Alexander</p>
                <p>Senior Doctor</p>
                <p>15+ Years</p>
            </div>

            {/* NAME */}
            <div className="absolute bottom-6 left-6 right-6">
  <div className="inline-block px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm">
    <h3 className="text-xl font-semibold leading-tight text-white">
      {headDoctors[0].name}
    </h3>
    <p className="text-sm text-white/80">
      {headDoctors[0].dept}
    </p>
  </div>
</div>

          </div>

          {/* RIGHT SMALL CARDS */}
          {headDoctors.slice(1).map((doc, index) => (
            <div
              key={index}
              onClick={() => (window.location.href = "/doctors")}
              className="relative group rounded-2xl overflow-hidden cursor-pointer h-[250px]"
            >
              {/* IMAGE */}
              <img
                src={doctorDetails[doc.name].image}
                alt=""
                className="object-cover object-top w-full h-full"
              />

              {/* FULL BLACK OVERLAY */}
              <div
                className="absolute inset-0 transition-opacity duration-500 bg-black opacity-0 group-hover:opacity-70"
              />

              {/* LEFT PANEL */}
              <div
                className="
                  absolute top-0 left-0 h-full w-0
                  bg-black
                  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:w-1/2
                "
              />

              {/* RIGHT PANEL */}
              <div
                className="
                  absolute top-0 right-0 h-full w-0
                  bg-black
                  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:w-1/2
                "
              />

              {/* INFO */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center text-xs tracking-wide text-white transition-all duration-500 delay-200 scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100"
              >
                <p>{doc.dept}</p>
                <p>Senior Doctor</p>
                <p>15+ Years</p>
              </div>

              {/* NAME */}
             <div className="absolute bottom-6 left-6 right-6">
  <div className="inline-block px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm">
    <h3 className="text-xl font-semibold leading-tight text-white">
      {headDoctors[0].name}
    </h3>
    <p className="text-sm text-white/80">
      {headDoctors[0].dept}
    </p>
  </div>
</div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
