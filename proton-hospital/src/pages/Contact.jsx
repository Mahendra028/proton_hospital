import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "../components/Contact/Hero";

export default function ContactPage() {
  const [openModal, setOpenModal] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      from: "bot", 
      text: "Welcome to Proton Critical Care — how can we help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatOpen]);

  function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      from: "user",
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Thanks for your message. Our team will contact you shortly.",
        "We've noted your concern. An emergency coordinator will reach out soon.",
        "For immediate emergency assistance, please call +91 112 233 4455.",
        "Your message has been received. Our critical care team is reviewing it."
      ];

      const botMessage = {
        id: messages.length + 2,
        from: "bot",
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
    }, 800);
  }

  const faqs = [
    {
      id: 1,
      question: "How do I transfer a critical patient to your facility?",
      answer: "Call +91 90000 33333 or email transfer@protonhospital.com with patient details."
    },
    {
      id: 2,
      question: "What are the visiting hours for ICU patients?",
      answer: "10:00 AM – 6:00 PM (maximum two visitors)."
    },
    {
      id: 3,
      question: "Do you accept walk-in emergency cases?",
      answer: "Yes, walk-in emergencies are accepted 24/7."
    },
    {
      id: 4,
      question: "Is parking available for visitors?",
      answer: "Yes, dedicated parking is available with emergency priority."
    }
  ];

  // Updated location details for Kanwar Nagar, Amravati
  const locationDetails = {
    address: "Kanwar Nagar, Amravati, Maharashtra 444607",
    emergencyEntrance: "Main Gate, 24/7 access with dedicated ambulance bay",
    parking: "Dedicated parking area available, emergency priority slots near entrance",
    coordinates: {
      lat: 20.9331,
      lng: 77.7528
    },
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.658701824531!2d77.7528!3d20.9331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a3e6c6a7a7a7%3A0x9c8b9b9b9b9b9b9b!2sKanwar%20Nagar%2C%20Amravati%2C%20Maharashtra%20444607!5e0!3m2!1sen!2sin!4v1647892345678"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50/30 to-white">

      {/* HERO */}
      <Hero/>

      {/* TABS */}
      <section className="flex justify-center gap-4 pb-10 px-4">
        {[
          { id: "contact", label: "Primary Contact" },
          { id: "location", label: "Location & Map" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-sky-500 text-white shadow-lg shadow-sky-200"
                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
            aria-pressed={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </section>

      {/* MAIN CONTENT */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          
          {/* CONTACT TAB */}
          {activeTab === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-3 gap-6 md:gap-8"
            >
              
              {/* CONTACT CARD */}
              <div className="p-6 md:p-8 bg-white rounded-2xl md:rounded-3xl shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-2xl">🚨</span>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">Emergency Contact</h2>
                    <p className="text-sm text-gray-500">24/7 Emergency Line</p>
                  </div>
                </div>
                
                <a 
                  href="tel:+911122334455"
                  className="block text-2xl md:text-3xl font-bold text-sky-700 hover:text-sky-800 transition-colors"
                >
                  +91 112 233 4455
                </a>
                
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => setOpenModal(true)}
                    className="py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-medium transition-colors shadow-md hover:shadow-lg"
                  >
                    Book Appointment
                  </button>
                  <button
                    onClick={() => setChatOpen(true)}
                    className="py-3 border-2 border-sky-400 hover:border-sky-500 text-sky-700 hover:text-sky-800 rounded-xl font-medium transition-all hover:bg-sky-50"
                  >
                    Live Chat Support
                  </button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="font-medium text-gray-700">Other Contacts</p>
                  <div className="mt-2 space-y-2">
                    <a href="mailto:info@protonhospital.com" className="block text-gray-600 hover:text-sky-600">
                      info@protonhospital.com
                    </a>
                    <p className="text-gray-600">For non-emergency: +91 90000 33333</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="lg:col-span-2 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                    <span className="text-2xl">❓</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>
                
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <details 
                      key={faq.id}
                      className="group border border-gray-200 rounded-xl p-4 hover:border-sky-300 transition-colors"
                    >
                      <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                        <span>{faq.question}</span>
                        <span className="transform transition-transform group-open:rotate-180">▼</span>
                      </summary>
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-3 text-gray-600 leading-relaxed pl-2"
                      >
                        {faq.answer}
                      </motion.p>
                    </details>
                  ))}
                </div>
              </div>
              
            </motion.div>
          )}

          {/* LOCATION TAB - UPDATED FOR KANWAR NAGAR, AMRAVATI */}
          {activeTab === "location" && (
            <motion.div
              key="location"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">Our Location</h2>
                    <p className="text-gray-600">Proton Critical Care Center, Amravati</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="font-medium text-gray-900 flex items-center gap-2">
                      <span>🏥</span> Full Address
                    </p>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {locationDetails.address}
                    </p>
                    <a 
                      href={`https://maps.google.com/?q=${encodeURIComponent(locationDetails.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sky-600 hover:text-sky-700 font-medium text-sm"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="font-medium text-gray-900 flex items-center gap-2">
                      <span>🚑</span> Emergency Access
                    </p>
                    <p className="text-gray-600 mt-2">
                      {locationDetails.emergencyEntrance}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      • Ambulance bay with direct ICU access<br/>
                      • Emergency department open 24/7<br/>
                      • Critical care team on standby
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-xl">
                    <p className="font-medium text-gray-900 flex items-center gap-2">
                      <span>🅿️</span> Parking & Transport
                    </p>
                    <p className="text-gray-600 mt-2">
                      {locationDetails.parking}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      • Auto-rickshaw stand: 100m from entrance<br/>
                      • Bus stop: 200m (Routes: 101, 202, 305)<br/>
                      • Taxi service available at gate
                    </p>
                  </div>
                </div>

                {/* Additional location info */}
                <div className="grid md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-100">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                      <span>⏰</span> Visiting Hours
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• ICU: 10:00 AM – 6:00 PM (2 visitors)</li>
                      <li>• General Ward: 8:00 AM – 8:00 PM (3 visitors)</li>
                      <li>• Pediatric Unit: 9:00 AM – 7:00 PM (Parents allowed 24/7)</li>
                      <li>• Emergency: Immediate family only</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                      <span>📍</span> Nearby Landmarks
                    </h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 500m from Amravati Railway Station</li>
                      <li>• 1km from City Bus Stand</li>
                      <li>• 2km from Government Medical College</li>
                      <li>• Opposite Kanwar Nagar Police Station</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Google Map for Kanwar Nagar, Amravati */}
              <div className="rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-white p-4 border-b border-gray-200">
                  <h3 className="font-medium text-gray-900 flex items-center gap-2">
                    <span>🗺️</span> Interactive Map - Find Us Here
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Use the map below for directions to our facility
                  </p>
                </div>
                <iframe
                  title="Proton Critical Care Center Location - Kanwar Nagar, Amravati"
                  className="w-full h-[400px] md:h-[500px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={locationDetails.mapUrl}
                />
                <div className="bg-gray-50 p-4 border-t border-gray-200 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <span>💡</span> 
                    Tip: Click the Google Maps logo in the bottom left to open full map with directions
                  </p>
                </div>
              </div>

              {/* Directions section */}
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">How to Reach Us</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 border border-gray-200 rounded-xl">
                    <p className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <span>🚗</span> By Car/Taxi
                    </p>
                    <p className="text-gray-600 text-sm">
                      From Amravati Railway Station: 10 mins via Station Road<br/>
                      From Bus Stand: 15 mins via Rajapeth<br/>
                      Use GPS coordinates: {locationDetails.coordinates.lat}, {locationDetails.coordinates.lng}
                    </p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-xl">
                    <p className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <span>🚌</span> By Public Transport
                    </p>
                    <p className="text-gray-600 text-sm">
                      Bus Routes: 101, 202, 305 to Kanwar Nagar stop<br/>
                      Auto-rickshaw: Available from all major points<br/>
                      Nearest metro station: Coming soon
                    </p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-xl">
                    <p className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <span>🚑</span> Emergency Transport
                    </p>
                    <p className="text-gray-600 text-sm">
                      Call our ambulance: +91 112 233 4455<br/>
                      Helicopter pad: Available for air ambulances<br/>
                      Critical care transport: Available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </section>

      {/* CHAT WIDGET */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-4 right-4 w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200"
            style={{ zIndex: 50 }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-sky-600 to-teal-600 text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span>💬</span>
                </div>
                <div>
                  <p className="font-semibold">Live Support</p>
                  <p className="text-xs opacity-90">Typically replies within 2 minutes</p>
                </div>
              </div>
              <button 
                onClick={() => setChatOpen(false)}
                className="text-xl hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 p-4 overflow-y-auto bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex mb-3 ${
                    message.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className={`max-w-[80%] ${message.from === "user" ? "order-2" : "order-1"}`}>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.from === "user" 
                        ? "bg-sky-500 text-white rounded-br-none" 
                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"
                    }`}>
                      <p>{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-1">
                      {message.timestamp} {message.from === "user" ? "• You" : "• Support"}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={sendMessage} className="p-4 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  placeholder="Type your message here..."
                  autoFocus
                />
                <button 
                  type="submit"
                  className="px-6 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!input.trim()}
                >
                  Send
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Chat with our support team for immediate assistance
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat toggle button when closed */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 bg-sky-500 hover:bg-sky-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
          style={{ zIndex: 40 }}
          aria-label="Open live chat"
        >
          <span className="text-xl">💬</span>
          <span className="hidden sm:inline font-medium">Live Chat</span>
        </button>
      )}

    </div>
  );
}