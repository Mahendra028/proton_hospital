import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Doctergrid() {

  // STATE: expanded doctor card
  const [openId, setOpenId] = useState(null);

  // DATA: doctors (replace with API later)
  const doctors = [
    {
      id: 1,
      name: "Dr. A. Kumar",
      spec: "Critical Care",
      experience: "12+ Years",
      timing: "10:00 AM – 6:00 PM",
      details: "Senior intensivist with expertise in ventilator management and multi-organ failure.",
      qual: "MD (Critical Care), MBBS",
      contact: "+911234567890",
      img: "https://images.unsplash.com/photo-1606813902917-0b54d45b65a5?auto=format&fit=crop&w=600&q=80",
      icon: "🫁",
      awards: ["ICU Excellence", "Best Clinician"],
      expertise: ["Ventilator Care", "Sepsis", "ECMO", "Critical Monitoring"]
    },
    {
      id: 2,
      name: "Dr. R. Mehta",
      spec: "Cardiac",
      experience: "10+ Years",
      timing: "9:00 AM – 5:00 PM",
      details: "Specialist in cardiac emergencies and post-angioplasty critical care.",
      qual: "DM Cardiology, MD Medicine",
      contact: "+919876543210",
      img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=600&q=80",
      icon: "❤️",
      awards: ["Cardiac Star"],
      expertise: ["Heart Failure", "ECG Monitoring", "ICU Cardiology"]
    }
  ];

  // FILTER (plug into FilterTabs later)
  const filteredDoctors = doctors;

  return (
    <section className="px-6 pb-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">

          {filteredDoctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row gap-6">

                  {/* Image */}
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={doctor.img}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute -top-2 -right-2 w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                      {doctor.icon}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900">{doctor.name}</h2>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                        {doctor.spec}
                      </span>
                      <span className="text-gray-600">{doctor.experience}</span>
                    </div>

                    <p className="text-gray-600 mt-3">{doctor.details}</p>

                    <p className="text-sm text-gray-500 mt-2">{doctor.timing}</p>
                  </div>
                </div>

                {/* Awards */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {doctor.awards.map((award, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-sm text-amber-700"
                    >
                      🏆 {award}
                    </span>
                  ))}
                </div>

                {/* Expertise */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {doctor.expertise.map((e, i) => (
                    <div key={i} className="text-sm text-gray-600">
                      • {e}
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setOpenId(openId === doctor.id ? null : doctor.id)}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl"
                  >
                    {openId === doctor.id ? "Hide Details" : "View Full Profile"}
                  </button>

                  <a
                    href={`tel:${doctor.contact}`}
                    className="px-6 py-3 border border-sky-200 rounded-xl text-sky-700 font-semibold"
                  >
                    📞 Contact
                  </a>
                </div>

                {/* Expandable Section */}
                <AnimatePresence>
                  {openId === doctor.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t"
                    >
                      <p className="text-gray-700">
                        <strong>Qualifications:</strong> {doctor.qual}
                      </p>
                      <p className="text-gray-700 mt-2">
                        <strong>Contact:</strong> {doctor.contact}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
