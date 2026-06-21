import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Linkedin, Bookmark } from 'lucide-react';
import { AUTHOR_NAME, AUTHOR_TAGLINE } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background shading on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Simple scroll spy logic
      const sections = ['home', 'about', 'books'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    const target = document.getElementById(sectionId);
    if (target) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About the Author', id: 'about' },
    { label: 'Books', id: 'books' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'bg-black/95 border-b border-neutral-900/80 backdrop-blur-md shadow-lg py-3'
        : 'bg-gradient-to-b from-black/85 to-transparent py-5/5'
        }`}
      id="top-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Author Brand Name & Emblem */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')} id="navbar-brand">
          <div className="w-8 h-8 rounded-full bg-red-950/40 border border-red-600/60 flex items-center justify-center text-red-500 font-serif font-bold text-sm shadow-md shadow-red-950/20">
            ❦
          </div>
          <div>
            <span className="font-serif text-lg md:text-xl font-bold tracking-widest text-white block uppercase">
              {AUTHOR_NAME}
            </span>
            <span className="text-[8px] md:text-[9px] text-red-500 font-mono tracking-widest uppercase block -mt-1 font-semibold">
              {AUTHOR_TAGLINE}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-neutral-400">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`hover:text-white transition-all cursor-pointer relative pb-1 block font-semibold ${activeSection === item.id ? 'text-white font-bold' : ''
                }`}
              id={`nav-item-btn-${item.id}`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-red-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Social Badges Links */}
        <div className="hidden xl:flex items-center gap-4 text-neutral-400">
        </div>

        {/* Mobile menu triggers */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
          aria-label="Toggle menu"
          id="mobile-nav-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-black/98 border-b border-neutral-900 px-6 py-6 space-y-4 absolute top-full left-0 right-0 z-30 flex flex-col text-sm font-mono tracking-widest uppercase" id="mobile-menu-drawer">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left py-2 hover:text-white transition-all ${activeSection === item.id ? 'text-white pl-2 border-l border-red-500' : 'text-neutral-400'
                }`}
              id={`mobile-nav-item-${item.id}`}
            >
              {item.label}
            </button>
          ))}
          <div className="flex gap-4 pt-4 border-t border-neutral-900 text-neutral-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
