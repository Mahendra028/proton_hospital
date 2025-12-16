

import { motion, AnimatePresence } from "framer-motion";


export default function Herosection(){
    return(
         <section className="relative overflow-hidden py-20 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-transparent"
        />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-sky-200 shadow-sm mb-6"
            >
              <span className="text-sky-600 font-semibold">Meet Our Medical Experts</span>
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-gray-900">Expert</span>
              <br />
              <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
                Medical Team
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto"
            >
              Multidisciplinary critical care and emergency specialists available 24/7 to manage complex medical and surgical emergencies with expertise and compassion.
            </motion.p>
          </motion.div>
        </div>
      </section>
    );
}