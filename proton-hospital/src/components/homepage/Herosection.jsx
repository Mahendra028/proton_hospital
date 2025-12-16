import hero from "../../assets/hero.avif"

export default function Herosection() {
    return(
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={hero}
            alt="Hospital ICU"
            className="w-full h-full object-cover"
          />
          {/* No color overlay */}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-gray-700 font-medium">24/7 Critical Care Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Proton Critical Care Centre
            </h1>

            <p className="text-gray-700 text-lg mb-8">
              Advanced medical interventions, expert specialists, and compassionate care in our state-of-the-art facility.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-6 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="/services" 
                className="px-6 py-3 rounded-lg font-semibold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg">
                <p className="text-xs text-gray-600">Response Time</p>
                <p className="text-lg font-bold text-gray-900">8 min</p>
              </div>
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg">
                <p className="text-xs text-gray-600">ICU Capacity</p>
                <p className="text-lg font-bold text-gray-900">50+ beds</p>
              </div>
              <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg">
                <p className="text-xs text-gray-600">Success Rate</p>
                <p className="text-lg font-bold text-gray-900">98.7%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
          );
}