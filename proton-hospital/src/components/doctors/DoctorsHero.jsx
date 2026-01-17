export default function DoctorsHero() {
  return (
    <section className="relative bg-[#e9f7f1] overflow-hidden">
      <div className="px-6 py-20 mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Our Doctors
        </h1>

        <p className="mt-3 text-gray-600">
          Home <span className="mx-1">/</span>
          <span className="font-medium text-green-600"> Doctors</span>
        </p>
      </div>

      <div className="absolute right-10 top-6 text-green-200 text-[140px] font-bold select-none">
        +
      </div>
    </section>
  );
}
