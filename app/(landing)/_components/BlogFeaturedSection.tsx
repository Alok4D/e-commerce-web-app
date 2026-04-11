import React from 'react';
import Image from 'next/image';

const BlogFeaturedSection = () => {
  const posts = [
    {
      label: 'Trending',
      title: 'Blog Post',
      description1: 'Our mission is to make discovering premium products and reliable services simple and enjoyable. From local boutiques to specialized service providers, we bring everything you need into one seamless platform.',
      description2: 'To create a marketplace and directory that empowers both customers and businesses, making every experience smooth, transparent, and delightful.',
      image: '/service-img/Rectangle 4455.png',
      isReversed: false,
    },
    {
      label: 'Trending',
      title: 'Blog Post',
      description1: 'Our mission is to make discovering premium products and reliable services simple and enjoyable. From local boutiques to specialized service providers, we bring everything you need into one seamless platform.',
      description2: 'To create a marketplace and directory that empowers both customers and businesses, making every experience smooth, transparent, and delightful.',
      image: '/service-img/Rectangle 4457.png',
      isReversed: true,
     
    }
  ];

  return (
    <section className="w-full bg-[#D1CDC3] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {posts.map((post, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:items-center gap-12 lg:gap-20 ${
              post.isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Image Container */}
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
              
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content Container */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <span className="text-sm font-serif font-bold text-[#1A1A1A] mb-3">
                {post.label}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-8">
                {post.title}
              </h2>
              
              <div className="space-y-6 text-[#4A4A4A] leading-relaxed text-[15px] font-serif max-w-lg mb-10">
                <p>{post.description1}</p>
                <p>{post.description2}</p>
              </div>

              <button className="bg-[#EFE4D1] text-black px-8 py-3 text-sm font-medium hover:bg-[#e5d8c1] transition-all shadow-sm">
                Read More
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default BlogFeaturedSection;