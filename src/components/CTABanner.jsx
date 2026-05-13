import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] p-12 md:p-24 text-center bg-gradient-to-br from-accent-blue/10 via-primary-light to-accent-blue/5 border border-accent-blue/10"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.05)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(37,99,235,0.05)_0%,transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 bg-primary-light rounded-3xl flex items-center justify-center mx-auto mb-10 border border-accent-blue/20 backdrop-blur-xl"
            >
              <Rocket className="w-10 h-10 text-accent-blue" />
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-display mb-8 text-slate-800">
              Let’s Build Something <span className="text-gradient">Powerful</span> Together
            </h2>
            
            <p className="text-slate-600 text-lg mb-12 leading-relaxed">
              Partner with MK Enterprise India for your digital transformation. Your future starts here.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#contact" className="btn-primary flex items-center gap-2 px-10">
                Contact Now <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
