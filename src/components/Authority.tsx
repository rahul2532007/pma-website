import { motion } from "motion/react";
import { Target, Brain, BarChart3, HeartHandshake } from "lucide-react";

export default function Authority() {
  const points = [
    { title: "Fresh & Modern Strategies", icon: Target, desc: "We stay ahead of the curve, bringing you the latest and most effective marketing tactics." },
    { title: "Creative Expertise", icon: Brain, desc: "Our team crafts compelling brand identities and designs that resonate with your audience." },
    { title: "Affordable Solutions", icon: BarChart3, desc: "High-quality marketing doesn't have to break the bank. We offer scalable solutions for every budget." },
    { title: "Dedicated Support", icon: HeartHandshake, desc: "We treat your business like our own, providing hands-on support every step of the way." }
  ];

  return (
    <section className="py-24 px-8 bg-surface overflow-hidden border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="micro-label text-secondary mb-6">Why Choose PMA</p>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface italic mb-16 leading-tight">
              The <span className="not-italic text-secondary">Pride</span> Advantage.
            </h2>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-16 max-w-xl">
              We bring fresh marketing ideas for modern businesses, combining strategy, creativity, and affordability to help you grow.
            </p>
            
            <div className="grid grid-cols-1 gap-12">
              {points.map((point, i) => (
                <motion.div 
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-12 items-start p-8 curved-box group hover:border-primary/30 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-xl border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-surface transition-all duration-500">
                    <point.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">{point.title}</h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed max-w-md">{point.desc}</p>
                  </div>
                  <div className="micro-label opacity-10 ml-auto">0{i+1}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] curved-box overflow-hidden">
              <img 
                src="https://picsum.photos/seed/agency/1200/1200" 
                alt="Pride Agency" 
                className="w-full h-full object-cover grayscale opacity-40 contrast-125 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
            </div>
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -right-12 p-16 curved-box bg-surface-high hidden md:block shadow-2xl"
            >
              <div className="font-headline text-6xl font-bold text-secondary mb-4">94%</div>
              <div className="micro-label text-[8px]">Client Retention</div>
            </motion.div>
            
            <div className="absolute top-12 left-12 micro-label opacity-20">05 / AUTHORITY</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
