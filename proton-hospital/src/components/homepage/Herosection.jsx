
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Link } from "react-router-dom";  
import hero1 from "../../assets/Hero1.jpg";
import hero2 from "../../assets/Hero2.jpg";
import hero3 from "../../assets/Hero3.jpg";

export default function Herosection() {
  const slides = [hero1, hero2, hero3];

  const services = [
    "Interventional Cardiology",
    "Nephrology",
    "Gynec & Obst",
    "Orthopedics",
    "General Medicine",
    "Oncology",
    "Onco Surgery",
    "Uro Surgery",
    "Interventional Radiology",
    "ICU (Critical Care)",
    "Neurosurgery",
    "Pediatrics",
    "General Surgery",
    "Maxillofacial",
    "Pathology",
    "Radiology",
    "Physiotherapy",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContent, setShowContent] = useState(false);

  /* HERO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % slides.length);
      setShowContent(false);
      setTimeout(() => setShowContent(true), 700);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 700);
  }, []);

  /* SLIDER LOGIC (PIXEL BASED – STABLE) */
  const marqueeRef = useRef(null);
  const controls = useAnimationControls();
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useLayoutEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    if (!marqueeWidth) return;
    controls.start({
      x: [0, -marqueeWidth],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [marqueeWidth]);

  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={slides[currentSlide]}
        alt="Hero"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* LEFT HALF CIRCLE */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="flex flex-col justify-center px-8 py-32 text-white hero-left lg:px-20">
          <div className={`hero-content ${showContent ? "show" : ""}`}>
            <p className="mb-4 text-sm tracking-widest opacity-90">
              CRITICAL CARE CENTER
            </p>

            <h1 className="mb-16 font-semibold text-7xl">
              Proton <span className="font-bold text-red-500">Hospital</span>
            </h1>
            
            <p className="max-w-md mb-10 leading-relaxed text-white/90">
              Experience expert healthcare with advanced technology and
              personalized treatment tailored to your unique medical needs.
            </p>

   <div className="flex flex-col items-start">
  <Link to="/bookappointment" className="relative z-10 inline-block">
    <button className="px-6 py-2 text-blue-600 bg-white rounded-full">
      Book Appointment
    </button>
  </Link>

  <div className="inline-flex flex-col items-start gap-1 px-6 py-5 mt-3 rounded-full sm:flex-col md:flex-col lg:flex-row lg:items-center lg:gap-6 bg-blue-900/50 w-fit">
    <span className="whitespace-nowrap">
      protonhospital@gmail.com
    </span>
    <span className="whitespace-nowrap">
      +91-96230-65862
    </span>
  </div>
</div>


          </div>
        </div>
      </div>

      {/* SLIDING SERVICES BAR */}
      <section className="absolute bottom-0 left-0 w-full py-4 overflow-hidden bg-blue-100/90 backdrop-blur-md">
        <motion.div
          ref={marqueeRef}
          className="flex gap-8 w-max"
          animate={controls}
          onMouseEnter={() => controls.stop()}
          onMouseLeave={() =>
            controls.start({
              x: [0, -marqueeWidth],
              transition: {
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              },
            })
          }
        >
          {[...services, ...services].map((service, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-900 transition cursor-pointer hover:text-blue-600 hover:scale-105"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              {service}
            </div>
          ))}
        </motion.div>
      </section>

      {/* STYLES */}
      <style>{`
        .hero-left {
          width: 55vw;
          min-height: 110vh;
          background: linear-gradient(
            to right,
            rgba(30, 64, 175, 0.95),
            rgba(59, 130, 246, 0.75),
            rgba(147, 197, 253, 0.35)
          );
          border-top-right-radius: 5000px;
          border-bottom-right-radius: 5000px;
          transform: scaleX(0);
          transform-origin: left;
          animation: revealCurve 1s ease-out forwards;
        }

        @keyframes revealCurve {
          to { transform: scaleX(1); }
        }

        .hero-content {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .hero-content.show {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .hero-left {
            width: 100%;
            min-height: auto;
            border-radius: 0;
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
