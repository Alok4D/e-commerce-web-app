import Image from 'next/image';

const RegistrySection = () => {
  return (
    <section className="w-full bg-[#E2E0D6] flex flex-col md:flex-row min-h-[621px]">
      
     
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
        <h2 className="text-3xl md:text-4xl font-serif text-[#1A1A1A] leading-tight mb-8 uppercase tracking-wide">
          CREATE YOUR WEDDING OR <br /> BABY REGISTRY
        </h2>
        
        <p className="text-lg font-serif text-[#4A4A4A] leading-relaxed mb-10 max-w-md">
          Créez une liste à partir de plusieurs boutiques sur Findéa, 
          partagez-la avec vos proches et laissez-la se mettre à jour automatiquement.
        </p>

       
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#F1E1C2] text-black px-8 py-3 text-[14px] font-medium hover:bg-[#e5d8c1] transition-all shadow-sm">
            Create A Wedding List
          </button>
          <button className="bg-[#747067] text-white px-8 py-3 text-[14px] font-medium hover:bg-[#635f56] transition-all shadow-sm">
            Create A Baby Registry
          </button>
        </div>
      </div>

     
      <div className="w-full md:w-1/2 relative min-h-[400px]">
        <Image
          src="/blog-img/Frame 1597881210 copy.png"
          alt="Wedding Registry Decor"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default RegistrySection;