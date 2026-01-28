
// import React from "react";
// import { Link } from "react-router-dom";

// export default function HealthGuidanceSection() {
//   return (
//     <section className="bg-[#faf9f7] py-20">
//       <div className="px-6 mx-auto max-w-7xl">

//         {/* TOP ROW */}
//         <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">

//           {/* LEFT TEXT */}
//           <div className="max-w-2xl">
//             <h2 className="text-4xl font-semibold leading-tight text-gray-900">
//               Guiding you toward better health <br />
//               with expertise & empathy
//             </h2>

//             <p className="mt-4 text-gray-600">
//               We are a modern health and clinic center dedicated to delivering
//               exceptional medical care with compassion and integrity.
//             </p>
//           </div>

//           {/* RIGHT OPTION BUTTON */}
//           <Link to="/about" className="inline-block">
//             <button
//               type="button"
//               className="group relative flex items-center w-[220px] h-12 bg-[#cfe9ef] overflow-hidden"
//             >

//               {/* Arrow box */}
//               <span
//                 className="
//                   absolute left-0 top-0
//                   w-12 h-12
//                   flex items-center justify-center
//                   bg-white text-black
//                   transition-all duration-500 ease-in-out
//                   group-hover:left-[calc(100%-3rem)]
//                 "
//               >
//                 →
//               </span>

//               {/* Text */}
//               <span
//                 className="absolute font-medium text-center text-gray-900 transition-all duration-500 ease-in-out left-12 right-12 group-hover:left-0 group-hover:right-12"
//               >
//                 MORE ABOUT US
//               </span>

//             </button>
//           </Link>

//         </div>

//         {/* BOTTOM IMAGE ROW */}
//         <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//           <div className="h-[260px] bg-gray-300"></div>
//           <div className="h-[260px] bg-gray-300"></div>
//           <div className="h-[260px] bg-gray-300"></div>
//           <div className="h-[260px] bg-gray-300"></div>
//           <div className="h-[260px] bg-gray-300"></div>
//         </div>

//       </div>
//     </section>
//   );
// }
// import React from "react";
// import { Link } from "react-router-dom";

// /* GRID IMAGES */
// import grid1 from "../../assets/grid1.jpg";
// import grid2 from "../../assets/grid2.jpg";
// import grid3 from "../../assets/grid3.jpg";
// import grid4 from "../../assets/grid4.jpg";
// import grid5 from "../../assets/grid5.jpg";

// export default function HealthGuidanceSection() {
//   return (
//     <section className="bg-[#faf9f7] py-20">
//       <div className="px-6 mx-auto max-w-7xl">

//         {/* TOP ROW */}
//         <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">

//           {/* LEFT TEXT */}
//           <div className="max-w-2xl">
//             <h2 className="text-4xl font-semibold leading-tight text-gray-900">
//               Guiding you toward better health <br />
//               with expertise & empathy
//             </h2>

//             <p className="mt-4 text-gray-600">
//               We are a modern health and clinic center dedicated to delivering
//               exceptional medical care with compassion and integrity.
//             </p>
//           </div>

//           {/* RIGHT OPTION BUTTON */}
//           <Link to="/about" className="inline-block">
//             <button
//               type="button"
//               className="group relative flex items-center w-[220px] h-12 bg-[#cfe9ef] overflow-hidden"
//             >

//               {/* Arrow box */}
//               <span
//                 className="
//                   absolute left-0 top-0
//                   w-12 h-12
//                   flex items-center justify-center
//                   bg-white text-black
//                   transition-all duration-500 ease-in-out
//                   group-hover:left-[calc(100%-3rem)]
//                 "
//               >
//                 →
//               </span>

//               {/* Text */}
//               <span
//                 className="absolute font-medium text-center text-gray-900 transition-all duration-500 ease-in-out left-12 right-12 group-hover:left-0 group-hover:right-12"
//               >
//                 MORE ABOUT US
//               </span>

//             </button>
//           </Link>

//         </div>

//         {/* BOTTOM IMAGE GRID */}
//         {/* <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//           <img src={grid1} alt="Grid 1" className="object-cover w-full h-[260px]" />
//           <img src={grid2} alt="Grid 2" className="object-cover w-full h-[260px]" />
//           <img src={grid3} alt="Grid 3" className="object-cover w-full h-[260px]" />
//           <img src={grid4} alt="Grid 4" className="object-cover w-full h-[260px]" />
//           <img src={grid5} alt="Grid 5" className="object-cover w-full h-[260px]" />
//         </div> */}
//         {/* BOTTOM IMAGE GRID */}
// <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

//   <div className="overflow-hidden">
//     <img
//       src={grid1}
//       alt="Grid 1"
//       className="object-cover w-full h-[260px] transition-transform duration-500 ease-in-out hover:scale-105"
//     />
//   </div>

//   <div className="overflow-hidden">
//     <img
//       src={grid2}
//       alt="Grid 2"
//       className="object-cover w-full h-[260px] transition-transform duration-500 ease-in-out hover:scale-105"
//     />
//   </div>

//   <div className="overflow-hidden">
//     <img
//       src={grid3}
//       alt="Grid 3"
//       className="object-cover w-full h-[260px] transition-transform duration-500 ease-in-out hover:scale-105"
//     />
//   </div>

//   <div className="overflow-hidden">
//     <img
//       src={grid4}
//       alt="Grid 4"
//       className="object-cover w-full h-[260px] transition-transform duration-500 ease-in-out hover:scale-105"
//     />
//   </div>

//   <div className="overflow-hidden">
//     <img
//       src={grid5}
//       alt="Grid 5"
//       className="object-cover w-full h-[260px] transition-transform duration-500 ease-in-out hover:scale-105"
//     />
//   </div>

// </div>


//       </div>
//     </section>
//   );
// }
// import React from "react";
// import { Link } from "react-router-dom";

// import grid1 from "../../assets/homepage/grid1.jpg";
// import grid2 from "../../assets/homepage/grid2.jpg";
// import grid3 from "../../assets/homepage/grid3.jpg";
// import grid4 from "../../assets/homepage/grid4.jpg";
// import grid5 from "../../assets/homepage/grid5.jpg";

// export default function HealthGuidanceSection() {
//   const images = [grid1, grid2, grid3, grid4, grid5];

//   return (
//     <section className="bg-[#faf9f7] py-20">
//       <div className="px-6 mx-auto max-w-7xl">

//         {/* TOP ROW */}
//         <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">

//           {/* TEXT FROM LEFT */}
//           <div className="max-w-2xl animate-slideLeft">
//             <h2 className="text-4xl font-semibold leading-tight text-gray-900">
//               Guiding you toward better health <br />
//               with expertise & empathy
//             </h2>

//             <p className="mt-4 text-gray-600">
//               We are a modern health and clinic center dedicated to delivering
//               exceptional medical care with compassion and integrity.
//             </p>
//           </div>

//           {/* BUTTON FROM RIGHT */}
//           <Link to="/about" className="inline-block animate-slideRight">
//             <button className="group relative flex items-center w-[220px] h-12 bg-[#cfe9ef] overflow-hidden">

//               {/* Arrow */}
//               <span
//                 className="
//                   absolute left-0 top-0 w-12 h-12
//                   flex items-center justify-center
//                   bg-white text-black
//                   transition-all duration-500 ease-in-out
//                   group-hover:left-[calc(100%-3rem)]
//                 "
//               >
//                 →
//               </span>

//               {/* Text */}
//               <span
//                 className="absolute font-medium text-center text-gray-900 transition-all duration-500 ease-in-out left-12 right-12 group-hover:left-0 group-hover:right-12"
//               >
//                 MORE ABOUT US
//               </span>

//             </button>
//           </Link>
//         </div>

//         {/* IMAGE GRID (STAGGERED) */}
//         <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className="overflow-hidden animate-slideLeft"
//               style={{ animationDelay: `${index * 0.15}s` }}
//             >
//               <img
//                 src={img}
//                 alt={`Grid ${index + 1}`}
//                 className="object-cover w-full h-[260px] transition-transform duration-500 hover:scale-105"
//               />
//             </div>
//           ))}
//         </div>

//       </div>

//       {/* INLINE ANIMATIONS — SAME PAGE */}
//       <style>
//         {`
//           .animate-slideLeft {
//             animation: slideLeft 0.8s ease-out forwards;
//           }

//           .animate-slideRight {
//             animation: slideRight 0.8s ease-out forwards;
//           }

//           @keyframes slideLeft {
//             from {
//               opacity: 0;
//               transform: translateX(-40px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           @keyframes slideRight {
//             from {
//               opacity: 0;
//               transform: translateX(40px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }
//  
//       </style>
//     </section>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import grid1 from "../../assets/grid1.jpg";
import grid2 from "../../assets/grid2.jpg";
import grid3 from "../../assets/grid3.jpg";
import grid4 from "../../assets/grid4.jpg";
import grid5 from "../../assets/grid5.jpg";

export default function HealthGuidanceSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [grid1, grid2, grid3, grid4, grid5];

  return (
    <section
      ref={sectionRef}
      className="py-20 overflow-hidden bg-[#EDF2F9] "
    >
      <div className="px-6 mx-auto max-w-7xl">

        {/* TOP ROW */}
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">

          {/* TEXT */}
          <div
            className={`max-w-2xl transition-all duration-700 ease-out ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <h2 className="text-4xl font-semibold leading-tight text-gray-900">
              Guiding you toward better health <br />
              with expertise & empathy
            </h2>

            <p className="mt-4 text-gray-600">
              We are a modern health and clinic center dedicated to delivering
              exceptional medical care with compassion and integrity.
            </p>
          </div>

          {/* BUTTON */}
          <Link
            to="/about"
            className={`inline-block transition-all duration-700 ease-out ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
<button className="group relative flex items-center w-[220px] h-12 bg-[#6897e1] overflow-hidden rounded-full">
              {/* Arrow */}
              <span
                className="
                  absolute left-0 top-0 w-12 h-12
                  flex items-center justify-center
                  bg-white text-black
                  transition-all duration-500 ease-in-out
                  group-hover:left-[calc(100%-3rem)]
                "
              >
                →
              </span>

              {/* Text */}
              <span
                className="absolute font-medium text-center text-gray-900 transition-all duration-500 ease-in-out left-12 right-12 group-hover:left-0 group-hover:right-12"
              >
                MORE ABOUT US
              </span>

            </button>
          </Link>
        </div>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {images.map((img, index) => (
            <div
              key={index}
              className={`overflow-hidden transition-all duration-700 ease-out`}
              style={{
                transitionDelay: `${index * 120}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-40px)",
              }}
            >
              <img
                src={img}
                alt={`Grid ${index + 1}`}
                className="object-cover w-full h-[260px] transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
