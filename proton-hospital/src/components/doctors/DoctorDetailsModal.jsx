// // import { X, Star } from "lucide-react";

// // export default function DoctorDetailsModal({ doctor, onClose }) {
// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center">
// //       <div
// //         className="absolute inset-0 bg-black/60 backdrop-blur-sm"
// //         onClick={onClose}
// //       />

// //       <div className="relative w-full max-w-4xl mx-4 overflow-hidden bg-white shadow-2xl rounded-3xl">
// //         <button
// //           onClick={onClose}
// //           className="absolute p-2 bg-white rounded-full shadow top-4 right-4"
// //         >
// //           <X />
// //         </button>

// //         <div className="grid md:grid-cols-2">
// //           <img
// //             src={doctor.image}
// //             alt={doctor.name}
// //             className="object-cover w-full h-full"
// //           />

// //           <div className="p-8">
// //             <h2 className="text-2xl font-bold">{doctor.name}</h2>
// //             <p className="mt-1 text-blue-600">{doctor.specialty}</p>
// //             <p className="mt-1 text-gray-500">
// //               {doctor.type} • {doctor.location}
// //             </p>

// //             <div className="flex items-center gap-2 mt-3 text-gray-600">
// //               <Star className="w-4 h-4 text-blue-500 fill-blue-300" />
// //               {doctor.rating} ({doctor.reviews})
// //             </div>

// //             <p className="mt-6 text-gray-700">
// //               Experienced {doctor.specialty} known for patient-first care,
// //               modern diagnostics, and high success rates.
// //             </p>

// //             <button className="w-full py-4 mt-8 text-white bg-blue-500 rounded-xl hover:bg-red-600">
// //               Book Appointment
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import { X, Star, MapPin, Briefcase } from "lucide-react";

// export default function DoctorDetailsModal({ doctor, onClose }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       {/* BACKDROP */}
//       <div
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* MODAL */}
//       <div className="relative w-full max-w-5xl mx-4 overflow-hidden bg-white shadow-2xl rounded-3xl">
        
//         {/* CLOSE */}
//         <button
//           onClick={onClose}
//           className="absolute z-10 p-2 bg-white rounded-full shadow top-5 right-5"
//         >
//           <X />
//         </button>

//         {/* CONTENT GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2">

//           {/* LEFT — IMAGE */}
//           <div className="h-[420px] md:h-auto">
//             <img
//               src={doctor.image}
//               alt={doctor.name}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           {/* RIGHT — DETAILS */}
//           <div className="p-10">
//             {/* NAME */}
//             <h2 className="text-3xl font-bold text-gray-900">
//               {doctor.name}
//             </h2>

//             {/* SPECIALTY */}
//             <p className="mt-2 text-lg font-medium text-blue-600">
//               {doctor.specialty}
//             </p>

//             {/* META INFO */}
//             <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
//               <span className="flex items-center gap-2">
//                 <Briefcase size={16} />
//                 {doctor.type}
//               </span>
//               <span className="flex items-center gap-2">
//                 <MapPin size={16} />
//                 {doctor.location}
//               </span>
//             </div>

//             {/* RATING */}
//             <div className="flex items-center gap-2 mt-4 text-gray-700">
//               <Star className="w-4 h-4 text-blue-500 fill-blue-300" />
//               <span className="font-medium">
//                 {doctor.rating}
//               </span>
//               <span className="text-sm">
//                 ({doctor.reviews})
//               </span>
//             </div>

//             {/* DIVIDER */}
//             <div className="my-6 border-t"></div>

//             {/* ABOUT — SAME FOR ALL */}
//             <h3 className="mb-2 text-lg font-semibold text-gray-900">
//               About Doctor
//             </h3>

//             <p className="leading-relaxed text-gray-700">
//               Dr. {doctor.name.split(" ")[1]} is a highly experienced{" "}
//               {doctor.specialty} with a strong focus on patient-centered care.
//               Known for accurate diagnosis, modern treatment techniques, and
//               compassionate consultation.
//             </p>

//             {/* ACTION */}
//             <button className="w-full py-4 mt-8 text-white transition bg-blue-500 rounded-xl hover:bg-red-600">
//               Book Appointment
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { X, Star, MapPin, Briefcase } from "lucide-react";

export default function DoctorDetailsModal({ doctor, onClose }) {
  return (
    <div className="fixed inset-0 z-50">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      {/* FIXED SIZE RIGHT PANEL */}
      <div
        className="
          absolute top-0 right-0
          h-full
          w-[420px] md:w-[480px]
          bg-white shadow-2xl
          transition-transform duration-300 ease-out
        "
      >
        {/* FIXED IMAGE HEIGHT */}
        <div className="relative h-[260px] w-full">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="object-cover w-full h-full"
          />

          <button
            onClick={onClose}
            className="absolute p-2 bg-white rounded-full shadow top-4 right-4"
          >
            <X />
          </button>
        </div>

        {/* FIXED CONTENT AREA */}
        <div className="p-6 h-[calc(100%-260px)] overflow-y-auto">

          {/* NAME */}
          <h2 className="text-2xl font-bold text-gray-900">
            {doctor.name}
          </h2>

          {/* SPECIALTY */}
          <p className="mt-1 font-medium text-blue-600">
            {doctor.specialty}
          </p>

          {/* META INFO */}
          <div className="flex flex-col gap-2 mt-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <Briefcase size={16} />
              {doctor.type}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {doctor.location}
            </span>
          </div>

          {/* RATING */}
          <div className="flex items-center gap-2 mt-4">
            <Star className="w-4 h-4 text-blue-500 fill-blue-300" />
            <span className="font-medium">{doctor.rating}</span>
            <span className="text-sm text-gray-500">
              ({doctor.reviews})
            </span>
          </div>

          {/* DIVIDER */}
          <div className="my-6 border-t" />

          {/* SAME ABOUT SECTION FOR ALL */}
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            About Doctor
          </h3>

          <p className="leading-relaxed text-gray-700">
            Dr. {doctor.name.split(" ")[1]} is a highly experienced{" "}
            {doctor.specialty} who focuses on patient-centered care,
            accurate diagnosis, and modern treatment methods.
          </p>

          {/* FIXED BUTTON POSITION */}
          <div className="mt-8">
            <button className="w-full py-4 text-white transition bg-blue-500 rounded-xl hover:bg-red-600">
              Book Appointment
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
