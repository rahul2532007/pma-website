import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-8 pt-32 pb-24 overflow-hidden border-b border-black/[0.05]">
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 h-full w-full">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="border-r border-black/20 h-full" />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 h-full w-full">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="border-b border-black/20 w-full" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-start text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="w-12 h-px bg-secondary" />
            <p className="micro-label text-secondary tracking-[0.5em]">Pride Marketing</p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-headline text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] text-on-surface mb-16 max-w-6xl"
          >
            SMART <br /> 
            <span className="italic font-normal text-secondary">DIGITAL MARKETING</span> <br /> 
            FOR GROWTH.
          </motion.h1>

          <div className="w-full flex flex-col md:flex-row justify-between items-end gap-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-body text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Helping businesses grow with smart digital marketing. Focused on results, creativity, and growth.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-8"
            >
              <button className="group relative px-12 py-6 bg-primary text-surface rounded-full micro-label font-bold overflow-hidden transition-all duration-500 hover:bg-secondary hover:text-surface shadow-xl">
                Book a Consultation
              </button>
              
              <button className="px-12 py-6 bg-secondary text-surface rounded-full micro-label font-bold hover:bg-primary hover:text-surface transition-all duration-500 shadow-xl">
                View Work
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Asymmetric Detail */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-12 hidden lg:block"
      >
        <div className="flex items-center gap-4 micro-label">
          <span className="w-12 h-px bg-black/20" />
          01 / PRIDE MARKETING
        </div>
      </motion.div>
    </section>
  );
}
