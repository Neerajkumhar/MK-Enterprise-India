import React from 'react';
import { Rocket, Mail, Phone, MapPin, MessageCircle, Send, Briefcase, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-light pt-24 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">MK</span>
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                MK <span className="text-accent-blue">Enterprise India</span>
              </span>
            </div>
            <p className="text-slate-600 mb-8 max-w-sm leading-relaxed">
              Empowering businesses with smart digital solutions. We are your trusted partner for enterprise technology and IT infrastructure.
            </p>
            <div className="flex gap-4">
              {[MessageCircle, Send, Briefcase, Camera].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center hover:border-accent-blue hover:bg-accent-blue/10 transition-all duration-300">
                  <Icon className="w-5 h-5 text-slate-500 hover:text-accent-blue transition-colors" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Process', 'Pricing', 'Blog'].map(link => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-accent-blue transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Services</h4>
            <ul className="space-y-4">
              {['IT Solutions', 'Web Development', 'Cloud Setup', 'CCTV & Security', 'Networking', 'Tender Services'].map(service => (
                <li key={service}>
                  <a href="#" className="text-slate-500 hover:text-accent-blue transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8">Newsletter</h4>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest tech updates and enterprise news.
            </p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 focus:outline-none focus:border-accent-blue transition-colors pr-12 text-slate-800"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-accent-blue rounded-lg flex items-center justify-center hover:bg-accent-blue/80 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MK Enterprise India. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-700">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700">Terms of Service</a>
            <a href="#" className="hover:text-slate-700">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
