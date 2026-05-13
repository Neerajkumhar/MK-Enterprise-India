import React from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, 
  Globe, 
  Code, 
  Network, 
  FileText, 
  BarChart, 
  Camera, 
  Server, 
  Cpu, 
  Headset 
} from 'lucide-react';

const services = [
  {
    title: "IT Solutions",
    description: "Comprehensive IT infrastructure and management for modern enterprises.",
    icon: Laptop,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Web Development",
    description: "Responsive, high-performance websites built with the latest technologies.",
    icon: Globe,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Software Development",
    description: "Custom software solutions tailored to your unique business requirements.",
    icon: Code,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Networking",
    description: "Secure and scalable networking solutions for seamless connectivity.",
    icon: Network,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Government Tenders",
    description: "Specialized services for government tender preparation and management.",
    icon: FileText,
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing to boost your brand visibility and growth.",
    icon: BarChart,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "CCTV & Security",
    description: "Advanced surveillance and security systems for your business safety.",
    icon: Camera,
    color: "from-red-500 to-rose-500"
  },
  {
    title: "Cloud Setup",
    description: "Scalable cloud and server infrastructure for high-demand operations.",
    icon: Server,
    color: "from-teal-500 to-cyan-500"
  },
  {
    title: "Hardware Supply",
    description: "High-quality hardware supply and maintenance for enterprise needs.",
    icon: Cpu,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Enterprise Support",
    description: "24/7 technical support and maintenance for enterprise systems.",
    icon: Headset,
    color: "from-blue-700 to-indigo-700"
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="glass-card p-8 group relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`}></div>
      
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-3 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className="w-full h-full text-white" />
      </div>

      <h3 className="text-xl font-bold mb-4 group-hover:text-accent-blue transition-colors text-slate-800">{service.title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      <div className="flex items-center gap-2 text-xs font-bold text-accent-blue opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 uppercase tracking-widest">
        Learn More <Network className="w-3 h-3" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-primary-light">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-blue font-display font-bold tracking-widest uppercase mb-4"
          >
            What We Offer
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display mb-6"
          >
            Enterprise-Grade <span className="text-gradient">Digital Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600"
          >
            We provide a wide range of technology solutions designed to help businesses thrive in the digital age.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
