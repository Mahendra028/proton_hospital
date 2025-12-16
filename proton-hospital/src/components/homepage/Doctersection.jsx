import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace these with your actual imports
import centerImage from "../../assets/scope.jpg";
import kumar from "../../assets/Dr.A.Kumar.avif";
import patel from "../../assets/Dr.S.Patel.jpeg";
import mehta from "../../assets/Dr.R.Mehta.jpg";

// Placeholder images for additional doctors
const doctor1 = "https://randomuser.me/api/portraits/men/32.jpg";
const doctor2 = "https://randomuser.me/api/portraits/women/44.jpg";
const doctor3 = "https://randomuser.me/api/portraits/men/67.jpg";

/* =======================
   6 Doctors Data Only
======================= */
const doctors = [
  {
    id: 1,
    name: "Dr. A. Kumar",
    role: "Critical Care Director",
    img: kumar,
    bio: "15+ years ICU experience, specialized in multi-organ failure management",
    details: "Dr. Kumar leads our ICU department with expertise in critical care protocols. He completed his fellowship at Johns Hopkins Hospital and has published 30+ research papers.",
    experience: "15 Years",
    awards: "Best Critical Care Specialist 2022",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Dr. S. Patel",
    role: "Emergency Medicine Head",
    img: patel,
    bio: "Expert in cardiac emergencies and trauma surgery",
    details: "Dr. Patel has reduced ER wait times by 40% and implemented advanced trauma protocols. She's board-certified in emergency medicine.",
    experience: "12 Years",
    awards: "Emergency Excellence Award 2023",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 3,
    name: "Dr. R. Mehta",
    role: "Cardiac ICU Chief",
    img: mehta,
    bio: "20+ years in cardiac intensive care and post-op recovery",
    details: "Dr. Mehta pioneered minimally invasive cardiac procedures. Fellow of the American College of Cardiology with 50+ successful complex surgeries.",
    experience: "20 Years",
    awards: "Cardiac Care Pioneer 2021",
    color: "from-rose-500 to-pink-500"
  },
  {
    id: 4,
    name: "Dr. L. Rodriguez",
    role: "Neurology Specialist",
    img: doctor1,
    bio: "Expert in stroke management and neurological disorders",
    details: "Dr. Rodriguez leads our stroke unit with advanced neuroimaging techniques. Harvard Medical School graduate with 14 years experience.",
    experience: "14 Years",
    awards: "Neurology Innovation Award",
    color: "from-purple-500 to-violet-500"
  },
  {
    id: 5,
    name: "Dr. M. Chen",
    role: "Pediatric Intensive Care",
    img: doctor2,
    bio: "Specialized in pediatric critical care and neonatal medicine",
    details: "Dr. Chen has treated over 5000 pediatric patients. Developed child-friendly ICU protocols that reduced anxiety by 60%.",
    experience: "11 Years",
    awards: "Pediatric Care Excellence",
    color: "from-amber-500 to-orange-500"
  },
  {
    id: 6,
    name: "Dr. J. Wilson",
    role: "Surgical ICU Lead",
    img: doctor3,
    bio: "Post-surgical care and complex surgical recovery expert",
    details: "Dr. Wilson manages high-risk post-operative cases. Implemented enhanced recovery protocols reducing hospital stays by 30%.",
    experience: "18 Years",
    awards: "Surgical Care Leadership",
    color: "from-indigo-500 to-blue-500"
  }
];

/* =======================
   Component
======================= */
export default function DoctorSection() {
  const [showDoctors, setShowDoctors] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isDesktop, setIsMobile] = useState(false);
  const [flipState, setFlipState] = useState({});

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle card flip
  const handleCardClick = (doctor) => {
    setSelectedDoctor(doctor);
    setFlipState(prev => ({
      ...prev,
      [doctor.id]: true
    }));
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
    setFlipState({});
  };

  return (
    <section className="relative py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Simplified Background Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold mb-4 shadow-md"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Meet Our Medical Experts
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Specialists</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Our team of board-certified specialists brings together decades of experience in critical care medicine.
          </motion.p>
          
          {!isDesktop && (
            <motion.div 
              className="mt-6 text-gray-500 text-sm"
              animate={{ opacity: showDoctors ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6 mx-auto mb-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
              <p className="text-gray-600">Hover over the center to explore our specialists</p>
            </motion.div>
          )}
        </motion.div>

        {/* =======================
             DESKTOP CIRCULAR VIEW - FIXED CARD SIZE
        ======================= */}
        {!isDesktop && (
          <div 
            className="relative flex justify-center items-center min-h-[700px] mb-20"
            onMouseEnter={() => setShowDoctors(true)}
            onMouseLeave={() => setShowDoctors(false)}
          >
            {/* Main Circular Container */}
            <div className="relative w-[700px] h-[700px]">
              
              {/* Center Hub - Fixed Positioning */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40"
                animate={{ 
                  scale: showDoctors ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-64 h-64 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                  <img
                    src={centerImage}
                    alt="Medical Excellence Hub"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <motion.div 
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-3 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="font-bold text-sm">MEDICAL HUB</span>
                </motion.div>
              </motion.div>

              {/* Doctor Cards - Larger Cards with Proper Content Fit */}
              <AnimatePresence>
                {showDoctors &&
                  doctors.map((doctor, index) => {
                    // Calculate circular positions
                    const angle = (index * (360 / doctors.length)) * (Math.PI / 180);
                    const radius = 280; // Slightly reduced for better fit
                    const centerX = 350;
                    const centerY = 350;
                    const x = centerX + Math.cos(angle) * radius - 120; // Subtract half of larger card width (240px/2)
                    const y = centerY + Math.sin(angle) * radius - 112.5; // Subtract half of larger card height (225px/2)

                    return (
                      <motion.div
                        key={doctor.id}
                        className="absolute w-60 h-[225px] bg-white rounded-xl shadow-lg p-4 text-center cursor-pointer border border-gray-100 z-30 flex flex-col"
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                        }}
                        initial={{ 
                          opacity: 0, 
                          scale: 0.5,
                          x: 350,
                          y: 350
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          x: 0,
                          y: 0,
                          rotate: 0
                        }}
                        exit={{ 
                          opacity: 0, 
                          scale: 0.5,
                          x: 350,
                          y: 350
                        }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.08,
                          type: "spring",
                          stiffness: 100,
                          damping: 15
                        }}
                        whileHover={{ 
                          scale: 1.08,
                          zIndex: 40,
                          boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)"
                        }}
                        onClick={() => handleCardClick(doctor)}
                      >
                        {/* Doctor Image - Smaller to save space */}
                        <div className="relative mb-3 flex-shrink-0">
                          <div className="w-14 h-14 rounded-full mx-auto overflow-hidden border-3 border-white shadow-md">
                            <img
                              src={doctor.img}
                              alt={doctor.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-white text-[10px] font-bold">{index + 1}</span>
                          </div>
                        </div>
                        
                        {/* Doctor Info - Compact and properly fitted */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="font-bold text-sm text-gray-900 mb-1 truncate">
                              {doctor.name}
                            </h4>
                            <p className={`text-xs font-semibold mb-2 bg-gradient-to-r ${doctor.color} bg-clip-text text-transparent truncate`}>
                              {doctor.role}
                            </p>
                            <p className="text-[11px] text-gray-500 line-clamp-3 mb-3 leading-tight">
                              {doctor.bio}
                            </p>
                          </div>
                          
                          {/* Action Button */}
                          <motion.button
                            className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs font-medium rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-sm mt-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Profile
                          </motion.button>
                        </div>
                      </motion.div>
                    );
                  })}
              </AnimatePresence>

              {/* Connection Lines */}
              <AnimatePresence>
                {showDoctors && (
                  <svg className="absolute inset-0 w-full h-full z-20">
                    {doctors.map((_, index) => {
                      const angle = (index * (360 / doctors.length)) * (Math.PI / 180);
                      const radius = 280;
                      const centerX = 350;
                      const centerY = 350;
                      const endX = centerX + Math.cos(angle) * (radius - 90);
                      const endY = centerY + Math.sin(angle) * (radius - 90);
                      
                      return (
                        <motion.line
                          key={`line-${index}`}
                          x1={centerX}
                          y1={centerY}
                          x2={centerX}
                          y2={centerY}
                          stroke="rgba(59, 130, 246, 0.25)"
                          strokeWidth="2"
                          strokeDasharray="4,4"
                          initial={{ pathLength: 0 }}
                          animate={{ 
                            pathLength: 1,
                            x2: endX,
                            y2: endY
                          }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                        />
                      );
                    })}
                  </svg>
                )}
              </AnimatePresence>

              {/* Circular Guide Ring */}
              {showDoctors && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-100/30 m-20"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </div>
          </div>
        )}

        {/* =======================
             MOBILE VIEW
        ======================= */}
        {isDesktop && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                className="bg-white rounded-xl shadow-lg p-5 text-center border border-gray-100 hover:shadow-xl transition-all duration-300 min-h-[280px] flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => handleCardClick(doctor)}
              >
                {/* Doctor Image */}
                <div className="relative inline-block mb-4 flex-shrink-0">
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img
                      src={doctor.img}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Doctor Info */}
                <div className="flex-1 flex flex-col">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">
                      {doctor.name}
                    </h3>
                    <p className={`text-blue-600 font-semibold mb-3 text-sm bg-gradient-to-r ${doctor.color} bg-clip-text text-transparent truncate`}>
                      {doctor.role}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {doctor.bio}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <motion.button
                    className="w-full py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-sm mt-auto"
                    whileTap={{ scale: 0.97 }}
                  >
                    View Profile
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

 
      </div>

      {/* =======================
           FLIP CARD MODAL POPUP
      ======================= */}
      <AnimatePresence>
        {selectedDoctor && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Flip Card Container */}
            <motion.div
              className="relative w-full max-w-md"
              initial={{ scale: 0.9, opacity: 0, rotateY: -180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateY: 180 }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 100,
                rotateY: { duration: 0.6 }
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Flip Card */}
              <motion.div
                className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
                animate={{ 
                  rotateY: flipState[selectedDoctor.id] ? 360 : 0 
                }}
                transition={{ 
                  rotateY: { 
                    duration: 0.6,
                    ease: "easeInOut"
                  }
                }}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Front of Card */}
                <div className="p-6 text-center">
                  <motion.button
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleCloseModal}
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </motion.button>

                  {/* Doctor Image */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={selectedDoctor.img}
                        alt={selectedDoctor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className={`px-3 py-1 bg-gradient-to-r ${selectedDoctor.color} text-white text-xs font-semibold rounded-full shadow-md`}>
                        {selectedDoctor.experience} Experience
                      </div>
                    </div>
                  </div>
                  
                  {/* Doctor Info */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedDoctor.name}
                  </h3>
                  <p className={`text-lg font-semibold mb-4 bg-gradient-to-r ${selectedDoctor.color} bg-clip-text text-transparent`}>
                    {selectedDoctor.role}
                  </p>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {selectedDoctor.details}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500 mb-1">Specialization</div>
                      <div className="font-semibold text-sm">{selectedDoctor.role}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-500 mb-1">Achievement</div>
                      <div className="font-semibold text-sm">{selectedDoctor.awards}</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className={`flex-1 py-3 bg-gradient-to-r ${selectedDoctor.color} text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Consultation
                    </motion.button>
                    <motion.button
                      className="flex-1 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 border border-gray-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCloseModal}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}