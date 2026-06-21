import { useState } from 'react';
import { Calendar, Clock, ArrowRight, User2, AlignLeft, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS, AUTHOR_NAME } from '../data';
import { BlogPost } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505] border-b border-neutral-900" id="blog">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedPost ? (
            // Grid of blog cards
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-12"
            >
              <div className="text-center space-y-3 mb-16">
                <span className="text-xs tracking-[0.3em] font-mono uppercase text-red-500">Insights & essays</span>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
                  The Author's Note
                </h2>
                <div className="w-16 h-[2px] bg-red-600 mx-auto mt-4" />
                <p className="text-neutral-400 max-w-xl mx-auto font-light text-sm md:text-base leading-relaxed">
                  Reflections on mythology, writing, Albanian historical heritage, and finding courage inside crises.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {BLOG_POSTS.map((post) => (
                  <article
                    key={post.id}
                    className="p-6 bg-neutral-950/40 hover:bg-neutral-950 border border-neutral-900 hover:border-neutral-800 rounded-2xl flex flex-col justify-between transition-all duration-300 relative group group-hover:scale-[1.01]"
                    id={`blog-card-${post.id}`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-red-950/35 text-red-400 border border-red-900/40 rounded-full">
                          {post.tag}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-serif font-bold text-white tracking-wide group-hover:text-red-500 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-xs text-neutral-400 leading-relaxed font-light">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="border-t border-neutral-900/60 pt-4 flex items-center justify-between mt-8 text-neutral-500 text-[11px] font-mono">
                      <span>{post.date}</span>
                      <button
                        onClick={() => setSelectedPost(post)}
                        className="text-red-500 hover:text-red-400 flex items-center gap-1 transition-colors text-xs uppercase tracking-wider font-semibold group-hover:gap-1.5 cursor-pointer"
                        id={`read-blog-btn-${post.id}`}
                      >
                        Read Post <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          ) : (
            // Full Blog Post View
            <motion.div
              key="post"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8 p-6 md:p-10 bg-neutral-950 rounded-2xl border border-neutral-900 shadow-xl"
              id={`full-blog-view-${selectedPost.id}`}
            >
              {/* Back button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 py-1.5 px-3 bg-neutral-900 hover:bg-neutral-800 rounded-lg text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors cursor-pointer self-start"
                id="blog-back-btn"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Notes
              </button>

              <div className="space-y-4 border-b border-neutral-900 pb-6">
                <div className="flex flex-wrap items-center gap-3 text-neutral-500 text-xs font-mono">
                  <span className="px-2 py-0.5 bg-red-950/40 text-red-500 font-semibold uppercase tracking-wider rounded border border-red-900/50">
                    {selectedPost.tag}
                  </span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}</span>
                  <span className="flex items-center gap-1"><User2 className="w-3.5 h-3.5" /> By {AUTHOR_NAME}</span>
                </div>

                <h1 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                  {selectedPost.title}
                </h1>
              </div>

              {/* Blog body text */}
              <div className="prose prose-invert prose-red max-w-none text-neutral-300 font-serif md:text-lg leading-relaxed space-y-6">
                {selectedPost.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('"') || paragraph.startsWith('“')) {
                    return (
                      <blockquote key={index} className="pl-4 border-l-2 border-red-600 text-neutral-300 italic font-medium my-6 uppercase md:text-sm text-xs font-mono">
                        {paragraph}
                      </blockquote>
                    );
                  }
                  return (
                    <p key={index} className="text-neutral-200">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Bottom footer bar */}
              <div className="border-t border-neutral-900 pt-8 flex items-center justify-between text-neutral-400 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-neutral-800">
                    <img
                      src="/src/assets/images/suela_bace_author_1782044672867.jpg"
                      alt={AUTHOR_NAME}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span>Written by Suela Baçe</span>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-red-500 hover:text-red-400 flex items-center gap-1 font-semibold group cursor-pointer"
                  id="blog-back-bottom"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to List
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
