export default function DoctorsCTA() {
  return (
    <section className="px-12 pb-24 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 rounded-2xl">

        {/* LEFT IMAGE */}
        <div className="h-full">
          <img
            src="https://media.istockphoto.com/id/1040465754/photo/middle-aged-male-doctor-holding-eyeglasses-and-using-laptop-at-table-in-office.jpg?s=2048x2048&w=is&k=20&c=p8sK2aNniYni51RYMDLsYOKrjFrVoHRvP_T7g-PP8a4="
            alt="Doctor consultation"
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex flex-col justify-center px-10 text-white bg-blue-950 py-14">
          {/* subtle plus pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[length:40px_40px]" />

          <h2 className="relative text-3xl font-semibold leading-snug md:text-4xl">
            Get Appointment For Your <br /> Medical Service
          </h2>

          <button className="relative py-3 mt-6 font-medium text-black transition bg-white rounded-full px-7 w-fit hover:bg-green-50">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
