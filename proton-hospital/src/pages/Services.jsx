import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import icu from "../assets/icu.jpeg";
import drspatel from "../assets/Dr.S.Patel.jpeg";
import drrmehta from "../assets/Dr.R.Mehta.jpg";
import care from "../assets/critical-care-ward.jpg";
import cardiac from "../assets/cardiac.jpeg";
import post from "../assets/post-operative-care.jpg";
import joshi from "../assets/m-joshi.jpeg";
import Emergency from "../assets/Emergency.avif";
import trauma from "../assets/trauma.avif";
import kumar from "../assets/Dr.A.Kumar.avif";
import reddy from "../assets/reddy.avif";

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const services = [
    {
      title: "24×7 ICU Care",
      img: icu,
      desc: "Round-the-clock ICU support with advanced medical monitoring.",
      icon: "🕒",
      features: ["Continuous Monitoring", "Ventilator Support", "Critical Care Nurses"],
      fullDesc: "Our ICU provides 24/7 critical care with advanced life support systems, continuous monitoring by specialized intensivists, and dedicated nursing staff for patients requiring intensive medical attention."
    },
    {
      title: "Emergency Treatment",
      img: Emergency,
      desc: "Immediate care for trauma, cardiac arrest, stroke, and accidents.",
      icon: "⚡",
      features: ["Rapid Response", "Trauma Team", "Emergency Surgery"],
      fullDesc: "Emergency department equipped with trauma bays, resuscitation units, and immediate access to surgical teams for rapid intervention in life-threatening situations."
    },
    {
      title: "Critical Care Ward",
      img: care,
      desc: "Specialized units for critical patients requiring life support.",
      icon: "🏥",
      features: ["Life Support", "Specialized Monitoring", "Dedicated Staff"],
      fullDesc: "State-of-the-art critical care units with advanced monitoring systems, dedicated specialist teams, and isolation facilities for infectious disease management."
    },
    {
      title: "Cardiac Emergency",
      img: cardiac,
      desc: "Rapid response for heart attacks and severe cardiac conditions.",
      icon: "❤️",
      features: ["Cardiac Monitoring", "ECG Analysis", "Emergency Cath Lab"],
      fullDesc: "24/7 cardiac emergency care with rapid diagnostic capabilities, thrombolysis, and access to catheterization laboratory for immediate intervention in cardiac emergencies."
    },
    {
      title: "Trauma Management",
      img: trauma,
      desc: "Stabilization and expert treatment for accident-related injuries.",
      icon: "🚑",
      features: ["Trauma Team", "Surgical Intervention", "Rehabilitation"],
      fullDesc: "Comprehensive trauma care including initial stabilization, definitive surgical management, and coordinated rehabilitation services for optimal recovery."
    },
    {
      title: "Post-Operative Care",
      img: post,
      desc: "Safe recovery with continuous nurse and doctor supervision.",
      icon: "🩺",
      features: ["Recovery Monitoring", "Pain Management", "Physical Therapy"],
      fullDesc: "Dedicated post-operative care units with continuous monitoring, advanced pain management protocols, and early rehabilitation to ensure safe recovery."
    }
  ];

  const doctors = [
    {
      id: "kumar",
      name: "Dr. A. Kumar",
      spec: "Critical Care Specialist",
      img: kumar,
      timing: "10:00 AM - 4:00 PM",
      exp: "12+ years",
      education: "MD, Critical Care Medicine",
      bio: "Expert in ventilator management and multi-organ failure cases with over a decade of ICU experience."
    },
    {
      id: "patel",
      name: "Dr. S. Patel",
      spec: "Emergency Physician",
      img: drspatel,
      timing: "12:00 PM - 8:00 PM",
      exp: "9+ years",
      education: "MD, Emergency Medicine",
      bio: "Specializes in emergency cardiac care and mass-casualty triage with rapid response expertise."
    },
    {
      id: "mehta",
      name: "Dr. R. Mehta",
      spec: "Cardiac Intensivist",
      img: drrmehta,
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
      img: reddy,
      relation: "Family Member"
    },
    {
      name: "M. Joshi",
      quote: "Excellent emergency response and clear communication. Highly recommend the critical care team for any emergency.",
      img: joshi,
      relation: "Patient"
    }
  ];

  // Handle service interaction
  const handleServiceInteraction = (index) => {
    if (isMobile) {
      // On mobile, toggle the active service
      setActiveService(activeService === index ? null : index);
    } else {
      // On desktop, use hover
      setHoveredService(index);
    }
  };

  // Handle service mouse leave (desktop only)
  const handleServiceLeave = () => {
    if (!isMobile) {
      setHoveredService(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-20 px-4 md:px-6">
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
              className="inline-block px-4 md:px-6 py-2 md:py-3 bg-white/80 backdrop-blur-sm rounded-full border border-sky-200 shadow-sm mb-4 md:mb-6"
            >
              <span className="text-sky-600 font-semibold text-sm md:text-base">Comprehensive Critical Care Services</span>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
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
              className="text-base md:text-xl text-gray-600 leading-relaxed mb-8 md:mb-10 max-w-3xl mx-auto px-4"
            >
              Comprehensive ICU, emergency and post-operative services with highly experienced clinical teams 
              and state-of-the-art medical technology for optimal patient outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Our <span className="text-sky-600">Services</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto px-4">
              Specialized medical care designed for critical situations and optimal recovery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={!isMobile ? { y: -10 } : {}}
                onMouseEnter={() => !isMobile && setHoveredService(index)}
                onMouseLeave={handleServiceLeave}
                onClick={() => handleServiceInteraction(index)}
                className="group relative cursor-pointer"
              >
                <div className="relative h-64 md:h-80 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl">
                  {/* Image with overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                  
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: (isMobile ? activeService === index : hoveredService === index) ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 z-20 p-4 md:p-8 flex flex-col justify-between">
                    <div>
                      <motion.div
                        className="inline-block p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-lg md:rounded-xl mb-2 md:mb-4"
                        whileHover={!isMobile ? { rotate: 360 } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-xl md:text-2xl">{service.icon}</span>
                      </motion.div>
                      
                      <motion.h3
                        className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2"
                        animate={{
                          y: (isMobile ? activeService === index : hoveredService === index) ? -3 : 0
                        }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      {/* Always visible short description on mobile */}
                      <p className="text-white/80 text-sm md:hidden">
                        {service.desc}
                      </p>
                    </div>

                    {/* Detailed information - visible on hover (desktop) or tap (mobile) */}
                    <motion.div
                      className="space-y-2 md:space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: (isMobile ? activeService === index : hoveredService === index) ? 1 : 0,
                        y: (isMobile ? activeService === index : hoveredService === index) ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white/90 text-sm md:text-base hidden md:block">
                        {service.desc}
                      </p>
                      
                      <div className="space-y-1 md:space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0" />
                            <span className="text-xs md:text-sm text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Full description for mobile when expanded */}
                      {isMobile && activeService === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-2 pt-2 border-t border-white/20"
                        >
                          <p className="text-white/90 text-sm">{service.fullDesc}</p>
                        </motion.div>
                      )}
                      
                      {/* Learn More Button - Always visible on mobile, only on hover for desktop */}
                      
                    </motion.div>
                    
                    {/* Mobile tap indicator */}
                    {isMobile && (
                      <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4">
                        <motion.div
                          className="px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full"
                          animate={{ scale: activeService === index ? 1.1 : 1 }}
                        >
                          <span className="text-white text-xs">
                            {activeService === index ? "Tap to close" : "Tap for details"}
                          </span>
                        </motion.div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-white to-sky-50/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Expert <span className="text-sky-600">Physicians</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto px-4">
              Meet our team of specialized critical care doctors with extensive experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={!isMobile ? { y: -10 } : {}}
                onClick={() => setSelectedDoctor(selectedDoctor === doctor.id ? null : doctor.id)}
                className="relative cursor-pointer"
              >
                <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-xl border border-gray-100">
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <motion.img
                      src={doctor.img}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                      whileHover={!isMobile ? { scale: 1.1 } : {}}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                      <span className="px-2 md:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-sky-700">
                        {doctor.exp} Experience
                      </span>
                    </div>
                  </div>

                  <div className="p-4 md:p-8">
                    <h3 className="text-lg md:text-2xl font-bold text-gray-900">{doctor.name}</h3>
                    <p className="text-sky-600 font-medium text-sm md:text-base mt-1">{doctor.spec}</p>
                    <p className="text-gray-600 text-xs md:text-sm mt-2">{doctor.education}</p>
                    
                    <div className="mt-3 md:mt-4 flex items-center gap-2 text-gray-500">
                      <span className="text-base md:text-lg">🕒</span>
                      <span className="text-sm md:text-base">{doctor.timing}</span>
                    </div>

                    <AnimatePresence>
                      {selectedDoctor === doctor.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100"
                        >
                          <p className="text-gray-600 text-sm md:text-base">{doctor.bio}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.div 
                      className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-4 md:mt-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <motion.a
                        whileHover={!isMobile ? { scale: 1.05 } : {}}
                        whileTap={{ scale: 0.95 }}
                        href={`/doctors/${doctor.id}`}
                        className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-xl border border-sky-200 text-sky-700 font-medium text-center text-sm md:text-base hover:bg-sky-50"
                      >
                        View Profile
                      </motion.a>
                      <motion.a
                        whileHover={!isMobile ? { scale: 1.05 } : {}}
                        whileTap={{ scale: 0.95 }}
                        href="/contact"
                        className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-medium text-center text-sm md:text-base shadow-lg"
                      >
                        Book Appointment
                      </motion.a>
                    </motion.div>
                    
                    {/* Mobile tap indicator */}
                    {isMobile && (
                      <div className="mt-3 text-center">
                        <span className="text-xs text-gray-500">
                          👆 Tap card to {selectedDoctor === doctor.id ? "close" : "read more"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Medical <span className="text-sky-600">Specialties</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto px-4">
              Areas of expertise where we provide exceptional care and outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={!isMobile ? { scale: 1.02 } : {}}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-sky-100 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <motion.div
                    className="inline-block p-3 md:p-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-lg md:rounded-xl mb-3 md:mb-4"
                    whileHover={!isMobile ? { rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-xl md:text-2xl text-white">{specialty.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{specialty.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{specialty.desc}</p>
                  
                  <motion.div
                    className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-sky-100"
                    initial={{ opacity: 0 }}
                    whileHover={!isMobile ? { opacity: 1 } : {}}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs md:text-sm text-sky-600 font-medium">Expert Care</span>
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
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-sky-50/50 to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Doctor <span className="text-sky-600">Schedule</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto px-4">
              Availability and consultation timings of our medical specialists
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="bg-gradient-to-r from-sky-50 to-cyan-50">
                    <th className="px-4 md:px-8 py-3 md:py-6 text-left">
                      <span className="text-sky-700 font-semibold text-sm md:text-base">Doctor</span>
                    </th>
                    <th className="px-4 md:px-8 py-3 md:py-6 text-left">
                      <span className="text-sky-700 font-semibold text-sm md:text-base">Specialty</span>
                    </th>
                    <th className="px-4 md:px-8 py-3 md:py-6 text-left">
                      <span className="text-sky-700 font-semibold text-sm md:text-base">Availability</span>
                    </th>
                    <th className="px-4 md:px-8 py-3 md:py-6 text-left">
                      <span className="text-sky-700 font-semibold text-sm md:text-base">Timings</span>
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
                      whileHover={!isMobile ? { backgroundColor: "rgba(14, 165, 233, 0.05)" } : {}}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td className="px-4 md:px-8 py-3 md:py-6">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={doctor.img} 
                              alt={doctor.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm md:text-base">{doctor.name}</div>
                            <div className="text-xs md:text-sm text-gray-500">{doctor.exp} experience</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 md:px-8 py-3 md:py-6">
                        <div className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1 bg-sky-100 text-sky-700 rounded-full">
                          <span className="text-xs md:text-sm">🏥</span>
                          <span className="font-medium text-xs md:text-sm">{doctor.spec}</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-8 py-3 md:py-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                          <span className="font-medium text-gray-700 text-sm md:text-base">Available</span>
                          <span className="text-gray-500 text-xs md:text-sm">(Mon-Sat)</span>
                        </div>
                      </td>
                      <td className="px-4 md:px-8 py-3 md:py-6">
                        <div className="px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-cyan-50 to-sky-50 rounded-lg border border-sky-200">
                          <span className="font-medium text-gray-700 text-sm md:text-base">{doctor.timing}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile scroll indicator */}
            {isMobile && (
              <div className="p-4 text-center border-t border-gray-100">
                <p className="text-gray-500 text-sm">
                  ← Scroll horizontally to view full table →
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Patient <span className="text-sky-600">Stories</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto px-4">
              Real experiences from patients and families we've served
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={!isMobile ? { y: -10 } : {}}
                className="relative"
              >
                <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl border border-gray-100">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={testimonial.img} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-3xl md:text-4xl text-sky-100 mb-2 md:mb-4">"</div>
                      <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">{testimonial.quote}</p>
                      <div>
                        <p className="font-bold text-gray-900 text-base md:text-lg">{testimonial.name}</p>
                        <p className="text-gray-600 text-sm md:text-base">{testimonial.relation}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-100">
                    <div className="flex gap-1 md:gap-2">
                      {[...Array(5)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                          className="text-yellow-400 text-lg md:text-xl"
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
      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl"
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
            
            <div className="relative z-10 p-6 md:p-12 text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block p-3 md:p-4 bg-white/20 backdrop-blur-sm rounded-xl md:rounded-2xl mb-4 md:mb-6"
              >
                <span className="text-3xl md:text-4xl">🚨</span>
              </motion.div>
              
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                Emergency Assistance Available 24/7
              </h2>
              <p className="text-white/90 text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
                Our emergency team is ready to provide immediate medical support and rapid response
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center items-center">
                <motion.a
                  whileHover={!isMobile ? { scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" } : {}}
                  whileTap={{ scale: 0.95 }}
                  href="tel:+919876543210"
                  className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-5 bg-white text-rose-600 text-base md:text-xl font-bold rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl hover:bg-rose-50 transition-colors"
                >
                  📞 Emergency: +91-9876543210
                </motion.a>
                
                <motion.a
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-5 border-2 border-white text-white text-base md:text-xl font-bold rounded-xl md:rounded-2xl hover:bg-white/10 transition-colors"
                >
                  🏥 Contact Emergency Desk
                </motion.a>
              </div>
              
              <p className="text-white/70 text-xs md:text-sm mt-6 md:mt-8">
                Average response time: 8 minutes • Always available for critical care
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}