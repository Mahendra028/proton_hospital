import React, { useState } from "react";
import { motion } from "framer-motion";

export default function AppointmentForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.email || !form.message) {
      alert("Please fill all required fields (*)");
      return;
    }

    alert("Appointment request sent successfully!");

    setForm({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#f6f8fb] py-20 sm:py-24 lg:py-28 overflow-hidden">
      <motion.div
        className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* HEADING */}
        <motion.h2
          className="mb-4 text-2xl font-semibold text-center text-gray-900 sm:text-3xl lg:text-4xl"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Book an Appointment
        </motion.h2>

        <motion.p
          className="max-w-xl mx-auto mb-10 text-sm text-center text-gray-600 sm:text-base sm:mb-12 lg:mb-14"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Reach out to us for any inquiries — our medical team is ready to help you.
        </motion.p>

        {/* FORM CARD */}
        <motion.form
          onSubmit={handleSubmit}
          className="p-6 space-y-6 bg-gray-300 shadow-lg  rounded-xl sm:p-8 md:p-10 lg:p-14 sm:space-y-8"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* ROW 1 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First name *"
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-white border border-black rounded-md outline-none sm:px-5 sm:py-4 focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-white border border-black rounded-md outline-none sm:px-5 sm:py-4 focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-6">
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-white border border-black rounded-md outline-none sm:px-5 sm:py-4 focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-white border border-black rounded-md outline-none sm:px-5 sm:py-4 focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />
          </div>

          {/* MESSAGE */}
          <textarea
            name="message"
            placeholder="Write your message here *"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 text-sm bg-white border border-black rounded-md outline-none resize-none sm:px-5 sm:py-4 focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
          />

          {/* BUTTON */}
          <div className="flex justify-center pt-4 sm:pt-6">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-10 py-3 text-sm font-medium text-white transition-all rounded-md shadow-md  sm:w-auto sm:px-12 sm:py-4 bg-sky-500 hover:bg-sky-600"
            >
              BOOK APPOINTMENT
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
}
