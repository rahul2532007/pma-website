import { motion } from "motion/react";
import portfolioData from "../data/portfolio.json";

export default function CaseStudies() {

  return (
    <section id="work" className="py-24 px-8 bg-surface border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="micro-label text-secondary mb-6">Our Work</p>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface italic">
              Measurable <span className="not-italic">Impact.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="micro-label text-right hidden md:block"
          >
            03 / PORTFOLIO
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {portfolioData.map((item, i) => (
            <motion.div 
              key={item.client}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group flex flex-col"
            >
              <div className="relative overflow-hidden curved-box aspect-[4/5] mb-12">
                <img 
                  alt={item.client} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  src={item.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent opacity-60" />
                
                <div className="absolute bottom-0 left-0 p-12 w-full">
                  <div className="font-headline text-4xl font-bold text-primary mb-4">{item.result}</div>
                  <div className="micro-label text-[8px] opacity-60">{item.type}</div>
                </div>
              </div>
              
              <div className="px-2">
                <div className="flex justify-between items-start mb-8">
                  <h3 className="font-headline text-3xl font-bold text-on-surface">{item.client}</h3>
                  <div className="micro-label opacity-20">0{i+1}</div>
                </div>
                <div className="space-y-8">
                  <div>
                    <span className="micro-label text-[8px] text-secondary block mb-3">The Challenge</span>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">{item.problem}</p>
                  </div>
                  <div>
                    <span className="micro-label text-[8px] text-secondary block mb-3">The Solution</span>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">{item.solution}</p>
                  </div>
                </div>
                <button className="mt-8 px-8 py-4 bg-secondary text-surface rounded-full micro-label font-bold hover:bg-primary hover:text-surface transition-all duration-500 shadow-md">
                  Full Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
