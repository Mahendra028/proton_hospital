import { useState } from "react";
import { ChevronDown, MapPin, User, Stethoscope } from "lucide-react";

function Dropdown({ label, icon: Icon, options }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="relative">
      {/* SELECT BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between px-5 py-4 rounded-full border-2 
        ${open ? "border-green-500" : "border-green-300"} 
        bg-[#f3faf6]`}
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
            <Icon className="w-4 h-4 text-green-500" />
          </div>
          <span className="font-medium text-gray-700">
            {selected || label}
          </span>
        </div>
        <ChevronDown className="text-gray-500" />
      </button>

      {/* OPTIONS */}
      {open && (
        <div className="absolute z-10 w-full py-3 mt-3 bg-white shadow-lg rounded-2xl">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className={`w-full text-left px-6 py-2 text-sm 
              ${
                option === selected
                  ? "text-green-600 font-medium"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DoctorFilters() {
  return (
    <div className="space-y-5">
      <Dropdown
        label="Specialty"
        icon={User}
        options={[
          "Cardiologist",
          "Oncologist",
          "Neurologist",
          "Ophthalmologist",
          "Pediatrician",
          "Gynecologist",
        ]}
      />

      <Dropdown
        label="Type"
        icon={Stethoscope}
        options={[
          "Medicine Specialist",
          "Surgeon",
          "Consultant",
        ]}
      />

      <Dropdown
        label="Location"
        icon={MapPin}
        options={[
          "Los Angeles",
          "New York City",
          "Chicago, USA",
        ]}
      />
    </div>
  );
}