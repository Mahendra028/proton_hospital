export default function Emergency(){
    return(
        <section className="py-12 px-4 bg-red-600">
        <div className="container mx-auto text-center">
          <div className="inline-block p-4 bg-white/20 rounded-full mb-4">
            <span className="text-2xl">🚨</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Emergency Assistance
          </h2>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">
            Our emergency team is ready 24/7 with immediate medical support
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="px-6 py-3 bg-white text-red-600 font-bold rounded hover:bg-gray-100 transition-colors"
            >
              📞 Call Now: +91-9876543210
            </a>
            
            <a
              href="/emergency"
              className="px-6 py-3 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors"
            >
              🚑 Emergency Portal
            </a>
          </div>
          
          <p className="text-white/70 text-sm mt-6">
            Average response time: 8 minutes • Always available
          </p>
        </div>
      </section>
    );
}
