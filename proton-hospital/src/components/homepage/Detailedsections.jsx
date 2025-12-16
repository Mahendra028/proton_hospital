export default function Detailedsections(){
    return(
          <section className="py-12 px-4 bg-gray-50">
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Operational Excellence",
                        description: "Protocolised care pathways and KPI-driven governance.",
                        icon: "🎯",
                        items: ["Standard operating procedures", "Real-time telemetry", "Family liaison support"]
                      },
                      {
                        title: "Patient Experience",
                        description: "We measure satisfaction and provide compassionate care.",
                        icon: "💝",
                        items: ["Comfort-focused ICU", "Counselling support", "Structured visiting"]
                      },
                      {
                        title: "Quality & Safety",
                        description: "Infection control and continual improvement.",
                        icon: "🛡️",
                        items: ["Central sterile services", "Hand-hygiene compliance", "Regular audits"]
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <ul className="space-y-2">
                          {item.items.map((listItem, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-700">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    );
}