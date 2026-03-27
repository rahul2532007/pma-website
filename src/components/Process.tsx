import { motion } from "motion/react";
import { Search, Compass, Zap, TrendingUp } from "lucide-react";

export default function Process() {
  const steps = [
    { title: "Discovery", icon: Search, desc: "We start by understanding your business, goals, and target audience." },
    { title: "Strategy", icon: Compass, desc: "We develop a customized marketing plan tailored to your specific needs." },
    { title: "Execution", icon: Zap, desc: "Our team implements the strategy across chosen channels and platforms." },
    { title: "Optimization", icon: TrendingUp, desc: "We continuously monitor, analyze, and refine campaigns for maximum ROI." }
  ];

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
            <p className="micro-label text-secondary mb-6">How We Work</p>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface italic">
              Built for <span className="not-italic">Your Project.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="micro-label text-right hidden md:block"
          >
            04 / PROCESS
          </motion.div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-start p-12 curved-box group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl border border-black/10 flex items-center justify-center mb-12 transition-all duration-500 group-hover:bg-primary group-hover:text-surface">
                <step.icon className="w-6 h-6" />
              </div>
              <div className="micro-label text-[8px] text-secondary mb-4">Step 0{i+1}</div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-6 group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">{step.desc}</p>
              
              <div className="absolute top-8 right-8 micro-label opacity-10">0{i+1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
