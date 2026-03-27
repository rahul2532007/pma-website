import { motion } from "motion/react";

export default function TrustStrip() {
  const metrics = [
    { label: "Revenue Generated", value: "₹1Cr+" },
    { label: "Active Clients", value: "50+" },
    { label: "Retention Rate", value: "94%" },
    { label: "Global Presence", value: "12+" }
  ];

  return (
    <div className="w-full pt-24 pb-0 bg-surface border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <p className="micro-label text-secondary mb-4">Market Authority</p>
            <h2 className="font-headline text-3xl font-bold text-on-surface leading-tight">Helping businesses grow with smart digital marketing.</h2>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, i) => (
              <motion.div 
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 curved-box hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="font-headline text-3xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">{metric.value}</div>
                <div className="micro-label text-[8px]">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 relative overflow-hidden py-12 border-t border-black/[0.05]">
          <div className="flex animate-marquee whitespace-nowrap">
            {["RESULTS", "CREATIVITY", "GROWTH", "STRATEGY", "DESIGN", "MARKETING", "RESULTS", "CREATIVITY", "GROWTH", "STRATEGY", "DESIGN", "MARKETING"].map((word, i) => (
              <span key={i} className="mx-12 font-headline text-2xl font-bold tracking-[0.4em] text-on-surface/20 hover:text-primary transition-colors duration-500 select-none cursor-default">
                {word}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />
        </div>
      </div>
    </div>
  );
}
