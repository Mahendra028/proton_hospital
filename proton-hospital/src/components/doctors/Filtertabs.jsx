import { useState } from "react";
import { motion } from "framer-motion";

export default function FilterTabs() {

  // STATE: active filter
  const [filter, setFilter] = useState("all");

  // FILTER OPTIONS
  const tabs = ["all", "Critical Care", "Emergency", "Cardiac", "Pulmonology"];

  return (
    <section className="px-6 pb-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 justify-center"
        >
          {tabs.map((tab, index) => {
            const value = tab === "all" ? "all" : tab;
            const isActive = filter === value;

            return (
              <motion.button
                key={tab}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(value)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-sky-200 hover:border-sky-300"
                }`}
              >
                {tab === "all" ? "All Specialists" : tab}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
