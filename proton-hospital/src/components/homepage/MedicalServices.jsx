
// import React from "react";
// import {
//   Stethoscope,
//   TestTube,
//   Syringe,
//   Ambulance,
// } from "lucide-react";

// export default function MedicalServices() {
//   const services = [
//     {
//       tag: "Primary Care",
//       title: "Surgical Services",
//       desc: "Comprehensive care focused on your overall well-being.",
//       icon: <Stethoscope size={32} strokeWidth={1.5} />,
//     },
//     {
//       tag: "Health Screening",
//       title: "Diagnostics & Lab Testing",
//       desc: "Early detection routine screening improve health outcomes.",
//       icon: <TestTube size={32} strokeWidth={1.5} />,
//     },
//     {
//       tag: "Preventive Care",
//       title: "Immunization Services",
//       desc: "Immunization programs designed for lifelong protection.",
//       icon: <Syringe size={32} strokeWidth={1.5} />,
//     },
//     {
//       tag: "Immediate Attention",
//       title: "Emergency Care",
//       desc: "Comprehensive healthcare for children & adolescents.",
//       icon: <Ambulance size={32} strokeWidth={1.5} />,
//     },
//   ];

//   return (
//     <section className="bg-[#faf9f7] py-24">
//       <div className="px-6 mx-auto max-w-7xl">

//         {/* HEADING */}
//         <div className="mb-20 text-center">
//           <p className="flex items-center justify-center gap-2 mb-3 text-sm font-medium text-gray-500">
//             <span className="text-lg">✚</span> What We Do
//           </p>
//           <h2 className="text-4xl font-semibold text-gray-900">
//             Our Medical Services
//           </h2>
//         </div>

//         {/* SERVICES GRID */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className={`border border-gray-200 bg-white p-8
//                 transition-colors duration-300 ease-in-out
//                 hover:bg-[#eaf7f9] hover:border-[#bfe7ee]
//                 ${
//                   index === 1 || index === 2
//                     ? "h-[420px]"
//                     : "h-[380px]"
//                 }
//               `}
//             >
//               {/* TAG */}
//               <span className="inline-block px-4 py-1 mb-6 text-xs font-medium text-gray-700 border border-gray-300 rounded-full">
//                 {service.tag}
//               </span>

//               {/* TITLE */}
//               <h3 className="mb-6 text-xl font-semibold text-gray-900">
//                 {service.title}
//               </h3>

//               {/* ICON */}
//               <div className="mb-6 text-gray-900">
//                 {service.icon}
//               </div>

//               {/* DESC */}
//               <p className="mb-8 text-sm leading-relaxed text-gray-600">
//                 {service.desc}
//               </p>

//               {/* LINK */}
//               <button className="text-sm font-medium text-gray-900 hover:underline">
//                 View Services
//               </button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Stethoscope,
//   TestTube,
//   Syringe,
//   Ambulance,
// } from "lucide-react";

// export default function MedicalServices() {
//   const services = [
//     {
//       tag: "Primary Care",
//       title: "Surgical Services",
//       desc: "Comprehensive care focused on your overall well-being.",
//       icon: <Stethoscope size={32} strokeWidth={1.5} />,
//     },
//     {
//       tag: "Health Screening",
//       title: "Diagnostics & Lab Testing",
//       desc: "Early detection routine screening improve health outcomes.",
//       icon: <TestTube size={32} strokeWidth={1.5} />,
//     },
//     {
//       tag: "Preventive Care",
//       title: "Immunization Services",
//       desc: "Immunization programs designed for lifelong protection.",
//       icon: <Syringe size={32} strokeWidth={1.5} />,
//     },
//     {
//       tag: "Immediate Attention",
//       title: "Emergency Care",
//       desc: "Comprehensive healthcare for children & adolescents.",
//       icon: <Ambulance size={32} strokeWidth={1.5} />,
//     },
//   ];

//   return (
//     <section className="bg-[#faf9f7] py-24">
//       <div className="px-6 mx-auto max-w-7xl">

//         {/* HEADING */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="mb-20 text-center"
//         >
//           <p className="flex items-center justify-center gap-2 mb-3 text-sm font-medium text-gray-500">
//             <span className="text-lg">✚</span> What We Do
//           </p>
//           <h2 className="text-4xl font-semibold text-gray-900">
//             Our Medical Services
//           </h2>
//         </motion.div>

//         {/* SERVICES GRID */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.15,
//                 ease: "easeOut",
//               }}
//               viewport={{ once: true }}
//               className={`border border-gray-200 bg-white p-8
//                 transition-colors duration-300 ease-in-out
//                 hover:bg-[#eaf7f9] hover:border-[#bfe7ee]
//                 ${
//                   index === 1 || index === 2
//                     ? "h-[420px]"
//                     : "h-[380px]"
//                 }
//               `}
//             >
//               {/* TAG */}
//               <span className="inline-block px-4 py-1 mb-6 text-xs font-medium text-gray-700 border border-gray-300 rounded-full">
//                 {service.tag}
//               </span>

//               {/* TITLE */}
//               <h3 className="mb-6 text-xl font-semibold text-gray-900">
//                 {service.title}
//               </h3>

//               {/* ICON */}
//               <div className="mb-6 text-gray-900">
//                 {service.icon}
//               </div>

//               {/* DESC */}
//               <p className="mb-8 text-sm leading-relaxed text-gray-600">
//                 {service.desc}
//               </p>

//               {/* LINK */}
//               <button className="text-sm font-medium text-gray-900 hover:underline">
//                 View Services
//               </button>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import {
  Stethoscope,
  TestTube,
  Syringe,
  Ambulance,
} from "lucide-react";

export default function MedicalServices() {
  const services = [
    {
      tag: "Primary Care",
      title: "Surgical Services",
      desc: "Comprehensive care focused on your overall well-being.",
      icon: <Stethoscope size={40} strokeWidth={1.5} />,
    },
    {
      tag: "Health Screening",
      title: "Diagnostics & Lab Testing",
      desc: "Early detection routine screening improve health outcomes.",
      icon: <TestTube size={40} strokeWidth={1.5} />,
    },
    {
      tag: "Preventive Care",
      title: "Immunization Services",
      desc: "Immunization programs designed for lifelong protection.",
      icon: <Syringe size={40} strokeWidth={1.5} />,
    },
    {
      tag: "Immediate Attention",
      title: "Emergency Care",
      desc: "Comprehensive healthcare for children & adolescents.",
      icon: <Ambulance size={40} strokeWidth={1.5} />,
    },
  ];

  return (
  <>
<section className="bg-[#faf9f7] py-32">
  <div className="px-6 mx-auto max-w-7xl">

    {/* ===== HEADING ===== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-28"
    >
      <p className="text-sm tracking-[0.25em] text-gray-500 mb-5">
         <span className="text-lg">✚</span> What We Do
      </p>

      <h2 className="text-[42px] leading-tight font-semibold text-gray-900">
        Our{" "}
        <span className="font-normal text-red-500">Medical</span>{" "}
        Services
      </h2>
    </motion.div>

    {/* ===== SERVICES ROW (NO CARDS) ===== */}
    <div className="grid grid-cols-1 gap-20 text-center md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* ICON
          <div className="mb-10 text-gray-900">
            {service.icon}
          </div> */}
{/* ICON BOX */}
<motion.div
  className="flex items-center justify-center w-20 h-20 mb-10"
  initial={{
    opacity: 0,
    y: 18,
    scale: 0.9,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
  }}
  transition={{
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true }}
  whileHover={{
    rotate: index % 2 === 0 ? 6 : -6,
    scale: 1.05,
  }}
>
  {service.icon}
</motion.div>

          {/* TITLE */}
          <h3 className="text-xl font-semibold text-[#3b3663] mb-6">
            {service.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm leading-relaxed text-gray-600 max-w-[260px] mb-10">
            {service.desc}
          </p>

          {/* LINK */}
          {/* <button className="text-sm font-medium text-[#7b7a9e] inline-flex items-center gap-2 hover:text-gray-900 transition">
            Start now
            <span className="text-lg">→</span>
          </button> */}
        </motion.div>
      ))}
    </div>

  </div>
</section>


  
  </>
    
  );
}
