import Image from 'next/image';
import { MoveRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Wellness & Beauty',
      description: 'At-home beauty, fitness & self-care professionals.',
      image: '/service-img/Rectangle 4448 (6).png',
    },
    {
      title: 'Wedding & Events',
      description: 'Curated professionals for weddings and special occasions.',
      image: '/service-img/Rectangle 4448 (7).png',
    },
    {
      title: 'Home, Lifestyle & Family',
      description: 'Trusted services for your home and family needs.',
      image: '/service-img/Rectangle 4448 (8).png',
    },
    {
      title: 'Education & Coaching',
      description: 'Learning, creativity and personal growth services.',
      image: '/service-img/Rectangle 4448 (9).png',
    },
  ];

  return (
    <section className="w-full bg-[#D1CDC3] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-playfair font-medium text-[#1A1A1A] tracking-wider mb-12 uppercase">
          SERVICES PROPOSÉS PAR DES TALENTS LOCAUX
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start">
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden mb-5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Text Content */}
              <h3 className="text-lg font-playfair font-bold text-[#1A1A1A] mb-2">
                {service.title}
              </h3>
              <p className="text-md font-playfair text-[#4A4A4A] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="flex justify-center">
          <button className="bg-[#F1E1C2] text-black px-10 py-4 text-sm font-medium flex items-center gap-2 hover:bg-[#e5d8c1] transition-all shadow-md">
            Explore More Services <MoveRight size={18} strokeWidth={1.5} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;