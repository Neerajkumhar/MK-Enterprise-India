import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/about-img.png"
                alt="Modern Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            </div>

            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent-blue/5 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-accent-blue font-display font-bold tracking-widest uppercase mb-4">About MK Enterprise India</div>
            <h2 className="text-4xl md:text-5xl mb-6">Driving Innovation Through <span className="text-gradient">Technology</span></h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We are a leading technology and digital solutions provider committed to empowering enterprises with cutting-edge IT infrastructure and software development. Our mission is to bridge the gap between complex technology and business growth.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-sm text-slate-500">To deliver innovative and reliable digital solutions that drive sustainable business growth and efficiency.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                <p className="text-sm text-slate-500">To be the most trusted technology partner for enterprises and government sectors across the globe.</p>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
