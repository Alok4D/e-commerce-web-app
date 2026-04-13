import Image from 'next/image';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Samantha D.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      review: '"I absolutely love the curated collection! The attention to detail in every piece is remarkable. It\'s become my favorite place to find unique items."'
    },
    {
      name: 'Michael R.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
      review: '"The quality of the products exceeded my expectations. Customer service was also very helpful throughout the process. Highly recommended!"'
    },
    {
      name: 'Elena G.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
      review: '"Finding authentic local talents has never been easier. I love how this platform connects us with creators who truly care about their craft."'
    },
    {
      name: 'David L.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
      review: '"A seamless experience from browsing to delivery. The premium feel of the website matches the premium quality of the products perfectly."'
    }
  ];

  return (
    <section className="w-full bg-[#F5F3F0] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-playfair text-[#1A1A1A] mb-16 uppercase tracking-wider">
          WORDS FROM OUR COMMUNITY
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#E2E0D6] p-8 flex flex-col items-center text-center shadow-sm border-t-4 border-[#1A1A1A] hover:bg-[#D9D7CB] transition-colors duration-300"
            >
              {/* Profile Image (Circular) */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#D4A017" stroke="#D4A017" />
                ))}
              </div>

              {/* User Name */}
              <h3 className="text-lg font-playfair font-bold text-[#1A1A1A] mb-3 uppercase tracking-tight">
                {item.name}
              </h3>

              {/* Review Text */}
              <p className="text-[13px] font-playfair text-[#4A4A4A] leading-relaxed italic">
                {item.review}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;