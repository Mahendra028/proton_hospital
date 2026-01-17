import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// 🔁 Change image path if needed
// import generalMedicineImg from "../../assets/departments/general-medicine.jpg";

export default function GeneralMedicine() {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      {/* ================= TOP HEADING + IMAGE SECTION ================= */}
      <section className="bg-[#fbf9f5] overflow-hidden">

        {/* TOP CONTENT */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 pt-16 pb-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT TITLE */}
            <motion.div
              className="flex items-start gap-4"
              initial={{ x: -60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="w-[4px] h-[90px] bg-[#9ad9e3]" />
              <h1 className="text-4xl font-bold tracking-tight uppercase sm:text-5xl lg:text-6xl">
                General Medicine
              </h1>
            </motion.div>

            {/* RIGHT TEXT */}
            <motion.p
              className="max-w-[420px] text-lg leading-[1.9]"
              initial={{ x: 60, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Comprehensive primary healthcare focused on prevention,
              diagnosis, and long-term wellness.
            </motion.p>

          </div>
        </div>

        {/* IMAGE */}
        <motion.div
          ref={imageRef}
          className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 pb-16 overflow-hidden"
          style={{ scale }}
        >
          <img
            src={generalMedicineImg}
            alt="General Medicine"
            className="w-full h-[300px] sm:h-[420px] lg:h-[520px] object-cover"
          />
        </motion.div>

      </section>

      {/* ================= DETAILS CONTENT (MATCHING SCREENSHOT) ================= */}
      <section className="bg-[#faf8f3] max-w-[1200px] mx-auto px-6 sm:px-10 py-16">

        {/* Preventive Health Screenings */}
        <h2 className="mb-4 text-3xl font-semibold text-black">
          Preventive Health Screenings
        </h2>

        <p className="max-w-3xl mb-16 leading-7 text-gray-700">
          At our clinic, we offer a comprehensive range of healthcare services
          designed to meet the diverse needs of our patients. Our experienced
          team of healthcare professionals is committed to providing
          personalized care and support to help you achieve your health goals.
          From preventive care and wellness programs to specialized treatments,
          we are dedicated to delivering high-quality healthcare services.
        </p>

        {/* What We Treat */}
        <h2 className="mb-4 text-3xl font-semibold text-black">
          What We Treat
        </h2>

        <p className="mb-6 leading-7 text-gray-700">
          Our general practitioners are trained to manage a variety of acute
          and chronic conditions, including:
        </p>

        <ul className="pl-6 mb-16 space-y-3 text-gray-700 list-disc">
          <li>Fever, infections, and flu-like illnesses</li>
          <li>Hypertension and diabetes</li>
          <li>Preventive screenings and annual checkups</li>
          <li>Digestive issues</li>
        </ul>

        {/* Advanced Health Support */}
        <h2 className="mb-6 text-3xl font-semibold text-black">
          Advanced Health Support
        </h2>

        <ul className="max-w-4xl pl-6 space-y-4 text-gray-700 list-disc">
          <li>
            <strong>Expert Physicians:</strong> Highly experienced general
            practitioners focused on patient-centered care
          </li>
          <li>
            <strong>Modern Facilities:</strong> Access to in-house diagnostics
            and lab services for fast results
          </li>
          <li>
            <strong>Integrated Care:</strong> Seamless referrals to specialists
            when needed
          </li>
          <li>
            <strong>Preventive Focus:</strong> Health screenings and lifestyle
            counseling for long-term wellness
          </li>
          <li>
            <strong>24/7 Emergency Care:</strong> Round-the-clock support for
            urgent medical needs
          </li>
          <li>
            <strong>Easy Appointment Booking:</strong> Book online, by phone,
            or walk in—your convenience comes first
          </li>
          <li>
            <strong>Telemedicine Support:</strong> Consult with doctors remotely
            via secure video calls
          </li>
        </ul>

      </section>
    </>
  );
}
