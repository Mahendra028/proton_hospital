import React from "react";

export default function Specialaties() {

  // DATA: specialties list (THIS WAS MISSING)
  const specialties = [
    {
      name: "Pulmonology & Respiratory Care",
      desc: "Advanced management of respiratory disorders including ventilator support, COPD, asthma, and critical lung conditions."
    },
    {
      name: "Infectious Diseases",
      desc: "Expert diagnosis and treatment of complex infections, sepsis management, and antibiotic stewardship."
    },
    {
      name: "Cardiac Critical Care",
      desc: "Specialized care for heart emergencies, post-cardiac procedures, and continuous cardiac monitoring."
    },
    {
      name: "General & Laparoscopic Surgery",
      desc: "Comprehensive surgical care with minimally invasive techniques and post-operative critical monitoring."
    },
    {
      name: "Neurology & Neuro Critical Care",
      desc: "Focused treatment for stroke, brain injuries, seizures, and other neurological emergencies."
    },
    {
      name: "Clinical Monitoring & Diagnostics",
      desc: "Round-the-clock diagnostics, advanced monitoring systems, and data-driven patient assessment."
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Medical Specialties
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Areas of specialized expertise where we provide exceptional medical care and superior patient outcomes.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-teal-200 transition-colors">
                  <span className="text-xl text-teal-600">
                    {index === 0 ? "🫁" :
                     index === 1 ? "🦠" :
                     index === 2 ? "❤️" :
                     index === 3 ? "🔪" :
                     index === 4 ? "🧠" : "📊"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {specialty.name}
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {specialty.desc}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-teal-600 text-sm font-medium">
                  Specialized Team →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
