import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import kumar from "../assets/Dr.A.Kumar.avif";
import drspatel from "../assets/Dr.S.Patel.jpeg";
import drrmehta from "../assets/Dr.R.Mehta.jpg";
import Shah from "../assets/Shah.avif";
import Desai from "../assets/Desai.avif";
import rao from "../assets/rao.webp";
import Herosection from "../components/Docters/Herosection";
import Filtertabs from "../components/Docters/Filtertabs";
import Doctergrid from "../components/Docters/Doctergrid";
import Visitingshedule from "../components/Docters/Visitingshedule";


const doctors = [
  {
    id: 1,
    name: "Dr. A. Kumar",
    spec: "Critical Care Specialist",
    timing: "10:00 AM - 4:00 PM",
    img: kumar,
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
    img: drspatel,
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
    img: drrmehta,
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
    img: Shah,
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
    img: Desai,
    expertise: "Renal Critical Care"
  },
  { 
    name: "Dr. M. Rao", 
    spec: "Neurologist", 
    img: rao,
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
     <Herosection/>

      {/* Filter Tabs */}
    <Filtertabs/>

      {/* Doctors Grid */}
      <Doctergrid/>

      {/* Visiting Consultants & Schedule */}
      <Visitingshedule/>

    </div>
  );
}