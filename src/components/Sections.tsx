import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24 px-8 bg-surface overflow-hidden border-b border-black/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="micro-label text-secondary mb-8">Contact Us</p>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-12 leading-tight">
              Let's <span className="italic font-normal text-secondary">Talk.</span>
            </h2>
            <p className="font-body text-on-surface-variant text-xl mb-16 max-w-xl leading-relaxed">
              Ready to scale your business? Get in touch with us to discuss how we can help you achieve your goals.
            </p>
            
            <div className="flex flex-col gap-8">
              <div>
                <p className="micro-label text-secondary mb-2">WhatsApp</p>
                <a href="https://wa.me/919479688810" target="_blank" rel="noopener noreferrer" className="font-headline text-2xl font-bold text-on-surface hover:text-primary transition-colors block">+91 94796 88810</a>
              </div>
              <div>
                <p className="micro-label text-secondary mb-2">Contact Number</p>
                <a href="tel:+919479688810" className="font-headline text-2xl font-bold text-on-surface hover:text-primary transition-colors block">+91 94796 88810</a>
              </div>
              <div>
                <p className="micro-label text-secondary mb-2">Email</p>
                <a href="mailto:contact@pridemarketing.co.in" className="font-headline text-2xl font-bold text-on-surface hover:text-primary transition-colors block">contact@pridemarketing.co.in</a>
              </div>
              <div>
                <p className="micro-label text-secondary mb-2">Instagram</p>
                <a href="https://instagram.com/pride.pma" target="_blank" rel="noopener noreferrer" className="font-headline text-2xl font-bold text-on-surface hover:text-primary transition-colors block">@pride.pma</a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 curved-box bg-surface-high"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="micro-label text-on-surface">Your Name (Required)</label>
                <input type="text" required className="bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-primary transition-colors font-body" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="micro-label text-on-surface">Your Email</label>
                <input type="email" className="bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-primary transition-colors font-body" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="micro-label text-on-surface">Your Phone Number (Required)</label>
                <input type="tel" required className="bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-primary transition-colors font-body" placeholder="+91 98765 43210" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="micro-label text-on-surface">Select a Service (Required)</label>
                <select required defaultValue="" className="bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-primary transition-colors font-body appearance-none rounded-none cursor-pointer">
                  <option value="" disabled>Choose a service...</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Brand Identity Design">Brand Identity Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Local Business Marketing">Local Business Marketing</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="micro-label text-on-surface">Tell us about your project</label>
                <textarea className="bg-transparent border-b border-black/20 py-4 focus:outline-none focus:border-primary transition-colors font-body resize-none h-32" placeholder="Project details, goals, timeline..." />
              </div>
              <button className="mt-8 px-12 py-6 bg-primary text-surface rounded-full micro-label font-bold hover:bg-secondary hover:text-surface transition-all duration-500 shadow-xl flex items-center justify-center gap-4 group">
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-24 px-8 bg-surface text-on-surface-variant border-t border-black/[0.05]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-1">
            <div className="text-4xl font-bold tracking-tight text-on-surface font-headline italic mb-8">
              Pride
            </div>
            <p className="font-body text-sm leading-relaxed max-w-xs">
              Helping businesses grow with modern marketing strategies. A new agency bringing fresh marketing ideas for modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="micro-label text-on-surface mb-8">Services</h4>
            <ul className="flex flex-col gap-4 font-body text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Social Media</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Brand Identity</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Local Marketing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="micro-label text-on-surface mb-8">Company</h4>
            <ul className="flex flex-col gap-4 font-body text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">About PMA</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#our-team" className="hover:text-primary transition-colors">Our Team</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="micro-label text-on-surface mb-8">Connect</h4>
            <ul className="flex flex-col gap-4 font-body text-sm">
              <li><a href="https://instagram.com/pride.pma" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="https://wa.me/919479688810" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a></li>
              <li><a href="mailto:contact@pridemarketing.co.in" className="hover:text-primary transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="micro-label text-[8px]">© 2026 PRIDE MARKETING. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-4 micro-label text-[8px]">
            <span className="w-8 h-px bg-black/10" />
            Made with ♥ by Pride
          </div>
        </div>
      </div>
    </footer>
  );
}
