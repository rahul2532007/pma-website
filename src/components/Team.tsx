import { motion } from "motion/react";

export default function Team() {
  const team = [
    {
      name: "Rahul Nishad",
      role: "Co-Founder & CEO",
      desc: "Handles all the tech",
      image: "https://i.pravatar.cc/300?u=rahul"
    },
    {
      name: "Atharv Pandey",
      role: "Co-Founder & COO",
      desc: "Handle all the marketing and communications",
      image: "https://i.pravatar.cc/300?u=atharv"
    },
    {
      name: "Christy Lakra",
      role: "SSM Specialist",
      desc: "Social Media Management",
      image: "https://i.pravatar.cc/300?u=christy"
    },
    {
      name: "Umar Qureshi",
      role: "CRM Specialist",
      desc: "Client Relationship Management",
      image: "https://i.pravatar.cc/300?u=umar"
    }
  ];

  return (
    <section id="our-team" className="py-24 px-8 bg-surface overflow-hidden border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="micro-label text-secondary mb-6">Our Team</p>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface italic">
              The Minds <span className="not-italic">Behind Pride.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="micro-label text-right hidden md:block"
          >
            06 / TEAM
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-surface-high">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-2">
                <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">{member.name}</h3>
                <p className="micro-label text-secondary mb-3">{member.role}</p>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">{member.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
