import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-accent-blue font-display font-bold tracking-widest uppercase mb-4">Contact Us</div>
            <h2 className="text-4xl md:text-5xl font-display mb-8">Ready to Start Your <span className="text-gradient">Journey?</span></h2>
            <p className="text-slate-600 text-lg mb-12">
              Have a project in mind or need enterprise support? Reach out to us today and let's build something extraordinary together.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Phone", content: "+91 92164 87878", color: "text-blue-400" },
                { icon: Mail, title: "Email", content: "info@mkenterpriseindia.com", color: "text-blue-500" },
                { icon: MapPin, title: "Address", content: "Arvind Singh, MK Enterprise India", color: "text-pink-400" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass border border-accent-blue/10 flex items-center justify-center group-hover:border-accent-blue transition-colors duration-300">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-bold uppercase tracking-widest mb-1">{item.title}</div>
                    <div className="text-lg font-medium group-hover:text-accent-blue transition-colors text-slate-800">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 glass-card border-accent-blue/20 flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-accent-blue" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Live Chat Support</h4>
                <p className="text-sm text-slate-500">Available Monday - Friday, 9am - 6pm</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-slate-100 relative"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5 -z-10">
              <Send className="w-64 h-64 text-accent-blue" />
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors text-slate-800 placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors text-slate-800 placeholder:text-slate-400"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors appearance-none text-slate-800">
                  <option>Software Development</option>
                  <option>Web Development</option>
                  <option>IT Solutions</option>
                  <option>Government Tender</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="How can we help you?" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors resize-none text-slate-800 placeholder:text-slate-400"
                ></textarea>
              </div>

              <button className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
