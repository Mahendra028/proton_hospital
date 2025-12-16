import React, { useState } from 'react';
import advancedVentilation from "../assets/advanced-ventilation.jpg";
import drspatel from "../assets/Dr.S.Patel.jpeg";
import drrmehta from "../assets/Dr.R.Mehta.jpg";
import trauma from "../assets/trauma.avif";
import critical from "../assets/cardiac-critical-care.avif";
import kumar from "../assets/Dr.A.Kumar.avif";
import rjoshi from "../assets/rjoshi.avif";
import kapoor from "../assets/kapoor.avif";
import Capacity from '../components/homepage/Capacity';
import { motion, AnimatePresence } from "framer-motion";
import Herosection from '../components/homepage/Herosection';
import Capabilities from '../components/homepage/Capabilities';
import Detailedsections from '../components/homepage/Detailedsections';
import Doctersection from '../components/homepage/Doctersection';
import Patientstories from '../components/homepage/Patientstories';
import Emergency from '../components/homepage/Emergency';

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
  },
  {
    title: 'Neurological ICU',
    subtitle: 'Brain monitoring',
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: 'Advanced EEG monitoring, ICP management, and stroke care protocols.',
    icon: '🧠'
  },
  {
    title: 'Renal Support',
    subtitle: 'Dialysis services',
    img: 'https://images.unsplash.com/photo-1586773860418-dc22f8b874bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: 'Continuous renal replacement therapy and acute kidney injury management.',
    icon: '💧'
  },
  {
    title: 'Pediatric ICU',
    subtitle: 'Child specialist care',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    content: 'Specialized pediatric ventilation and family-centered care approach.',
    icon: '👶'
  }
];

export default function HomePage() {
  const [hoveredDoctor, setHoveredDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: 'Dr. A. Kumar',
      role: 'Critical Care Specialist',
      img: kumar,
      bio: '12+ years ICU experience handling ventilator support, trauma care and multi-organ failure.',
      specialty: 'Ventilator Management',
      education: 'MD in Critical Care Medicine',
      experience: '15 years',
      achievements: ['Certified in Advanced Life Support', 'Published 20+ research papers', 'Trainer for ICU protocols']
    },
    {
      id: 2,
      name: 'Dr. S. Patel',
      role: 'Emergency Physician',
      img: drspatel,
      bio: 'Expert in emergency cardiac care, stroke intervention and mass-casualty triage.',
      specialty: 'Emergency Medicine',
      education: 'MD in Emergency Medicine',
      experience: '12 years',
      achievements: ['Fellowship in Cardiac Emergency', 'Lead of Emergency Response Team', 'National award for emergency services']
    },
    {
      id: 3,
      name: 'Dr. R. Mehta',
      role: 'Cardiac Intensivist',
      img: drrmehta,
      bio: '15+ years cardiac ICU experience with advanced ACLS and post-op support.',
      specialty: 'Cardiac Care',
      education: 'DM in Cardiology',
      experience: '18 years',
      achievements: ['Pioneered advanced cardiac protocols', 'International conference speaker', 'Mentor for young cardiologists']
    }
  ];

  return (
    <div className="relative">
      {/* HERO SECTION - Clean without color overlay */}
      <Herosection/>

      {/* ADVANCED CAPABILITIES - Simple 2 per row */}
      <Capabilities/>


      {/* DETAILED SECTIONS */}
    <Detailedsections/>

      {/* DOCTORS SECTION - Simple responsive with hover */}
    <Doctersection/>





      {/* PATIENT STORIES */}
      <Patientstories/>

      {/* CAPACITY METRICS */}
      <section className="px-4 py-12 bg-white">
        <Capacity />
      </section>

      {/* EMERGENCY CTA - Simple */}
      <Emergency/>
    </div>
  );
}