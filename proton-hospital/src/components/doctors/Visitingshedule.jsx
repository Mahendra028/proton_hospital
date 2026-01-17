import { motion } from "framer-motion";

export default function Visitingshedule() {

  // DATA: Visiting consultants (THIS WAS MISSING)
  const visiting = [
    {
      name: "Dr. P. Deshmukh",
      spec: "Neuro Surgeon",
      expertise: "Brain & Spine Surgery",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Dr. S. Kulkarni",
      spec: "Pulmonologist",
      expertise: "Advanced Lung Care",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Dr. R. Shah",
      spec: "Infectious Disease Specialist",
      expertise: "Sepsis & Critical Infections",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=300&q=80"
    }
  ];

  // DATA: On-call doctors (THIS WAS MISSING)
  const doctors = [
    {
      id: 1,
      name: "Dr. A. Kumar",
      spec: "Critical Care",
      timing: "24×7 On Call",
      img: "https://images.unsplash.com/photo-1606813902917-0b54d45b65a5?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Dr. R. Mehta",
      spec: "Cardiology",
      timing: "Night Duty",
      img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Dr. S. Patel",
      spec: "Emergency Medicine",
      timing: "Day Shift",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="px-6 pb-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Visiting Consultants */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl">
                <span className="text-2xl text-white">👥</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Visiting Consultants
                </h3>
                <p className="text-gray-600">
                  Specialists who consult with our team on complex cases.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {visiting.map((consultant, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                >
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img
                      src={consultant.img}
                      alt={consultant.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {consultant.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {consultant.spec}
                    </p>
                    <p className="text-sky-600 text-sm font-medium mt-1">
                      {consultant.expertise}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* On-Call Roster */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-cyan-50 rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-xl">
                <span className="text-2xl text-white">📅</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  On-Call Roster
                </h3>
                <p className="text-gray-600">
                  24/7 coverage for emergency response.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {doctors.map((doctor, index) => (
                <motion.div
                  key={doctor.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-white/70"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden">
                      <img
                        src={doctor.img}
                        alt={doctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {doctor.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {doctor.spec}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-medium text-gray-800">
                      {doctor.timing}
                    </p>
                    <div className="flex items-center gap-1 justify-end mt-1">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                      <span className="text-xs text-gray-500">
                        Available
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
