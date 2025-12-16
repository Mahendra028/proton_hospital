import React from "react";

export default function Doctershedule() {

  // DATA: doctors schedule (THIS WAS MISSING)
  const doctors = [
    {
      id: 1,
      name: "Dr. A. Kumar",
      education: "MD (Critical Care)",
      spec: "Critical Care",
      timing: "10:00 AM – 6:00 PM",
      img: "https://images.unsplash.com/photo-1606813902917-0b54d45b65a5?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Dr. R. Mehta",
      education: "DM Cardiology",
      spec: "Cardiology",
      timing: "9:00 AM – 5:00 PM",
      img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Dr. S. Patel",
      education: "MD Emergency Medicine",
      spec: "Emergency & Trauma",
      timing: "11:00 AM – 7:00 PM",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Doctor Schedule & Availability
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Current availability and consultation timings of our medical specialists
          </p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="bg-teal-50">
                  <th className="py-4 px-6 text-left text-teal-800 font-semibold">
                    Medical Specialist
                  </th>
                  <th className="py-4 px-6 text-left text-teal-800 font-semibold">
                    Specialization
                  </th>
                  <th className="py-4 px-6 text-left text-teal-800 font-semibold">
                    Consultation Hours
                  </th>
                  <th className="py-4 px-6 text-left text-teal-800 font-semibold">
                    Availability Status
                  </th>
                  <th className="py-4 px-6 text-left text-teal-800 font-semibold">
                    Appointment
                  </th>
                </tr>
              </thead>

              <tbody>
                {doctors.map((doctor) => (
                  <tr
                    key={doctor.id}
                    className="border-b border-gray-100 hover:bg-teal-50/30 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-100">
                          <img
                            src={doctor.img}
                            alt={doctor.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-gray-800">
                            {doctor.name}
                          </div>
                          <div className="text-gray-500 text-sm">
                            {doctor.education}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-3 py-1.5 bg-teal-100 text-teal-800 rounded-full font-medium">
                        {doctor.spec}
                      </span>
                    </td>

                    <td className="py-4 px-6">
                      <div className="font-medium text-gray-700">
                        {doctor.timing}
                      </div>
                      <div className="text-gray-500 text-sm">
                        Monday to Saturday
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span className="font-medium text-green-700">
                          Available Today
                        </span>
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors text-sm"
                      >
                        Take Appointment
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile note */}
          <div className="p-4 bg-teal-50 border-t border-teal-100 md:hidden">
            <p className="text-teal-700 text-sm text-center">
              ← Scroll horizontally to view full table →
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
