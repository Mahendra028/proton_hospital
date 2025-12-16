import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import kumar from "../../assets/Dr.A.Kumar.avif";
import patel from "../../assets/Dr.S.Patel.jpeg";
import mehta from "../../assets/Dr.R.Mehta.jpg";

/* ✅ doctors data defined */
const doctors = [
  {
    id: 1,
    name: "Dr. A. Kumar",
    role: "Critical Care Specialist",
    specialty: "Ventilator Management",
    img: kumar,
    bio: "12+ years ICU experience handling ventilator support and trauma care.",
    education: "MD Critical Care",
    experience: 15,
    interests: "ICU Protocols, Ventilation",
    languages: "English, Hindi",
    availability: "Mon–Sat",
    certifications: "ACLS, FCCS",
  },
  {
    id: 2,
    name: "Dr. S. Patel",
    role: "Emergency Physician",
    specialty: "Emergency Medicine",
    img: patel,
    bio: "Expert in emergency cardiac care and stroke intervention.",
    education: "MD Emergency Medicine",
    experience: 12,
    interests: "Trauma, Cardiac Emergencies",
    languages: "English, Hindi, Gujarati",
    availability: "24×7",
    certifications: "ACLS, ATLS",
  },
  {
    id: 3,
    name: "Dr. R. Mehta",
    role: "Cardiac Intensivist",
    specialty: "Cardiac ICU",
    img: mehta,
    bio: "15+ years cardiac ICU experience with post-op care.",
    education: "DM Cardiology",
    experience: 18,
    interests: "Cardiac Rehab",
    languages: "English, Hindi",
    availability: "Mon–Fri",
    certifications: "ACLS, FACC",
  },
];

export default function DoctorSection() {
  const [openDoctorId, setOpenDoctorId] = useState(null);
  const isDesktop =
    typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Medical Experts
          </h2>
          <p className="text-gray-600">
            Meet our experienced specialists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white border rounded-lg p-6 text-center hover:shadow-lg"
              onMouseEnter={() =>
                isDesktop && setOpenDoctorId(doctor.id)
              }
              onMouseLeave={() =>
                isDesktop && setOpenDoctorId(null)
              }
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="text-xl font-bold">{doctor.name}</h3>
              <p className="text-blue-600">{doctor.role}</p>
              <span className="text-sm bg-blue-50 px-3 py-1 rounded-full">
                {doctor.specialty}
              </span>

              {/* Mobile button */}
              <button
                onClick={() => setOpenDoctorId(doctor.id)}
                className="mt-4 md:hidden text-blue-600"
              >
                View Details
              </button>

              {/* MODAL */}
              <AnimatePresence>
                {openDoctorId === doctor.id && (
                  <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="bg-white p-8 rounded-xl max-w-4xl w-[90%] relative"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0.95 }}
                    >
                      <button
                        onClick={() => setOpenDoctorId(null)}
                        className="absolute top-4 right-4 text-xl"
                      >
                        ×
                      </button>

                      <h3 className="text-2xl font-bold mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {doctor.bio}
                      </p>

                      <p><b>Education:</b> {doctor.education}</p>
                      <p><b>Experience:</b> {doctor.experience} years</p>
                      <p><b>Languages:</b> {doctor.languages}</p>
                      <p><b>Availability:</b> {doctor.availability}</p>
                      <p><b>Certifications:</b> {doctor.certifications}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
