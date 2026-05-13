import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Clock, 
  Lock, 
  Award, 
  Headphones, 
  DollarSign, 
  CheckCircle 
} from 'lucide-react';

const reasons = [
  {
    title: "Professional Team",
    desc: "A dedicated team of engineers and developers focused on your success.",
    icon: Users
  },
  {
    title: "Fast Delivery",
    desc: "Optimized workflows ensuring timely completion of all projects.",
    icon: Clock
  },
  {
    title: "Secure Solutions",
    desc: "Enterprise-grade security protocols for all digital assets.",
    icon: Lock
  },

  {
    title: "24/7 Support",
    desc: "Round-the-clock technical assistance for all our clients.",
    icon: Headphones
  },
  {
    title: "Affordable Pricing",
    desc: "Competitive pricing models without compromising on quality.",
    icon: DollarSign
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[150px] -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-accent-blue font-display font-bold tracking-widest uppercase mb-4">Why Choose Us</div>
            <h2 className="text-4xl md:text-5xl font-display mb-8">Building Trust Through <span className="text-gradient">Quality</span> & Reliability</h2>
            <p className="text-slate-600 text-lg mb-8">
              At MK Enterprise India, we combine technical expertise with a customer-centric approach to deliver solutions that actually matter.
            </p>

            <div className="space-y-6">
              {[
                "Innovative and Robust Solutions",
                "Scalable and Future-Ready Technology",
                "Dedicated Project Management Team"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent-blue/20 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-accent-blue" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary mt-10">Learn More About Our Values</button>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 border-slate-100 hover:bg-slate-50"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-accent-blue" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-slate-800">{reason.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
