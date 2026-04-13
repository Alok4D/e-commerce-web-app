import Image from 'next/image';

const InstagramFeed = () => {
  const feedImages = [
    { src: '/social-img/Rectangle 4467.png', rotate: '-rotate-0', translate: 'translate-y-5 md:translate-y-8', z: 'z-0' },
    { src: '/social-img/Rectangle 4468.png', rotate: 'rotate-0', translate: 'translate-y-2', z: 'z-10' },
    { src: '/social-img/Rectangle 4469.png', rotate: '-rotate-0', translate: '-translate-y-4 md:-translate-y-6', z: 'z-20' },
    { src: '/social-img/Rectangle 4470.png', rotate: 'rotate-0', translate: 'translate-y-2', z: 'z-10' },
    { src: '/social-img/Rectangle 4471.png', rotate: '-rotate-0', translate: 'translate-y-5 md:translate-y-8', z: 'z-0' },
  ];

  return (
    <section className="w-full bg-[#F5F3F0] py-24 px-4 overflow-hidden">
      <div className="max-w-[1240px] mx-auto text-center">
        
        {/* Header Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair text-[#1A1A1A] tracking-tight">
            <span className="italic font-light">Let&apos;s</span> COLLECT
          </h2>
          <p className="text-xl md:text-2xl font-playfair uppercase tracking-[0.2em] mt-2">
            ON INSTAGRAM
          </p>
        </div>

        {/* Scattered/Overlapping Image Feed */}
        <div className="flex justify-center items-center -space-x-8 sm:-space-x-12 md:-space-x-12 lg:-space-x-5 mb-20 lg:px-0 md:px-4 px-2 cursor-pointer">
          {feedImages.map((img, index) => (
            <div 
              key={index} 
              className={`relative w-24 sm:w-48 md:w-64 lg:w-[264px] aspect-square border-[3px] md:border-[10px] border-white shadow-xl md:shadow-2xl transition-all hover:scale-110 hover:z-30 
              ${img.rotate} ${img.translate} ${img.z} overflow-hidden`}
            >
              <Image
                src={img.src}
                alt={`Instagram feed ${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Instagram Handle */}
        <p className="text-2xl md:text-3xl font-playfair italic mb-10 tracking-wide font-medium">
          @username.here
        </p>

        {/* Follow Button */}
        <button className="bg-[#EAE0D1] text-black px-12 py-3 text-sm font-medium uppercase tracking-[0.2em] hover:bg-[#D9D0C1] transition-all border border-gray-400">
          FOLLOW US
        </button>

      </div>
    </section>
  );
};


export default InstagramFeed;