import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import advancedVentilation from "../../assets/advanced-ventilation.jpg";
import trauma from "../../assets/trauma.avif";
import critical from "../../assets/cardiac-critical-care.avif";

/* ✅ imageCards defined */
const imageCards = [
  {
    title: "Advanced Ventilation",
    subtitle: "State-class ventilators",
    img: advancedVentilation,
    content:
      "Closed-loop ventilation modes, bedside monitoring and fast-response alarm protocols.",
    icon: "🫁",
  },
  {
    title: "Trauma & Emergency",
    subtitle: "Rapid response unit",
    img: trauma,
    content:
      "Dedicated trauma bay with point-of-care imaging and multidisciplinary team activation.",
    icon: "⚡",
  },
  {
    title: "Cardiac Critical Care",
    subtitle: "Post-op support",
    img: critical,
    content:
      "Continuous hemodynamic monitoring and targeted rehab planning.",
    icon: "❤️",
  },
];

export default function Capabilities() {
  const rowRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [duration, setDuration] = useState(40);

  useEffect(() => {
    if (!rowRef.current) return;

    const calculate = () => {
      setScrollWidth(rowRef.current.scrollWidth / 2);

      const w = window.innerWidth;
      if (w < 640) setDuration(22);
      else if (w < 1024) setDuration(30);
      else setDuration(40);
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  return (
    <section className="py-12 px-4 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Advanced Capabilities
          </h2>
          <p className="text-gray-600">
            Cutting-edge medical services with precision and innovation
          </p>
        </div>

        <motion.div
          ref={rowRef}
          className="flex gap-6"
          animate={{ x: [0, -scrollWidth] }}
          transition={{
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...imageCards, ...imageCards].map((card, index) => (
            <div
              key={index}
              className="min-w-[340px] sm:min-w-[400px] bg-white border rounded-lg shadow-sm"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{card.title}</h3>
                <p className="text-blue-600">{card.subtitle}</p>
                <p className="text-gray-600 mt-2">{card.content}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
