import { motion } from "motion/react";
import { Quote } from "lucide-react";
import testimonialsData from "../data/testimonials.json";

export default function Testimonials() {

  return (
    <section className="py-24 px-8 bg-surface overflow-hidden border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="micro-label text-secondary mb-6">Testimonials</p>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface italic">
              Client <span className="not-italic">Voices.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="micro-label text-right hidden md:block"
          >
            07 / SOCIAL PROOF
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonialsData.map((review, i) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-12 curved-box group hover:border-primary/30 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-secondary w-10 h-10 mb-12 opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="font-headline text-xl italic text-on-surface leading-relaxed mb-12">
                  "{review.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-6 pt-8 border-t border-black/[0.05]">
                <div className="w-12 h-12 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="font-headline text-lg font-bold text-on-surface">{review.name}</div>
                  <div className="micro-label text-[8px]">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
