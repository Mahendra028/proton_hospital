// import React from "react";
// import clinicservice from "../../assets/clinicservice.jpg";
// import {
//   CheckCircle,
//   Heart,
//   Stethoscope,
//   ShieldCheck,
//   User,
// } from "lucide-react";

// export default function ClinicService() {
//   const services = [
//     { id: "01", title: "Accurate Diagnosis", icon: <CheckCircle size={20} /> },
//     { id: "02", title: "Promoting preventive health", icon: <ShieldCheck size={20} /> },
//     { id: "03", title: "Ethical Practice", icon: <Stethoscope size={20} /> },
//     { id: "04", title: "Lifelong Support", icon: <Heart size={20} /> },
//     { id: "05", title: "Compassionate Care", icon: <User size={20} /> },
//   ];

//   return (
//     <section className="bg-[#f6f5ef] py-32">
//       <div className="px-6 mx-auto max-w-7xl">

//         <div className="mb-20">
//           <h2 className="text-5xl font-medium text-gray-900">
//            <span className="mx-2">✦</span> Clinic Service
//           </h2><span className="mx-2">✦</span>Trusted Healthcare <span className="mx-2">✦</span> Health Insight
//         <span className="mx-2">✦</span>Medical Solution</div>

//         <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">

//           {/* IMAGE */}
//           <div className="flex items-start">
//   <img
//     src={clinicservice}
//     alt="Clinic Service"
//     className="
//       w-[360px]
//       h-full
//       max-h-[480px]
//       object-cover
//     "
//   />
// </div>

//           {/* CONTENT */}
//           <div>
//             <div className="grid grid-cols-1 gap-10 mb-16 text-sm leading-relaxed text-gray-600 md:grid-cols-2">
//               <p>
//                 At Medenic, our mission is to deliver advanced, and personalized
//                 healthcare that empowers individuals to happier lives.
//               </p>
//               <p>
//                 We aim to be a trusted health partner through ethical practices,
//                 & a continuous commitment to patient well-being.
//               </p>
//             </div>

//             <div className="border-t border-gray-300">
//               {services.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center justify-between py-6 border-b border-gray-300"
//                 >
//                   <div className="flex items-center gap-6">
//                     <span className="text-sm text-gray-400">{item.id}</span>
//                     <span className="text-base font-medium text-gray-800">
//                       {item.title}
//                     </span>
//                   </div>
//                   <span className="text-gray-500">{item.icon}</span>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// import React from "react";
// import { motion } from "framer-motion";
// import clinicservice from "../../assets/clinicservice.jpg";
// import {
//   CheckCircle,
//   Heart,
//   Stethoscope,
//   ShieldCheck,
//   User,
// } from "lucide-react";

// export default function ClinicService() {
//   const services = [
//     { id: "01", title: "Accurate Diagnosis", icon: <CheckCircle size={20} /> },
//     { id: "02", title: "Promoting preventive health", icon: <ShieldCheck size={20} /> },
//     { id: "03", title: "Ethical Practice", icon: <Stethoscope size={20} /> },
//     { id: "04", title: "Lifelong Support", icon: <Heart size={20} /> },
//     { id: "05", title: "Compassionate Care", icon: <User size={20} /> },
//   ];

//   return (
//     <section className="bg-[#f6f5ef] py-32 overflow-hidden">
//       <div className="px-6 mx-auto max-w-7xl">

//         {/* HEADING + CONTINUOUS SLIDER */}
//         <div className="mb-20 overflow-hidden">
//           <h2 className="mb-6 text-5xl font-medium text-gray-900">
//             Solution <span className="mx-2">✦</span> Clinic Service
//           </h2>

//           <motion.div
//             className="flex gap-10 text-sm font-medium text-gray-600 whitespace-nowrap"
//             animate={{ x: ["0%", "-100%"] }}
//             transition={{
//               repeat: Infinity,
//               duration: 18,
//               ease: "linear",
//             }}
//           >
//             <span>✦ Trusted Healthcare</span>
//             <span>✦ Health Insight</span>
//             <span>✦ Medical Solution</span>
//             <span>✦ Trusted Healthcare</span>
//             <span>✦ Health Insight</span>
//             <span>✦ Medical Solution</span>
//           </motion.div>
//         </div>

//         <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">

//           {/* IMAGE — LEFT TO RIGHT */}
//           <motion.div
//             initial={{ x: -80, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="flex items-start"
//           >
//             <img
//               src={clinicservice}
//               alt="Clinic Service"
//               className="w-[360px] max-h-[480px] object-cover"
//             />
//           </motion.div>

//           {/* CONTENT */}
//           <div>

//             {/* PARAGRAPHS */}
//             <div className="grid grid-cols-1 gap-10 mb-16 text-sm leading-relaxed text-gray-600 md:grid-cols-2">

//               {/* RIGHT TO LEFT */}
//               <motion.p
//                 initial={{ x: 80, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 viewport={{ once: true }}
//               >
//                 At Medenic, our mission is to deliver advanced, and personalized
//                 healthcare that empowers individuals to happier lives.
//               </motion.p>

//               {/* RIGHT TO LEFT */}
//               <motion.p
//                 initial={{ x: 80, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//                 viewport={{ once: true }}
//               >
//                 We aim to be a trusted health partner through ethical practices,
//                 & a continuous commitment to patient well-being.
//               </motion.p>

//             </div>

//             {/* SERVICES — TOP TO BOTTOM (STAGGER) */}
//             <div className="border-t border-gray-300">
//               {services.map((item, index) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ y: -30, opacity: 0 }}
//                   whileInView={{ y: 0, opacity: 1 }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.15,
//                     ease: "easeOut",
//                   }}
//                   viewport={{ once: true }}
//                   className="flex items-center justify-between py-6 border-b border-gray-300"
//                 >
//                   <div className="flex items-center gap-6">
//                     <span className="text-sm text-gray-400">{item.id}</span>
//                     <span className="text-base font-medium text-gray-800">
//                       {item.title}
//                     </span>
//                   </div>
//                   <span className="text-gray-500">{item.icon}</span>
//                 </motion.div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import clinicservice from "../../assets/clinicservice.jpg";
import {
  CheckCircle,
  Heart,
  Stethoscope,
  ShieldCheck,
  User,
} from "lucide-react";

export default function ClinicService() {
  const services = [
    { id: "01", title: "Accurate Diagnosis", icon: <CheckCircle size={20} /> },
    { id: "02", title: "Promoting preventive health", icon: <ShieldCheck size={20} /> },
    { id: "03", title: "Ethical Practice", icon: <Stethoscope size={20} /> },
    { id: "04", title: "Lifelong Support", icon: <Heart size={20} /> },
    { id: "05", title: "Compassionate Care", icon: <User size={20} /> },
  ];

  /* ===== VIDEO-STYLE MARQUEE LOGIC ===== */
  const marqueeRef = useRef(null);
  const x = useMotionValue(0);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  useAnimationFrame((_, delta) => {
    const speed = 0.04; // 🔥 video-smooth speed
    x.set(x.get() - delta * speed);

    if (Math.abs(x.get()) >= width) {
      x.set(0);
    }
  });

  return (
    <section className="bg-[#f6f5ef] py-32 overflow-hidden">
      <div className="px-6 mx-auto max-w-7xl">

        {/* HEADING + PERFECT VIDEO MARQUEE */}
        <div className="mb-20">
          
    {/* ===== HEADING ===== */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-28"
    >
      <p className="text-sm tracking-[0.25em] text-gray-500 mb-5">
         <span className="text-lg">✚</span> Why Choose Us
      </p>

      <h2 className="text-[42px] leading-tight font-semibold text-gray-900">
        Our{" "}
        <span className="font-normal text-red-500">Medical</span>{" "}
        Specialities
      </h2>
    </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">

          {/* IMAGE — LEFT → RIGHT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-start"
          >
            <img
              src={clinicservice}
              alt="Clinic Service"
              className="w-[360px] max-h-[480px] object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <div>

            {/* PARAGRAPHS — RIGHT → LEFT */}
            <div className="grid grid-cols-1 gap-10 mb-16 text-sm leading-relaxed text-gray-600 md:grid-cols-2">
              <motion.p
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                At Medenic, our mission is to deliver advanced, and personalized
                healthcare that empowers individuals to happier lives.
              </motion.p>

              <motion.p
                initial={{ x: 80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                We aim to be a trusted health partner through ethical practices,
                & a continuous commitment to patient well-being.
              </motion.p>
            </div>

            {/* SERVICES — TOP → BOTTOM (STAGGER) */}
            <div className="border-t border-gray-300">
              {services.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: -30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between py-6 border-b border-gray-300"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-gray-400">{item.id}</span>
                    <span className="text-base font-medium text-gray-800">
                      {item.title}
                    </span>
                  </div>
                  <span className="text-gray-500">{item.icon}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
