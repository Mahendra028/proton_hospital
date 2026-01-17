

import React from "react";
import { motion } from "framer-motion";

export default function StatisticalHighlight() {
  return (
    <section className="bg-[#fbf9f5] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">

        {/* LABEL */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.25em] text-center text-gray-500 mb-5"
        >
           <span className="text-lg">✚</span> Statistical Highlights
        </motion.p>
 
         
      
        {/* TITLE */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-2xl font-normal text-center text-black sm:mb-14 lg:mb-16 sm:text-3xl lg:text-4xl"
        >
          Measuring  Our <span className="text-red-700">Commitment</span> 
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 lg:gap-8">

          {/* LEFT — LARGE IMAGE */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden md:col-span-6"
          >
            <img
              src="/images/stat-main.jpg"
              alt="Stat main"
              className="w-full h-[260px] sm:h-[380px] lg:h-[520px] object-cover"
            />

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 bg-black/40"
            >
              <p className="text-xs leading-relaxed text-white sm:text-sm">
                Medenic has been a trusted healthcare partner for individuals
                and families across our community.
              </p>
            </motion.div>
          </motion.div>

          {/* MIDDLE COLUMN */}
          <div className="flex flex-col gap-6 md:col-span-3 lg:gap-8">

            {/* MIDDLE TOP IMAGE */}
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              src="/images/stat-top.jpg"
              alt="Stat top"
              className="w-full h-[200px] sm:h-[220px] lg:h-[240px] object-cover"
            />

            {/* MIDDLE BOTTOM TEXT */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex items-center justify-center h-[200px] sm:h-[220px] lg:h-[240px] px-4 sm:px-5 lg:px-6 text-center bg-[#f7f4ec]"
            >
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xs text-black sm:text-sm"
              >
                We respect your time with efficient appointments
              </motion.p>
            </motion.div>
          </div>

          {/* RIGHT — STATS */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center md:col-span-3 h-[260px] sm:h-[360px] lg:h-[520px] bg-[#bfeaf2] text-center px-6 sm:px-7 lg:px-8"
          >
            <motion.h3
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-3 text-4xl font-semibold text-black sm:mb-4 sm:text-5xl"
            >
              98%
            </motion.h3>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs text-black sm:text-sm"
            >
              Patients consistently rate our care as excellent
              across all departments.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
