import React, { useState } from "react";
import icu from "../../assets/icu.jpeg";

export default function Medicalservices() {

  // STATE: which service is expanded
  const [expandedService, setExpandedService] = useState(null);

  // DATA: main services list (THIS WAS MISSING)
  const services = [
    {
      title: "24×7 ICU Care",
      img: "https://images.unsplash.com/photo-1576765608535-5dcd3d0ecf9b?auto=format&fit=crop&w=900&q=80",
      desc: "Round-the-clock intensive care with advanced monitoring systems.",
      features: [
        "Continuous patient monitoring",
        "Ventilator & life support",
        "Experienced critical care doctors",
        "Dedicated ICU nursing staff"
      ]
    },
    {
      title: "Emergency & Trauma Care",
      img: "https://images.unsplash.com/photo-1600959907703-125ba1374a12?auto=format&fit=crop&w=900&q=80",
      desc: "Rapid response emergency services for trauma and accidents.",
      features: [
        "24/7 emergency response",
        "Advanced trauma life support",
        "Fast triage & diagnosis",
        "Well-equipped emergency OT"
      ]
    },
    {
      title: "Cardiac Critical Care",
      img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=80",
      desc: "Specialized cardiac care for heart emergencies and recovery.",
      features: [
        "Heart attack management",
        "Continuous ECG monitoring",
        "Cardiac ICU setup",
        "Post-cardiac surgery care"
      ]
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Medical Services
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Advanced medical services designed for critical care situations and comprehensive patient recovery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  {service.title.includes("24×7") ? "24/7 Available" : "Specialized"}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.desc}
                </p>

                {expandedService === index ? (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-teal-700 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setExpandedService(null)}
                      className="mt-6 w-full py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Show Less
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setExpandedService(index)}
                    className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2"
                  >
                    View Details ↓
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
