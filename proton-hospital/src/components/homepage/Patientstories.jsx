import rjoshi from "../../assets/rjoshi.avif";
import kapoor from "../../assets/kapoor.avif";
import { motion, AnimatePresence } from "framer-motion";
export default function Patientstories(){
    return(
            <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Patient Stories</h2>
            <p className="text-gray-600">Real experiences from our patients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "Transfer coordination and ambulance dispatch were immediate — care transition was seamless.",
                author: "R. Joshi",
                relation: "Family Member",
                image: rjoshi
              },
              {
                quote: "Clinical team demonstrated calm leadership during a complex emergency — outcomes were excellent.",
                author: "S. Kapoor",
                relation: "Patient",
                image: kapoor
              },
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={story.image} 
                      alt={story.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4 italic">"{story.quote}"</p>
                    <div>
                      <p className="font-bold text-gray-900">{story.author}</p>
                      <p className="text-gray-600 text-sm">{story.relation}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    );
}