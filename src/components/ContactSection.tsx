import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Feather, Phone, Sparkles, Loader2 } from 'lucide-react';
import { AUTHOR_NAME } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Question',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSending(true);

    // Simulate sending API delay
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({
        name: '',
        email: '',
        category: 'Question',
        message: ''
      });

      // Clear success notification after several seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-950 border-b border-neutral-900" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs tracking-[0.3em] font-mono uppercase text-red-500 font-bold">Inquiries & bookings</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-[2px] bg-red-600 mx-auto mt-4" />
          <p className="text-neutral-400 max-w-xl mx-auto font-light text-sm md:text-base leading-relaxed">
            Would you like to book Suela for a reading, schedule an interview, or simply send a note of appreciation? Complete the correspondence below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Card left side context */}
          <div className="lg:col-span-2 space-y-8 bg-neutral-900/10 border border-neutral-900/60 p-6 md:p-8 rounded-2xl">
            <div>
              <h3 className="text-lg font-serif font-bold text-white mb-2 flex items-center gap-2">
                <Feather className="w-5 h-5 text-red-500" /> Correspondence
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                Suela reads every reader email and message she receives, responding as writing schedules permit.
              </p>
            </div>

            <div className="space-y-6 font-mono text-xs text-neutral-400">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-neutral-900 rounded-lg text-red-500 border border-neutral-800/80">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 block uppercase tracking-wider">Email Address</span>
                  <a href="mailto:info@suelabace.com" className="text-neutral-200 hover:text-red-500 transition-colors mt-0.5 block">
                    info@suelabace.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-neutral-900 rounded-lg text-red-500 border border-neutral-800/80">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 block uppercase tracking-wider">Literary Agency Contact</span>
                  <p className="text-neutral-200 mt-0.5">
                    Itasca Books Publishing Representatives
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-neutral-900 rounded-lg text-red-500 border border-neutral-800/80">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 block uppercase tracking-wider">Author Base</span>
                  <p className="text-neutral-200 mt-0.5">
                    United States / Albania
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-950/20 border border-red-900/40 p-4 rounded-xl">
              <p className="text-xs text-red-400 leading-relaxed italic font-serif">
                "Literature is the ultimate translation of pain into universal beauty. Thank you for walking this creative path with me."
              </p>
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-2.5 block text-right">— Suela Baçe</span>
            </div>
          </div>

          {/* Form right side list */}
          <div className="lg:col-span-3 bg-neutral-950 p-6 md:p-8 rounded-2xl border border-neutral-800 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-4"
                  key="success"
                  id="contact-success"
                >
                  <div className="w-14 h-14 bg-red-950/60 border border-red-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-red-900/30">
                    <CheckCircle2 className="w-7 h-7 text-red-500" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif font-bold text-white">Message Transmitted!</h3>
                    <p className="text-xs text-neutral-400 leading-normal max-w-sm mx-auto font-light">
                      Thank you for your thoughts. We have safely routed your inquiry and will respond as soon as writing schedules allow.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSent(false)}
                    className="mt-4 px-5 py-2 bg-neutral-900 hover:bg-neutral-800 hover:text-white rounded-lg text-xs font-mono tracking-widest uppercase transition-colors border border-neutral-800 cursor-pointer"
                    id="contact-reset"
                  >
                    Send Another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" key="form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Your Name */}
                    <div>
                      <label htmlFor="name-input" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 font-semibold">
                        Your Name
                      </label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Elena Vasili"
                        className="w-full bg-neutral-900 text-neutral-200 text-xs py-2.5 px-3 rounded-lg border border-neutral-800 placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors font-sans"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="email-input" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 font-semibold">
                        Email Address
                      </label>
                      <input
                        id="email-input"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className="w-full bg-neutral-900 text-neutral-200 text-xs py-2.5 px-3 rounded-lg border border-neutral-800 placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors font-sans"
                      />
                    </div>
                  </div>

                  {/* Inquiry Category */}
                  <div>
                    <label htmlFor="category-select" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 font-semibold">
                      Nature of Inquiry
                    </label>
                    <select
                      id="category-select"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-neutral-900 text-neutral-200 text-xs py-2.5 px-3 rounded-lg border border-neutral-800 focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Question">General Reader Feedback / Question</option>
                      <option value="Speaking">Speaking Event/Reading Inquiry</option>
                      <option value="Interview">Media Interview / Review Copy</option>
                      <option value="Collaboration">Collaboration / Academic Query</option>
                    </select>
                  </div>

                  {/* Message content */}
                  <div>
                    <label htmlFor="message-textarea" className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1.5 font-semibold">
                      Your Message
                    </label>
                    <textarea
                      id="message-textarea"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your email here..."
                      className="w-full bg-neutral-900 text-neutral-200 text-xs py-2.5 px-3 rounded-lg border border-neutral-800 placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors font-serif resize-none"
                    />
                  </div>

                  {/* Submit bar */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3 px-4 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white text-xs tracking-widest uppercase font-mono rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-red-900/20 disabled:opacity-75 disabled:pointer-events-none"
                    id="contact-submit"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-red-200" />
                        <span>Transmitting Correspondence...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-red-200" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
