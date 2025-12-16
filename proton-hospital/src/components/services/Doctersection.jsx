import React, { useState } from "react";

export default function Specialists() {

  // STATE: track expanded doctor
  const [expandedDoctor, setExpandedDoctor] = useState(null);

  // DATA: doctors list (THIS WAS MISSING)
  const doctors = [
    {
      id: 1,
      name: "Dr. A. Kumar",
      spec: "Critical Care Specialist",
      exp: "12+ yrs",
      img: "https://images.unsplash.com/photo-1606813902917-0b54d45b65a5?auto=format&fit=crop&w=900&q=80",
      education: "MD (Critical Care), MBBS",
      timing: "10:00 AM – 6:00 PM",
      bio: "Expert in ICU management, ventilator care, and multi-organ failure with extensive hands-on experience in emergency settings.",
      qualifications: [
        "Advanced Cardiac Life Support (ACLS)",
        "Ventilator & ECMO management",
        "Trauma & emergency response",
        "ICU protocol leadership"
      ]
    },
    {
      id: 2,
      name: "Dr. R. Mehta",
      spec: "Cardiac Intensivist",
      exp: "10+ yrs",
      img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=80",
      education: "DM Cardiology, MD Medicine",
      timing: "9:00 AM – 5:00 PM",
      bio: "Specializes in cardiac emergencies, post-angioplasty care, and advanced hemodynamic monitoring.",
      qualifications: [
        "Heart failure management",
        "Post-cardiac surgery ICU care",
        "Invasive monitoring",
        "Emergency cardiac protocols"
      ]
    },
    {
      id: 3,
      name: "Dr. S. Patel",
      spec: "Emergency & Trauma Physician",
      exp: "8+ yrs",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=80",
      education: "MD Emergency Medicine",
      timing: "11:00 AM – 7:00 PM",
      bio: "Focused on rapid trauma response, emergency stabilization, and high-pressure decision-making.",
      qualifications: [
        "Advanced Trauma Life Support (ATLS)",
        "Emergency airway management",
        "Disaster response planning",
        "Rapid triage systems"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Specialists
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Meet our team of experienced medical specialists dedicated to providing exceptional critical care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {doctor.name}
                      </h3>
                      <p className="text-teal-200 font-medium">
                        {doctor.spec}
                      </p>
                    </div>
                    <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm">
                      {doctor.exp}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-gray-700 font-medium mb-2">
                    📚 {doctor.education}
                  </p>
                  <p className="text-gray-600">
                    🕒 {doctor.timing} (Mon–Sat)
                  </p>
                </div>

                {expandedDoctor === doctor.id ? (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-teal-700 mb-2">
                        About Doctor
                      </h4>
                      <p className="text-gray-600">
                        {doctor.bio}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-teal-700 mb-2">
                        Qualifications
                      </h4>
                      <ul className="space-y-2">
                        {doctor.qualifications.map((q, i) => (
                          <li key={i} className="text-gray-700 text-sm">
                            • {q}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t flex flex-col gap-3">
                      <button
                        onClick={() => setExpandedDoctor(null)}
                        className="py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50"
                      >
                        Show Less
                      </button>
                      <a
                        href="/contact"
                        className="py-3 bg-teal-600 text-white rounded-lg text-center hover:bg-teal-700"
                      >
                        Take Appointment
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-600 line-clamp-3">
                      {doctor.bio}
                    </p>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setExpandedDoctor(doctor.id)}
                        className="flex-1 py-2 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50"
                      >
                        View Details
                      </button>
                      <a
                        href="/contact"
                        className="flex-1 py-2 bg-teal-600 text-white rounded-lg text-center hover:bg-teal-700"
                      >
                        Take Appointment
                      </a>
                    </div>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
