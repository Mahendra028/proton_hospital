// import React, { useState } from "react";
// import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// const testimonials = [
//   {
//     name: "Anita Deshmukh",
//     image: "https://randomuser.me/api/portraits/women/45.jpg",
//     text: "The doctors and nursing staff were extremely caring. The ICU facilities are world-class and gave us great confidence.",
//   },
//   {
//     name: "Rahul Patil",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     text: "Excellent critical care services. The doctors explained every step clearly and treated my father like family.",
//   },
//   {
//     name: "Sneha Kulkarni",
//     image: "https://randomuser.me/api/portraits/women/68.jpg",
//     text: "Clean hospital, advanced equipment, and compassionate staff. We felt safe and well-guided throughout the treatment.",
//   },
//   {
//     name: "Vijay Sharma",
//     image: "https://randomuser.me/api/portraits/men/41.jpg",
//     text: "Very professional ICU team. Quick response during emergencies and constant monitoring gave us peace of mind.",
//   },
//   {
//     name: "Pooja Chavan",
//     image: "https://randomuser.me/api/portraits/women/51.jpg",
//     text: "Doctors are highly knowledgeable and approachable. The care provided exceeded our expectations.",
//   },
//   {
//     name: "Amit Joshi",
//     image: "https://randomuser.me/api/portraits/men/55.jpg",
//     text: "One of the best critical care centers. Transparent communication and genuine concern for patients.",
//   },
//   {
//     name: "Neha Bansal",
//     image: "https://randomuser.me/api/portraits/women/60.jpg",
//     text: "The ICU staff worked tirelessly day and night. Their dedication and empathy truly stand out.",
//   },
//   {
//     name: "Suresh Verma",
//     image: "https://randomuser.me/api/portraits/men/47.jpg",
//     text: "Advanced technology combined with human touch. We are grateful to the entire Proton Medical team.",
//   },
//   {
//     name: "Kavita Pawar",
//     image: "https://randomuser.me/api/portraits/women/39.jpg",
//     text: "Exceptional care and hygiene standards. Doctors kept us informed and reassured at every stage.",
//   },
//   {
//     name: "Nitin Malhotra",
//     image: "https://randomuser.me/api/portraits/men/63.jpg",
//     text: "Prompt emergency response and expert critical care. Highly recommend this hospital.",
//   },
// ];

// export default function Testimonials() {
//   const [index, setIndex] = useState(1);

//   const prev = () =>
//     setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

//   const next = () =>
//     setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

//   const getItem = (i) =>
//     testimonials[(index + i + testimonials.length) % testimonials.length];

//   return (
//     <section className="py-20 bg-[#EDF2F9]">
//       <div className="px-6 mx-auto text-center max-w-7xl">

//         {/* HEADING */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="mb-28"
//         >
//           <p className="mb-5 text-sm tracking-[0.25em] text-gray-500">
//             <span className="text-lg">✚</span> Our Testimonials
//           </p>

//           <h2 className="text-[42px] font-semibold text-gray-900">
//             What Our <span className="font-normal text-red-500">Patients Say</span>
//           </h2>
//         </motion.div>

//         {/* CARDS */}
//         <div className="relative flex items-end justify-center gap-10">
//           {[getItem(-1), getItem(0), getItem(1)].map((item, i) => (
//             <div
//               key={i}
//               className={`relative bg-white rounded-3xl p-6 shadow-lg text-center ${
//                 i === 1 ? "w-[340px] shadow-xl" : "w-[300px]"
//               }`}
//             >
//               <div className={`absolute -top-10 ${i === 1 ? "left-1/2 -translate-x-1/2" : "left-6"}`}>
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className={`rounded-full border-4 ${
//                     i === 1 ? "w-20 h-20 border-blue-400" : "w-16 h-16 border-blue-300"
//                   }`}
//                 />
//               </div>

//               <h4 className={`font-semibold ${i === 1 ? "mt-10" : "mt-8"}`}>
//                 {item.name}
//               </h4>

//               <div className="flex justify-center my-2 text-yellow-400">
//                 {[...Array(5)].map((_, s) => (
//                   <FaStar key={s} />
//                 ))}
//               </div>

//               <p className="text-sm leading-relaxed text-gray-600">
//                 “{item.text}”
//               </p>

//               <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[26px] border-t-white" />
//             </div>
//           ))}
//         </div>

//         {/* NAVIGATION */}
//         <div className="flex justify-center gap-4 mt-16">
//           <button onClick={prev} className="w-10 h-10 text-center text-gray-800 rounded-full">
//             <FaChevronLeft />
//           </button>
//           <button onClick={next} className="w-10 h-10 text-center text-gray-800 rounded-full">
//             <FaChevronRight />
//           </button>
//         </div>
 
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anita Deshmukh",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The doctors and nursing staff were extremely caring. The ICU facilities are world-class and gave us great confidence.",
  },
  {
    name: "Rahul Patil",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Excellent critical care services. The doctors explained every step clearly and treated my father like family.",
  },
  {
    name: "Sneha Kulkarni",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Clean hospital, advanced equipment, and compassionate staff. We felt safe and well-guided throughout the treatment.",
  },
  {
    name: "Vijay Sharma",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "Very professional ICU team. Quick response during emergencies and constant monitoring gave us peace of mind.",
  },
  {
    name: "Pooja Chavan",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    text: "Doctors are highly knowledgeable and approachable. The care provided exceeded our expectations.",
  },
  {
    name: "Amit Joshi",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    text: "One of the best critical care centers. Transparent communication and genuine concern for patients.",
  },
  {
    name: "Neha Bansal",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    text: "The ICU staff worked tirelessly day and night. Their dedication and empathy truly stand out.",
  },
  {
    name: "Suresh Verma",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    text: "Advanced technology combined with human touch. We are grateful to the entire Proton Medical team.",
  },
  {
    name: "Kavita Pawar",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    text: "Exceptional care and hygiene standards. Doctors kept us informed and reassured at every stage.",
  },
  {
    name: "Nitin Malhotra",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    text: "Prompt emergency response and expert critical care. Highly recommend this hospital.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(1);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const getItem = (i) =>
    testimonials[(index + i + testimonials.length) % testimonials.length];

  return (
    <section className="py-20 bg-[#EDF2F9]">
      <div className="px-6 mx-auto text-center max-w-7xl">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-28"
        >
          <p className="mb-5 text-sm tracking-[0.25em] text-gray-500">
            <span className="text-lg">✚</span> Our Testimonials
          </p>

          <h2 className="text-[32px] md:text-[42px] font-semibold text-gray-900">
            What Our <span className="font-normal text-red-500">Patients Say</span>
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="relative flex flex-col items-center justify-center gap-12 md:flex-row md:items-end md:gap-10">
          {[getItem(-1), getItem(0), getItem(1)].map((item, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-6 shadow-lg text-center w-[90%] sm:w-[320px] ${
                i === 1 ? "md:w-[340px] shadow-xl" : "md:w-[300px]"
              }`}
            >
              <div
                className={`absolute -top-10 left-1/2 -translate-x-1/2 md:translate-x-0 ${
                  i === 1
                    ? "md:left-1/2 md:-translate-x-1/2"
                    : "md:left-6"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={`rounded-full border-4 ${
                    i === 1
                      ? "w-20 h-20 border-blue-400"
                      : "w-16 h-16 border-blue-300"
                  }`}
                />
              </div>

              <h4 className={`font-semibold ${i === 1 ? "mt-10" : "mt-8"}`}>
                {item.name}
              </h4>

              <div className="flex justify-center my-2 text-yellow-400">
                {[...Array(5)].map((_, s) => (
                  <FaStar key={s} />
                ))}
              </div>

              <p className="text-sm leading-relaxed text-gray-600">
                “{item.text}”
              </p>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[26px] border-t-white" />
            </div>
          ))}
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-center gap-6 mt-12 md:mt-16">
          <button
            onClick={prev}
            className="flex items-center justify-center w-10 h-10 text-gray-800 rounded-full hover:bg-gray-200"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="flex items-center justify-center w-10 h-10 text-gray-800 rounded-full hover:bg-gray-200"
          >
            <FaChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
}
