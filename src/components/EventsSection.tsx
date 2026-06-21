import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Video, Users, CheckCircle2 } from 'lucide-react';
import { EVENTS } from '../data';
import { EventItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState<'All' | 'Virtual' | 'In-Person'>('All');
  const [rsvpEvent, setRsvpEvent] = useState<EventItem | null>(null);
  const [rsvpName, setRsvpName] = useState('');
  const [rsvpEmail, setRsvpEmail] = useState('');
  const [ticketCode, setTicketCode] = useState<string | null>(null);

  const filteredEvents = EVENTS.filter((e) => {
    if (activeTab === 'All') return true;
    return e.type === activeTab || (activeTab === 'In-Person' && e.type !== 'Virtual');
  });

  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rsvpName.trim() || !rsvpEmail.trim()) return;

    // Generate simulated ticket code
    const randomCode = `SB-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketCode(randomCode);
  };

  const closeRsvpModal = () => {
    setRsvpEvent(null);
    setRsvpName('');
    setRsvpEmail('');
    setTicketCode(null);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-950 border-b border-neutral-900" id="events">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs tracking-[0.3em] font-mono uppercase text-red-500">Upcoming calendar</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Readings & Events
            </h2>
            <div className="w-16 h-[2px] bg-red-600" />
            <p className="text-neutral-400 max-w-xl font-light text-sm md:text-base leading-relaxed">
              Connect with Suela in virtual readings, signings, and discussions about culture, writing, and resilience.
            </p>
          </div>

          {/* Filter subtabs */}
          <div className="flex bg-neutral-900 border border-neutral-800 p-1.5 rounded-xl self-start md:self-end">
            {(['All', 'Virtual', 'In-Person'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 rounded-lg text-xs font-mono tracking-wider uppercase transition-all ${
                  activeTab === tab
                    ? 'bg-red-700/20 text-white border border-red-900/40 font-medium'
                    : 'text-neutral-400 hover:text-white border border-transparent'
                }`}
                id={`event-tab-${tab.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Events list */}
        <div className="space-y-6">
          {filteredEvents.map((evt, i) => (
            <motion.div
              key={evt.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 md:p-8 bg-neutral-900/30 hover:bg-neutral-950/60 border border-neutral-900 hover:border-neutral-800 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all duration-300 shadow-sm"
              id={`event-item-${evt.id}`}
            >
              {/* Event Date badge */}
              <div className="flex md:flex-col items-center gap-3 md:gap-1 text-center md:min-w-[100px] bg-neutral-950 md:bg-transparent border md:border-0 border-neutral-800 py-2.5 px-4 md:p-0 rounded-xl">
                <span className="text-2xl md:text-4xl font-serif font-extrabold text-white tracking-tight">
                  {new Date(evt.date).getDate() + 1} 
                </span>
                <span className="text-[10px] md:text-xs font-mono tracking-widest text-red-500 uppercase mt-0.5">
                  {new Date(evt.date).toLocaleDateString('en-US', { month: 'short' })}
                </span>
                <span className="text-[10px] font-mono text-neutral-600 block md:hidden">
                  • {evt.time}
                </span>
              </div>

              {/* Event description */}
              <div className="flex-grow space-y-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border ${
                      evt.type === 'Virtual'
                        ? 'bg-blue-950/50 text-blue-400 border-blue-900/40'
                        : evt.type === 'Reading'
                        ? 'bg-purple-950/50 text-purple-400 border-purple-900/40'
                        : 'bg-red-950/50 text-red-400 border-red-900/40'
                    }`}
                  >
                    {evt.type === 'Virtual' ? <Video className="w-2.5 h-2.5" /> : <Users className="w-2.5 h-2.5" />}
                    {evt.type}
                  </span>
                  <span className="text-xs text-neutral-500 font-mono flex items-center gap-1 leading-none">
                    <Clock className="w-3.5 h-3.5" /> {evt.time}
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-serif font-bold text-white tracking-wide group-hover:text-red-500 transition-colors">
                  {evt.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed font-light max-w-2xl">
                  {evt.description}
                </p>

                <div className="flex items-center gap-1 text-xs text-neutral-500 font-mono pt-1">
                  <MapPin className="w-3.5 h-3.5 text-neutral-600" />
                  <span>{evt.location}</span>
                </div>
              </div>

              {/* RSVP button */}
              <button
                onClick={() => setRsvpEvent(evt)}
                className="py-2.5 px-5 bg-neutral-900 border border-neutral-800 hover:border-red-600 hover:bg-neutral-950 text-neutral-200 hover:text-white text-xs tracking-wider uppercase font-mono rounded-lg transition-all cursor-pointer self-stretch md:self-auto text-center"
                id={`rsvp-btn-${evt.id}`}
              >
                RSVP Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal RSVP Confirmation Dialog */}
        <AnimatePresence>
          {rsvpEvent && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <div className="absolute inset-0 cursor-pointer" onClick={closeRsvpModal} id="rsvp-modal-overlay" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-neutral-950 border border-neutral-800 p-6 md:p-8 rounded-2xl w-full max-w-lg text-white"
                id="rsvp-modal-card"
              >
                {!ticketCode ? (
                  <form onSubmit={handleRsvpSubmit} className="space-y-5">
                    <div>
                      <span className="text-[10px] tracking-widest uppercase font-mono text-neutral-500">Secure Your Attendance</span>
                      <h3 className="text-xl font-serif font-bold text-white mt-1">
                        RSVP for: {rsvpEvent.title}
                      </h3>
                      <p className="text-xs text-neutral-400 mt-2 font-light leading-relaxed">
                        Specify your secure validation details below to save your seat and receive the dynamic access details prior to the session.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={rsvpName}
                          onChange={(e) => setRsvpName(e.target.value)}
                          placeholder="e.g. Suela Baçe"
                          className="w-full bg-neutral-900 text-neutral-200 text-xs py-2.5 px-3 rounded-lg border border-neutral-800 placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-400 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={rsvpEmail}
                          onChange={(e) => setRsvpEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          className="w-full bg-neutral-900 text-neutral-200 text-xs py-2.5 px-3 rounded-lg border border-neutral-800 placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex gap-3">
                      <button
                        type="button"
                        onClick={closeRsvpModal}
                        className="flex-1 py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800 rounded-lg text-xs tracking-wider uppercase font-mono transition-colors"
                        id="rsvp-cancel"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-2.5 px-4 bg-red-700 hover:bg-red-600 rounded-lg text-xs tracking-wider uppercase font-mono transition-colors cursor-pointer"
                        id="rsvp-submit"
                      >
                        Confirm Seat
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center space-y-6 py-4">
                    <div className="w-12 h-12 bg-red-950/60 border border-red-600 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-red-900/20">
                      <CheckCircle2 className="w-6 h-6 text-red-500" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-serif font-bold text-white">RSVP Successful!</h3>
                      <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto font-light">
                        {rsvpName}, your seat is saved for <span className="text-white font-medium">"{rsvpEvent.title}"</span> on {new Date(rsvpEvent.date).toLocaleDateString('en-US', { dateStyle: 'long' })}. 
                      </p>
                    </div>

                    {/* Display Ticket Code */}
                    <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl max-w-xs mx-auto">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 block">Your Ticket Confirmation</span>
                      <span className="text-xl font-mono font-bold text-red-500 tracking-wider block mt-1">
                        {ticketCode}
                      </span>
                    </div>

                    <p className="text-[10px] text-neutral-500 italic max-w-xs mx-auto font-light leading-snug">
                      We've dispatched a digital summary containing the joining coordinates and schedule reminder details to <span className="text-neutral-400">{rsvpEmail}</span>.
                    </p>

                    <button
                      type="button"
                      onClick={closeRsvpModal}
                      className="py-2 px-6 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white text-xs tracking-wider uppercase font-mono rounded-lg transition-colors border border-neutral-800 inline-block cursor-pointer"
                      id="rsvp-done"
                    >
                      Done
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
