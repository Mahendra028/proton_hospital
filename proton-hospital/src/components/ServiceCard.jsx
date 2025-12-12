import React from "react";

export default function ServiceCard({ title, desc, icon }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-md bg-blue-50 text-blue-600">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
      </div>
      <p className="mt-4 text-sm text-gray-600">{desc}</p>
    </div>
  );
}
