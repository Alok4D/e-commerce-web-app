
import Image from 'next/image';

const GiftCardSection = () => {
  return (
    <section className="w-full bg-[#D1CDC3] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto relative h-[500px] md:h-[600px] flex items-center justify-center">
        
        {/* Left side overlap image */}
        <div className="absolute left-0 top-0 w-[55%] h-[70%] md:h-[80%] border-10 border-white shadow-2xl z-10">
          <Image
            src="/gift-img/Rectangle 4464.png"
            alt="Findea Gift Card Left"
            fill
            className="object-cover"
          />
        </div>

        {/* Right side overlap image */}
        <div className="absolute right-0 bottom-0 w-[55%] h-[70%] md:h-[80%] border-10 border-white shadow-2xl z-10">
          <Image
            src="/gift-img/Rectangle 4479.png"
            alt="Findea Gift Card Right"
            fill
            className="object-cover"
          />
        </div>

        {/* Central glassmorphism box */}
        <div className="relative z-30 w-full max-w-md py-12 px-8 bg-white/30 backdrop-blur-lg border border-white/20 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-serif text-[#1A1A1A] mb-4">
            Offrez la liberté du choix
          </h2>
          <p className="text-[15px] font-serif text-[#1A1A1A] mb-8 italic">
            Findea Gift Card
          </p>
          <button className="bg-[#f1e1c2] text-black px-8 py-3 text-sm font-medium hover:bg-[#e5d8c1] transition-all tracking-wide shadow-sm">
            Send A Gift Card
          </button>
        </div>

      </div>
    </section>
  );
};

export default GiftCardSection;