import React, { useState } from "react";
import icu from "../assets/icu.jpeg";
import drspatel from "../assets/Dr.S.Patel.jpeg";
import drrmehta from "../assets/Dr.R.Mehta.jpg";
import care from "../assets/critical-care-ward.jpg";
import cardiac from "../assets/cardiac.jpeg";
import post from "../assets/post-operative-care.jpg";
import Emergency from "../assets/Emergency.avif";
import trauma from "../assets/trauma.avif";
import kumar from "../assets/Dr.A.Kumar.avif";
import Headerofservice from "../components/services/Headerofservice";
import Medicalservices from "../components/services/Medicalservices";
import Doctersection from "../components/services/Doctersection";
import Specialaties from "../components/services/Specialaties";
import Doctershedule from "../components/services/Doctershedule";

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);
  const [expandedDoctor, setExpandedDoctor] = useState(null);

  const services = [
    {
      title: "24×7 ICU Care",
      img: icu,
      desc: "Round-the-clock ICU support with advanced medical monitoring.",
      features: ["Continuous Monitoring", "Ventilator Support", "Critical Care Nurses", "Specialist Availability"],
    },
    {
      title: "Emergency Treatment",
      img: Emergency,
      desc: "Immediate care for trauma, cardiac arrest, stroke, and accidents.",
      features: ["Rapid Response", "Trauma Team", "Emergency Surgery", "Advanced Life Support"],
    },
    {
      title: "Critical Care Ward",
      img: care,
      desc: "Specialized units for critical patients requiring life support.",
      features: ["Life Support", "Specialized Monitoring", "Dedicated Staff", "Infection Control"],
    },
    {
      title: "Cardiac Emergency",
      img: cardiac,
      desc: "Rapid response for heart attacks and severe cardiac conditions.",
      features: ["Cardiac Monitoring", "ECG Analysis", "Emergency Cath Lab", "Cardiac ICU"],
    },
    {
      title: "Trauma Management",
      img: trauma,
      desc: "Stabilization and expert treatment for accident-related injuries.",
      features: ["Trauma Team", "Surgical Intervention", "Rehabilitation", "Orthopedic Care"],
    },
    {
      title: "Post-Operative Care",
      img: post,
      desc: "Safe recovery with continuous nurse and doctor supervision.",
      features: ["Recovery Monitoring", "Pain Management", "Physical Therapy", "Wound Care"],
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
      education: "MD in Critical Care Medicine",
      qualifications: ["Fellowship in Critical Care", "Advanced Life Support Certified", "Member of ICU Society"],
      bio: "Expert in ventilator management and multi-organ failure cases with over a decade of ICU experience. Specializes in sepsis management and advanced respiratory support."
    },
    {
      id: "patel",
      name: "Dr. S. Patel",
      spec: "Emergency Physician",
      img: drspatel,
      timing: "12:00 PM - 8:00 PM",
      exp: "9+ years",
      education: "MD in Emergency Medicine",
      qualifications: ["Trauma Care Certified", "ACLS Instructor", "Disaster Management Expert"],
      bio: "Specializes in emergency cardiac care and mass-casualty triage with rapid response expertise. Leads the emergency response team for critical cases."
    },
    {
      id: "mehta",
      name: "Dr. R. Mehta",
      spec: "Cardiac Intensivist",
      img: drrmehta,
      timing: "9:00 AM - 5:00 PM",
      exp: "15+ years",
      education: "DM in Cardiology",
      qualifications: ["Interventional Cardiology", "Cardiac ICU Director", "Research Publications"],
      bio: "Leading cardiac intensivist with extensive experience in post-operative cardiac care and monitoring. Expert in managing complex cardiac emergencies."
    }
  ];

  const specialties = [
    {
      name: "Ventilator Management",
      desc: "Advanced respiratory support with state-of-the-art ventilators and protocols."
    },
    {
      name: "Sepsis & Infection Care",
      desc: "Comprehensive infection control and sepsis management protocols."
    },
    {
      name: "Cardiac Critical Care",
      desc: "Specialized cardiac monitoring and intervention units with 24/7 coverage."
    },
    {
      name: "Trauma & Emergency Surgery",
      desc: "Immediate surgical intervention for trauma patients with rapid response."
    },
    {
      name: "Neurological Critical Care",
      desc: "Advanced neuro-monitoring and stroke care with specialist neurologists."
    },
    {
      name: "Post-Operative Monitoring",
      desc: "Continuous post-surgical care and recovery tracking systems."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section - Professional Teal Color */}
      <Headerofservice/>
      
      {/* Services Section */}
     <Medicalservices/>

      {/* Doctors Section */}
     <Doctersection/>

      {/* Specialties Section */}
    <Specialaties/>

      {/* Doctor Schedule */}
     <Doctershedule/>

         
    </div>
  );
}