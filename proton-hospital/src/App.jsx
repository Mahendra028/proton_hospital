import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        <ScrollToTop behavior="smooth" /> 
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
