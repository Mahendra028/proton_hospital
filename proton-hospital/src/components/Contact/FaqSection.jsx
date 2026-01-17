// import React, { useState } from "react";

// const faqs = [
//   {
//     q: "How can I book an appointment?",
//     a: "You can book an appointment by visiting our website and filling out the online form with your preferred date, time, and contact details.",
//   },
//   {
//     q: "What should I expect during my first visit to Medenic?",
//     a: "During your first visit, our medical team will review your medical history, conduct necessary examinations, and discuss a personalized care plan.",
//   },
//   {
//     q: "Do you offer telemedicine consultations?",
//     a: "Yes, we provide telemedicine consultations so you can consult with our doctors from the comfort of your home.",
//   },
//   {
//     q: "Are vaccinations available for adults and children?",
//     a: "We offer a full range of vaccinations for both adults and children as per recommended healthcare guidelines.",
//   },
//   {
//     q: "What documents should I bring for my visit?",
//     a: "Please bring a valid ID, previous medical records, prescriptions, and insurance details if applicable.",
//   },
//   {
//     q: "Do you accept walk-ins, or is an appointment required?",
//     a: "Walk-ins are accepted depending on availability, but we strongly recommend booking an appointment in advance.",
//   },
// ];

// export default function FaqSection() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-[#fbf9f5] py-24">
//       <div className="max-w-[900px] mx-auto px-6">

//         {/* SMALL LABEL */}
//         <p className="mb-2 text-sm text-center">✦ Faq’s</p>

//         {/* TITLE */}
//         <h2 className="mb-16 text-4xl font-bold text-center">
//           Frequently Asked Questions
//         </h2>

//         {/* FAQ LIST */}
//         <div className="space-y-8">
//           {faqs.map((item, index) => {
//             const isOpen = activeIndex === index;

//             return (
//               <div key={index} className="pb-6 border-b border-gray-200">

//                 {/* QUESTION ROW */}
//                 <div
//                   onClick={() => toggleFAQ(index)}
//                   className="flex items-start justify-between gap-6 cursor-pointer"
//                 >
//                   <div>
//                     <p className="mb-1 text-xs">Q.{index + 1}</p>
//                     <h3 className="text-lg font-medium">{item.q}</h3>
//                   </div>

//                   {/* PLUS / MINUS BUTTON */}
//                   <div className="relative flex items-center justify-center w-10 h-10 border rounded-full">
//                     {/* HORIZONTAL */}
//                     <span className="absolute w-4 h-[1.5px] bg-black" />

//                     {/* VERTICAL (ROTATES) */}
//                     <span
//                       className={`
//                         absolute w-[1.5px] h-4 bg-black
//                         transition-all duration-300
//                         ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
//                       `}
//                     />
//                   </div>
//                 </div>

//                 {/* ANSWER */}
//                 <div
//                   className={`
//                     overflow-hidden transition-all duration-500 ease-in-out
//                     ${isOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}
//                   `}
//                 >
//                   <p className="text-sm leading-relaxed text-gray-700">
//                     {item.a}
//                   </p>
//                 </div>

//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const faqs = [
//   {
//     q: "How can I book an appointment?",
//     a: "You can book an appointment by visiting our website and filling out the online form with your preferred date, time, and contact details.",
//   },
//   {
//     q: "What should I expect during my first visit to Medenic?",
//     a: "During your first visit, our medical team will review your medical history, conduct necessary examinations, and discuss a personalized care plan.",
//   },
//   {
//     q: "Do you offer telemedicine consultations?",
//     a: "Yes, we provide telemedicine consultations so you can consult with our doctors from the comfort of your home.",
//   },
//   {
//     q: "Are vaccinations available for adults and children?",
//     a: "We offer a full range of vaccinations for both adults and children as per recommended healthcare guidelines.",
//   },
//   {
//     q: "What documents should I bring for my visit?",
//     a: "Please bring a valid ID, previous medical records, prescriptions, and insurance details if applicable.",
//   },
//   {
//     q: "Do you accept walk-ins, or is an appointment required?",
//     a: "Walk-ins are accepted depending on availability, but we strongly recommend booking an appointment in advance.",
//   },
// ];

// const container = {
//   hidden: { opacity: 0, y: 80 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//       staggerChildren: 0.12,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
// };

// export default function FaqSection() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="bg-[#fbf9f5] py-24 overflow-hidden">
//       <motion.div
//         className="max-w-[900px] mx-auto px-6"
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//       >

//         {/* LABEL */}
//         <motion.p
//           variants={item}
//           className="mb-2 text-sm text-center"
//         >
//           ✦ Faq’s
//         </motion.p>

//         {/* TITLE */}
//         <motion.h2
//           variants={item}
//           className="mb-16 text-4xl font-bold text-center"
//         >
//           Frequently Asked Questions
//         </motion.h2>

//         {/* FAQ LIST */}
//         <div className="space-y-8">
//           {faqs.map((faq, index) => {
//             const isOpen = activeIndex === index;

//             return (
//               <motion.div
//                 key={index}
//                 variants={item}
//                 className="pb-6 border-b border-gray-200"
//               >
//                 {/* QUESTION */}
//                 <div
//                   onClick={() => toggleFAQ(index)}
//                   className="flex items-start justify-between gap-6 cursor-pointer"
//                 >
//                   <div>
//                     <p className="mb-1 text-xs">Q.{index + 1}</p>
//                     <h3 className="text-lg font-medium">{faq.q}</h3>
//                   </div>

//                   {/* PLUS / MINUS */}
//                   <div className="relative flex items-center justify-center w-10 h-10 border rounded-full">
//                     <span className="absolute w-4 h-[1.5px] bg-black" />
//                     <span
//                       className={`
//                         absolute w-[1.5px] h-4 bg-black
//                         transition-all duration-300
//                         ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
//                       `}
//                     />
//                   </div>
//                 </div>

//                 {/* ANSWER */}
//                 <div
//                   className={`
//                     overflow-hidden transition-all duration-500 ease-in-out
//                     ${isOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}
//                   `}
//                 >
//                   <p className="text-sm leading-relaxed text-gray-700">
//                     {faq.a}
//                   </p>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//       </motion.div>
//     </section>
//   );
// }
import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How can I book an appointment?",
    a: "You can book an appointment by visiting our website and filling out the online form with your preferred date, time, and contact details.",
  },
  {
    q: "What should I expect during my first visit to Medenic?",
    a: "During your first visit, our medical team will review your medical history, conduct necessary examinations, and discuss a personalized care plan.",
  },
  {
    q: "Do you offer telemedicine consultations?",
    a: "Yes, we provide telemedicine consultations so you can consult with our doctors from the comfort of your home.",
  },
  {
    q: "Are vaccinations available for adults and children?",
    a: "We offer a full range of vaccinations for both adults and children as per recommended healthcare guidelines.",
  },
  {
    q: "What documents should I bring for my visit?",
    a: "Please bring a valid ID, previous medical records, prescriptions, and insurance details if applicable.",
  },
  {
    q: "Do you accept walk-ins, or is an appointment required?",
    a: "Walk-ins are accepted depending on availability, but we strongly recommend booking an appointment in advance.",
  },
];

/* ✅ STAGGER BOTTOM → TOP */
const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#fbf9f5] py-24">
      <div className="max-w-[900px] mx-auto px-6">

        {/* TITLE (no animation needed here) */}
        <p className="mb-2 text-sm text-center">✦ Faq’s</p>
        <h2 className="mb-16 text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        {/* ✅ FAQ LIST — SCROLL ANIMATION HERE */}
        <motion.div
          className="space-y-8"
          variants={listVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="pb-6 border-b border-gray-200"
              >
                {/* QUESTION */}
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex items-start justify-between gap-6 cursor-pointer"
                >
                  <div>
                    <p className="mb-1 text-xs">Q.{index + 1}</p>
                    <h3 className="text-lg font-medium">{faq.q}</h3>
                  </div>

                  {/* PLUS / MINUS */}
                  <div className="relative flex items-center justify-center w-10 h-10 border rounded-full">
                    <span className="absolute w-4 h-[1.5px] bg-black" />
                    <span
                      className={`
                        absolute w-[1.5px] h-4 bg-black
                        transition-all duration-300
                        ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}
                      `}
                    />
                  </div>
                </div>

                {/* ANSWER (no scroll animation here) */}
                <div
                  className={`
                    overflow-hidden
                    ${isOpen
                      ? "max-h-40 mt-4 opacity-100 transition-all duration-500"
                      : "max-h-0 opacity-0 transition-all duration-200"}
                  `}
                >
                  <p className="text-sm leading-relaxed text-gray-700">
                    {faq.a}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
