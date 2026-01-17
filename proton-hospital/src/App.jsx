
import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import EmergencyPopup from "./components/EmergencyPopup";


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import OurServices from "./pages/OurServices";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Intro from "./components/Intro";
import AppointmentForm from "./components/contact/AppointmentForm";
import BookAppointment from "./pages/BookAppointment";
import HeadDoctors from "./components/homepage/HeadDoctors";

// Services
import Cardiology from "./components/ourservices/Cardiology";
import GeneralMedicine from "./components/ourservices/GeneralMedicine";
import GeneralSurgery from "./components/ourservices/GeneralSurgery";
import GynecObst from "./components/ourservices/GynecObst";
import ICU from "./components/ourservices/ICU";
import InterventionalRadiology from "./components/ourservices/InterventionalRadiology";
import Maxillofacial from "./components/ourservices/Maxillofacial";
import Nephrology from "./components/ourservices/Nephrology";
import Neurosurgery from "./components/ourservices/Neurosurgery";
import Oncology from "./components/ourservices/Oncology";
import OncoSurgery from "./components/ourservices/OncoSurgery";
import Orthopedics from "./components/ourservices/Orthopedics";
import Pathology from "./components/ourservices/Pathology";
import Pediatrics from "./components/ourservices/Pediatrics";
import Physiotherapy from "./components/ourservices/Physiotherapy";
import Radiology from "./components/ourservices/Radiology";
import UroSurgery from "./components/ourservices/UroSurgery";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isIntro = location.pathname === "/intro";

  useEffect(() => {
    const introSeen = localStorage.getItem("introSeen");
    if (!introSeen && location.pathname === "/") {
      navigate("/intro", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (

  <div className="bg-white ">
    
    {/* Dark overlay */}
    

    {/* App content */}
    <div className="flex flex-col min-h-screen ">

      {!isIntro && <Header />}

      <main className="flex-grow">
        <ScrollToTop behavior="smooth" />

        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/bookappointment" element={<BookAppointment />} />
          <Route path="/headdoctors" element={<HeadDoctors />} />

          {/* Services */}
          <Route path="/services/cardiology" element={<Cardiology />} />
          <Route path="/ourservices/nephrology" element={<Nephrology />} />
          <Route path="/ourservices/gynec-obst" element={<GynecObst />} />
          <Route path="/ourservices/orthopedics" element={<Orthopedics />} />
          <Route path="/ourservices/general-medicine" element={<GeneralMedicine />} />
          <Route path="/ourservices/oncology" element={<Oncology />} />
          <Route path="/ourservices/onco-surgery" element={<OncoSurgery />} />
          <Route path="/ourservices/uro-surgery" element={<UroSurgery />} />
          <Route path="/ourservices/interventional-radiology" element={<InterventionalRadiology />} />
          <Route path="/ourservices/icu" element={<ICU />} />
          <Route path="/ourservices/neurosurgery" element={<Neurosurgery />} />
          <Route path="/ourservices/pediatrics" element={<Pediatrics />} />
          <Route path="/ourservices/general-surgery" element={<GeneralSurgery />} />
          <Route path="/ourservices/maxillofacial" element={<Maxillofacial />} />
          <Route path="/ourservices/pathology" element={<Pathology />} />
          <Route path="/ourservices/radiology" element={<Radiology />} />
          <Route path="/ourservices/physiotherapy" element={<Physiotherapy />} />
        </Routes>
      </main>

      {!isIntro && <Footer />}
      <EmergencyPopup />

    </div>
  </div>


  );
}
//App.jsx