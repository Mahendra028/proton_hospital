import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";


export default function UroSurgery() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section ref={sectionRef} className="py-20 bg-transparent">
      <div className="grid items-center gap-12 px-6 mx-auto max-w-7xl lg:grid-cols-2">

        {/* IMAGE */}
        <motion.img
          src="/images/uro-surgery.jpg"
          alt="Uro Surgery"
          style={{ scale }}
          className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
        />

        {/* CONTENT */}
        <div>
          <h1 className="mb-4 text-3xl font-bold">Uro Surgery</h1>
          <p className="mb-4 leading-relaxed text-gray-700">
            Our Uro Surgery department provides advanced surgical care for
            urological conditions using modern technology and experienced
            specialists.
          </p>
          <p className="leading-relaxed text-gray-700">
            We focus on minimally invasive procedures, faster recovery, and
            patient-centric treatment plans.
          </p>
        </div>

      </div>
    </section>
  );
}
