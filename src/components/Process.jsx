import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Send, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: "Requirement Analysis",
    desc: "We dive deep into your business needs and objectives to create a solid roadmap.",
    icon: Search
  },
  {
    title: "Strategic Planning",
    desc: "Designing the architecture and choosing the right technology stack for your project.",
    icon: PenTool
  },
  {
    title: "Development",
    desc: "Our expert team builds your solution with precision and high-quality standards.",
    icon: Code
  },
  {
    title: "Deployment",
    desc: "Seamlessly launching your solution into the production environment.",
    icon: Send
  },
  {
    title: "Maintenance",
    desc: "Ongoing support and updates to ensure your systems remain future-proof.",
    icon: ShieldCheck
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-accent-blue font-display font-bold tracking-widest uppercase mb-4">Our Workflow</div>
          <h2 className="text-4xl md:text-5xl font-display">How We Bring Your <span className="text-gradient">Ideas</span> to Life</h2>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-accent-blue/0 via-accent-blue/10 to-accent-blue/0 hidden lg:block -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 text-center group"
              >
                <div className="w-20 h-20 rounded-2xl glass border border-accent-blue/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:border-accent-blue transition-all duration-500 relative">
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-accent-blue text-white text-sm font-bold flex items-center justify-center shadow-lg">
                    {i + 1}
                  </div>
                  <step.icon className="w-10 h-10 text-accent-blue group-hover:text-accent-blue transition-colors" />
                </div>
                
                <h4 className="text-xl font-bold mb-4 text-slate-800">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
