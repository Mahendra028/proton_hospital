import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  
  const services = [
    {
      title: "24×7 ICU Care",
      img: "https://images.unsplash.com/photo-1576765608535-5dcd3d0ecf9b?auto=format&fit=crop&w=1200&q=80",
      desc: "Round-the-clock ICU support with advanced medical monitoring.",
      icon: "🕒",
      features: ["Continuous Monitoring", "Ventilator Support", "Critical Care Nurses"]
    },
    {
      title: "Emergency Treatment",
      img: "https://images.unsplash.com/photo-1600959907703-125ba1374a12?auto=format&fit=crop&w=1200&q=80",
      desc: "Immediate care for trauma, cardiac arrest, stroke, and accidents.",
      icon: "⚡",
      features: ["Rapid Response", "Trauma Team", "Emergency Surgery"]
    },
    {
      title: "Critical Care Ward",
      img: "https://images.unsplash.com/photo-1603398939215-5cee3e5e6dca?auto=format&fit=crop&w=1200&q=80",
      desc: "Specialized units for critical patients requiring life support.",
      icon: "🏥",
      features: ["Life Support", "Specialized Monitoring", "Dedicated Staff"]
    },
    {
      title: "Cardiac Emergency",
      img: "https://images.unsplash.com/photo-1586773860383-c54f2e7dc3ef?auto=format&fit=crop&w=1200&q=80",
      desc: "Rapid response for heart attacks and severe cardiac conditions.",
      icon: "❤️",
      features: ["Cardiac Monitoring", "ECG Analysis", "Emergency Cath Lab"]
    },
    {
      title: "Trauma Management",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      desc: "Stabilization and expert treatment for accident-related injuries.",
      icon: "🚑",
      features: ["Trauma Team", "Surgical Intervention", "Rehabilitation"]
    },
    {
      title: "Post-Operative Care",
      img: "https://images.unsplash.com/photo-1606248897732-2c6f3d9db18f?auto=format&fit=crop&w=1200&q=80",
      desc: "Safe recovery with continuous nurse and doctor supervision.",
      icon: "🩺",
      features: ["Recovery Monitoring", "Pain Management", "Physical Therapy"]
    }
  ];

  const doctors = [
    {
      id: "kumar",
      name: "Dr. A. Kumar",
      spec: "Critical Care Specialist",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      timing: "10:00 AM - 4:00 PM",
      exp: "12+ years",
      education: "MD, Critical Care Medicine",
      bio: "Expert in ventilator management and multi-organ failure cases with over a decade of ICU experience."
    },
    {
      id: "patel",
      name: "Dr. S. Patel",
      spec: "Emergency Physician",
      img: "https://images.unsplash.com/photo-1594824434340-7e7dfc37cabb?auto=format&fit=crop&w=800&q=80",
      timing: "12:00 PM - 8:00 PM",
      exp: "9+ years",
      education: "MD, Emergency Medicine",
      bio: "Specializes in emergency cardiac care and mass-casualty triage with rapid response expertise."
    },
    {
      id: "mehta",
      name: "Dr. R. Mehta",
      spec: "Cardiac Intensivist",
      img: "https://images.unsplash.com/photo-1612349316293-9a9d910e5e6e?auto=format&fit=crop&w=800&q=80",
      timing: "9:00 AM - 5:00 PM",
      exp: "15+ years",
      education: "DM, Cardiology",
      bio: "Leading cardiac intensivist with extensive experience in post-operative cardiac care and monitoring."
    }
  ];

  const specialties = [
    {
      name: "Ventilator Management",
      icon: "🫁",
      desc: "Advanced respiratory support with state-of-the-art ventilators"
    },
    {
      name: "Sepsis & Infection Care",
      icon: "🦠",
      desc: "Comprehensive infection control and sepsis management protocols"
    },
    {
      name: "Cardiac Critical Care",
      icon: "💓",
      desc: "Specialized cardiac monitoring and intervention units"
    },
    {
      name: "Trauma & Emergency Surgery",
      icon: "🔪",
      desc: "Immediate surgical intervention for trauma patients"
    },
    {
      name: "Neurological Critical Care",
      icon: "🧠",
      desc: "Advanced neuro-monitoring and stroke care"
    },
    {
      name: "Post-Operative Monitoring",
      icon: "📊",
      desc: "Continuous post-surgical care and recovery tracking"
    }
  ];

  const testimonials = [
    {
      name: "S. Reddy",
      quote: "Quick, compassionate ICU care saved my father. Staff were professional and caring throughout the recovery.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      relation: "Family Member"
    },
    {
      name: "M. Joshi",
      quote: "Excellent emergency response and clear communication. Highly recommend the critical care team for any emergency.",
      img: "https://images.unsplash.com/photo-1545996124-2d1d0a8d6aa0?auto=format&fit=crop&w=400&q=80",
      relation: "Patient"
    }
  ];

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
              <span className="text-sky-600 font-semibold">Comprehensive Critical Care Services</span>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gray-900">Advanced</span>
              <br />
              <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                Medical Services
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              Comprehensive ICU, emergency and post-operative services with highly experienced clinical teams 
              and state-of-the-art medical technology for optimal patient outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-sky-600">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Specialized medical care designed for critical situations and optimal recovery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="group relative"
              >
                <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
                  {/* Image with overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                  
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredService === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                    <div>
                      <motion.div
                        className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-xl mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-2xl">{service.icon}</span>
                      </motion.div>
                      
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2"
                        animate={{
                          y: hoveredService === index ? -5 : 0
                        }}
                      >
                        {service.title}
                      </motion.h3>
                    </div>

                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredService === index ? 1 : 0,
                        y: hoveredService === index ? 0 : 20
                      }}
                    >
                      <p className="text-white/90">{service.desc}</p>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                            <span className="text-sm text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <motion.div
                        className="flex gap-3 pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredService === index ? 1 : 0 }}
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-white text-sky-700 font-semibold rounded-lg flex-1"
                        >
                          Learn More
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-cyan-500 text-white font-semibold rounded-lg flex-1"
                        >
                          Contact
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-sky-50/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Expert <span className="text-sky-600">Physicians</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet our team of specialized critical care doctors with extensive experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedDoctor(selectedDoctor === doctor.id ? null : doctor.id)}
                className="relative cursor-pointer"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={doctor.img}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-sky-700">
                        {doctor.exp} Experience
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-sky-600 font-medium mt-1">{doctor.spec}</p>
                    <p className="text-gray-600 text-sm mt-2">{doctor.education}</p>
                    
                    <div className="mt-4 flex items-center gap-2 text-gray-500">
                      <span className="text-lg">🕒</span>
                      <span>{doctor.timing}</span>
                    </div>

                    <AnimatePresence>
                      {selectedDoctor === doctor.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-gray-100"
                        >
                          <p className="text-gray-600">{doctor.bio}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.div 
                      className="flex gap-3 mt-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={`/doctors/${doctor.id}`}
                        className="flex-1 px-4 py-3 rounded-xl border border-sky-200 text-sky-700 font-medium text-center hover:bg-sky-50"
                      >
                        View Profile
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/contact"
                        className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-medium text-center shadow-lg"
                      >
                        Book Appointment
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Medical <span className="text-sky-600">Specialties</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Areas of expertise where we provide exceptional care and outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-6 border border-sky-100 shadow-lg hover:shadow-xl transition-shadow">
                  <motion.div
                    className="inline-block p-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl mb-4"
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-2xl text-white">{specialty.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{specialty.name}</h3>
                  <p className="text-gray-600">{specialty.desc}</p>
                  
                  <motion.div
                    className="mt-4 pt-4 border-t border-sky-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-sky-600 font-medium">Expert Care</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-sky-500"
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-sky-50/50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Doctor <span className="text-sky-600">Schedule</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Availability and consultation timings of our medical specialists
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-sky-50 to-cyan-50">
                    <th className="px-8 py-6 text-left">
                      <span className="text-sky-700 font-semibold">Doctor</span>
                    </th>
                    <th className="px-8 py-6 text-left">
                      <span className="text-sky-700 font-semibold">Specialty</span>
                    </th>
                    <th className="px-8 py-6 text-left">
                      <span className="text-sky-700 font-semibold">Availability</span>
                    </th>
                    <th className="px-8 py-6 text-left">
                      <span className="text-sky-700 font-semibold">Timings</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor, index) => (
                    <motion.tr
                      key={doctor.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ backgroundColor: "rgba(14, 165, 233, 0.05)" }}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden">
                            <img 
                              src={doctor.img} 
                              alt={doctor.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{doctor.name}</div>
                            <div className="text-sm text-gray-500">{doctor.exp} experience</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-700 rounded-full">
                          <span className="text-sm">🏥</span>
                          <span className="font-medium">{doctor.spec}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                          <span className="font-medium text-gray-700">Available</span>
                          <span className="text-gray-500 text-sm">(Mon-Sat)</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-sky-50 rounded-lg border border-sky-200">
                          <span className="font-medium text-gray-700">{doctor.timing}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Patient <span className="text-sky-600">Stories</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real experiences from patients and families we've served
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={testimonial.img} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl text-sky-100 mb-4">"</div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">{testimonial.quote}</p>
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-gray-600">{testimonial.relation}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                          className="text-yellow-400 text-xl"
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 px-6">
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
                Emergency Assistance Available 24/7
              </h2>
              <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
                Our emergency team is ready to provide immediate medical support and rapid response
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+919876543210"
                  className="px-10 py-5 bg-white text-rose-600 text-xl font-bold rounded-2xl shadow-2xl hover:bg-rose-50 transition-colors"
                >
                  📞 Emergency: +91-9876543210
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="px-10 py-5 border-2 border-white text-white text-xl font-bold rounded-2xl hover:bg-white/10 transition-colors"
                >
                  🏥 Contact Emergency Desk
                </motion.a>
              </div>
              
              <p className="text-white/70 text-sm mt-8">
                Average response time: 8 minutes • Always available for critical care
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}