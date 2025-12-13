
import { motion, useAnimation, useInView } from 'framer-motion';

export default function Capacity() {
    return(
       
           <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Operational <span className="text-cyan-400">Excellence</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Real-time metrics and capacity tracking for transparent, efficient care delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'ICU Beds', value: '50', unit: 'Beds', color: 'bg-cyan-500', percent: 28 },
              { label: 'Ventilators', value: '18', unit: 'Units', color: 'bg-emerald-500', percent: 44 },
              { label: 'Staff On Duty', value: '28', unit: 'Personnel', color: 'bg-sky-500', percent: 70 },
              { label: 'Avg. Stay', value: '4.2', unit: 'Days', color: 'bg-violet-500', percent: 42 }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-gray-400 text-sm">{metric.label}</p>
                    <p className="text-3xl font-bold mt-2">
                      {metric.value} <span className="text-lg text-gray-300">{metric.unit}</span>
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${metric.color} flex items-center justify-center`}>
                    <span className="text-white font-bold">{metric.value}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Capacity</span>
                    <span className="text-white">{metric.percent}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${metric.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    );
}