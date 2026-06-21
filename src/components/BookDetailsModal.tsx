import { motion } from 'motion/react';
import { X, ExternalLink, BookOpen, Calendar, Hash, FileText } from 'lucide-react';
import { Book } from '../types';

interface BookDetailsModalProps {
  book: Book | null;
  onClose: () => void;
}

export default function BookDetailsModal({ book, onClose }: BookDetailsModalProps) {
  if (!book) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      {/* Background Click to Close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} id={`modal-overlay-${book.id}`} />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-950 border border-neutral-800 rounded-xl shadow-2xl text-white flex flex-col md:flex-row z-10"
        id={`book-modal-card-${book.id}`}
      >
        {/* Left Side: Sticky Cover & Buy CTA */}
        <div className="w-full md:w-2/5 bg-neutral-900/60 p-6 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-neutral-800">
          <div className="w-full flex justify-center py-4">
            <div className="relative group shadow-2xl border-4 border-neutral-950 rounded-lg overflow-hidden max-w-[200px] md:max-w-full">
              <img
                src={book.coverImage}
                alt={book.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                <span className="text-xs tracking-widest uppercase font-mono text-red-400 flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> Excerpt Available
                </span>
              </div>
            </div>
          </div>

          <div className="w-full space-y-4 mt-6">
            <div className="text-center md:text-left">
              <h4 className="text-sm font-mono tracking-widest text-neutral-500 uppercase">Specifications</h4>
              <div className="mt-2 space-y-2 text-xs text-neutral-400 font-mono">
                {book.publishDate && (
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Calendar className="w-3.5 h-3.5 text-red-500" />
                    <span>Published: {book.publishDate}</span>
                  </div>
                )}
                {book.pages && (
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <FileText className="w-3.5 h-3.5 text-red-500" />
                    <span>Pages: {book.pages} pages</span>
                  </div>
                )}
                {book.isbn && (
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Hash className="w-3.5 h-3.5 text-red-500" />
                    <span>ISBN: {book.isbn}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-2 pt-2">
              {book.purchaseUrl ? (
                <a
                  href={book.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg text-sm tracking-wider uppercase transition-colors shadow-lg shadow-red-900/30 font-sans"
                  id={`purchase-btn-${book.id}`}
                >
                  <span>Purchase Book</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Right Side: Scrollable Description & Excerpt */}
        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-900 transition-colors text-neutral-400 hover:text-white"
            aria-label="Close"
            id={`modal-close-btn-${book.id}`}
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-red-500 font-mono">Literary Masterpiece</p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight mt-1">
                {book.title}
              </h3>
              <p className="italic text-neutral-400 mt-2 font-serif text-sm">
                "{book.subtitle}"
              </p>
            </div>

            {/* Themes */}
            <div className="flex flex-wrap gap-2">
              {book.themes.map((theme) => (
                <span
                  key={theme}
                  className="px-2.5 py-1 text-[10px] font-mono uppercase bg-neutral-900 text-neutral-300 border border-neutral-800 rounded-full"
                >
                  {theme}
                </span>
              ))}
            </div>

            {/* Long Description */}
            <div className="prose prose-invert prose-sm max-w-none text-neutral-300 space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-500">Synopsis</h4>
              <p className="leading-relaxed whitespace-pre-line text-sm md:text-base font-serif font-light text-neutral-200">
                {book.longDescription}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-900 text-right">
            <button
              onClick={onClose}
              className="text-xs tracking-widest uppercase font-mono text-neutral-500 hover:text-white transition-colors"
              id={`close-bottom-btn-${book.id}`}
            >
              Close Presentation
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
