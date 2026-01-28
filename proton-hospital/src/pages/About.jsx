import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import aboutHero from "../assets/about-hero.jpg";

import AboutStory from "../components/about/AboutStory";
import AboutSlider from "../components/about/AboutSlider";
import StatisticalHighlight from "../components/about/StatisticalHighlight";
import LatestArticles from "../components/about/LatestArticles";
import TestimonialHighlight from "../components/about/TestimonialHighlight";
import AboutIntro from "../components/about/AboutIntro";
import MedicalServices from "../components/about/Medical";
import HospitalSection from "../components/about/HospitalSection";

export default function About() {
  // const imageRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: imageRef,
  //   offset: ["start end", "center center"],
  // });

  // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <>
      {/* MAIN WRAPPER – PREVENTS HORIZONTAL GAP */}
      <section className="bg-[#fbf9f5] overflow-x-hidden">

        {/* ===== TOP CONTENT ===== */}
        <section className="bg-[#4f7eff]">
          <div className="px-4 py-20 mx-auto max-w-7xl">
            <h1 className="mb-3 text-4xl font-semibold text-white translate-y-4">
              About Us
            </h1>
            <p className="max-w-xl text-sm translate-y-4 text-white/90">
              Our commitment is rooted in trust, & patient-first
              values that guide everything we do.
            </p>
          </div>
        </section>

        {/* ===== IMAGE ===== */}
        {/* <motion.div
          ref={imageRef}
          className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
          style={{ scale }}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={aboutHero}
            alt="Medical Team at Work"
            className="w-full h-[260px] sm:h-[380px] lg:h-[520px] object-cover"
          />
        </motion.div> */}

      </section>
 
      <div className="overflow-x-hidden">
        <AboutIntro />
      </div>

      <div className="overflow-x-hidden">
        <AboutStory />
      </div>

      <div className="overflow-x-hidden">
        <StatisticalHighlight />
      </div>

      <div className="overflow-x-hidden">
        <MedicalServices />
      </div>

      <div className="overflow-x-hidden">
        <LatestArticles />
      </div>
    </>
  );
}

