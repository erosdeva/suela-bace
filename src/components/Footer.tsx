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
      icon: <Eye className="w-6 h-6 text-red-600" />
    },
    {
      title: 'HUMAN CONNECTION',
      description: 'Themes of love, trauma, forgiveness, and the strength to heal.',
      icon: <Heart className="w-6 h-6 text-red-600" />
    },
    {
      title: 'CULTURAL VOICE',
      description: 'Proudly sharing Albanian heritage through fictional storytelling.',
      icon: <Feather className="w-6 h-6 text-red-600" />
    },
    {
      title: 'SPEAKING & EVENTS',
      description: 'Book readings, interviews, and events that connect and inspire.',
      icon: <Users className="w-6 h-6 text-red-600" />
    }
  ];

  return (
    <footer className="bg-white text-neutral-600 border-t border-neutral-200 group" id="footer">

      {/* 4 Pillars Grid Section (Precisely matching the sub-footer in web_page_spread.png) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-b border-neutral-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 p-5 rounded-2xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all duration-300"
              id={`footer-pillar-${i}`}
            >
              <div className="p-3 bg-red-50 rounded-xl text-red-600 border border-red-100">
                {pillar.icon}
              </div>
              <div>
                <h4 className="text-sm font-serif font-bold text-neutral-900 tracking-wider uppercase mb-1.5">
                  {pillar.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stay Connected Newsletter Banner (Highlighted in web_page_spread.png) */}

      {/* True Footer Copyright & Social Links */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6" id="footer-bottom">

        {/* Brand Copyright */}
        <div className="flex items-center gap-2 text-center md:text-left text-[11px] font-mono tracking-widest uppercase">
          <span className="text-neutral-900 font-bold">Deva AI Solutions © {new Date().getFullYear()}</span>
          <span className="text-neutral-300">|</span>
          <span className="text-neutral-500 font-light">All Rights Reserved</span>
        </div>

        {/* Social Link Badges */}
        <div className="flex gap-4 text-neutral-500">

        </div>
      </div>

    </footer>
  );
}
