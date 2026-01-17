
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const quotes = [
    {
      text: "Clear communication and trust are the foundation of excellent patient care.",
      name: "Mrs. John Roe",
      role: "Head of Operations",
    },
    {
      text: "Compassion, accuracy and timely care define our commitment to patients.",
      name: "Dr. R. Mehta",
      role: "Medical Director",
    },
    {
      text: "Healthcare is not just treatment, it is reassurance and responsibility.",
      name: "Ms. Anjali Patil",
      role: "Hospital Administrator",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ===== BACKGROUND LAYER ===== */}
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

        {/* ================= HERO ================= */}
        <section className="bg-[#4f7eff]">
  <div className="px-4 py-20 mx-auto max-w-7xl">
    <div className="mt-2">
      <h1 className="mb-3 text-4xl font-semibold text-white translate-y-4">
        Contact Us
      </h1>
      <p className="max-w-xl text-sm translate-y-4 text-white/90">
        
Let’s stay connected and discuss how we can help you with
              professional healthcare support.
      </p>
    </div>
  </div>
</section>



        {/* ================= TOP INFO CARDS ================= */}
        <section className="py-16 bg-transparent ">
          <div className="max-w-6xl px-6 mx-auto">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  title: "Our Care Location",
                  desc: "Sabnis Plot, Dastur Nagar, Amravati",
                  icon: <MapPin className="w-8 h-8 text-[#4da3ff]" />,
                },
                {
                  title: "Care Helpline",
                  desc: "+91 96230 65862",
                  icon: <Phone className="w-8 h-8 text-[#4da3ff]" />,
                },
                {
                  title: "Care Communication",
                  desc: "info@protonhospital.com",
                  icon: <Mail className="w-8 h-8 text-[#4da3ff]" />,
                },
                {
                  title: "Working Hours",
                  desc: "Mon – Sat : 9:00 AM – 8:00 PM",
                  icon: <Clock className="w-8 h-8 text-[#4da3ff]" />,
                },
              ].map((item, i) => (
                <div key={i} className="flex justify-center">
                  <div className="relative w-[220px] h-[210px] rounded-3xl bg-white">
                    <div className="absolute inset-2 rounded-2xl border shadow-xl border-[#dceaf7]" />
                    <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                      <div className="mb-4">{item.icon}</div>
                      <h3 className="text-sm font-semibold text-[#1f3b4d]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= STAY IN TOUCH + IMAGE ================= */}


        {/* ================= MAP + FORM ================= */}
        <section className="bg-transparent pb-28">
          <div className="grid items-start grid-cols-1 gap-20 px-6 mx-auto max-w-7xl lg:grid-cols-2">

            {/* MAP */}
            <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Location"
                src="https://www.google.com/maps?q=Amravati%20Maharashtra&output=embed"
                className="w-full h-full"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>

            {/* FORM */}
            <div className="relative">
              <div className="absolute inset-0 border shadow-xl bg-white/60 backdrop-blur-xl rounded-3xl border-white/40" />
              <div className="relative z-10 p-10">
                <h3 className="mb-8 text-2xl font-semibold">
                  Lets Send Message For Us
                </h3>

                <form className="max-w-xl space-y-5">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <input className="w-full px-5 py-3 bg-[#d9e9ec] rounded-full" placeholder="Email" />
                    <input className="w-full px-5 py-3 bg-[#d9e9ec] rounded-full" placeholder="Phone" />
                  </div>

                  <input className="w-full px-5 py-3 bg-[#d9e9ec] rounded-full" placeholder="Name" />
                  <textarea rows="4" className="w-full px-5 py-4 bg-[#d9e9ec] rounded-[22px]" placeholder="Message" />

                  <button className="px-8 py-3 bg-[#6f9fa3] text-white rounded-full hover:bg-[#5b8d92] transition">
                    Submit Button
                  </button>
                </form>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* ================= ANIMATION ================= */}
      <style>
        {`
          .animate-fade {
            animation: fadeSlide 0.6s ease;
          }
          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

    </div>
  );
}
