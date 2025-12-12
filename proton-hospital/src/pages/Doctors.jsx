import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const doctors = [
  {
    id: 1,
    name: "Dr. A. Kumar",
    spec: "Critical Care Specialist",
    timing: "10:00 AM - 4:00 PM",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    details: "12+ years ICU experience handling ventilator support, trauma care, multi-organ failure stabilization and emergency critical care protocols.",
    qual: "MBBS, MD (Critical Care)",
    awards: ["Best ICU Practitioner 2020", "ABEC Fellowship", "Critical Care Excellence Award"],
    contact: "+91 98765 43210",
    expertise: ["Ventilator Management", "Trauma Care", "Sepsis Management", "Multi-organ Support"],
    experience: "12+ Years",
    icon: "🫁"
  },
  {
    id: 2,
    name: "Dr. S. Patel",
    spec: "Emergency Physician",
    timing: "12:00 PM - 8:00 PM",
    img: "https://images.unsplash.com/photo-1594824434340-7e7dfc37cabb?auto=format&fit=crop&w=800&q=80",
    details: "Expert in emergency cardiac care, stroke intervention, accident trauma, and rapid emergency response under high-pressure conditions.",
    qual: "MBBS, DNB (Emergency Medicine)",
    awards: ["Trauma Response Award 2019", "Emergency Excellence 2022"],
    contact: "+91 91234 56789",
    expertise: ["Emergency Response", "Trauma Surgery", "Stroke Intervention", "Cardiac Emergencies"],
    experience: "9+ Years",
    icon: "⚡"
  },
  {
    id: 3,
    name: "Dr. R. Mehta",
    spec: "Cardiac Intensivist",
    timing: "9:00 AM - 5:00 PM",
    img: "https://images.unsplash.com/photo-1612349316293-9a9d910e5e6e?auto=format&fit=crop&w=800&q=80",
    details: "15+ years experience in cardiac ICU, post-operative cardiac support, ventilator care, advanced ACLS and critical cardiac interventions.",
    qual: "MBBS, MD (Cardiology)",
    awards: ["Cardiac Care Excellence 2021", "ACLS Instructor Award"],
    contact: "+91 99876 54321",
    expertise: ["Cardiac ICU", "Post-op Care", "ACLS Protocols", "Ventilator Support"],
    experience: "15+ Years",
    icon: "❤️"
  },
  {
    id: 4,
    name: "Dr. N. Shah",
    spec: "Pulmonologist & Intensivist",
    timing: "2:00 PM - 10:00 PM",
    img: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=800&q=80",
    details: "Specialises in complex ventilator weaning, ARDS management and multi-disciplinary respiratory critical care with focus on pulmonary rehabilitation.",
    qual: "MBBS, MD (Pulmonology)",
    awards: ["Pulmonary Excellence Award", "Research Innovation 2020"],
    contact: "+91 90123 45678",
    expertise: ["Ventilator Weaning", "ARDS Management", "Respiratory Care", "Pulmonary Rehab"],
    experience: "11+ Years",
    icon: "🌬️"
  }
];

const visiting = [
  { 
    name: "Dr. L. Desai", 
    spec: "Nephrologist", 
    img: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=800&q=80",
    expertise: "Renal Critical Care"
  },
  { 
    name: "Dr. M. Rao", 
    spec: "Neurologist", 
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    expertise: "Neuro Critical Care"
  }
];

export default function Doctors() {
  const [openId, setOpenId] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredDoctors = filter === "all" 
    ? doctors 
    : doctors.filter(d => d.spec.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-transparent"
        />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-sky-200 shadow-sm mb-6"
            >
              <span className="text-sky-600 font-semibold">Meet Our Medical Experts</span>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gray-900">Expert</span>
              <br />
              <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                Medical Team
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              Multidisciplinary critical care and emergency specialists available 24/7 to manage complex medical and surgical emergencies with expertise and compassion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 pb-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {["all", "Critical Care", "Emergency", "Cardiac", "Pulmonology"].map((tab, index) => (
              <motion.button
                key={tab}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(tab === "all" ? "all" : tab)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  filter === (tab === "all" ? "all" : tab)
                    ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-sky-200 hover:border-sky-300"
                }`}
              >
                {tab === "all" ? "All Specialists" : tab}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
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
                className="group relative"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                  {/* Main Content */}
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Image Section */}
                      <motion.div 
                        className="relative flex-shrink-0"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="relative w-full md:w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
                          <motion.img
                            src={doctor.img}
                            alt={doctor.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-lg">
                          <span className="text-2xl">{doctor.icon}</span>
                        </div>
                      </motion.div>

                      {/* Info Section */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900">{doctor.name}</h2>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">
                                {doctor.spec}
                              </span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-600 font-medium">{doctor.experience}</span>
                            </div>
                            <p className="text-gray-600 mt-3">{doctor.details}</p>
                          </div>

                          <div className="md:text-right">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                              <span className="font-medium text-gray-700">Available</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">{doctor.timing}</p>
                          </div>
                        </div>

                        {/* Awards & Expertise */}
                        <div className="mt-6">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {doctor.awards.map((award, idx) => (
                              <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-full text-sm"
                              >
                                <span className="text-amber-500">🏆</span>
                                <span className="text-amber-700 font-medium">{award}</span>
                              </motion.span>
                            ))}
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            {doctor.expertise.map((exp, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                <span className="text-sm text-gray-600">{exp}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-8 flex gap-3">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setOpenId(openId === doctor.id ? null : doctor.id)}
                            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl"
                          >
                            {openId === doctor.id ? 'Hide Details' : 'View Full Profile'}
                          </motion.button>
                          
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={`tel:${doctor.contact}`}
                            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-sky-200 text-sky-700 font-semibold hover:bg-sky-50"
                          >
                            <span>📞</span>
                            Contact
                          </motion.a>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {openId === doctor.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="mt-8 overflow-hidden"
                        >
                          <div className="pt-8 border-t border-gray-100">
                            <div className="grid md:grid-cols-2 gap-8">
                              <div className="space-y-6">
                                <div>
                                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Professional Details</h4>
                                  <div className="space-y-4">
                                    <div>
                                      <p className="text-sm text-gray-500">Qualifications</p>
                                      <p className="font-medium text-gray-800">{doctor.qual}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-500">Contact Number</p>
                                      <p className="font-medium text-gray-800">{doctor.contact}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Schedule Consultation</h4>
                                <div className="space-y-4">
                                  <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg"
                                  >
                                    Book Online Consultation
                                  </motion.button>
                                  <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full px-6 py-4 bg-white border-2 border-sky-200 text-sky-700 font-semibold rounded-xl"
                                  >
                                    Download Full CV
                                  </motion.button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visiting Consultants & Schedule */}
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
                  <h3 className="text-2xl font-bold text-gray-900">Visiting Consultants</h3>
                  <p className="text-gray-600">Specialists who consult with our team on complex cases.</p>
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
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                      <img
                        src={consultant.img}
                        alt={consultant.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{consultant.name}</h4>
                      <p className="text-gray-600 text-sm">{consultant.spec}</p>
                      <p className="text-sky-600 text-sm font-medium mt-1">{consultant.expertise}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* On-Call Schedule */}
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
                  <h3 className="text-2xl font-bold text-gray-900">On-Call Roster</h3>
                  <p className="text-gray-600">24/7 coverage for emergency response.</p>
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
                    whileHover={{ backgroundColor: "rgba(14, 165, 233, 0.05)" }}
                    className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-white/50"
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
                        <p className="font-semibold text-gray-900">{doctor.name}</p>
                        <p className="text-sm text-gray-500">{doctor.spec}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-800">{doctor.timing}</p>
                      <div className="flex items-center gap-1 justify-end mt-1">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-xs text-gray-500">Available</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500">
              <motion.div 
                className="absolute inset-0"
                animate={{ 
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
            
            <div className="relative z-10 p-12 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
              >
                <span className="text-4xl">🚨</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Need Urgent Medical Assistance?
              </h2>
              <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                Call our emergency line for immediate triage and hospital transfer coordination.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+911234567890"
                  className="px-10 py-5 bg-white text-rose-600 text-xl font-bold rounded-2xl shadow-2xl hover:bg-rose-50 transition-colors"
                >
                  🚑 Emergency: +91-123-456-7890
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="px-10 py-5 border-2 border-white text-white text-xl font-bold rounded-2xl hover:bg-white/10 transition-colors"
                >
                  👨‍⚕️ View All Specialists
                </motion.a>
              </div>
              
              <p className="text-white/70 text-sm mt-8">
                24/7 Emergency Response • Average Response Time: 8 minutes
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}