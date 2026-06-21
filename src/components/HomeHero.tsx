import { Book } from '../types';
import { BOOKS, BIOGRAPHY } from '../data';
import { motion } from 'motion/react';
import { Sparkles, ShoppingBag, BookOpen, Quote, ChevronRight } from 'lucide-react';

interface HomeHeroProps {
  onOpenBook: (book: Book) => void;
  onScrollToSection: (sectionId: string) => void;
}

export default function HomeHero({ onOpenBook, onScrollToSection }: HomeHeroProps) {
  const faceOfLoveBook = BOOKS.find((b) => b.id === 'the-face-of-love')!;
  const stormsOfLifeBook = BOOKS.find((b) => b.id === 'storms-of-life')!;

  return (
    <section className="relative min-h-screen bg-black pt-28 pb-20 overflow-hidden flex items-center justify-center font-sans select-none" id="home">
      {/* Absolute Smoky Crimson/Velvet Background Shaders */}
      <div className="absolute inset-0 z-0 bg-radial-[circle_at_30%_50%] from-red-950/20 via-black to-black opacity-80" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-red-950/15 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Grid: Adapts precisely from web_page_spread.png */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 z-10 grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
        
        {/* Left Aspect: Author Image & Fast Info (Col Span: 4) */}
        <div className="xl:col-span-4 flex flex-col items-center xl:items-start text-center xl:text-left space-y-6">
          <div className="relative group">
            {/* Red Light Smoke Glow behind Author */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-red-800 to-red-900/40 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
            
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] xl:max-w-full aspect-[3/4] overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/40 shadow-2xl">
              <img
                src={BIOGRAPHY.portraitImage}
                alt="Suela Baçe"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
              />
              {/* Luxury dark red vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-45" />
            </div>
          </div>

          <div className="space-y-4 max-w-sm">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-950/40 border border-red-900/50 rounded-full text-[10px] font-mono tracking-widest uppercase text-red-400">
              <Sparkles className="w-3 h-3 text-red-500" /> Albanian Storyteller
            </div>
            
            <h1 className="text-3xl font-serif font-bold text-white tracking-tight leading-snug">
              Stories that Inspire.<br />
              <span className="text-red-500 italic font-serif">Lessons</span> that Last.
            </h1>
            
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              {BIOGRAPHY.shortBio}
            </p>

            <button
              onClick={() => onScrollToSection('about')}
              className="py-3 px-6 bg-red-800 hover:bg-red-700 text-white text-xs tracking-widest uppercase font-mono rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1 shadow-md shadow-red-900/10"
              id="hero-about-btn"
            >
              <span>About the Author</span>
              <ChevronRight className="w-4 h-4 text-red-300" />
            </button>
          </div>
        </div>

        {/* Center Aspect: Book covers focus & buy triggers (Col Span: 5) */}
        <div className="xl:col-span-5 flex flex-col items-center space-y-8 py-8 px-2">
          <span className="text-xs tracking-[0.4em] font-mono uppercase text-red-500/80 font-semibold">New Releases</span>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-md xl:max-w-none">
            {/* Book Card 1: The Face of Love */}
            <motion.div
              whileHover={{ y: -6 }}
              className="flex flex-col items-center space-y-4"
              id="hero-book-card-face-of-love"
            >
              <div
                onClick={() => onOpenBook(faceOfLoveBook)}
                className="relative cursor-pointer group shadow-2xl rounded-xl overflow-hidden aspect-[3/4] border border-neutral-800 bg-neutral-900"
              >
                <img
                  src={faceOfLoveBook.coverImage}
                  alt={faceOfLoveBook.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="text-[10px] tracking-widest font-mono text-red-400 uppercase border border-red-900/60 p-2 rounded bg-black/80 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" /> Read Excerpt
                  </span>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wide">
                  {faceOfLoveBook.title}
                </h3>
                <p className="text-[10px] text-neutral-500 font-serif leading-snug px-1 max-w-[170px] h-[32px] overflow-hidden text-ellipsis line-clamp-2">
                  A gripping mystery of sisterhood, secrets, and survival.
                </p>
                <div className="flex flex-col gap-2 pt-1 font-mono text-[9px] tracking-widest uppercase">
                  <a
                    href={faceOfLoveBook.purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-3 bg-red-800 hover:bg-red-700 text-white rounded text-center block transition-colors shadow-sm"
                    id="hero-face-purchase-btn"
                  >
                    Buy Now
                  </a>
                  <button
                    onClick={() => onOpenBook(faceOfLoveBook)}
                    className="py-1 px-3 border border-neutral-800 hover:border-neutral-700 hover:text-white text-neutral-400 rounded transition-colors"
                    id="hero-face-learn-btn"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Book Card 2: Storms of Life */}
            <motion.div
              whileHover={{ y: -6 }}
              className="flex flex-col items-center space-y-4"
              id="hero-book-card-storms-of-life"
            >
              <div
                onClick={() => onOpenBook(stormsOfLifeBook)}
                className="relative cursor-pointer group shadow-2xl rounded-xl overflow-hidden aspect-[3/4] border border-neutral-800 bg-neutral-900"
              >
                <img
                  src={stormsOfLifeBook.coverImage}
                  alt={stormsOfLifeBook.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="text-[10px] tracking-widest font-mono text-red-400 uppercase border border-red-900/60 p-2 rounded bg-black/80 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" /> Read Excerpt
                  </span>
                </div>
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wide">
                  {stormsOfLifeBook.title}
                </h3>
                <p className="text-[10px] text-neutral-500 font-serif leading-snug px-1 max-w-[170px] h-[32px] overflow-hidden text-ellipsis line-clamp-2">
                  A powerful story of pain, resilience, and wisdom.
                </p>
                <div className="flex flex-col gap-2 pt-1 font-mono text-[9px] tracking-widest uppercase">
                  <button
                    onClick={() => onOpenBook(stormsOfLifeBook)}
                    className="py-1.5 px-3 bg-red-800 hover:bg-red-700 text-white rounded transition-colors shadow-sm"
                    id="hero-storms-purchase-btn"
                  >
                    Preorder
                  </button>
                  <button
                    onClick={() => onOpenBook(stormsOfLifeBook)}
                    className="py-1 px-3 border border-neutral-800 hover:border-neutral-700 hover:text-white text-neutral-400 rounded transition-colors"
                    id="hero-storms-learn-btn"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Aspect: Proverb, Cards & CTA (Col Span: 3) */}
        <div className="xl:col-span-3 flex flex-col justify-center space-y-8">
          {/* Albanian Proverb Frame (Highlighted precisely in web_page_spread) */}
          <div className="p-6 bg-neutral-950/40 rounded-xl border border-neutral-900 relative">
            <Quote className="w-5 h-5 text-red-500 absolute -top-2.5 left-6 bg-black px-1" />
            <p className="text-neutral-300 font-serif italic text-sm md:text-base leading-relaxed text-center xl:text-left">
              “Mëso të vlerësosh atë që ke përpara se koha do të mësojë të vlerësosh atë që kishe!”
            </p>
            <span className="text-[9px] font-mono tracking-widest text-red-500 uppercase mt-4 block text-center xl:text-right font-semibold">
              — ALBANIAN PROVERB —
            </span>
          </div>

          {/* Core Sidebar Highlight Panel */}
          <div className="p-6 bg-gradient-to-br from-neutral-950 to-neutral-950 border border-neutral-800/80 rounded-2xl relative shadow-xl space-y-4">
            <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-center xl:text-left">
              Books That Speak to the Heart
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed text-center xl:text-left font-light">
              Discover stories of emotional depth and cultural voices that will stay with you long after the final page is closed.
            </p>
            <button
              onClick={() => onScrollToSection('books')}
              className="w-full py-2.5 px-4 bg-red-700 hover:bg-red-600 text-white font-medium rounded-lg text-xs tracking-wider uppercase transition-colors text-center cursor-pointer block font-mono"
              id="hero-explore-books-btn"
            >
              Explore Books
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
