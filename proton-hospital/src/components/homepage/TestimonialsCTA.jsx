import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TestimonialsCTA() {
  const testimonials = [
    {
      name: "Anita Deshmukh",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      text:
        "The doctors and nursing staff were extremely caring. The ICU facilities are world-class and gave us great confidence.",
    },
    {
      name: "Rahul Patil",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text:
        "Excellent critical care services. The doctors explained every step clearly and treated my father like family.",
    },
    {
      name: "Sneha Kulkarni",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text:
        "Clean hospital, advanced equipment, and compassionate staff. We felt safe and well-guided throughout the treatment.",
    },
    {
      name: "Vijay Sharma",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      text:
        "Very professional ICU team. Quick response during emergencies and constant monitoring gave us peace of mind.",
    },
    {
      name: "Pooja Chavan",
      image: "https://randomuser.me/api/portraits/women/51.jpg",
      text:
        "Doctors are highly knowledgeable and approachable. The care provided exceeded our expectations.",
    },
    {
      name: "Amit Joshi",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      text:
        "One of the best critical care centers. Transparent communication and genuine concern for patients.",
    },
  ];

  /* ================= BREAKPOINT STATE (FIX) ================= */
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen(); // run on load
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* ================= SLIDER LOGIC (UNCHANGED) ================= */
  const CARD_WIDTH = 360 + 40;
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) =>
      prev + 2 >= testimonials.length ? 0 : prev + 2
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 2
    );
  };

  /* ================= RENDER ================= */
  return (
    <>
      {/* ================= SECTION 1 — DESKTOP ================= */}
      {isDesktop && (
        <section className="relative w-full h-[520px] overflow-hidden">
       {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/testomonial-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* CAPSULE */}
      <div className="absolute left-0 top-0 h-full w-[70%] bg-blue-400 rounded-r-[260px]" />
      <div className="absolute left-[-140px] top-[-120px] h-[160%] w-[55%] bg-blue-600 rotate-[-12deg]" />
      
       {/* ================= STRONG VISIBLE RING ================= */}
      <div
        className="absolute left-[36%] top-[20%] w-[200px] h-[200px] rounded-full z-[2]
                   border-[12px] border-white opacity-90 shadow-[0_0_0_6px_rgba(255,255,255,0.25)]"
      />

      {/* ================= RANDOM DESIGN ELEMENT (GRADIENT ORB) ================= */}
      <div
        className="absolute left-[18%] bottom-[18%] w-[140px] h-[140px] rounded-full
                   bg-gradient-to-br from-white/30 to-white/5 blur-xl z-[1]"
      />


{/* ===== LEFT SIDE CORNER STRONG RING ===== */}
<div
  className="absolute left-[2%] top-[10%]
             w-[130px] h-[130px]
             rounded-full opacity-90
             border-[12px] border-white
             shadow-[0_0_0_6px_rgba(255,255,255,0.25)]
             z-[2]"
/>


<div className="absolute left-[6%] top-[14%] z-[2]">
  <div className="w-3 h-3 rotate-45 border-2 border-white" />
</div>

<div className="absolute left-[22%] top-[22%] z-[2]">
  <div className="w-2 h-2 rotate-45 border-2 border-white" />
</div>


<div className="absolute left-[18%] top-[38%] z-[2]">
  <div className="w-4 h-4 rotate-45 border-2 border-white" />
</div>

<div className="absolute left-[30%] top-[52%] z-[2]">
  <div className="w-2.5 h-2.5 rotate-45 border-2 border-white" />
</div>

<div className="absolute left-[10%] bottom-[18%] z-[2]">
  <div className="w-3 h-3 rotate-45 border-2 border-white" />
</div>

<div className="absolute left-[26%] bottom-[30%] z-[2]">
  <div className="w-2 h-2 rotate-45 border-2 border-white" />
</div>

<div className="absolute left-[34%] top-[30%] z-[2]">
  <div className="w-1.5 h-1.5 rotate-45 border-2 border-white" />
</div>

<div className="absolute right-[18%] top-[14%] z-[2]">
  <div className="w-3 h-3 rotate-45 border-2 border-white" />
</div>

<div className="absolute right-[26%] top-[22%] z-[2]">
  <div className="w-2 h-2 rotate-45 border-2 border-white" />
</div>

<div className="absolute right-[20%] top-[34%] z-[2]">
  <div className="w-4 h-4 rotate-45 border-2 border-white" />
</div>

<div className="absolute right-[30%] top-[44%] z-[2]">
  <div className="w-2.5 h-2.5 rotate-45 border-2 border-white" />
</div>

<div className="absolute right-[16%] bottom-[26%] z-[2]">
  <div className="w-3 h-3 rotate-45 border-2 border-white" />
</div>

<div className="absolute right-[28%] bottom-[18%] z-[2]">
  <div className="w-2 h-2 rotate-45 border-2 border-white" />
</div>

<div className="absolute right-[22%] bottom-[34%] z-[2]">
  <div className="w-1.5 h-1.5 rotate-45 border-2 border-white" />
</div>

  <div className="absolute right-[14%] top-[16%]">
    <div className="w-3 h-3 rotate-45 border-2 border-white" />
  </div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full px-8 mx-auto max-w-7xl">
        {/* LEFT TEXT */}
        <div className="w-1/3 text-white">
          <p className="text-xs tracking-widest uppercase opacity-80">
            Our Clients
          </p>
          <h2 className="mt-2 text-3xl font-bold">Testimonials</h2>
          <p className="mt-10 text-sm cursor-pointer opacity-80">
            View all testimonials →
          </p>
        </div>

        {/* SLIDER */}
        <div className="w-2/3 overflow-hidden">
          <div
            className="flex gap-10 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
          >
            {testimonials.map((item, i) => (
             <div
  key={i}
  className="relative bg-white shadow-2xl border border-[#dceaf7] inset-2 rounded-xl p-8 w-[360px] shrink-0 overflow-visible"
>

                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute border-4 border-[#dceaf7] rounded-full w-14 h-14 -top-2 left-8"

                />
                <p className="mt-8 text-sm leading-relaxed text-gray-600">
                  {item.text}
                </p>
                <h4 className="mt-6 font-semibold text-gray-900">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">ICU Patient</p>
              </div>
            ))}
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-center gap-6 mt-12 md:mt-16">
          <button
            onClick={prev}
            className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
        </section>
      )}

      {/* ================= SECTION 2 — MOBILE / TABLET ================= */}
      {!isDesktop && (
        <section className="relative w-full py-16 overflow-hidden bg-blue-600">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url(/images/testomonial-bg.jpg)" }}
          />
          <div className="absolute inset-0 bg-blue-600/80" />

      {/* ✨ SPARKLES (MOBILE + TABLET ONLY) */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <span className="sparkle s1 w-1.5 h-1.5 top-[12%] left-[18%]" />
          <span className="sparkle s2 w-1 h-1 top-[26%] left-[42%]" />
          <span className="sparkle s3 w-2 h-2 top-[18%] left-[64%]" />

          <span className="sparkle s1 w-1.5 h-1.5 top-[48%] left-[22%]" />
          <span className="sparkle s2 w-1 h-1 top-[60%] left-[48%]" />
          <span className="sparkle s3 w-2 h-2 top-[66%] left-[70%]" />

          <span className="sparkle s1 w-1.5 h-1.5 top-[78%] left-[30%]" />
          <span className="sparkle s2 w-1 h-1 top-[82%] left-[55%]" />
        </div> 
          <div className="relative z-10 max-w-md px-5 mx-auto md:max-w-2xl">
            <div className="mb-10 text-center text-white">
              <p className="text-xs tracking-widest uppercase opacity-80">
                Our Clients
              </p>
              <h2 className="mt-2 text-2xl font-bold">
                Testimonials
              </h2>
            </div>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${index * 100}%)`,
                }}
              >
                {testimonials.map((item, i) => (
                  <div key={i} className="w-full px-2 shrink-0">
                    <div className="p-6 bg-white shadow-xl rounded-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="mb-4 border-4 border-blue-100 rounded-full w-14 h-14"
                      />
                      <p className="text-sm text-gray-600">
                        {item.text}
                      </p>
                      <h4 className="mt-4 font-semibold text-gray-900">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        ICU Patient
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={next}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
             {/* ===== INTERNAL CSS (SPARKLES ONLY FOR MOBILE + TABLET) ===== */}
      <style>{`
        @keyframes sparkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.3; transform: scale(0.9); }
        }

        .sparkle {
          position: absolute;
          background: rgba(255,255,255,0.9);
          border-radius: 9999px;
          animation: sparkle 3s ease-in-out infinite;
          display: none;
        }

        @media (max-width: 1024px) {
          .sparkle {
            display: block;
          }
        }

        .sparkle.s1 { animation-delay: 0s; }
        .sparkle.s2 { animation-delay: 1s; }
        .sparkle.s3 { animation-delay: 2s; }
      `}</style>

        </section>
      )}
    </>
  );
}


// ..........................................................................................................

// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export default function TestimonialsCTA() {
//   const testimonials = [
//     {
//       name: "Anita Deshmukh",
//       image: "https://randomuser.me/api/portraits/women/45.jpg",
//       text: "The doctors and nursing staff were extremely caring. The ICU facilities are world-class and gave us great confidence.",
//     },
//     {
//       name: "Rahul Patil",
//       image: "https://randomuser.me/api/portraits/men/32.jpg",
//       text: "Excellent critical care services. The doctors explained every step clearly and treated my father like family.",
//     },
//     {
//       name: "Sneha Kulkarni",
//       image: "https://randomuser.me/api/portraits/women/68.jpg",
//       text: "Clean hospital, advanced equipment, and compassionate staff. We felt safe and well-guided throughout the treatment.",
//     },
//     {
//       name: "Vijay Sharma",
//       image: "https://randomuser.me/api/portraits/men/41.jpg",
//       text: "Very professional ICU team. Quick response during emergencies and constant monitoring gave us peace of mind.",
//     },
//     {
//       name: "Pooja Chavan",
//       image: "https://randomuser.me/api/portraits/women/51.jpg",
//       text: "Doctors are highly knowledgeable and approachable. The care provided exceeded our expectations.",
//     },
//     {
//       name: "Amit Joshi",
//       image: "https://randomuser.me/api/portraits/men/55.jpg",
//       text: "One of the best critical care centers. Transparent communication and genuine concern for patients.",
//     },
//   ];

//   const CARD_WIDTH = 360 + 40; // card width + gap
//   const [index, setIndex] = useState(0);

//   const next = () => {
//     setIndex((prev) =>
//       prev + 2 >= testimonials.length ? 0 : prev + 2
//     );
//   };

//   const prev = () => {
//     setIndex((prev) =>
//       prev === 0 ? testimonials.length - 2 : prev - 2
//     );
//   };

//   return (
//     <>
//     <section className="relative w-full h-[520px] mb-22 mt-22  overflow-hidden">
//       {/* BACKGROUND */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: "url(/images/testomonial-bg.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* CAPSULE */}
//       <div className="absolute left-0 top-0 h-full w-[70%] bg-blue-400 rounded-r-[260px]" />
//       <div className="absolute left-[-140px] top-[-120px] h-[160%] w-[55%] bg-blue-600 rotate-[-12deg]" />
      
//        {/* ================= STRONG VISIBLE RING ================= */}
//       <div
//         className="absolute left-[36%] top-[20%] w-[200px] h-[200px] rounded-full z-[2]
//                    border-[12px] border-white opacity-90 shadow-[0_0_0_6px_rgba(255,255,255,0.25)]"
//       />

//       {/* ================= RANDOM DESIGN ELEMENT (GRADIENT ORB) ================= */}
//       <div
//         className="absolute left-[18%] bottom-[18%] w-[140px] h-[140px] rounded-full
//                    bg-gradient-to-br from-white/30 to-white/5 blur-xl z-[1]"
//       />


// {/* ===== LEFT SIDE CORNER STRONG RING ===== */}
// <div
//   className="absolute left-[2%] top-[10%]
//              w-[130px] h-[130px]
//              rounded-full opacity-90
//              border-[12px] border-white
//              shadow-[0_0_0_6px_rgba(255,255,255,0.25)]
//              z-[2]"
// />


// <div className="absolute left-[6%] top-[14%] z-[2]">
//   <div className="w-3 h-3 rotate-45 border-2 border-white" />
// </div>

// <div className="absolute left-[22%] top-[22%] z-[2]">
//   <div className="w-2 h-2 rotate-45 border-2 border-white" />
// </div>


// <div className="absolute left-[18%] top-[38%] z-[2]">
//   <div className="w-4 h-4 rotate-45 border-2 border-white" />
// </div>

// <div className="absolute left-[30%] top-[52%] z-[2]">
//   <div className="w-2.5 h-2.5 rotate-45 border-2 border-white" />
// </div>

// <div className="absolute left-[10%] bottom-[18%] z-[2]">
//   <div className="w-3 h-3 rotate-45 border-2 border-white" />
// </div>

// <div className="absolute left-[26%] bottom-[30%] z-[2]">
//   <div className="w-2 h-2 rotate-45 border-2 border-white" />
// </div>

// <div className="absolute left-[34%] top-[30%] z-[2]">
//   <div className="w-1.5 h-1.5 rotate-45 border-2 border-white" />
// </div>

// <div className="absolute right-[18%] top-[14%] z-[2]">
//   <div className="w-3 h-3 rotate-45 border-2 border-white" />
// </div>

// <div className="absolute right-[26%] top-[22%] z-[2]">
//   <div className="w-2 h-2 rotate-45 border-2 border-white" />
// </div>

// <div className="absolute right-[20%] top-[34%] z-[2]">
//   <div className="w-4 h-4 rotate-45 border-2 border-white" />
// </div>

// <div className="absolute right-[30%] top-[44%] z-[2]">
//   <div className="w-2.5 h-2.5 rotate-45 border-2 border-white" />
// </div>

// <div className="absolute right-[16%] bottom-[26%] z-[2]">
//   <div className="w-3 h-3 rotate-45 border-2 border-white" />
// </div>

// <div className="absolute right-[28%] bottom-[18%] z-[2]">
//   <div className="w-2 h-2 rotate-45 border-2 border-white" />
// </div>

// <div className="absolute right-[22%] bottom-[34%] z-[2]">
//   <div className="w-1.5 h-1.5 rotate-45 border-2 border-white" />
// </div>

//   <div className="absolute right-[14%] top-[16%]">
//     <div className="w-3 h-3 rotate-45 border-2 border-white" />
//   </div>

//       {/* CONTENT */}
//       <div className="relative z-10 flex items-center h-full px-8 mx-auto max-w-7xl">
//         {/* LEFT TEXT */}
//         <div className="w-1/3 text-white">
//           <p className="text-xs tracking-widest uppercase opacity-80">
//             Our Clients
//           </p>
//           <h2 className="mt-2 text-3xl font-bold">Testimonials</h2>
//           <p className="mt-10 text-sm cursor-pointer opacity-80">
//             View all testimonials →
//           </p>
//         </div>

//         {/* SLIDER */}
//         <div className="w-2/3 overflow-hidden">
//           <div
//             className="flex gap-10 transition-transform duration-500 ease-in-out"
//             style={{ transform: `translateX(-${index * CARD_WIDTH}px)` }}
//           >
//             {testimonials.map((item, i) => (
//              <div
//   key={i}
//   className="relative bg-white shadow-2xl border border-[#dceaf7] inset-2 rounded-xl p-8 w-[360px] shrink-0 overflow-visible"
// >

//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="absolute border-4 border-[#dceaf7] rounded-full w-14 h-14 -top-2 left-8"

//                 />
//                 <p className="mt-8 text-sm leading-relaxed text-gray-600">
//                   {item.text}
//                 </p>
//                 <h4 className="mt-6 font-semibold text-gray-900">
//                   {item.name}
//                 </h4>
//                 <p className="text-xs text-gray-500">ICU Patient</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* NAVIGATION */}
//         <div className="flex justify-center gap-6 mt-12 md:mt-16">
//           <button
//             onClick={prev}
//             className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"
//           >
//             <FaChevronLeft />
//           </button>
//           <button
//             onClick={next}
//             className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>
//     </section>
    
//       {/* 🔒 MOBILE + TABLET ONLY */}
//       <section className="relative w-full py-16 overflow-hidden bg-blue-600 mobile-only">
//         {/* BACKGROUND */}
//         <div
//           className="absolute inset-0 bg-center bg-cover"
//           style={{ backgroundImage: "url(/images/testomonial-bg.jpg)" }}
//         />
//         <div className="absolute inset-0 bg-blue-600/80" />

//         {/* ✨ SPARKLES */}
//         <div className="absolute inset-0 z-[1] pointer-events-none">
//           <span className="sparkle s1 w-1.5 h-1.5 top-[18%] left-[22%]" />
//           <span className="sparkle s2 w-1 h-1 top-[40%] left-[50%]" />
//           <span className="sparkle s3 w-2 h-2 top-[65%] left-[72%]" />
//         </div>

//         <div className="relative z-10 max-w-md px-5 mx-auto md:max-w-2xl">
//           {/* HEADER */}
//           <div className="mb-10 text-center">
//             <p className="text-xs tracking-widest uppercase text-white/80">
//               Our Clients
//             </p>
//             <h2 className="mt-2 text-2xl font-bold text-white">
//               Testimonials
//             </h2>
//           </div>

//           {/* SLIDER */}
//           <div className="overflow-hidden">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${index * 100}%)` }}
//             >
//               {testimonials.map((item, i) => (
//                 <div key={i} className="w-full px-2 shrink-0">
//                   <div className="p-6 bg-white shadow-xl rounded-xl">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="mb-4 border-4 border-blue-100 rounded-full w-14 h-14"
//                     />
//                     <p className="text-sm leading-relaxed text-gray-600">
//                       {item.text}
//                     </p>
//                     <h4 className="mt-4 font-semibold text-gray-900">
//                       {item.name}
//                     </h4>
//                     <p className="text-xs text-gray-500">
//                       ICU Patient
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* NAVIGATION */}
//           <div className="flex justify-center gap-6 mt-8">
//             <button
//               onClick={prev}
//               className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"
//             >
//               <FaChevronLeft />
//             </button>
//             <button
//               onClick={next}
//               className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>
//       </section>
//             {/* ===== SPARKLES (MOBILE + TABLET ONLY) ===== */}
//       <style>{`
//         @keyframes sparkle {
//           0% { opacity: 0.2; transform: scale(0.8); }
//           50% { opacity: 1; transform: scale(1.2); }
//           100% { opacity: 0.3; transform: scale(0.9); }
//         }

//         .sparkle {
//           position: absolute;
//           background: rgba(255,255,255,0.9);
//           border-radius: 9999px;
//           animation: sparkle 3s ease-in-out infinite;
//         }

//         @media (min-width: 1024px) {
//           .mobile-only {
//             display: none;
//           }
//         }

//         .sparkle.s1 { animation-delay: 0s; }
//         .sparkle.s2 { animation-delay: 1s; }
//         .sparkle.s3 { animation-delay: 2s; }
//       `}</style>

//     </>
//   );
// }
// --------------------------------------------------------------------------------------------------------------

// .........................................................................................................................

// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export default function TestimonialsCTA() {
//   const testimonials = [
//     {
//       name: "Anita Deshmukh",
//       image: "https://randomuser.me/api/portraits/women/45.jpg",
//       text: "The doctors and nursing staff were extremely caring. The ICU facilities are world-class and gave us great confidence.",
//     },
//     {
//       name: "Rahul Patil",
//       image: "https://randomuser.me/api/portraits/men/32.jpg",
//       text: "Excellent critical care services. The doctors explained every step clearly and treated my father like family.",
//     },
//     {
//       name: "Sneha Kulkarni",
//       image: "https://randomuser.me/api/portraits/women/68.jpg",
//       text: "Clean hospital, advanced equipment, and compassionate staff. We felt safe and well-guided throughout the treatment.",
//     },
//     {
//       name: "Vijay Sharma",
//       image: "https://randomuser.me/api/portraits/men/41.jpg",
//       text: "Very professional ICU team. Quick response during emergencies and constant monitoring gave us peace of mind.",
//     },
//     {
//       name: "Pooja Chavan",
//       image: "https://randomuser.me/api/portraits/women/51.jpg",
//       text: "Doctors are highly knowledgeable and approachable. The care provided exceeded our expectations.",
//     },
//     {
//       name: "Amit Joshi",
//       image: "https://randomuser.me/api/portraits/men/55.jpg",
//       text: "One of the best critical care centers. Transparent communication and genuine concern for patients.",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   const cardsPerView =
//     window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 2;

//   const CARD_WIDTH = window.innerWidth < 640 ? 280 : 360;

//   const next = () => {
//     setIndex((prev) =>
//       prev + cardsPerView >= testimonials.length ? 0 : prev + cardsPerView
//     );
//   };

//   const prev = () => {
//     setIndex((prev) =>
//       prev === 0 ? testimonials.length - cardsPerView : prev - cardsPerView
//     );
//   };

//   return (
//     <>
      // {/* ===== INTERNAL CSS (SPARKLES ONLY FOR MOBILE + TABLET) ===== */}
      // <style>{`
      //   @keyframes sparkle {
      //     0% { opacity: 0.2; transform: scale(0.8); }
      //     50% { opacity: 1; transform: scale(1.2); }
      //     100% { opacity: 0.3; transform: scale(0.9); }
      //   }

      //   .sparkle {
      //     position: absolute;
      //     background: rgba(255,255,255,0.9);
      //     border-radius: 9999px;
      //     animation: sparkle 3s ease-in-out infinite;
      //     display: none;
      //   }

      //   @media (max-width: 1024px) {
      //     .sparkle {
      //       display: block;
      //     }
      //   }

      //   .sparkle.s1 { animation-delay: 0s; }
      //   .sparkle.s2 { animation-delay: 1s; }
      //   .sparkle.s3 { animation-delay: 2s; }
      // `}</style>

//       <section className="relative w-full py-20 overflow-hidden bg-blue-600">
//         {/* BACKGROUND IMAGE */}
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: "url(/images/testomonial-bg.jpg)",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         />

//         {/* DARK OVERLAY */}
//         <div className="absolute inset-0 bg-blue-600/80" />

        // {/* ✨ SPARKLES (MOBILE + TABLET ONLY) */}
        // <div className="absolute inset-0 z-[1] pointer-events-none">
        //   <span className="sparkle s1 w-1.5 h-1.5 top-[12%] left-[18%]" />
        //   <span className="sparkle s2 w-1 h-1 top-[26%] left-[42%]" />
        //   <span className="sparkle s3 w-2 h-2 top-[18%] left-[64%]" />

        //   <span className="sparkle s1 w-1.5 h-1.5 top-[48%] left-[22%]" />
        //   <span className="sparkle s2 w-1 h-1 top-[60%] left-[48%]" />
        //   <span className="sparkle s3 w-2 h-2 top-[66%] left-[70%]" />

        //   <span className="sparkle s1 w-1.5 h-1.5 top-[78%] left-[30%]" />
        //   <span className="sparkle s2 w-1 h-1 top-[82%] left-[55%]" />
        // </div>

//         <div className="relative z-10 px-6 mx-auto max-w-7xl">
//           {/* HEADER */}
//           <div className="mb-12 text-center lg:text-left lg:w-1/3">
//             <p className="text-xs tracking-widest uppercase text-white/80">
//               Our Clients
//             </p>
//             <h2 className="mt-2 text-3xl font-bold text-white">
//               Testimonials
//             </h2>
//             <p className="mt-4 text-sm cursor-pointer text-white/80">
//               View all testimonials →
//             </p>
//           </div>

//           {/* SLIDER */}
//           <div className="relative overflow-hidden">
//             <div
//               className="flex gap-6 transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${index * (CARD_WIDTH + 24)}px)` }}
//             >
//               {testimonials.map((item, i) => (
//                 <div
//                   key={i}
//                   className="p-6 bg-white shadow-xl rounded-xl shrink-0"
//                   style={{ width: CARD_WIDTH }}
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="mb-4 border-4 border-blue-100 rounded-full w-14 h-14"
//                   />
//                   <p className="text-sm leading-relaxed text-gray-600">
//                     {item.text}
//                   </p>
//                   <h4 className="mt-4 font-semibold text-gray-900">
//                     {item.name}
//                   </h4>
//                   <p className="text-xs text-gray-500">ICU Patient</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* NAVIGATION */}
//           <div className="flex justify-center gap-6 mt-10">
//             <button
//               onClick={prev}
//               className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"
//             >
//               <FaChevronLeft />
//             </button>
//             <button
//               onClick={next}
//               className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
