import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

// Intro
import Intro from "./components/Intro";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isIntro = location.pathname === "/intro";

  // ✅ FIRST VISIT INTRO LOGIC
  useEffect(() => {
    const introSeen = localStorage.getItem("introSeen");

    if (!introSeen && location.pathname === "/") {
      navigate("/intro", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {!isIntro && <Header />}

      <main className="flex-grow">
        <ScrollToTop behavior="smooth" />

        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {!isIntro && <Footer />}
    </div>
  );
}
