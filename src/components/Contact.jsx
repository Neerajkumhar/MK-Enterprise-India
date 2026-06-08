import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');

    const formData = new FormData(e.target);
    // Replace YOUR_ACCESS_KEY_HERE with your actual Web3Forms access key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
        e.target.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

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
            
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Message Sent!</h3>
                  <p className="text-slate-500 mt-2">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-accent-blue font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors text-slate-800 placeholder:text-slate-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                  <select 
                    name="subject"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors appearance-none text-slate-800"
                  >
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
                    required
                    name="message"
                    rows="5" 
                    placeholder="How can we help you?" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors resize-none text-slate-800 placeholder:text-slate-400"
                  ></textarea>
                </div>

                {formStatus === 'error' && (
                  <p className="text-red-500 text-sm font-medium">Something went wrong. Please try again later.</p>
                )}

                <button 
                  disabled={formStatus === 'loading'}
                  className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {formStatus === 'loading' ? (
                    <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
