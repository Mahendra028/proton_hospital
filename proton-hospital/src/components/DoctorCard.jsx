import React from "react";

export default function DoctorCard({ name, spec, img }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 text-center border border-gray-100">
      <div className="w-28 h-28 rounded-full overflow-hidden mx-auto">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <h4 className="mt-4 font-semibold text-blue-700">{name}</h4>
      <p className="text-sm text-gray-600">{spec}</p>
    </div>
  );
}
