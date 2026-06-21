import { Book } from '../types';
import { BOOKS } from '../data';
import { motion } from 'motion/react';
import { BookOpen, ShoppingBag, ExternalLink, Sparkles } from 'lucide-react';

interface BooksSectionProps {
  onOpenBook: (book: Book) => void;
}

export default function BooksSection({ onOpenBook }: BooksSectionProps) {
  return (
    <section className="py-24 px-6 md:px-12 bg-black border-t border-b border-neutral-900" id="books">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section header */}
        <div className="text-center space-y-3">
          <span className="text-xs tracking-[0.3em] font-mono uppercase text-red-500 font-bold">The published catalog</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            The Written Works
          </h2>
          <div className="w-16 h-[2px] bg-red-600 mx-auto mt-4" />
          <p className="text-neutral-400 max-w-xl mx-auto font-light text-sm md:text-base leading-relaxed">
            Delve into dramatic worlds that explore secrets, grief, highland folklore, and the enduring strength of the human soul.
          </p>
        </div>

        {/* Books comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch" id="books-list-grid">
          {BOOKS.map((book) => (
            <div
              key={book.id}
              className="flex flex-col lg:flex-row bg-neutral-950/40 hover:bg-neutral-950 border border-neutral-900 hover:border-neutral-800 rounded-3xl p-6 lg:p-8 transition-all duration-300 gap-8 hover:shadow-2xl relative overflow-hidden group"
              id={`books-card-${book.id}`}
            >
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-950/10 blur-3xl pointer-events-none rounded-full" />

              {/* Book cover image left aspect */}
              <div className="w-full lg:w-2/5 flex justify-center items-start">
                <div
                  onClick={() => onOpenBook(book)}
                  className="relative cursor-pointer w-full max-w-[180px] lg:max-w-full shadow-2xl border border-neutral-900 rounded-xl overflow-hidden aspect-[3/4]"
                  id={`books-cover-trigger-${book.id}`}
                >
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[10px] tracking-wider font-mono text-neutral-300 font-bold uppercase py-1.5 px-3 bg-black/85 border border-red-950 rounded-lg">
                      Read Excerpt
                    </span>
                  </div>
                </div>
              </div>

              {/* Book narrative specs right aspect */}
              <div className="w-full lg:w-3/5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-red-500 font-bold">
                      {book.id === 'the-face-of-love' ? 'Mystery Fiction Novel' : 'Highland Drama Novel'}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-serif font-bold text-white tracking-tight mt-1 group-hover:text-red-500 transition-colors">
                      {book.title}
                    </h3>
                    <p className="italic text-neutral-500 text-xs font-serif mt-1">
                      "{book.subtitle}"
                    </p>
                  </div>

                  {/* Themes listed */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {book.themes.slice(0, 3).map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[9px] font-mono text-neutral-400 bg-neutral-900 border border-neutral-800/80 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Summary */}
                  <p className="text-xs lg:text-sm text-neutral-300 font-serif leading-relaxed line-clamp-4">
                    {book.description}
                  </p>
                </div>

                {/* Call to action links row */}
                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-3 font-mono text-[10px] tracking-widest uppercase">
                    <button
                      onClick={() => onOpenBook(book)}
                      className="py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 rounded-lg text-center transition-colors font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                      id={`book-section-excerpt-${book.id}`}
                    >
                      <BookOpen className="w-3.5 h-3.5" /> Excerpt
                    </button>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
