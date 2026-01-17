// import React from "react";

// export default function EmergencyPopup() {
//   return (
//     <div className="fixed z-50 bottom-6 right-6 group">

//       {/* HOVER INFO BOX */}
//       <div
//         className="absolute right-0 w-64 p-4 mb-3 text-sm text-white transition-all duration-300 translate-y-2 rounded-lg shadow-xl opacity-0 pointer-events-none bottom-full bg-black/90 group-hover:opacity-100 group-hover:translate-y-0"
//       >
//         <p className="mb-1 font-semibold text-red-400">
//           🚑 Emergency Assistance
//         </p>
//         <p className="text-white/90">
//           24/7 emergency medical support.  
//           Average response time: <strong>8 minutes</strong>.
//         </p>
//       </div>

//       {/* EMERGENCY BUTTON */}
//       <a
//         href="tel:+919876543210"
//         className="flex items-center gap-3 px-5 py-4 font-bold text-white transition bg-red-600 rounded-full shadow-2xl animate-pulse hover:bg-red-700"
//         aria-label="Emergency Call"
//       >
//         <span className="text-xl">🚨</span>
//         <span className="hidden sm:block">
//           Emergency Call
//         </span>
//       </a>
//     </div>
//   );
// }
import React from "react";

export default function EmergencyPopup() {
  return (
    <div className="fixed z-50 right-6 group bottom-28 sm:bottom-6">

      {/* HOVER INFO BOX */}
      <div
        className="absolute right-0 w-64 p-4 mb-3 text-sm text-white transition-all duration-300 translate-y-2 rounded-lg shadow-xl opacity-0 pointer-events-none bottom-full bg-black/90 group-hover:opacity-100 group-hover:translate-y-0"
      >
        <p className="mb-1 font-semibold text-red-400">
          🚑 Emergency Assistance
        </p>
        <p className="text-white/90">
          24/7 emergency medical support.  
          Average response time: <strong>8 minutes</strong>.
        </p>
      </div>

      {/* EMERGENCY BUTTON */}
      <a
        href="tel:+919876543210"
        className="flex items-center gap-3 px-5 py-4 font-bold text-white transition bg-red-600 rounded-full shadow-2xl animate-pulse hover:bg-red-700"
        aria-label="Emergency Call"
      >
        <span className="text-xl">🚨</span>
        <span className="hidden sm:block">
          Emergency Call
        </span>
      </a>
    </div>
  );
}
