import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import advancedVentilation from "../assets/advanced-ventilation.jpg";
import drspatel from "../assets/Dr.S.Patel.jpeg";
import drrmehta from "../assets/Dr.R.Mehta.jpg";
import trauma from "../assets/trauma.avif";
import critical from "../assets/cardiac-critical-care.avif";
import kumar from "../assets/Dr.A.Kumar.avif";
import rjoshi from "../assets/rjoshi.avif";
import kapoor from "../assets/kapoor.avif";
import main from "../assets/main.png";

const imageCards = [
  {
    title: 'Advanced Ventilation',
    subtitle: 'State-class ventilators',
    img: advancedVentilation,
    content: 'Closed-loop ventilation modes, bedside monitoring and fast-response alarm protocols.',
    icon: '🫁'
  },
  {
    title: 'Trauma & Emergency',
    subtitle: 'Rapid response unit',
    img: trauma,
    content: 'Dedicated trauma bay with point-of-care imaging and multidisciplinary team activation.',
    icon: '⚡'
  },
  {
    title: 'Cardiac Critical Care',
    subtitle: 'Post-op support',
    img: critical,
    content: 'Continuous hemodynamic monitoring, invasive pressure management and targeted rehab planning.',
    icon: '❤️'
  }
];

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-cyan-50/20 to-sky-100/10 -z-10"
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* HERO SECTION - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-sky-50/90 via-blue-50/80 to-cyan-50/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-sky-200/50">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-sky-700">24/7 Critical Care Available</span>
              </div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                
                <span className="block mt-2">
                  <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                  Proton  Critical Care
                  </span>
                  <span className="text-gray-900 ml-4">Centre</span>
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
              >
                Modern ICU, experienced specialists, and compassionate emergency care in a calm, 
                healing environment. Clinical governance, measurable outcomes and clear family 
                communication form the backbone of our care delivery.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a 
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact" 
                  className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 shadow-lg relative overflow-hidden group"
                >
                  <span className="relative z-10">Contact Us</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-sky-600 to-cyan-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/services" 
                  className="px-8 py-4 rounded-xl font-semibold text-sky-600 bg-white border border-sky-200 shadow-lg hover:bg-sky-50 transition-colors"
                >
                  Explore Services
                </motion.a>
              </motion.div>

              {/* Stats Grid */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-4 max-w-md pt-8"
              >
                {[
                  { label: 'Response SLA', value: '8 min', color: 'text-emerald-600' },
                  { label: 'ICU Capacity', value: '50+ beds', color: 'text-sky-600' },
                  { label: 'Success Rate', value: '98.7%', color: 'text-teal-600' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-sky-100/50 shadow-sm"
                  >
                    <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <motion.img 
                  src = {main}
                  alt="Hospital ICU"
                  className="w-full h-[600px] object-cover"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 20, repeat: Infinity }}
                />
                
                {/* Image Overlay Content */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-sky-100 rounded-xl">
                      <span className="text-2xl">🏥</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Integrated Critical Care</h3>
                      <p className="text-sm text-gray-600 mt-1">Operational readiness • Clinical governance</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border"
              >
                <span className="text-sm font-medium text-sky-700">24/7 Emergency</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMAGE-CENTRIC SERVICE CARDS - Enhanced */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-4">
              Clinical Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advanced <span className="text-sky-600">Capabilities</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Cutting-edge medical services with precision, care, and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imageCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative group cursor-pointer"
              >
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl">
                  {/* Image with overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
                    variants={{
                      hover: { opacity: 0.9 }
                    }}
                  />
                  
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    variants={{
                      hover: { scale: 1.1 }
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                    <div>
                      <motion.div
                        className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-xl mb-4"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <span className="text-2xl">{card.icon}</span>
                      </motion.div>
                      
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2"
                        variants={{
                          hover: { y: -10 }
                        }}
                      >
                        {card.title}
                      </motion.h3>
                      <p className="text-sky-200 font-medium">{card.subtitle}</p>
                    </div>

                    <motion.div
                      className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                      initial={{ opacity: 0, y: 20 }}
                      variants={{
                        hover: { opacity: 1, y: 0 }
                      }}
                    >
                      <p className="text-white mb-4">{card.content}</p>
                      <motion.a
                        href="/services"
                        className="inline-flex items-center gap-2 text-white font-semibold group"
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <span className="group-hover:translate-x-2 transition-transform">→</span>
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SECTIONS - Enhanced */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-sky-50/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Operational Excellence",
                description: "Protocolised care pathways, daily multidisciplinary huddles and KPI-driven governance ensure predictability under pressure.",
                icon: "🎯",
                color: "from-cyan-500 to-sky-600",
                items: [
                  "Standard operating procedures for transfers",
                  "Real-time telemetry and dashboarding",
                  "Family liaison and structured updates"
                ]
              },
              {
                title: "Patient Experience",
                description: "We measure satisfaction, reduce noise pollution and provide bedside counselling to families during critical episodes.",
                icon: "💝",
                color: "from-emerald-500 to-teal-600",
                items: [
                  "Comfort-focused ICU bays",
                  "Counselling and social work support",
                  "Structured visiting windows"
                ]
              },
              {
                title: "Quality & Safety",
                description: "Infection control, checklists and morbidity reviews underpin clinical safety and continual improvement.",
                icon: "🛡️",
                color: "from-violet-500 to-purple-600",
                items: [
                  "Central sterile services",
                  "Hand-hygiene compliance",
                  "Mortality & morbidity audits"
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              >
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-6`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <ul className="space-y-3">
                  {item.items.map((listItem, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-sky-500 rounded-full" />
                      {listItem}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL LEADERSHIP - Enhanced */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Expert <span className="text-sky-600">Leadership</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet our senior clinicians who lead with expertise and compassion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. A. Kumar',
                role: 'Critical Care Specialist',
                img: kumar,
                bio: '12+ years ICU experience handling ventilator support, trauma care and multi-organ failure.',
                specialty: 'Ventilator Management'
              },
              {
                name: 'Dr. S. Patel',
                role: 'Emergency Physician',
                img: drspatel,
                bio: 'Expert in emergency cardiac care, stroke intervention and mass-casualty triage.',
                specialty: 'Emergency Medicine'
              },
              {
                name: 'Dr. R. Mehta',
                role: 'Cardiac Intensivist',
                img: drrmehta,
                bio: '15+ years cardiac ICU experience with advanced ACLS and post-op support.',
                specialty: 'Cardiac Care'
              }
            ].map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={doctor.img}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-sky-700">
                        {doctor.specialty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-gray-900">{doctor.name}</h4>
                    <p className="text-sky-600 font-medium mt-1">{doctor.role}</p>
                    <p className="text-gray-600 mt-4">{doctor.bio}</p>
                    
                    <motion.div 
                      className="flex gap-3 mt-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/doctors"
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
                        Book Consultation
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PATIENT STORIES - Enhanced */}
      <section className="py-24 px-6 bg-gradient-to-br from-sky-50/50 to-cyan-50/50">
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
              Real experiences that highlight our commitment to exceptional care
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                quote: "Transfer coordination and ambulance dispatch were immediate — care transition was seamless. The team's professionalism gave us confidence during a difficult time.",
                author: "R. Joshi",
                relation: "Family Member",
                image: rjoshi
              },
              {
                quote: "Clinical team demonstrated calm leadership during a complex emergency — outcomes were excellent. Their transparent communication kept us informed at every step.",
                author: "S. Kapoor",
                relation: "Patient",
                image:kapoor 
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={story.image} 
                          alt={story.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-4xl text-sky-100 mb-4">"</div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">{story.quote}</p>
                      <div>
                        <p className="font-bold text-gray-900">{story.author}</p>
                        <p className="text-gray-600">{story.relation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACITY METRICS - Enhanced */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Operational <span className="text-cyan-400">Excellence</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Real-time metrics and capacity tracking for transparent, efficient care delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'ICU Beds', value: '50', unit: 'Beds', color: 'bg-cyan-500', percent: 28 },
              { label: 'Ventilators', value: '18', unit: 'Units', color: 'bg-emerald-500', percent: 44 },
              { label: 'Staff On Duty', value: '28', unit: 'Personnel', color: 'bg-sky-500', percent: 70 },
              { label: 'Avg. Stay', value: '4.2', unit: 'Days', color: 'bg-violet-500', percent: 42 }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">{metric.label}</p>
                    <p className="text-3xl font-bold mt-2">
                      {metric.value} <span className="text-lg text-gray-300">{metric.unit}</span>
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${metric.color} flex items-center justify-center`}>
                    <span className="text-white font-bold">{metric.value}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Capacity</span>
                    <span className="text-white">{metric.percent}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${metric.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY CTA - Enhanced */}
      <section className="relative py-24 px-6 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-cyan-50/50"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-rose-600 to-orange-600 rounded-3xl p-12 text-center shadow-2xl"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
            >
              <span className="text-4xl">🚨</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Emergency Assistance
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Our emergency team is ready 24/7 with immediate medical support and rapid response
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919876543210"
                className="px-10 py-5 bg-white text-rose-600 text-xl font-bold rounded-2xl shadow-2xl hover:bg-rose-50 transition-colors"
              >
                📞 Call Now: +91-9876543210
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/emergency"
                className="px-10 py-5 border-2 border-white text-white text-xl font-bold rounded-2xl hover:bg-white/10 transition-colors"
              >
                🚑 Emergency Portal
              </motion.a>
            </div>
            
            <p className="text-white/70 text-sm mt-8">
              Average response time: 8 minutes • Always available
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}