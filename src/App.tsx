import { useState } from 'react';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import AboutSection from './components/AboutSection';
import BooksSection from './components/BooksSection';
import ReviewSection from './components/ReviewSection';
import EventsSection from './components/EventsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookDetailsModal from './components/BookDetailsModal';
import { Book } from './types';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [activeBook, setActiveBook] = useState<Book | null>(null);

  const handleOpenBook = (book: Book) => {
    setActiveBook(book);
  };

  const handleCloseBook = () => {
    setActiveBook(null);
  };

  const handleScrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      const offset = 80; // approximate navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-neutral-300 antialiased selection:bg-red-700 selection:text-white" id="root-viewport">
      {/* Dynamic Floating Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative">
        {/* Spotlights hero matching requested color grid */}
        <HomeHero onOpenBook={handleOpenBook} onScrollToSection={handleScrollToSection} />

        {/* Detailed Author Story */}
        <AboutSection />

        {/* Catalog Showcase comparison list */}
        <BooksSection onOpenBook={handleOpenBook} />

        {/* Verified criticisms & interactive star listings */}
        <ReviewSection />

        {/* Interactive RSVP Calendar */}
        <EventsSection />

        {/* Essays & Notes drawer */}
        <BlogSection />

        {/* Correspondence contact submission box */}
        <ContactSection />
      </main>

      {/* Structured Footer representing the 4 Core Pillars */}
      <Footer />

      {/* Smooth Modal Slides for Book detail presentations and excerpts */}
      <AnimatePresence>
        {activeBook && (
          <BookDetailsModal book={activeBook} onClose={handleCloseBook} />
        )}
      </AnimatePresence>
    </div>
  );
}
