
// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Home, User, Stethoscope, Phone, Info } from "lucide-react";

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 80);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const navItems = [
//     { path: "/", label: "Home", icon: Home },
//     { path: "/about", label: "About", icon: Info },
//     { path: "/ourservices", label: "Services", icon: Stethoscope },
//     { path: "/doctors", label: "Doctors", icon: User },
//     { path: "/contact", label: "Contact", icon: Phone },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <motion.header
//         animate={{
//           top: scrolled ? 20 : 24,
//           width: "100%",
//         }}
//         transition={{ duration: 0.4, ease: "easeInOut" }}
//         className="fixed z-50 -translate-x-1/2 left-1/2"
//       >
//         <div
//           className="
//             relative
//             flex items-center
//             h-16
//             px-8
//             bg-white
//             rounded-full
//             shadow-[0_10px_30px_rgba(0,0,0,0.08)]
//             w-[1400px]
//             max-w-[98vw]
//             mx-auto
//           "
//         >
//           {/* LEFT — NAV ITEMS */}
//           <nav className="flex items-center gap-6">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={`flex items-center gap-2 text-sm font-medium transition
//                     ${
//                       isActive(item.path)
//                         ? "text-gray-900 nav-active-underline"
//                         : "text-gray-600 hover:text-gray-900"
//                     }
//                   `}
//                 >
//                   <Icon size={16} />
//                   <span>{item.label}</span>
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* CENTER LOGO (DESKTOP ONLY – SAFE) */}
//           <div className="absolute flex items-center gap-2 -translate-x-1/2 left-1/2">
//             <img
//               src="/images/proton-logo.png"
//               alt="Proton Hospital"
//               className="w-8 h-8"
//             />
//             <span className="text-base font-semibold text-gray-900">
//               Proton Hospital
//             </span>
//           </div>

//           {/* RIGHT CTA */}
//           <div className="ml-auto">
//             <Link
//               to="/book-appointment"
//               className="inline-flex items-center h-10 px-6 text-sm font-medium text-white transition bg-red-500 rounded-full hover:bg-red-600"
//             >
//               Book Appointment
//             </Link>
//           </div>
//         </div>
//       </motion.header>

//       {/* LOCAL STYLES ONLY */}
//   <style>
// {`
//   .nav-active-underline {
//     position: relative;
//   }
//   .nav-active-underline::after {
//     content: "";
//     position: absolute;
//     left: 0;
//     bottom: -6px;
//     height: 2px;
//     width: 100%;
//     background-color: #dc2626;
//   }

//   /* ================= MOBILE FIX ================= */
//   @media (max-width: 1023px) {

//     /* Stick navbar EXACTLY to bottom (NO GAP) */
//     header {
//       top: auto !important;
//       bottom: 0 !important;
//     }

//     header > div {
//       height: 72px !important;
//       padding: 0 14px !important;
//       border-radius: 20px 20px 0 0 !important;
//     }

//     header nav {
//       width: 100%;
//       display: flex !important;
//       justify-content: space-between;
//       gap: 0 !important;
//     }

//     header nav a {
//       flex: 1;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       font-size: 11px;
//       gap: 4px;
//       color: #374151;
//     }

//     header nav a span {
//       display: block !important;
//     }

//     /* Remove underline on mobile */
//     .nav-active-underline::after {
//       display: none;
//     }

//     /* Hide Book Appointment button on mobile */
//     header > div > div:last-child {
//       display: none !important;
//     }

//     /* Hide center logo (as requested earlier) */
//     header > div > div.absolute {
//       display: none !important;
//     }
//   }
// `}
// </style>

//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, Stethoscope, Phone, Info } from "lucide-react";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/ourservices", label: "Services", icon: Stethoscope },
    { path: "/doctors", label: "Doctors", icon: User },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  const isActive = (path) => location.pathname === path;

  /* ✅ FIX: scroll to top if same route clicked */
  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        animate={{
          top: scrolled ? 20 : 24,
          width: "100%",
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed z-50 -translate-x-1/2 left-1/2"
      >
        <div
          className="
            relative
            flex items-center
            h-16
            px-8
            bg-white
            rounded-full
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            w-[1400px]
            max-w-[98vw]
            mx-auto
          "
        >
          {/* LEFT — NAV ITEMS */}
          <nav className="flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center gap-2 text-sm font-medium transition
                    ${
                      isActive(item.path)
                        ? "text-gray-900 nav-active-underline"
                        : "text-gray-600 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CENTER LOGO (DESKTOP ONLY) */}
          <div className="absolute flex items-center gap-2 -translate-x-1/2 left-1/2">
            <img
              src="/images/proton-logo.png"
              alt="Proton Hospital"
              className="w-8 h-8"
            />
            <span className="text-base font-semibold text-gray-900">
              Proton Hospital
            </span>
          </div>

          {/* RIGHT CTA */}
          <div className="ml-auto">
            <Link
              to="/bookappointment"
              className="inline-flex items-center h-10 px-6 text-sm font-medium text-white transition bg-red-500 rounded-full hover:bg-red-600"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </motion.header>

      {/* LOCAL STYLES ONLY */}
      <style>
        {`
          .nav-active-underline {
            position: relative;
          }
          .nav-active-underline::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -6px;
            height: 2px;
            width: 100%;
            background-color: #dc2626;
          }

          /* ================= MOBILE BOTTOM NAV ================= */
          @media (max-width: 1023px) {
            header {
              top: auto !important;
              bottom: 0 !important;
            }

            header > div {
              height: 72px !important;
              padding: 0 14px !important;
              border-radius: 20px 20px 0 0 !important;
            }

            header nav {
              width: 100%;
              display: flex !important;
              justify-content: space-between;
              gap: 0 !important;
            }

            header nav a {
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: center;
              font-size: 11px;
              gap: 4px;
              color: #374151;
            }

            .nav-active-underline::after {
              display: none;
            }

            /* Hide CTA & center logo on mobile */
            header > div > div:last-child,
            header > div > div.absolute {
              display: none !important;
            }
          }
        `}
      </style>
    </>
  );
}
