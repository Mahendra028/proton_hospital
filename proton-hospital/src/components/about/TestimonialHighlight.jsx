
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//     {
//     id: 1,
//     name: "Kaili Jenner",
//     location: "Florida, US",
//     message:
//       "We visited Medenic for our child’s checkup and were impressed with the doctor’s patience & gentle approach. The facility is clean, and the entire process—from booking to consultation—was smooth and stress-free.",
//     avatar: "/images/test-3.jpg",
//     image: "/images/test-3.jpg",
//   },
//   {
//     id: 2,
//     name: "Chase Bellian",
//     location: "California, US",
//     message:
//       "Exceptional service from start to finish. The doctors were attentive, and the staff ensured everything was handled efficiently.",
//     avatar: "/images/test-2.jpg",
//     image: "/images/test-2.jpg",
//   },
//   {
//     id: 3,
//     name: "Rose Wilson",
//     location: "New York, US",
//     message:
//       "The care and professionalism at Medenic truly stood out. Booking was easy, and the consultation felt very personalized.",
//     avatar: "/images/test-4.jpg",
//     image: "/images/test-4.jpg",
//   },
//   {
//     id: 4,
//     name: "Guy Hawkins",
//     location: "Texas, US",
//     message:
//       "Clean facilities, kind doctors, and no waiting chaos. A healthcare experience done right.",
//     avatar: "/images/test-1.jpg",
//     image: "/images/test-1.jpg",
//   },
//   {
//     id: 5,
//     name: "Telina Decoes",
//     location: "Washington, US",
//     message:
//       "Highly recommend Medenic. The staff genuinely cares and it shows in every interaction.",
//     avatar: "/images/test-5.jpg",
//     image: "/images/test-5.jpg",
//   },
// ];

// export default function TestimonialHighlight() {
//   const [active, setActive] = useState(testimonials[0]);

//   return (
//     <section className="bg-[#fbf9f5] pt-32 overflow-hidden">

//       {/* TOP CONTENT */}
//       <div className="max-w-[900px] mx-auto px-6 text-center">

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active.id}
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -20, opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//           >
//             {/* QUOTE + AVATAR */}
//             <div className="flex items-center justify-center gap-3 mb-10">
//               <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#cfeef6] text-2xl font-bold">
//                 “
//               </div>
//               <img
//                 src={active.avatar}
//                 alt={active.name}
//                 className="object-cover w-12 h-12 rounded-full"
//               />
//             </div>

//             {/* MESSAGE */}
//             <p className="text-[26px] leading-[1.7] text-[#2b2b2b] mb-12">
//               {active.message}
//             </p>

//             {/* STARS */}
//             <div className="flex justify-center gap-1 mb-3">
//               <span className="text-[#ff7a59]">★</span>
//               <span className="text-[#ff7a59]">★</span>
//               <span className="text-[#ff7a59]">★</span>
//               <span className="text-[#ff7a59]">★</span>
//               <span className="text-[#f0d0c7]">★</span>
//             </div>

//             {/* NAME */}
//             <p className="text-sm">
//               <span className="font-semibold">{active.name}</span>{" "}
//               <span className="text-gray-500">— {active.location}</span>
//             </p>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* IMAGE STRIP */}
//       <div className="grid grid-cols-5 mt-28">
//         {testimonials.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => setActive(item)}
//             className="relative overflow-hidden focus:outline-none"
//           >
//             <motion.img
//               layout
//               initial={{ x: -40, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               src={item.image}
//               alt={item.name}
//               className={`w-full h-[320px] object-cover transition-all duration-500
//                 ${active.id === item.id ? "grayscale-0" : "grayscale"}`}
//             />
//           </button>
//         ))}
//       </div>

//     </section>
//   );
// }

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Kaili Jenner",
    location: "Florida, US",
    message:
      "We visited Medenic for our child’s checkup and were impressed with the doctor’s patience & gentle approach. The facility is clean, and the entire process—from booking to consultation—was smooth and stress-free.",
    avatar: "/images/test-3.jpg",
    image: "/images/test-3.jpg",
  },
  {
    id: 2,
    name: "Chase Bellian",
    location: "California, US",
    message:
      "Exceptional service from start to finish. The doctors were attentive, and the staff ensured everything was handled efficiently.",
    avatar: "/images/test-2.jpg",
    image: "/images/test-2.jpg",
  },
  {
    id: 3,
    name: "Rose Wilson",
    location: "New York, US",
    message:
      "The care and professionalism at Medenic truly stood out. Booking was easy, and the consultation felt very personalized.",
    avatar: "/images/test-4.jpg",
    image: "/images/test-4.jpg",
  },
  {
    id: 4,
    name: "Guy Hawkins",
    location: "Texas, US",
    message:
      "Clean facilities, kind doctors, and no waiting chaos. A healthcare experience done right.",
    avatar: "/images/test-1.jpg",
    image: "/images/test-1.jpg",
  },
  {
    id: 5,
    name: "Telina Decoes",
    location: "Washington, US",
    message:
      "Highly recommend Medenic. The staff genuinely cares and it shows in every interaction.",
    avatar: "/images/test-5.jpg",
    image: "/images/test-5.jpg",
  },
];

export default function TestimonialHighlight() {
  const [active, setActive] = useState(testimonials[0]);

  return (
    <section className="bg-[#fbf9f5] pt-24 sm:pt-32 overflow-hidden">

      {/* TOP CONTENT */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 text-center">

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* QUOTE + AVATAR */}
            <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#cfeef6] text-xl sm:text-2xl font-bold">
                “
              </div>
              <img
                src={active.avatar}
                alt={active.name}
                className="object-cover w-10 h-10 rounded-full sm:w-12 sm:h-12"
              />
            </div>

            {/* MESSAGE */}
            <p className="text-lg sm:text-[22px] lg:text-[26px] leading-relaxed sm:leading-[1.7] text-[#2b2b2b] mb-8 sm:mb-12">
              {active.message}
            </p>

            {/* STARS */}
            <div className="flex justify-center gap-1 mb-2 sm:mb-3">
              <span className="text-[#ff7a59]">★</span>
              <span className="text-[#ff7a59]">★</span>
              <span className="text-[#ff7a59]">★</span>
              <span className="text-[#ff7a59]">★</span>
              <span className="text-[#f0d0c7]">★</span>
            </div>

            {/* NAME */}
            <p className="text-xs sm:text-sm">
              <span className="font-semibold">{active.name}</span>{" "}
              <span className="text-gray-500">— {active.location}</span>
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* IMAGE STRIP */}
      <div className="grid grid-cols-2 gap-2 px-2 mt-16  sm:mt-28 sm:grid-cols-3 lg:grid-cols-5 sm:gap-0 sm:px-0">
        {testimonials.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item)}
            className="relative overflow-hidden focus:outline-none"
          >
            <motion.img
              layout
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              src={item.image}
              alt={item.name}
              className={`w-full h-[180px] sm:h-[240px] lg:h-[320px] object-cover transition-all duration-500
                ${active.id === item.id ? "grayscale-0" : "grayscale"}`}
            />
          </button>
        ))}
      </div>

    </section>
  );
}
