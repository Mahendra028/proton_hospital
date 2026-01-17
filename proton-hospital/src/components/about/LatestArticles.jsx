
// import React from "react";

// export default function StatisticalHighlights() {
//   return (
//     <>
//       {/* INTERNAL CSS */}
//       <style>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .animate-marquee {
//           animation: marquee 20s linear infinite;
//         }

//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <section className="relative w-full overflow-hidden bg-white">
//         {/* PAGE CONTAINER */}
//         <div className="relative w-[100vw] min-h-screen md:min-h-[700px] py-12 md:py-24 bg-white flex flex-col justify-center">

//           {/* LEFT CONTENT */}
//           <div className="relative z-10 max-w-xl px-6 mx-auto bg-white md:px-10 lg:px-0 lg:ml-24">
//             <p className="mb-1 text-lg font-normal text-gray-700 md:text-xl">
//               daily
//             </p>

//             <h2 className="mb-4 text-3xl font-extrabold text-black uppercase md:text-4xl">
//               Health
//             </h2>

//             <ul className="pl-5 space-y-4 text-sm leading-relaxed text-gray-600 list-disc">
//               <li>
//                 Good health is built on small, mindful habits practiced every day.
//                 <br />
//                 Paying attention to your body through regular self-checks—such as
//                 <br />
//                 monitoring energy levels, sleep patterns, and any unusual
//                 <br />
//                 changes—helps in identifying potential health concerns at an early stage.
//               </li>

//               <li>
//                 A balanced diet rich in fresh fruits, vegetables, whole grains, and
//                 <br />
//                 adequate hydration provides the foundation for long-term wellness.
//               </li>

//               <li>
//                 Staying physically active through simple activities like walking,
//                 <br />
//                 stretching, or yoga improves strength, circulation, and flexibility.
//               </li>

//               <li>
//                 Equally important is mental well-being—maintained through quality
//                 <br />
//                 sleep, stress control, and a positive outlook.
//               </li>

//               <li>
//                 By following a disciplined routine, maintaining personal hygiene,
//                 <br />
//                 and avoiding harmful habits, you can support a healthier, more
//                 <br />
//                 energetic life every day.
//               </li>
//             </ul>
//           </div>

//           {/* CONTINUOUS MOVING IMAGE SLIDER */}
//           <div className="relative z-20 mt-10 overflow-hidden">
//             <div className="flex gap-6 w-max animate-marquee">

//               {/* IMAGE SET 1 */}
//               <img src="/images/why-1.jpg" className="w-[220px] h-[140px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-2.jpg" className="w-[220px] h-[140px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-3.jpg" className="w-[220px] h-[140px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-4.jpg" className="w-[220px] h-[140px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-5.jpg" className="w-[220px] h-[140px] object-cover rounded-md shadow-md" />

//               {/* IMAGE SET 2 (DUPLICATE FOR SMOOTH LOOP) */}
//               <img src="/images/why-1.jpg" className="w-[220px] h-[140px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-2.jpg" className="w-[220px] h-[140px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-3.jpg" className="w-[220px] h-[140px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-4.jpg" className="w-[220px] h-[140px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-5.jpg" className="w-[220px] h-[140px] object-cover rounded-md shadow-md" />

//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

// import React from "react";

// export default function StatisticalHighlights() {
//   return (
//     <>
//       {/* INTERNAL CSS – SAME FILE */}
//       <style>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .animate-marquee {
//           animation: marquee 25s linear infinite;
//         }

//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <section className="relative w-full overflow-hidden bg-white">
//         {/* PAGE CONTAINER – FULL MOBILE HEIGHT */}
//         <div className="relative w-screen min-h-screen md:min-h-[700px] py-12 md:py-24 bg-white flex flex-col justify-center">

//           {/* TEXT CONTENT */}
//           <div className="relative z-10 max-w-xl px-6 mx-auto bg-white md:px-10 lg:px-0 lg:ml-24">
//             <p className="mb-1 text-lg font-normal text-gray-700 md:text-xl">
//               daily
//             </p>

//             <h2 className="mb-4 text-3xl font-extrabold text-black uppercase md:text-4xl">
//               Health
//             </h2>

//             <ul className="pl-5 space-y-4 text-sm leading-relaxed text-gray-600 list-disc">
//               <li>
//                 Good health is built on small, mindful habits practiced every day.
//                 <br />
//                 Paying attention to your body through regular self-checks—such as
//                 <br />
//                 monitoring energy levels, sleep patterns, and any unusual
//                 <br />
//                 changes—helps in identifying potential health concerns at an early stage.
//               </li>

//               <li>
//                 A balanced diet rich in fresh fruits, vegetables, whole grains, and
//                 <br />
//                 adequate hydration provides the foundation for long-term wellness.
//               </li>

//               <li>
//                 Staying physically active through simple activities like walking,
//                 <br />
//                 stretching, or yoga improves strength, circulation, and flexibility.
//               </li>

//               <li>
//                 Equally important is mental well-being—maintained through quality
//                 <br />
//                 sleep, stress control, and a positive outlook.
//               </li>

//               <li>
//                 By following a disciplined routine, maintaining personal hygiene,
//                 <br />
//                 and avoiding harmful habits, you can support a healthier, more
//                 <br />
//                 energetic life every day.
//               </li>
//             </ul>
//           </div>

//           {/* FULL WIDTH CONTINUOUS SLIDER – NO GAP */}
//           <div className="relative z-20 w-screen mt-10 overflow-hidden">
//             <div className="flex gap-4 w-max animate-marquee">

//               {/* IMAGE SET 1 */}
//               <img src="/images/why-1.jpg" className="w-[240px] h-[150px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-2.jpg" className="w-[240px] h-[150px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-3.jpg" className="w-[240px] h-[150px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-4.jpg" className="w-[240px] h-[150px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-5.jpg" className="w-[240px] h-[150px] object-cover rounded-md shadow-md" />

//               {/* IMAGE SET 2 – DUPLICATE FOR SMOOTH LOOP */}
//               <img src="/images/why-1.jpg" className="w-[240px] h-[150px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-2.jpg" className="w-[240px] h-[150px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-3.jpg" className="w-[240px] h-[150px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-4.jpg" className="w-[240px] h-[150px] object-cover rounded-md shadow-md" />
//               <img src="/images/why-5.jpg" className="w-[240px] h-[150px] object-cover rounded-md shadow-md" />

//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }
import React from "react"; 
export default function StatisticalHighlights() {
   return ( 
   <> 
   <section className="relative w-full overflow-hidden bg-white"> 
    {/* PAGE CONTAINER */}
     <div className="relative w-[100vw] min-h-[700px] py-24"> 
      {/* RIGHT BLUE PANEL */} 
      <div className="absolute top-0 right-0 h-full w-[36%] bg-[#a6e1ee]" />
       {/* LEFT CONTENT */} 
       <div className="relative z-10 max-w-xl ml-24">
         {/* Small handwritten-style heading */} 
         <p className="mb-1 text-xl font-normal text-gray-700 "> daily </p>
          {/* Bold main title */} 
          <h2 className="mb-4 text-4xl font-extrabold text-black uppercase"> Health </h2> 
          {/* Bullet content */} 
          <ul className="pl-5 space-y-4 text-sm leading-relaxed text-gray-600 list-disc">
             <li> Good health is built on small, mindful habits practiced every day. 
              <br/>Paying attention to your body through regular self-checks—such as 
              <br/> monitoring energy levels, sleep patterns, and any unusual <br/> 
              changes— helps in identifying potential health concerns at an early stage. </li>
               <li> A balanced diet rich in fresh fruits, vegetables, whole grains, and adequate
                 <br/>hydration provides the foundation for long-term wellness. </li>
                  <li> Staying physically active through simple activities like walking, stretching,<br/>
                   or yoga improves strength, circulation, and flexibility. </li> 
                   <li> Equally important is mental well-being—maintained through quality sleep,<br/>
                    stress control, and a positive outlook. </li> 
                    <li> By following a disciplined routine, maintaining personal hygiene, and avoiding 
                      <br/>harmful habits, you can support a healthier, more energetic life every day. </li> 
                      </ul> 
                      </div> 
                      
                      {/* CARD STACK */}
                       <div className="absolute top-[120px] right-[20%] z-20 space-y-6"> 
                        {/* TOP ROW – IMAGE CARD + IMAGE CARD */}
                         <div className="flex overflow-hidden rounded-md -ml-34">
                           <img src="/images/why-1.jpg" alt="" className="w-[180px] h-[120px] object-cover rounded-md shadow-md" /> 
                           
                           <img src="/images/why-2.jpg" alt="" className="w-[180px] h-[120px] object-cover rounded-md shadow-md ml-4" />
                            </div>
                            
                             {/* MIDDLE ROW – TEXT CARD | IMAGE CARD | TEXT CARD */}
                              <div className="flex -ml-34"> 
                                <div className="w-[180px] h-[120px] flex items-center justify-center font-semibold bg-[#4fb3b8] text-white rounded-md shadow-md "> 
                                  Quality Service </div>
                                   <img src="/images/why-3.jpg" alt="" className="w-[180px] h-[120px] mx-4 rounded-md shadow-md bject-cover v" /> 
                                   <div className="w-[180px] h-[120px] bg-white text-black rounded-md shadow-md flex items-center justify-center font-semibold"> 24/7 Care
                                   </div>
                                    </div>
                                    
                                     {/* BOTTOM ROW – IMAGE CARD + IMAGE CARD */} 
                                    <div className="flex ml-[80px] translate-x-44"> 
                                      <img src="/images/why-4.jpg" alt="" className="w-[180px] h-[120px] object-cover rounded-md shadow-md" /> 
                                      
                                      <img src="/images/why-5.jpg" alt="" className="w-[180px] h-[120px] object-cover rounded-md shadow-md ml-4" /> 
                                      </div>
                                       </div>
                                        </div>
                                         </section>
                                         <style jsx>{`
  /* ========================= */
  /* TABLET & MOBILE ONLY */
  /* ========================= */

  @media (max-width: 1024px) {
    section.relative.w-full {
      overflow-x: hidden;
    }

    section .relative.w-[100vw] {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }

  
    /* Center text */
    section .max-w-xl.ml-24 {
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      text-align: center;
    }

    section ul.list-disc {
      padding-left: 1rem;
      text-align: left;
    }

    /* Cards reposition */
    section .absolute.top-[120px].right-[20%] {
      position: static;
      margin-top: 2rem;
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    /* Stack cards */
    section .flex.-ml-34 {
      flex-direction: column;
      align-items: center;
      margin-left: 0;
    }

    section img.w-[180px].h-[120px] {
      width: 90%;
      height: auto;
      margin-left: 0 !important;
      margin-bottom: 1rem;
    }

    section h2 {
      font-size: 2rem;
    }

    section p {
      font-size: 1.125rem;
    }
  }

/* ===================================== */
/* MOBILE & TABLET – ONE FLEX MARQUEE */
/* ===================================== */

@media (max-width: 1024px) {

  /* Outer container */
  .absolute.top-\\[120px\\].right-\\[20\\%\\] {
    position: relative;
    top: auto;
    right: auto;
    width: 100vw;
    overflow: hidden;
    margin-top: 2rem;
  }

  /* TURN EVERYTHING INTO ONE FLEX */
  .absolute.top-\\[120px\\].right-\\[20\\%\\] {
    display: flex;
    gap: 1rem;
    width: max-content;
    animation: marquee 20s linear infinite;
  }

  /* REMOVE ALL ROW BEHAVIOR */
  .absolute.top-\\[120px\\].right-\\[20\\%\\] > div {
    display: contents;
  }

  /* REMOVE DESKTOP OFFSETS */
  .-ml-34,
  .ml-\\[80px\\],
  .translate-x-44 {
    margin-left: 0 !important;
    transform: none !important;
  }

  /* HIDE TEXT CARDS */
  .bg-\\[#4fb3b8\\],
  .bg-white.text-black {
    display: none;
  }

  /* IMAGE SIZE – SAME AS YOUR MARQUEE */
  img.w-\\[180px\\].h-\\[120px\\] {
    width: 240px;
    height: 150px;
    flex-shrink: 0;
  }
}

/* CONTINUOUS SLIDE */
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
  
`}</style>

                                          </>
                                           );
                                           }