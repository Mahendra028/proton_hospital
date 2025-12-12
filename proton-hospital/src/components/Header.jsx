import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/services", label: "Services", icon: "🏥" },
    { path: "/doctors", label: "Doctors", icon: "👨‍⚕️" },
    { path: "/contact", label: "Contact", icon: "📞" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-sky-100"
            : "bg-gradient-to-r from-sky-900 via-sky-800 to-cyan-800"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <Link to="/" className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    scrolled ? "bg-gradient-to-r from-sky-600 to-cyan-500" : "bg-white"
                  }`}>
                    <span className={`text-lg font-bold ${
                      scrolled ? "text-white" : "text-sky-700"
                    }`}>P</span>
                  </div>
                  <motion.div
                    className="absolute -inset-1 rounded-full border-2 border-sky-300/30"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <h1 className={`text-xl font-bold tracking-tight ${
                    scrolled ? "text-sky-800" : "text-white"
                  }`}>
                    Proton Medical
                  </h1>
                  <p className={`text-xs ${
                    scrolled ? "text-sky-600" : "text-sky-200"
                  }`}>
                    Critical Care Centre
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Simple links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                      isActive(item.path)
                        ? scrolled
                          ? "bg-sky-100 text-sky-700"
                          : "bg-white/20 text-white"
                        : scrolled
                        ? "text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                        : "text-sky-100 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-semibold">{item.label}</span>
                    {isActive(item.path) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-2 left-1/2 w-6 h-1 bg-cyan-400 rounded-full -translate-x-1/2"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* Emergency Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4"
              >
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span className="text-lg">🚑</span>
                  <span>Emergency</span>
                </a>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-3 rounded-xl ${
                scrolled
                  ? "bg-sky-100 text-sky-700"
                  : "bg-white/20 text-white"
              }`}
              aria-label="Menu"
            >
              <div className="w-6 h-6 relative">
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className={`absolute left-0 w-full h-0.5 ${
                    scrolled ? "bg-sky-700" : "bg-white"
                  }`}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`absolute left-0 top-2 w-full h-0.5 ${
                    scrolled ? "bg-sky-700" : "bg-white"
                  }`}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className={`absolute left-0 top-4 w-full h-0.5 ${
                    scrolled ? "bg-sky-700" : "bg-white"
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className={`px-6 py-4 space-y-1 ${
                scrolled
                  ? "bg-white border-t border-sky-100"
                  : "bg-gradient-to-b from-sky-800 to-sky-900"
              }`}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                        isActive(item.path)
                          ? scrolled
                            ? "bg-sky-100 text-sky-700"
                            : "bg-white/20 text-white"
                          : scrolled
                          ? "text-gray-700 hover:bg-sky-50"
                          : "text-sky-100 hover:bg-white/10"
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-semibold">{item.label}</span>
                      {isActive(item.path) && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Emergency Call in Mobile */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 mt-4 border-t border-sky-700/30"
                >
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-red-600 to-rose-500 text-white font-bold rounded-xl shadow-lg"
                  >
                    <span className="text-2xl">🚨</span>
                    <div className="text-center">
                      <div>Emergency Call</div>
                      <div className="text-sm font-normal">+91-9876543210</div>
                    </div>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-20" />
    </>
  );
}