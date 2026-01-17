
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Link } from "react-router-dom";


// export default function AboutSlider() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   // 🔥 PURE SCROLL-SCRUB (NO EASING)
//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

//   return (
// <section
//   ref={sectionRef}
//   className="relative h-[220vh] bg-[#fbf9f5] bg-[url('/images/about-bg.jpg')] bg-no-repeat bg-[length:85%] bg-center bg-fixed">




//       {/* STICKY CONTAINER */}
//       <div className="sticky top-0 h-screen overflow-hidden">

//         {/* HORIZONTAL SLIDER */}
//         <motion.div
//           style={{ x }}
//           className="flex w-[200vw] h-full"
//         >

//           {/* ===== SLIDE 1 ===== */}
//           <div className="flex items-center w-screen h-full gap-24 px-24 bg-white">
//             <div className="w-[38%]">
//               <h2 className="mb-6 text-4xl font-semibold">
//                 Your Health, Our Purpose
//               </h2>

//               <p className="mb-10 text-base leading-relaxed text-gray-700">
//                 Our clinic was founded with a single goal to deliver
//                 high-quality medical care that puts patients first—every time.
//               </p>

//               <div className="mb-8">
//                 <h3 className="text-4xl font-semibold">12+</h3>
//                 <p className="text-sm text-gray-600">
//                   Backed by years of clinical expertise across specialties.
//                 </p>
//               </div>

//               <div className="mb-8">
//                 <h3 className="text-4xl font-semibold">80%</h3>
//                 <p className="text-sm text-gray-600">
//                   Referred by Existing Patients
//                 </p>
//               </div>

//               <ul className="space-y-3 text-sm text-gray-700">
//                 <li>→ High Patient Satisfaction</li>
//                 <li>→ Personalized, Compassionate Approach</li>
//                 <li>→ Reliable Follow-Up Care</li>
//                 <li>→ Clear Communication & Transparency</li>
//               </ul>

//               <p className="mt-10 text-sm leading-relaxed text-gray-600">
//                 Our approach is always the same—personalized care delivered
//                 with empathy, compassion, integrity, and excellence.
//               </p>
//             </div>

//             <div className="w-[62%]">
//               <img
//                 src="/images/abouthero.jpg"
//                 alt=""
//                 className="w-full h-[680px] object-cover scale-[1.05]"
//               />
//             </div>
//           </div>

//           {/* ===== SLIDE 2 ===== */}
//           <div className="flex items-center w-screen h-full gap-24 px-24 bg-white">
//             <div className="w-[38%]">
//               <h2 className="mb-6 text-4xl font-semibold">
//                 Our Core Commitments
//               </h2>

//               <p className="mb-6 text-base leading-relaxed text-gray-700">
//                 Our commitment to integrity ensures honest communication
//                 and ethical medical practices, while our pursuit of
//                 excellence drives us to deliver the highest standards.
//               </p>

//               <p className="mb-10 text-base leading-relaxed text-gray-700">
//                 We prioritize patient-centered care, embrace innovation,
//                 and strive to make healthcare accessible and inclusive for all.
//               </p>

// <Link to="/appointment">
//   <button className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium bg-[#bfeaf2]">
//     <span>→</span> MAKE AN APPOINTMENT
//   </button>
// </Link>


//             </div>

//             <div className="w-[62%]">
//               <img
//                 src="/images/about-core.jpg"
//                 alt=""
//                 className="w-full h-[680px] object-cover scale-[1.05]"
//               />
//             </div>
//           </div>

//         </motion.div>
//       </div>
//     </section>
//   );
// }{/*----------------------------------------------------------------------*/ }
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function AboutSlider() {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

//   return (
//     <section
//       ref={sectionRef}
//       className="
//         relative
//         h-auto lg:h-[220vh]
//         bg-[#fbf9f5]
//         bg-[url('/images/about-bg.jpg')]
//         bg-no-repeat
//         bg-[length:85%]
//         bg-center
//         lg:bg-fixed
//       "
//     >
//       {/* STICKY CONTAINER */}
//       <div className="top-0 h-auto overflow-hidden lg:sticky lg:h-screen">

//         {/* HORIZONTAL SLIDER */}
//         <motion.div
//           style={{ x }}
//           className="
//             flex
//             flex-col lg:flex-row
//             w-full lg:w-[200vw]
//             h-auto lg:h-full
//           "
//         >
//           {/* ===== SLIDE 1 ===== */}
//           <div
//             className="flex flex-col-reverse items-center w-full h-auto gap-10 px-6 py-16 bg-white lg:flex-row lg:w-screen lg:h-full lg:gap-24 sm:px-12 lg:px-24 lg:py-0"
//           >
//             <div className="w-full lg:w-[38%]">
//               <h2 className="mb-6 text-2xl font-semibold sm:text-3xl lg:text-4xl">
//                 Your Health, Our Purpose
//               </h2>

//               <p className="mb-10 text-sm leading-relaxed text-gray-700 sm:text-base">
//                 Our clinic was founded with a single goal to deliver
//                 high-quality medical care that puts patients first—every time.
//               </p>

//               <div className="mb-8">
//                 <h3 className="text-3xl font-semibold lg:text-4xl">12+</h3>
//                 <p className="text-sm text-gray-600">
//                   Backed by years of clinical expertise across specialties.
//                 </p>
//               </div>

//               <div className="mb-8">
//                 <h3 className="text-3xl font-semibold lg:text-4xl">80%</h3>
//                 <p className="text-sm text-gray-600">
//                   Referred by Existing Patients
//                 </p>
//               </div>

//               <ul className="space-y-3 text-sm text-gray-700">
//                 <li>→ High Patient Satisfaction</li>
//                 <li>→ Personalized, Compassionate Approach</li>
//                 <li>→ Reliable Follow-Up Care</li>
//                 <li>→ Clear Communication & Transparency</li>
//               </ul>

//               <p className="mt-10 text-sm leading-relaxed text-gray-600">
//                 Our approach is always the same—personalized care delivered
//                 with empathy, compassion, integrity, and excellence.
//               </p>
//             </div>

//             <div className="w-full lg:w-[62%]">
//               <img
//                 src="/images/abouthero.jpg"
//                 alt=""
//                 className="
//                   w-full
//                   h-[300px] sm:h-[420px] lg:h-[680px]
//                   object-cover
//                   scale-[1.05]
//                 "
//               />
//             </div>
//           </div>

//           {/* ===== SLIDE 2 ===== */}
//           <div
//             className="flex flex-col-reverse items-center w-full h-auto gap-10 px-6 py-16 bg-white lg:flex-row lg:w-screen lg:h-full lg:gap-24 sm:px-12 lg:px-24 lg:py-0"
//           >
//             <div className="w-full lg:w-[38%]">
//               <h2 className="mb-6 text-2xl font-semibold sm:text-3xl lg:text-4xl">
//                 Our Core Commitments
//               </h2>

//               <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:text-base">
//                 Our commitment to integrity ensures honest communication
//                 and ethical medical practices, while our pursuit of
//                 excellence drives us to deliver the highest standards.
//               </p>

//               <p className="mb-10 text-sm leading-relaxed text-gray-700 sm:text-base">
//                 We prioritize patient-centered care, embrace innovation,
//                 and strive to make healthcare accessible and inclusive for all.
//               </p>

//               <Link to="/appointment">
//                 <button className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium bg-[#bfeaf2]">
//                   <span>→</span> MAKE AN APPOINTMENT
//                 </button>
//               </Link>
//             </div>

//             <div className="w-full lg:w-[62%]">
//               <img
//                 src="/images/about-core.jpg"
//                 alt=""
//                 className="
//                   w-full
//                   h-[300px] sm:h-[420px] lg:h-[680px]
//                   object-cover
//                   scale-[1.05]
//                 "
//               />
//             </div>
//           </div>

//         </motion.div>
//       </div>
//     </section>
//   );
// }



import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutSlider() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  // ✅ ADD THIS (1)
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

  return (
    <section
      ref={sectionRef}
      className="
        relative
        h-auto lg:h-[220vh]
        bg-[#fbf9f5]
        bg-[url('/images/about-bg.jpg')]
        bg-no-repeat
        bg-[length:85%]
        bg-center
        lg:bg-fixed
      "
    >
      {/* STICKY CONTAINER */}
      <div className="top-0 h-auto overflow-hidden lg:sticky lg:h-screen">

        {/* HORIZONTAL SLIDER */}
        <motion.div
          // ✅ CHANGE THIS (2) — ONLY x applied on desktop
          style={{ x: isDesktop ? x : 0 }}
          className="
            flex
            flex-col lg:flex-row
            w-full lg:w-[200vw]
            h-auto lg:h-full
          "
        >
          {/* ===== SLIDE 1 ===== */}
          <div
            className="flex flex-col-reverse items-center w-full h-auto gap-10 px-6 py-16 bg-white lg:flex-row lg:w-screen lg:h-full lg:gap-24 sm:px-12 lg:px-24 lg:py-0"
          >
            <div className="w-full lg:w-[38%]">
              <h2 className="mb-6 text-2xl font-semibold sm:text-3xl lg:text-4xl">
                Your Health, Our Purpose
              </h2>

              <p className="mb-10 text-sm leading-relaxed text-gray-700 sm:text-base">
                Our clinic was founded with a single goal to deliver
                high-quality medical care that puts patients first—every time.
              </p>

              <div className="mb-8">
                <h3 className="text-3xl font-semibold lg:text-4xl">12+</h3>
                <p className="text-sm text-gray-600">
                  Backed by years of clinical expertise across specialties.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-3xl font-semibold lg:text-4xl">80%</h3>
                <p className="text-sm text-gray-600">
                  Referred by Existing Patients
                </p>
              </div>

              <ul className="space-y-3 text-sm text-gray-700">
                <li>→ High Patient Satisfaction</li>
                <li>→ Personalized, Compassionate Approach</li>
                <li>→ Reliable Follow-Up Care</li>
                <li>→ Clear Communication & Transparency</li>
              </ul>

              <p className="mt-10 text-sm leading-relaxed text-gray-600">
                Our approach is always the same—personalized care delivered
                with empathy, compassion, integrity, and excellence.
              </p>
            </div>

            <div className="w-full lg:w-[62%]">
              <img
                src="/images/abouthero.jpg"
                alt=""
                className="
                  w-full
                  h-[300px] sm:h-[420px] lg:h-[680px]
                  object-cover
                  scale-[1.05]
                "
              />
            </div>
          </div>

          {/* ===== SLIDE 2 ===== */}
          <div
            className="flex flex-col-reverse items-center w-full h-auto gap-10 px-6 py-16 bg-white lg:flex-row lg:w-screen lg:h-full lg:gap-24 sm:px-12 lg:px-24 lg:py-0"
          >
            <div className="w-full lg:w-[38%]">
              <h2 className="mb-6 text-2xl font-semibold sm:text-3xl lg:text-4xl">
                Our Core Commitments
              </h2>

              <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:text-base">
                Our commitment to integrity ensures honest communication
                and ethical medical practices, while our pursuit of
                excellence drives us to deliver the highest standards.
              </p>

              <p className="mb-10 text-sm leading-relaxed text-gray-700 sm:text-base">
                We prioritize patient-centered care, embrace innovation,
                and strive to make healthcare accessible and inclusive for all.
              </p>

              <Link to="/appointment">
                <button className="inline-flex items-center gap-3 px-6 py-3 text-sm font-medium bg-[#bfeaf2]">
                  <span>→</span> MAKE AN APPOINTMENT
                </button>
              </Link>
            </div>

            <div className="w-full lg:w-[62%]">
              <img
                src="/images/about-core.jpg"
                alt=""
                className="
                  w-full
                  h-[300px] sm:h-[420px] lg:h-[680px]
                  object-cover
                  scale-[1.05]
                "
              />
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
