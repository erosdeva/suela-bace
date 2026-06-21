import { BIOGRAPHY, AUTHOR_NAME } from '../data';
import { motion } from 'motion/react';
import { Quote, Compass, BookOpen, Scroll, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white border-t border-neutral-200" id="about">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section title */}
        <div className="text-center space-y-3">
          <span className="text-xs tracking-[0.3em] font-mono uppercase text-red-600 font-bold">The creative voice</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
            About the Author
          </h2>
          <div className="w-16 h-[2px] bg-red-600 mx-auto mt-4" />
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Timeline and Facts left side */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="bg-neutral-50 p-6 md:p-8 rounded-2xl border border-neutral-200 space-y-6">
              <h3 className="text-lg font-serif font-bold text-neutral-900 mb-2">
                Core Themes & Philosophy
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-white rounded-xl text-red-600 h-10 w-10 flex items-center justify-center border border-neutral-200">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-mono text-neutral-800 font-bold">Cultural Exploration</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Suela crafts stories that raise awareness of Balkan folk traditions, complex generational struggles, and the resilient spirit of the Albanian highlands.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-white rounded-xl text-red-600 h-10 w-10 flex items-center justify-center border border-neutral-200">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-mono text-neutral-800 font-bold">Resilience & Recovery</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Her books delve into survival after historical or personal gales, demonstrating how hope is held even when all looks shattered.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-white rounded-xl text-red-600 h-10 w-10 flex items-center justify-center border border-neutral-200">
                    <Scroll className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-mono text-neutral-800 font-bold">Oral Traditions</h4>
                    <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                      Merging ancient proverb structures with modern, fast-paced psychological thrillers, her style connects readers to historic roots.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* In-text pull quote */}
            <div className="p-6 bg-red-50 border border-red-200 rounded-2xl relative shadow-sm">
              <Quote className="w-8 h-8 text-red-300 absolute -top-4 -left-2" />
              <p className="text-sm font-serif italic text-neutral-700 leading-relaxed">
                "Writing is the ultimate tool we have to uncover the masks we wear. By writing about Anjesa's disappearance or Highland storms, I explore my own journey of integration and recovery."
              </p>
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-3 block text-right font-medium">
                — {AUTHOR_NAME}
              </span>
            </div>
          </div>

          {/* Long Bio narratives card right side */}
          <div className="lg:col-span-7 bg-neutral-50 border border-neutral-200 p-6 md:p-10 rounded-2xl shadow-sm order-1 lg:order-2 space-y-6">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-neutral-900 tracking-wide">
              The Journey of Suela Baçe
            </h3>

            <div className="space-y-4 text-neutral-700 font-serif leading-relaxed text-sm md:text-base">
              {BIOGRAPHY.longBio.split('\n\n').map((para, i) => (
                <p key={i} className="text-neutral-700">
                  {para}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-neutral-200 flex flex-wrap gap-6 items-center text-neutral-600 font-mono text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>Proud Albanian Heritage</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>Bilingual Speaker</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
