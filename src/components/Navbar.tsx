import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Work", "Services", "Our Team", "Contact"];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const elementId = id.toLowerCase().replace(' ', '-');
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="glass-pill px-6 md:px-8 py-4 flex justify-between items-center relative z-50">
        <button 
          onClick={scrollToTop}
          className="text-xl font-bold tracking-tight text-on-surface font-headline italic hover:text-primary transition-colors cursor-pointer"
        >
          Pride
        </button>
        
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="micro-label text-on-surface font-bold hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="px-6 py-2 bg-primary text-surface rounded-full micro-label font-bold hover:bg-secondary hover:text-surface transition-all duration-300 shadow-md">
            Let's Talk
          </button>
        </div>

        <button 
          className="md:hidden text-on-surface p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full mt-4 p-6 glass-pill flex flex-col gap-6 md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="micro-label text-on-surface font-bold hover:text-primary transition-colors duration-300 text-left"
              >
                {item}
              </button>
            ))}
            <button className="px-6 py-4 bg-primary text-surface rounded-full micro-label font-bold hover:bg-secondary hover:text-surface transition-all duration-300 shadow-md w-full text-center mt-4">
              Let's Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
