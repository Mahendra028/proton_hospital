import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [openModal, setOpenModal] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Welcome to Proton Critical Care — how can we help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("contact");
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((m) => [...m, { from: "user", text: input }]);
    setInput("");
    
    // Simulated bot reply
    setTimeout(() => {
      const responses = [
        "Thanks for your message. Our team will contact you shortly.",
        "We've noted your concern. An emergency coordinator will reach out soon.",
        "For immediate emergency assistance, please call our emergency line: +91 112 233 4455",
        "Your message has been received. Our critical care team is reviewing it."
      ];
      setMessages((m) => [...m, { 
        from: "bot", 
        text: responses[Math.floor(Math.random() * responses.length)] 
      }]);
    }, 800);
  }

  const faqs = [
    {
      question: "How do I transfer a critical patient to your facility?",
      answer: "Call our transfer line at +91 90000 33333 or email transfer@protonhospital.com with patient details, diagnosis, and estimated arrival time. Our team coordinates bed availability and specialist readiness."
    },
    {
      question: "What are the visiting hours for ICU patients?",
      answer: "ICU visiting hours are 10:00 AM – 6:00 PM with a maximum of 2 visitors per patient. Emergency exceptions are considered case-by-case with attending physician approval."
    },
    {
      question: "Do you accept walk-in emergency cases?",
      answer: "Yes, we accept walk-in emergencies 24/7. For non-emergency consultations, we recommend booking appointments to minimize waiting time and ensure specialist availability."
    },
    {
      question: "Is parking available for visitors?",
      answer: "Yes, we provide dedicated visitor parking with priority access for emergency vehicles. Valet parking is available for patients with mobility challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/30 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
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
              className="inline-block px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-sky-200 shadow-sm mb-6"
            >
              <span className="text-sky-600 font-semibold">24/7 Emergency & Critical Care Support</span>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              
            
              <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
               Contact & Support
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              Immediate assistance for critical care coordination, emergency response, and medical consultations.
              Our team is available 24/7 through multiple channels.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Navigation - Removed departments tab */}
      <section className="px-6 pb-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {["contact", "location"].map((tab, index) => (
              <motion.button
                key={tab}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-sky-200 hover:border-sky-300"
                }`}
              >
                {tab === "contact" ? "Primary Contact" : "Location & Map"}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pb-20">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-3 gap-8"
              >
                {/* Primary Contact Card */}
                <div className="bg-gradient-to-br from-white to-sky-50 rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl">
                      <span className="text-2xl text-white">📞</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Primary Contact</h2>
                      <p className="text-gray-600">Proton Critical Care Centre, Kanwar Nagar, Amravati</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Emergency Line */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="p-5 bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl border border-red-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            <p className="text-sm font-medium text-red-700">Emergency Line</p>
                          </div>
                          <p className="text-xl font-bold text-gray-900 mt-1">+91 112 233 4455</p>
                          <p className="text-sm text-gray-600">24/7 Critical Care Response</p>
                        </div>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href="tel:+911122334455"
                          className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold rounded-xl shadow-lg"
                        >
                          Call Now
                        </motion.a>
                      </div>
                    </motion.div>

                    {/* Other Contacts */}
                    {[
                      { label: "Ambulance Dispatch", number: "+91 99876 54321", icon: "🚑", bgColor: "bg-orange-100", borderColor: "border-orange-200" },
                      { label: "Hospital Desk", number: "+91 98765 43210", icon: "🏥", bgColor: "bg-blue-100", borderColor: "border-blue-200" },
                      { label: "Email Support", number: "support@protonhospital.com", icon: "✉️", bgColor: "bg-cyan-100", borderColor: "border-cyan-200" }
                    ].map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${contact.bgColor} ${contact.borderColor}`}>
                            <span className="text-xl">{contact.icon}</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">{contact.label}</p>
                            <p className="font-medium text-gray-900">{contact.number}</p>
                          </div>
                        </div>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={contact.label.includes("Email") ? `mailto:${contact.number}` : `tel:${contact.number}`}
                          className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50"
                        >
                          {contact.label.includes("Email") ? "Email" : "Call"}
                        </motion.a>
                      </motion.div>
                    ))}

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setOpenModal(true)}
                        className="px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg"
                      >
                        Request Appointment
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setChatOpen(true)}
                        className="px-6 py-4 bg-white border-2 border-sky-200 text-sky-700 font-semibold rounded-xl hover:bg-sky-50"
                      >
                        Live Chat Support
                      </motion.button>
                    </div>

                    {/* Timings */}
                    <div className="pt-6 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-3">Operating Hours</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Visiting Hours</p>
                          <p className="font-medium">10:00 AM – 6:00 PM</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Admin Hours</p>
                          <p className="font-medium">Mon–Sat • 9:00 AM – 5:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section - Takes 2/3 width */}
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl">
                        <span className="text-2xl text-white">❓</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Common queries about our services and procedures</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {faqs.map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="border border-gray-200 rounded-2xl overflow-hidden"
                        >
                          <details className="group">
                            <summary className="cursor-pointer p-6 bg-gradient-to-r from-gray-50 to-white hover:from-sky-50 transition-all flex items-center justify-between">
                              <span className="font-semibold text-gray-900">{faq.question}</span>
                              <motion.span
                                animate={{ rotate: 0 }}
                                className="text-gray-400 group-open:rotate-180 transition-transform"
                              >
                                ▼
                              </motion.span>
                            </summary>
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="px-6 pb-6 text-gray-600"
                            >
                              {faq.answer}
                            </motion.div>
                          </details>
                        </motion.div>
                      ))}
                    </div>

                    {/* Emergency CTA */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-8 p-6 bg-gradient-to-r from-rose-50 to-red-50 rounded-2xl border border-rose-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">Need Immediate Assistance?</h4>
                          <p className="text-gray-600 mt-1">Contact our emergency line for critical care coordination</p>
                        </div>
                        <div className="flex gap-3">
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="tel:+911122334455"
                            className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold rounded-xl shadow-lg"
                          >
                            🚑 Emergency Call
                          </motion.a>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setChatOpen(true)}
                            className="px-6 py-3 bg-white border-2 border-rose-200 text-rose-700 font-semibold rounded-xl"
                          >
                            💬 Live Chat
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "location" && (
              <motion.div
                key="location"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl">
                        <span className="text-2xl text-white">📍</span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Our Location</h2>
                        <p className="text-gray-600">Proton Critical Care Centre — Kanwar Nagar, Amravati</p>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                      <iframe
                        title="Proton Hospital Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.987654321098!2d77.74999999999999!3d21.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a987654321ab%3A0x1234567890abcdef!2sProton%20Critical%20Care%20Centre!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                        className="w-full h-96"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="p-6 bg-gradient-to-br from-sky-50 to-white rounded-2xl border border-sky-100">
                        <h4 className="font-bold text-gray-900 mb-4">Facility Information</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <span className="text-sky-500">📍</span>
                            <span className="text-gray-700">Amravati, Maharashtra 444607</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-sky-500">🅿️</span>
                            <span className="text-gray-700">Dedicated visitor parking available</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-sky-500">♿</span>
                            <span className="text-gray-700">Wheelchair accessible facilities</span>
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 bg-gradient-to-br from-cyan-50 to-white rounded-2xl border border-cyan-100">
                        <h4 className="font-bold text-gray-900 mb-4">Contact Points</h4>
                        <ul className="space-y-3">
                          <li>
                            <p className="text-sm text-gray-500">Reception</p>
                            <p className="font-medium text-gray-900">+91 98765 43210</p>
                          </li>
                          <li>
                            <p className="text-sm text-gray-500">Patient Relations</p>
                            <p className="font-medium text-gray-900">patients@protonhospital.com</p>
                          </li>
                          <li>
                            <p className="text-sm text-gray-500">Emergency Access</p>
                            <p className="font-medium text-gray-900">Gate 1 (24/7)</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency CTA for Location Tab */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-rose-50 to-red-50 rounded-2xl p-8 border border-rose-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">Need Immediate Assistance?</h4>
                      <p className="text-gray-600 mt-1">Contact our emergency line for critical care coordination</p>
                    </div>
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="tel:+911122334455"
                        className="px-6 py-3 bg-gradient-to-r from-red-600 to-rose-500 text-white font-semibold rounded-xl shadow-lg"
                      >
                        🚑 Emergency Call
                      </motion.a>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setChatOpen(true)}
                        className="px-6 py-3 bg-white border-2 border-rose-200 text-rose-700 font-semibold rounded-xl"
                      >
                        💬 Live Chat
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Appointment Modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl w-full max-w-md shadow-2xl"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Request Appointment</h2>
                    <p className="text-gray-600 mt-1">We'll contact you to confirm details</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setOpenModal(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <span className="text-2xl text-gray-500">×</span>
                  </motion.button>
                </div>

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setOpenModal(false); }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Department</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition">
                      <option>Critical Care Unit</option>
                      <option>Cardiology Emergency</option>
                      <option>Trauma & Emergency</option>
                      <option>General Consultation</option>
                    </select>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl shadow-lg"
                    >
                      Submit Request
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setOpenModal(false)}
                      className="flex-1 px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed right-6 bottom-6 w-96 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-cyan-600 to-sky-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <span className="text-white text-xl">💬</span>
                    </div>
                    <div>
                      <p className="font-bold text-white">Live Support Chat</p>
                      <p className="text-sm text-white/80">Proton Critical Care Team</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setChatOpen(false)}
                    className="text-white/80 hover:text-white text-2xl"
                  >
                    ×
                  </motion.button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="h-96 p-4 space-y-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      msg.from === 'bot' 
                        ? 'bg-white border border-gray-200' 
                        : 'bg-gradient-to-r from-cyan-500 to-sky-500 text-white'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input */}
              <form onSubmit={sendMessage} className="p-4 border-t border-gray-200 bg-white">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 outline-none"
                    placeholder="Type your message..."
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white font-semibold rounded-xl shadow-lg"
                  >
                    Send
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Button */}
      {!chatOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setChatOpen(true)}
          className="fixed right-6 bottom-6 z-40 p-4 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-full shadow-2xl"
        >
          <span className="text-2xl">💬</span>
        </motion.button>
      )}
    </div>
  );
}