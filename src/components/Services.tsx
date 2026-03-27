import { motion } from "motion/react";
import { Globe, Palette, Share2 } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 px-8 bg-surface overflow-hidden border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="micro-label text-secondary mb-6">Capabilities</p>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-tight">
              Elite Digital <span className="italic font-normal text-secondary">Craft.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="micro-label text-right hidden md:block"
          >
            02 / CORE OFFERINGS
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              title: "Website Design & Development", 
              icon: Globe, 
              desc: "We build high-performance, visually stunning digital ecosystems that convert visitors into loyal customers.",
            },
            { 
              title: "Digital & Local Marketing", 
              icon: Share2, 
              desc: "Targeted marketing strategies designed to capture, nurture, and convert leads in your specific market.",
            },
            { 
              title: "Social Media & Brand Identity", 
              icon: Palette, 
              desc: "Defining the visual language and strategic narrative of your brand to stand out and connect with your audience.",
            }
          ].map((service, i) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative p-16 curved-box transition-all duration-700 hover:border-primary/30 hover:shadow-2xl"
            >
              <div className="mb-12">
                <service.icon className="text-secondary w-12 h-12" />
              </div>
              <h3 className="font-headline text-3xl font-bold mb-8 text-on-surface leading-tight group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="font-body text-on-surface-variant text-base leading-relaxed mb-12">
                {service.desc}
              </p>
              
              <div className="absolute top-8 right-8 micro-label opacity-10">0{i+1}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
