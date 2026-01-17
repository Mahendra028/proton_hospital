// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();
  
//   const quickLinks = [
//     { name: "Home", path: "/" },
//     { name: "Services", path: "/services" },
//     { name: "Doctors", path: "/doctors" },
//     { name: "Contact", path: "/contact" },
//     { name: "Emergency", path: "/emergency" },
//     { name: "About Us", path: "/about" }
//   ];

//   const departments = [
//     "Critical Care Unit",
//     "Cardiology Emergency", 
//     "Trauma & Emergency",
//     "Neurology Department",
//     "Pediatric Critical Care",
//     "Respiratory Care"
//   ];

//   const contactInfo = [
//     { icon: "📞", label: "Emergency Line", value: "+91 112 233 4455", highlight: true },
//     { icon: "🏥", label: "Hospital Desk", value: "+91 98765 43210" },
//     { icon: "✉️", label: "Email", value: "care@protonmedical.com" },
//     { icon: "📍", label: "Address", value: "Proton Critical Care Centre, Kanwar Nagar, Amravati, Maharashtra 444607" }
//   ];

//   const socialLinks = [
//     { icon: "f", name: "Facebook", color: "hover:bg-blue-600" },
//     { icon: "t", name: "Twitter", color: "hover:bg-sky-500" },
//     { icon: "in", name: "LinkedIn", color: "hover:bg-blue-700" },
//     { icon: "ig", name: "Instagram", color: "hover:bg-pink-600" },
//     { icon: "yt", name: "YouTube", color: "hover:bg-red-600" }
//   ];

//   return (
//     <footer className="relative overflow-hidden">
//       {/* Background Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-500" />
      
//       {/* Animated Background Elements */}
//       <motion.div 
//         className="absolute top-0 left-0 w-full h-full opacity-10"
//         animate={{ 
//           backgroundPosition: ['0% 0%', '100% 100%'],
//         }}
//         transition={{ 
//           duration: 20,
//           repeat: Infinity,
//           repeatType: "reverse"
//         }}
//         style={{
//           backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
//                            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)`
//         }}
//       />

//       <div className="container relative z-10 px-6 py-12 mx-auto">
//         <div className="grid gap-8 lg:grid-cols-4">
//           {/* Brand Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <div className="flex items-center gap-3">
//               <motion.div 
//                 className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-gradient-to-r from-cyan-400 to-sky-500"
//                 whileHover={{ rotate: 360 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <span className="text-xl font-bold text-white">P</span>
//               </motion.div>
//               <div>
//                 <h3 className="text-2xl font-bold text-white">Proton Medical</h3>
//                 <p className="text-sm text-sky-200">Critical Care Centre</p>
//               </div>
//             </div>
            
//             <p className="leading-relaxed text-sky-100/80">
//               Advanced critical care and emergency medicine with state-of-the-art 
//               technology and compassionate medical expertise.
//             </p>
            
//             <div className="flex items-center gap-4">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={index}
//                   href="#"
//                   initial={{ opacity: 0, scale: 0 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ scale: 1.1, y: -3 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white ${social.color} transition-all`}
//                   aria-label={social.name}
//                 >
//                   <span className="font-bold">{social.icon}</span>
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Quick Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//           >
//             <h4 className="pb-2 mb-6 text-lg font-semibold text-white border-b border-white/20">
//               Quick Links
//             </h4>
//             <ul className="space-y-3">
//               {quickLinks.map((link, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.05 }}
//                 >
//                   <Link
//                     to={link.path}
//                     className="flex items-center gap-2 transition-colors text-sky-100/80 hover:text-white group"
//                   >
//                     <motion.span
//                       className="text-blue-300 opacity-0 group-hover:opacity-100"
//                       initial={{ x: -10 }}
//                       whileHover={{ x: 0 }}
//                     >
//                       →
//                     </motion.span>
//                     <span>{link.name}</span>
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Departments */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <h4 className="pb-2 mb-6 text-lg font-semibold text-white border-b border-white/20">
//               Departments
//             </h4>
//             <ul className="space-y-3">
//               {departments.map((dept, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.05 }}
//                   className="flex items-center gap-2"
//                 >
//                   <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
//                   <span className="transition-colors cursor-pointer text-sky-100/80 hover:text-white">
//                     {dept}
//                   </span>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//             className="space-y-6"
//           >
//             <h4 className="pb-2 mb-6 text-lg font-semibold text-white border-b border-white/20">
//               Contact Us
//             </h4>
            
//             <div className="space-y-4">
//               {contactInfo.map((info, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ x: 5 }}
//                   className="flex items-start gap-3"
//                 >
//                   <div className={`p-2 rounded-lg ${info.highlight ? 'bg-red-500/20' : 'bg-white/10'} backdrop-blur-sm`}>
//                     <span className="text-white">{info.icon}</span>
//                   </div>
//                   <div>
//                     <p className="text-sm text-sky-200/80">{info.label}</p>
//                     <p className={`font-medium ${info.highlight ? 'text-white' : 'text-sky-100'}`}>
//                       {info.value}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Emergency Badge */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.02 }}
//               className="p-4 border bg-gradient-to-r from-red-600/20 to-rose-600/20 backdrop-blur-sm rounded-xl border-red-500/30"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-red-500 rounded-lg">
//                   <span className="text-white">🚑</span>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-white">24/7 Emergency</p>
//                   <p className="text-xs text-red-200">Immediate response</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Divider */}
//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: "100%" }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//           className="h-px my-8 bg-gradient-to-r from-transparent via-white/20 to-transparent"
//         />

//         {/* Bottom Section */}
//         <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center md:text-left"
//           >
//             <p className="text-sky-100/70">
//               © {currentYear} Proton Critical Care Centre. All rights reserved.
//             </p>
//             <p className="mt-1 text-sm text-sky-200/50">
//               Providing advanced critical care since 2010
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="flex flex-wrap gap-6 text-sm"
//           >
//             <a href="/privacy" className="transition-colors text-sky-100/70 hover:text-white">
//               Privacy Policy
//             </a>
//             <a href="/terms" className="transition-colors text-sky-100/70 hover:text-white">
//               Terms of Service
//             </a>
//             <a href="/sitemap" className="transition-colors text-sky-100/70 hover:text-white">
//               Sitemap
//             </a>
//             <a href="/accessibility" className="transition-colors text-sky-100/70 hover:text-white">
//               Accessibility
//             </a>
//           </motion.div>

//           {/* Accreditation Badges */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="flex items-center gap-4"
//           >
//             <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
//               <span className="text-xs font-medium text-white">NABH Accredited</span>
//             </div>
//             <div className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
//               <span className="text-xs font-medium text-white">ISO 9001:2015</span>
//             </div>
//           </motion.div>
//         </div>

//         {/* Back to Top Button */}
//         <motion.button
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           whileHover={{ y: -5 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="fixed z-40 p-3 text-white rounded-full shadow-2xl bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-sky-500"
//           aria-label="Back to top"
//         >
//           <span className="text-xl">↑</span>
//         </motion.button>
//       </div>

//       {/* Emergency Banner */}
//       <motion.div 
//         initial={{ y: 100 }}
//         animate={{ y: 0 }}
//         transition={{ type: "spring", damping: 20 }}
//         className="py-3 bg-gradient-to-r from-red-600 to-rose-600"
//       >
//         <div className="container px-6 mx-auto">
//           <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
//             <div className="flex items-center gap-3">
//               <motion.div
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="w-3 h-3 bg-white rounded-full"
//               />
//               <span className="font-semibold text-white">EMERGENCY SERVICES AVAILABLE 24/7</span>
//             </div>
//             <motion.a
//               href="tel:+911122334455"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-6 py-2 font-bold text-red-600 transition-colors bg-white rounded-full shadow-lg hover:bg-red-50"
//             >
//               🚑 CALL +91 112 233 4455
//             </motion.a>
//           </div>
//         </div>
//       </motion.div>
//     </footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-blue-600 bg-white">
      
      {/* MAIN FOOTER */}
      <div className="grid gap-8 px-6 py-10 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
       <div className="flex items-center justify-center w-10 h-10">
  <img
    src="/images/proton-logo.png"
    alt="Logo"
    className="object-contain w-10 h-10"
  />
</div>

            <div>
              <h3 className="text-lg font-bold text-red-600">Proton Medical</h3>
              <p className="text-xs text-blue-600">Critical Care Centre</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-blue-600">
            Advanced critical care with modern technology and compassionate doctors.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-blue-700 uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-black">
            {["Home", "Services", "Doctors", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="transition hover:text-bold hover:text-red-500"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* DEPARTMENTS */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-blue-700 uppercase">
            Departments
          </h4>
          <ul className="space-y-2 text-sm text-black">
            <li>Critical Care Unit</li>
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Pediatrics</li>
          </ul>
        </div>

       
{/* CONTACT */}
<div>
  <h4 className="mb-3 text-sm font-semibold text-blue-700 uppercase">
    Contact
  </h4>

  <div className="space-y-2 text-sm text-black">
    <p className="flex items-center gap-2">
      <FaPhoneAlt className="text-blue-950" />
      <span>+91-96230-65862</span>
    </p>

    <p className="flex items-center gap-2">
      <FaEnvelope className="text-blue-950" />
      <span>care@protonmedical.com</span>
    </p>

    <p className="flex items-center gap-2 text-blue-950">
      <FaMapMarkerAlt />
      <span>Amravati, Maharashtra</span>
    </p>
  </div>
  <Link
  to="/book-appointment"
  className="inline-block px-6 py-3 mt-6 text-sm font-semibold text-blue-700 transition border border-blue-700 rounded-full hover:bg-blue-700 hover:text-white"
>
  Book Appointment
</Link>

</div>


        </div>

    

      {/* BOTTOM BAR */}
      <div className="border-t border-white/20">
        <div className="flex flex-col items-center justify-between gap-2 px-6 py-4 mx-auto text-xs text-blue-600 max-w-7xl md:flex-row">
          
          <p>© {year} Proton Critical Care Centre. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-blue-900">Privacy</a>
            <a href="/terms" className="hover:text-blue-900">Terms</a>
            <a href="/sitemap" className="hover:text-blue-900">Sitemap</a>
          </div>

        </div>
      </div>

    </footer>
  );
}
