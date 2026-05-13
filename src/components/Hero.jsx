import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.02)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent-blue/10 mb-6"
          >
            <span className="w-2 h-2 bg-accent-blue rounded-full animate-ping"></span>
            <span className="text-sm font-medium text-accent-blue tracking-wider uppercase">Next-Gen Enterprise Solutions</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-display leading-[1.1] mb-6">
            Empowering Businesses with <span className="text-gradient">Smart Digital</span> Solutions
          </h1>

          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            MK Enterprise India delivers modern IT infrastructure, enterprise technology, digital services, and business solutions tailored for the future.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#services" className="btn-primary group flex items-center gap-2">
              Explore Services
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary flex items-center justify-center">
              Contact Us
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { icon: Shield, label: 'Secure' },
              { icon: Zap, label: 'Fast' },
              { icon: Globe, label: 'Global' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 text-slate-500"
              >
                <item.icon className="w-5 h-5 text-accent-blue" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Main Visual Element */}
          <div className="relative z-10 p-4 glass-card border-slate-200 group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            <img
              src="https://assets.infineon.com/is/image/infineon/young-man-in-server-room.jpeg"
              alt="Cybersecurity"
              className="rounded-xl w-full h-auto object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
            />

            {/* Floating Info Cards */}


            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl border border-white/20 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent-purple/20 rounded-lg">
                  <Shield className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Security</div>
                  <div className="text-sm font-bold text-slate-800">Enterprise Grade</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-accent-blue/5 rounded-full -z-10 animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-accent-blue/5 rounded-full -z-10 animate-reverse-spin-slow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
