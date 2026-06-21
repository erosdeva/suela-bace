import React, { useState } from 'react';
import { BookMarked, Eye, Flame, Award, MailCheck, Facebook, Instagram, Linkedin, Heart, Feather, Users, Send } from 'lucide-react';
import { AUTHOR_NAME, AUTHOR_TAGLINE } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer() {
  const [newsName, setNewsName] = useState('');
  const [newsEmail, setNewsEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsName.trim() || !newsEmail.trim()) return;

    setSubscribed(true);
    setTimeout(() => {
      setNewsName('');
      setNewsEmail('');
    }, 4500);
  };

  const pillars = [
    {
      title: 'POWERFUL STORIES',
      description: 'Emotionally rich novels that uncover the truth behind the masks.',
      icon: <Eye className="w-6 h-6 text-red-500" />
    },
    {
      title: 'HUMAN CONNECTION',
      description: 'Themes of love, trauma, forgiveness, and the strength to heal.',
      icon: <Heart className="w-6 h-6 text-red-500" />
    },
    {
      title: 'CULTURAL VOICE',
      description: 'Proudly sharing Albanian heritage through fictional storytelling.',
      icon: <Feather className="w-6 h-6 text-red-500" />
    },
    {
      title: 'SPEAKING & EVENTS',
      description: 'Book readings, interviews, and events that connect and inspire.',
      icon: <Users className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <footer className="bg-black text-neutral-400 border-t border-neutral-900 group" id="footer">
      
      {/* 4 Pillars Grid Section (Precisely matching the sub-footer in web_page_spread.png) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-b border-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 p-5 rounded-2xl hover:bg-neutral-950/40 border border-transparent hover:border-neutral-900 transition-all duration-300"
              id={`footer-pillar-${i}`}
            >
              <div className="p-3 bg-neutral-900/45 rounded-xl text-red-500 border border-neutral-800/80">
                {pillar.icon}
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-white tracking-wider uppercase mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stay Connected Newsletter Banner (Highlighted in web_page_spread.png) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-b border-neutral-900 bg-neutral-950/20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-3 text-center lg:text-left max-w-md">
            <h3 className="text-lg md:text-xl font-serif font-bold text-white uppercase tracking-wider flex items-center justify-center lg:justify-start gap-2">
              <MailCheck className="w-5 h-5 text-red-500" /> Stay Connected
            </h3>
            <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
              Join Suela Baçe's newsletter for writing updates, cultural reflections, and exclusive advance reader copy previews.
            </p>
          </div>

          {/* Form */}
          <div className="w-full max-w-xl">
            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-5 bg-red-950/20 border border-red-900/40 rounded-xl text-center space-y-2"
                  id="newsletter-success"
                >
                  <h4 className="text-sm font-serif font-bold text-white">Subscription Saved!</h4>
                  <p className="text-xs text-neutral-400 leading-normal font-light">
                    Thank you. We have saved your subscription. You will receive updates as creative drafts unlock!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribeSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <label htmlFor="newsletter-name" className="sr-only">Your Name</label>
                    <input
                      id="newsletter-name"
                      type="text"
                      required
                      value={newsName}
                      onChange={(e) => setNewsName(e.target.value)}
                      placeholder="Your Name"
                      className="w-full bg-neutral-900/80 text-white text-xs py-3 px-4 rounded-xl border border-neutral-800 focus:outline-none focus:border-red-600 transition-colors font-sans"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="newsletter-email" className="sr-only">Your Email</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={newsEmail}
                      onChange={(e) => setNewsEmail(e.target.value)}
                      placeholder="Your Email"
                      className="w-full bg-neutral-900/80 text-white text-xs py-3 px-4 rounded-xl border border-neutral-800 focus:outline-none focus:border-red-600 transition-colors font-sans"
                    />
                  </div>
                  <button
                    type="submit"
                    className="py-3 px-6 bg-red-700 hover:bg-red-600 text-white text-xs font-mono font-bold tracking-widest uppercase rounded-xl transition-colors cursor-pointer text-center whitespace-nowrap shadow-md shadow-red-900/10 flex items-center justify-center gap-1.5"
                    id="newsletter-submit"
                  >
                    <Send className="w-3.5 h-3.5" /> Subscribe
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* True Footer Copyright & Social Links */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6" id="footer-bottom">
        
        {/* Brand Copyright */}
        <div className="flex items-center gap-2 text-center md:text-left text-[11px] font-mono tracking-widest uppercase">
          <span className="text-white font-bold">{AUTHOR_NAME} Portfolio © {new Date().getFullYear()}</span>
          <span className="text-neutral-700">|</span>
          <span className="text-neutral-500 font-light">All Rights Reserved</span>
        </div>

        {/* Social Link Badges */}
        <div className="flex gap-4 text-neutral-500">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors border border-neutral-900 hover:border-neutral-800 p-2 rounded-xl bg-neutral-950/60"
            aria-label="Facebook link"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors border border-neutral-900 hover:border-neutral-800 p-2 rounded-xl bg-neutral-950/60"
            aria-label="Instagram link"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors border border-neutral-900 hover:border-neutral-800 p-2 rounded-xl bg-neutral-950/60"
            aria-label="LinkedIn link"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

    </footer>
  );
}
