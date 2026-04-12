import React from 'react';
import Image from 'next/image';

const NewsletterSection = () => {
  return (
    <section className="relative w-full h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/social-img/cta (1).png" 
          alt="Newsletter Background"
          fill
          className="object-cover brightness-50" 
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-[0.2em] mb-4">
          ENTREZ DANS NOTRE UNIVERS
        </h2>
        
        <p className="text-base md:text-lg font-serif italic mb-10 opacity-90">
          Découvrez En Avant-Première Nos Nouvelles Collections Et Nos Trésors Exclusifs.
        </p>

        {/* Subscription Form */}
        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="w-full md:w-96">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border border-white/60 py-3 px-4 text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-colors font-serif"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#F0E4CF] text-black px-10 py-3 text-sm font-medium hover:bg-[#e5d8c1] transition-all tracking-wide shadow-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;