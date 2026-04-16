
import Image from 'next/image';

const Blog = () => {
  const categories = [
    { title: 'Produits', image: '/blog-img/Rectangle 4448.svg' },
    { title: 'Services', image: '/blog-img/Rectangle 4448 (1).svg' },
    { title: 'Boutiques', image: '/blog-img/Rectangle 4448 (2).png' },
    { title: 'Inspiration', image: '/blog-img/Rectangle 4448 (3).png' },
  ];

  return (
    <section className="w-full bg-brand-greige py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-playfair text-[#1A1A1A] tracking-wider mb-12 uppercase">
          PARCOUREZ AVEC INTENTION
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden mb-4">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Category Label */}
              <h3 className="text-lg font-playfair text-[#1A1A1A] tracking-wide">
                {category.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;