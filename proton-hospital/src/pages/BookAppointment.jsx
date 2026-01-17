
import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  CalendarDays,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

/* SERVICES */
const services = [
  "Cardiology",
  "Nephrology",
  "Gynecology & Obstetrics",
  "Orthopedics",
  "General Medicine",
  "Oncology",
  "Onco Surgery",
  "Uro Surgery",
  "ICU (Critical Care)",
  "Neurosurgery",
  "Pediatrics",
  "General Surgery",
  "Maxillofacial",
  "Pathology",
  "Radiology",
  "Physiotherapy",
];

/* SERVICE → DOCTOR */
const serviceDoctorMap = {
  Cardiology: "Dr. Ayesha Khan",
  "ICU (Critical Care)": "Dr. Ayesha Khan",
  Oncology: "Dr. Ayesha Khan",

  Orthopedics: "Dr. Rahul Verma",
  "Onco Surgery": "Dr. Rahul Verma",
  Neurosurgery: "Dr. Rahul Verma",

  "Gynecology & Obstetrics": "Dr. Sneha Patil",
  Pediatrics: "Dr. Sneha Patil",

  "General Medicine": "Dr. Amit Sharma",
  Pathology: "Dr. Amit Sharma",
  Radiology: "Dr. Amit Sharma",

  Nephrology: "Dr. Rohan Mehta",
  "Uro Surgery": "Dr. Rohan Mehta",
  Physiotherapy: "Dr. Rohan Mehta",
  "General Surgery": "Dr. Rohan Mehta",
  Maxillofacial: "Dr. Rohan Mehta",
};

/* TIME */
const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "12:00 PM",
  "02:00 PM",
  "04:00 PM",
  "06:00 PM",
];

export default function BookAppointment() {
  const [service, setService] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [urgency, setUrgency] = useState("");
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleServiceChange = (value) => {
    setService(value);
    setDoctor(serviceDoctorMap[value] || "");
    setErrors((e) => ({ ...e, service: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!service) newErrors.service = "Please select a service";
    if (!date) newErrors.date = "Please select appointment date";
    if (!time) newErrors.time = "Please select time slot";
    if (!height) newErrors.height = "Height is required";
    if (!weight) newErrors.weight = "Weight is required";
    if (!urgency) newErrors.urgency = "Please select urgency level";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBooking = () => {
    if (!validate()) return;
    setSuccess(true);
  };

  return (
    <>
      {/* BACKGROUND WRAPPER */}
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/contact-bg.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
 {/* ===== CONTENT LAYER ===== */}
      <div className="relative z-10">
        {/* HERO */}
        <section className="bg-[#4f7eff] relative z-10">
          <div className="px-4 py-20 mx-auto max-w-7xl">
            <div className="mt-2">
              <h1 className="mb-3 text-4xl font-semibold text-white translate-y-4">
                Book Your Apppointment
              </h1>
              <p className="max-w-xl text-sm translate-y-4 text-white/90">
                Let’s stay connected and discuss how we can help you with
                professional healthcare support.
              </p>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <div className="relative z-10 flex justify-center min-h-screen px-6 py-10">
          <div className="grid w-full max-w-5xl gap-6 md:grid-cols-4">

            {/* FORM */}
            <div className="p-8 space-y-5 bg-white shadow-md md:col-span-3 rounded-2xl">
              <h1 className="text-2xl font-semibold">
                Book Hospital Appointment
              </h1>

              <select
                value={service}
                onChange={(e) => handleServiceChange(e.target.value)}
                className="w-full py-3 px-4 bg-[#d9e9ec] rounded-full"
              >
                <option value="">Select Service / Department</option>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>

              <input
                value={doctor}
                readOnly
                placeholder="Doctor will be assigned automatically"
                className="w-full px-4 py-3 bg-[#d9e9ec] rounded-full"
              />

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 bg-[#d9e9ec] rounded-full"
              />

              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setTime(slot)}
                    className="py-2 rounded-full bg-[#d9e9ec]"
                  >
                    <Clock size={14} className="inline mr-1" />
                    {slot}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  placeholder="Height (cm)"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="py-3 px-4 bg-[#d9e9ec] rounded-full"
                />
                <input
                  type="number"
                  placeholder="Weight (kg)"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="py-3 px-4 bg-[#d9e9ec] rounded-full"
                />
              </div>

              <div className="flex gap-3">
                {["Normal", "Emergency"].map((u) => (
                  <button
                    key={u}
                    onClick={() => setUrgency(u)}
                    className="px-4 py-2 bg-[#d9e9ec] rounded-full"
                  >
                    <AlertTriangle size={14} className="inline mr-1" />
                    {u}
                  </button>
                ))}
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-[#6f9fa3] text-white px-8 py-3 rounded-full font-medium"
              >
                Confirm Appointment
              </button>
            </div>

            {/* SUMMARY */}
            <div className="p-5 space-y-3 text-sm bg-white shadow-md rounded-xl h-fit">
              <h3 className="text-base font-semibold">Summary</h3>
              <Summary label="Service" value={service || "—"} />
              <Summary label="Doctor" value={doctor || "—"} />
              <Summary label="Date" value={date || "—"} />
              <Summary label="Time" value={time || "—"} />
              <Summary label="Urgency" value={urgency || "—"} />

              {success && (
                <div className="flex items-center gap-2 p-2 text-green-700 bg-green-100 rounded-lg">
                  <CheckCircle size={16} />
                  Appointment Booked
                </div>
              )}
            </div>

          </div>
        </div>
</div>
      </div>
    </>
  );
}

const Summary = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);
