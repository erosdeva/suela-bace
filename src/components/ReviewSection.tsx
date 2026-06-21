import React, { useState, useEffect } from 'react';
import { Star, MessageSquareCode, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { Review } from '../types';
import { REVIEWS, BOOKS } from '../data';
import { motion } from 'motion/react';

interface ReviewSectionProps {
  activeBookId?: string;
}

export default function ReviewSection({ activeBookId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>(() => {
    const saved = localStorage.getItem('suela_bace_reviews');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return REVIEWS;
      }
    }
    return REVIEWS;
  });

  const [filter, setFilter] = useState<string>('all');
  const [authorName, setAuthorName] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [targetBook, setTargetBook] = useState('general');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('suela_bace_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    const newReview: Review = {
      id: `rev-custom-${Date.now()}`,
      bookId: targetBook === 'general' ? undefined : targetBook,
      author: authorName,
      role: targetBook === 'general' ? 'Reader' : `Reader of "${BOOKS.find(b => b.id === targetBook)?.title}"`,
      rating,
      text: reviewText,
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      isVerified: true
    };

    setReviews([newReview, ...reviews]);
    setAuthorName('');
    setReviewText('');
    setRating(5);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const filteredReviews = reviews.filter((r) => {
    if (filter === 'all') return true;
    if (filter === 'general') return r.bookId === undefined;
    return r.bookId === filter;
  });

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-b border-neutral-900" id="reviews">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs tracking-[0.3em] font-mono uppercase text-red-500">Critical Acclaim</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Reader Testimonials
          </h2>
          <div className="w-16 h-[2px] bg-red-600 mx-auto mt-4" />
          <p className="text-neutral-400 max-w-2xl mx-auto font-light text-sm md:text-base leading-relaxed">
            Discover the impressions, reviews, and emotional resonance shared by literature critics and global readers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs tracking-wider uppercase font-mono transition-all border ${
              filter === 'all'
                ? 'bg-red-700/20 border-red-600 text-white shadow-md'
                : 'bg-neutral-950 border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800'
            }`}
            id="review-filter-all"
          >
            All Reviews
          </button>
          {BOOKS.map((book) => (
            <button
              key={book.id}
              onClick={() => setFilter(book.id)}
              className={`px-4 py-2 rounded-lg text-xs tracking-wider uppercase font-mono transition-all border ${
                filter === book.id
                  ? 'bg-red-700/20 border-red-600 text-white shadow-md'
                  : 'bg-neutral-950 border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800'
              }`}
              id={`review-filter-${book.id}`}
            >
              {book.title}
            </button>
          ))}
          <button
            onClick={() => setFilter('general')}
            className={`px-4 py-2 rounded-lg text-xs tracking-wider uppercase font-mono transition-all border ${
              filter === 'general'
                ? 'bg-red-700/20 border-red-600 text-white shadow-md'
                : 'bg-neutral-950 border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800'
            }`}
            id="review-filter-general"
          >
            General Portfolio
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* List of reviews */}
          <div className="lg:col-span-2 space-y-6">
            {filteredReviews.length === 0 ? (
              <div className="text-center py-16 bg-neutral-950 rounded-xl border border-neutral-900 text-neutral-500 font-serif italic text-sm">
                No reviews found under this category. Be the first to share your words!
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredReviews.map((review, i) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 bg-neutral-950 rounded-xl border border-neutral-800/60 flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 relative group"
                    id={`review-card-${review.id}`}
                  >
                    {/* Quotation icon */}
                    <div className="absolute top-4 right-4 text-red-900/15 text-5xl font-serif font-serif select-none pointer-events-none group-hover:text-red-900/25 transition-colors">
                      “
                    </div>

                    <div>
                      {/* Rating stars */}
                      <div className="flex gap-1 text-red-500 mb-4">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-3.5 h-3.5 ${
                              idx < review.rating ? 'fill-red-500 text-red-500' : 'text-neutral-800'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-neutral-300 text-sm font-serif leading-relaxed italic mb-6">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Review Author Information */}
                    <div className="border-t border-neutral-900/80 pt-4 flex items-center justify-between mt-auto">
                      <div>
                        <h4 className="text-sm font-serif font-bold text-white tracking-wide">
                          {review.author}
                        </h4>
                        {review.role && (
                          <p className="text-[11px] font-mono text-neutral-500 mt-0.5">
                            {review.role}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        {review.isVerified && (
                          <span className="flex items-center gap-1 text-[10px] bg-red-950/45 text-red-400 border border-red-900/40 py-0.5 px-2 rounded-full font-mono">
                            <CheckCircle2 className="w-3 h-3" /> Verified
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-neutral-600 block">
                          {review.date}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Submit a review widget */}
          <div className="bg-gradient-to-br from-neutral-950 to-neutral-950 border border-neutral-800 rounded-xl p-6 relative overflow-hidden shadow-xl">
            {/* Ambient Background Glow */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-red-900/10 blur-3xl pointer-events-none rounded-full" />

            <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2 mb-2">
              <MessageSquareCode className="w-5 h-5 text-red-500" /> Share Your Thoughts
            </h3>
            <p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">
              Have you read Suela Baçe's novels? Help fellow readers by leaving your honest, constructive review.
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-neutral-900 border border-red-900/30 p-6 rounded-lg text-center space-y-3 my-8"
              >
                <div className="w-10 h-10 bg-red-950/60 border border-red-600 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-5 h-5 text-red-500" />
                </div>
                <h4 className="text-sm font-serif font-bold text-white">Review Submitted!</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  Thank you for contributing your voice. Your review has been added to our live community presentation list immediately.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Book choice */}
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1.5">
                    What did you read?
                  </label>
                  <select
                    value={targetBook}
                    onChange={(e) => setTargetBook(e.target.value)}
                    className="w-full bg-neutral-900 text-neutral-200 text-xs py-2.5 px-3 rounded-lg border border-neutral-800 focus:outline-none focus:border-red-600 transition-colors"
                  >
                    <option value="general">Suela's Author Work Overall</option>
                    {BOOKS.map((b) => (
                      <option key={b.id} value={b.id}>
                        {b.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Rating selection */}
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1.5">
                    Your Rating
                  </label>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4, 5].map((stars) => (
                      <button
                        type="button"
                        key={stars}
                        onClick={() => setRating(stars)}
                        onMouseEnter={() => setHoverRating(stars)}
                        onMouseLeave={() => setHoverRating(null)}
                        className="text-neutral-700 hover:scale-110 transition-transform p-0.5 focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 transition-colors ${
                            (hoverRating !== null ? stars <= hoverRating : stars <= rating)
                              ? 'text-red-500 fill-red-500'
                              : 'text-neutral-800'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reader Name */}
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Besa Rexha"
                    className="w-full bg-neutral-900 text-neutral-200 text-xs py-2.5 px-3 rounded-lg border border-neutral-800 placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors font-sans"
                  />
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1.5">
                    Review Content
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Write your honest comments about themes, characters, or cultural impacts..."
                    className="w-full bg-neutral-900 text-neutral-200 text-xs py-2.5 px-3 rounded-lg border border-neutral-800 placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors font-serif resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-red-700 hover:bg-red-600 text-white text-xs tracking-wider uppercase font-mono rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-red-900/10"
                >
                  <Sparkles className="w-3.5 h-3.5" /> Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
