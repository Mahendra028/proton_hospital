import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// 🔹 Replace this path with your actual image path
// import cardiologyImg from "../assets/cardiology.jpg";

export default function Cardiology() {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      {/* ================= TOP SECTION ================= */}
      <section className="bg-[#fbf9f5] overflow-hidden">

        {/* ===== TOP CONTENT ===== */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 pt-16 pb-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT — TITLE */}
            <motion.div
              className="flex items-start gap-4"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="w-[4px] h-[90px] bg-[#9ad9e3]" />
              <h1 className="text-4xl font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                Interventional Cardiology
              </h1>
            </motion.div>

            {/* RIGHT — TAGLINE */}
            <motion.p
              className="max-w-[420px] text-lg leading-[1.9]"
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Advanced heart care driven by precision, innovation, and
              patient-first values.
            </motion.p>

          </div>
        </div>

        {/* ===== IMAGE ===== */}
        <motion.div
          ref={imageRef}
          className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 pb-16 overflow-hidden"
          style={{ scale }}
        >
          <img
            src={cardiologyImg}
            alt="Interventional Cardiology"
            className="w-full h-[300px] sm:h-[420px] lg:h-[520px] object-cover"
          />
        </motion.div>
      </section>

      {/* ================= DETAILS SECTION ================= */}
      <section className="bg-[#faf8f3] max-w-[1200px] mx-auto px-6 sm:px-10 py-16">

        {/* Overview */}
        <p className="max-w-3xl mb-16 leading-7 text-gray-700">
          Our Interventional Cardiology department provides advanced,
          minimally invasive procedures to diagnose and treat heart
          conditions. Our expert cardiologists focus on precision,
          patient safety, and faster recovery through state-of-the-art
          technology and evidence-based care.
        </p>

        {/* What We Treat */}
        <h2 className="mb-4 text-3xl font-semibold text-black">
          What We Treat
        </h2>

        <ul className="pl-6 mb-16 space-y-3 text-gray-700 list-disc">
          <li>Coronary artery disease</li>
          <li>Heart blockages and stenosis</li>
          <li>Chest pain and heart attacks</li>
          <li>Hypertension-related heart conditions</li>
          <li>Congenital heart defects</li>
        </ul>

        {/* Advanced Health Support */}
        <h2 className="mb-6 text-3xl font-semibold text-black">
          Advanced Health Support
        </h2>

        <ul className="max-w-4xl pl-6 space-y-4 text-gray-700 list-disc">
          <li><strong>Expert Cardiologists:</strong> Highly experienced heart specialists</li>
          <li><strong>Modern Cath Labs:</strong> Advanced interventional technology</li>
          <li><strong>Integrated Care:</strong> Seamless coordination with cardiac surgery & ICU</li>
          <li><strong>Preventive Focus:</strong> Lifestyle guidance and long-term heart health</li>
          <li><strong>24/7 Emergency Care:</strong> Immediate response for cardiac emergencies</li>
          <li><strong>Easy Appointments:</strong> Online booking and walk-in consultations</li>
          <li><strong>Tele-Cardiology:</strong> Secure remote follow-ups and consultations</li>
        </ul>

      </section>
    </>
  );
}
