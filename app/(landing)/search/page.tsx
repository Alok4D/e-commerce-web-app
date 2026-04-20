"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useMemo, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LandingTopAnnouncementBar from "../_components/LandingTopAnnouncementBar";
import Navbar from "../_components/Navbar";
import Container from "@/components/shared/Container";
import productData from "@/data/products.json";
import { Product } from "@/types/product";
import { ChevronRight, Filter, LayoutGrid, List, X, Search, Star, MapPin, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Products");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const tabs = ["Products", "Services", "Boutiques", "Registries"];

  const staticResults = [
    {
      id: 1,
      name: "Bacon Dress",
      category: "Blouses",
      description: "Contemporary Surplice Top",
      price: "$570.00",
      image: "https://images.unsplash.com/photo-1597354984706-fac992d9306f?q=80&w=688&auto=format&fit=crop",
      type: "Product",
      buttonText: "Add To Cart"
    },
    {
      id: 2,
      name: "Sarah Kouamé",
      category: "Wellness & Beauty",
      description: "Hair — Styling",
      price: "$60-$120",
      image: "https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?fm=jpg&q=60&w=3000&auto=format&fit=crop",
      type: "Service",
      badge: "Très Demandé",
      buttonText: "View Details",
      rating: "4.9 (149)"
    },
    {
      id: 3,
      name: "Artisan & Co.",
      category: "Home Decor",
      description: "Local Artisan • Verified • Homemade",
      price: "",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1170&auto=format&fit=crop",
      type: "Boutique",
      badge: "Featured",
      buttonText: "View Boutique",
      location: "San Francisco",
      rating: "4.9 (149)",
      tags: ["Local Artisan", "Verified", "Homemade"]
    },
    {
      id: 4,
      name: "Artisan & Co.",
      category: "Home Decor",
      description: "Local Artisan • Verified • Homemade",
      price: "",
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=735&auto=format&fit=crop",
      type: "Boutique",
      badge: "Featured",
      buttonText: "View Boutique",
      location: "San Francisco",
      rating: "4.9 (149)",
      tags: ["Local Artisan", "Verified", "Homemade"],
      isFeaturedCollection: true
    },
    {
      id: 5,
      name: "Bacon Dress",
      category: "Blouses",
      description: "Contemporary Surplice Top",
      price: "$570.00",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1026&auto=format&fit=crop",
      type: "Product",
      buttonText: "Add To Cart"
    },
    {
      id: 6,
      name: "Bacon Dress",
      category: "Blouses",
      description: "Contemporary Surplice Top",
      price: "$570.00",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1173&auto=format&fit=crop",
      type: "Product",
      buttonText: "Add To Cart"
    },
    {
      id: 7,
      name: "Floral Maxi Dress",
      category: "Fashion",
      description: "Elegant Summer Floral Print",
      price: "$320.00",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=746&auto=format&fit=crop",
      type: "Product",
      buttonText: "Add To Cart",
      badge: "New Arrival"
    },
    {
      id: 8,
      name: "Wedding Photography",
      category: "Photography",
      description: "Professional Event Coverage",
      price: "$1200 - $3500",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=687&auto=format&fit=crop",
      type: "Service",
      buttonText: "View Details",
      badge: "Featured",
      rating: "5.0 (82)"
    },
    {
      id: 9,
      name: "Modern Sofa Set",
      category: "Home Decor",
      description: "Minimalist Living Room Furniture",
      price: "$2,450.00",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1170&auto=format&fit=crop",
      type: "Product",
      buttonText: "Add To Cart"
    },
    {
      id: 10,
      name: "Bridal Registry",
      category: "Registries",
      description: "Curated Wedding Gift Lists",
      price: "From $0.00",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1169&auto=format&fit=crop",
      type: "Service",
      buttonText: "Create Registry",
      badge: "Trending"
    },
    {
      id: 11,
      name: "Silk Evening Gown",
      category: "Fashion",
      description: "Luxury Red Silk Dress",
      price: "$890.00",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=708&auto=format&fit=crop",
      type: "Product",
      buttonText: "Add To Cart",
      badge: "Featured"
    },
    {
      id: 12,
      name: "Diamond Earring",
      category: "Jewelry",
      description: "18k White Gold Diamonds",
      price: "$1,250.00",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=687&auto=format&fit=crop",
      type: "Product",
      buttonText: "Add To Cart"
    }
  ];

  const displayProducts = staticResults;
  const totalPages = Math.ceil(displayProducts.length / itemsPerPage);
  
  const paginatedProducts = displayProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="min-h-screen bg-white">
      <LandingTopAnnouncementBar />
      <Navbar />

      {/* Search Header/Breadcrumb */}
      <div className="bg-[#F7F5F2]  pb-8 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center relative min-h-[180px]">
            {/* The Trapezoid Shape */}
            <div 
              className="bg-[#EAE0CD] px-12 md:px-32 py-10 md:py-14 relative z-0"
              style={{ clipPath: 'polygon(12% 0, 88% 0, 100% 100%, 0 100%)' }}
            >
              <div className="flex items-center justify-center gap-1 text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-3 font-medium">
                <Link href="/" className="hover:text-black">Home</Link>
                <span className="mx-1">&gt;</span>
                <span className="text-black font-bold">Search</span>
                <span className="mx-1">&gt;</span>
              </div>
              <h1 className="text-2xl md:text-[36px] tracking-tight font-playfair font-bold text-[#1C1C1C] uppercase tracking-[0.1em] whitespace-nowrap px-8">
                SEARCH RESULTS FOR "{query}"
              </h1>
            </div>

            {/* Return link positioned to the right */}
            <div className="md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mt-8 md:mt-0">
              <button 
                onClick={() => router.back()}
                className="text-[11px] uppercase tracking-[0.15em] text-gray-500 flex items-center gap-2 hover:text-black transition-colors font-medium"
              >
                 <span className="text-[14px]">&lt;</span> Return to previous page
              </button>
            </div>
          </div>

          <div className="mt-12 mb-8 text-center">
             <h2 className="text-[22px] md:text-[24px] font-playfair text-[#1C1C1C]">
               {displayProducts.length} Products found
             </h2>
          </div>
       </div>
     </div>
      <div className="bg-white py-12 md:py-20 relative">
        {/* Floating Filter Tab Button for Mobile */}
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="lg:hidden fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-[#A3A3A3] text-white pl-3 pr-5 py-4 rounded-r-full shadow-lg hover:bg-gray-500 transition-all active:scale-95 flex items-center justify-center"
          aria-label="Open Filters"
        >
          <Filter size={22} strokeWidth={1.5} />
        </button>

        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Mobile Filter Drawer */}
            <AnimatePresence>
              {isFilterOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsFilterOpen(false)}
                    className="fixed inset-0 bg-black/40 z-[60] lg:hidden backdrop-blur-sm"
                  />
                  <motion.aside
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-white z-[70] lg:hidden overflow-y-auto p-6 shadow-2xl"
                  >
                    <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                      <h3 className="text-lg font-bold tracking-widest uppercase">Filters</h3>
                      <button 
                        onClick={() => setIsFilterOpen(false)}
                        className="p-2 hover:bg-gray-100 transition-colors rounded-full"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    {/* Reuse Sidebar Content */}
                    <SidebarContent />
                  </motion.aside>
                </>
              )}
            </AnimatePresence>

            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block w-[280px] flex-shrink-0">
               <SidebarContent />
            </aside>

            {/* Main Content Area */}
            <div className="flex-grow">
               {/* Controls Bar */}
               <div className="flex flex-wrap justify-between items-center mb-10 gap-4">
                 <div className="flex items-center gap-4">
                    <div className="relative border border-gray-300 bg-white">
                      <select className="appearance-none bg-transparent pl-4 pr-10 py-2.5 text-[12px] font-bold uppercase tracking-widest outline-none cursor-pointer">
                        <option>Default Sorting</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                      </select>
                      <ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none text-gray-400" />
                    </div>
                    <div className="flex border border-gray-300 bg-white">
                      <button 
                        onClick={() => setViewMode("grid")}
                        className={`p-2.5 transition-colors ${viewMode === "grid" ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                      >
                        <LayoutGrid size={18} strokeWidth={1.5} />
                      </button>
                      <div className="w-[1px] h-full bg-gray-200"></div>
                      <button 
                        onClick={() => setViewMode("list")}
                        className={`p-2.5 transition-colors ${viewMode === "list" ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                      >
                        <List size={18} strokeWidth={1.5} />
                      </button>
                    </div>
                 </div>

                 <div className="flex items-center gap-4">
                    <span className="text-[12px] font-bold uppercase tracking-widest text-gray-500">Show</span>
                    <div className="relative border border-gray-300 bg-white">
                      <select className="appearance-none bg-transparent pl-4 pr-10 py-2.5 text-[12px] font-bold outline-none cursor-pointer">
                        <option>12</option>
                        <option>24</option>
                        <option>48</option>
                      </select>
                      <ChevronRight size={14} className="absolute right-3 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none text-gray-400" />
                    </div>
                 </div>
               </div>

               {/* Tabs */}
               <div className="flex gap-2 mb-12 overflow-x-auto pb-4 scrollbar-hide border-b border-gray-100">
                 {tabs.map((tab) => (
                   <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-3 px-6 py-3 border transition-all whitespace-nowrap uppercase tracking-widest text-[12px] ${
                      activeTab === tab 
                        ? 'bg-[#F1EADA] border-[#D4C3A3] font-bold text-black' 
                        : 'bg-white border-gray-200 text-gray-400 hover:border-gray-300 hover:text-black'
                    }`}
                   >
                     <span>{tab}</span>
                     <ChevronRight size={14} className={`rotate-90 transition-opacity ${activeTab === tab ? 'opacity-100' : 'opacity-30'}`} />
                   </button>
                 ))}
                 <button className="px-6 py-3 border border-gray-200 bg-[#F1EADA] text-[12px] font-bold uppercase tracking-widest ml-auto hover:bg-[#EAE0CD] transition-colors shadow-sm">
                   Clear Filter
                 </button>
               </div>

               {/* Product Grid */}
               <div className={`grid gap-x-8 gap-y-16 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                 {paginatedProducts.map((item) => (
                   <div key={item.id} className="group flex flex-col">
                     <Link href={`/products/${item.id}`} className="relative aspect-[4/5] bg-[#F7F5F2] mb-6 overflow-hidden block">
                       <Image
                         src={item.image}
                         alt={item.name}
                         fill
                         className="object-cover group-hover:scale-105 transition-transform duration-1000"
                       />
                       
                       {/* Badge from data */}
                       {item.badge && (
                         <div className="absolute top-4 right-4 bg-[#F1EADA]/90 px-3 py-1 text-[10px] uppercase font-bold tracking-widest text-[#1C1C1C] italic shadow-sm">
                           {item.badge}
                         </div>
                       )}

                       {/* Featured Collection Badge */}
                       {item.isFeaturedCollection && (
                         <div className="absolute top-4 left-4 text-[14px] font-playfair italic text-gray-800 bg-white/20 backdrop-blur-sm px-2 py-1">
                           Featured Collection
                         </div>
                       )}
                     </Link>
                     
                     <div className="flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[12px] uppercase tracking-widest text-gray-400 font-medium">{item.category}</span>
                          <div className="flex gap-3 text-gray-400">
                             <Eye size={18} strokeWidth={1.5} className="hover:text-black cursor-pointer transition-colors" />
                             <Heart size={18} strokeWidth={1.5} className="hover:text-black cursor-pointer transition-colors" />
                          </div>
                        </div>
                        <Link href={`/products/${item.id}`}>
                          <h3 className="text-[20px] font-playfair font-bold text-[#1C1C1C] mb-1 group-hover:text-brand-text transition-colors">{item.name}</h3>
                        </Link>
                        <p className="text-[14px] text-gray-500 mb-2 font-playfair leading-relaxed italic">{item.description}</p>
                        
                        {item.price && (
                          <div className="text-[16px] font-bold text-[#1C1C1C] mb-3">{item.price}</div>
                        )}

                        {/* Tags for Boutiques */}
                        {item.tags && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.tags.map(tag => (
                              <span key={tag} className="text-[10px] uppercase tracking-widest bg-gray-100 px-2 py-1 text-gray-600 font-bold border border-gray-200">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* Rating section */}
                        {item.rating && (
                          <div className="flex items-center gap-1.5 mb-3 pt-2">
                             <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={12} fill={i < 5 ? "#D4C3A3" : "none"} stroke={i < 5 ? "#D4C3A3" : "#D1D5DB"} />
                                ))}
                             </div>
                             <span className="text-[12px] font-bold text-gray-800 ml-1">4.9 <span className="font-normal text-gray-400">({item.rating.split('(')[1]}</span></span>
                          </div>
                        )}

                        {/* Location for Boutiques */}
                        {item.location && (
                          <div className="flex items-center gap-2 text-[12px] font-medium text-gray-500 mb-6 uppercase tracking-widest">
                             <MapPin size={14} className="text-gray-400" />
                             <span>{item.location}</span>
                          </div>
                        )}

                        <Link href={`/products/${item.id}`} className="mt-auto w-full">
                          <button className="w-full bg-[#F1EADA] py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300 shadow-sm border border-[#D4C3A3]/30">
                             {item.buttonText}
                          </button>
                        </Link>
                     </div>
                   </div>
                 ))}
               </div>

               {/* Empty State */}
               {displayProducts.length === 0 && (
                 <div className="text-center py-20 bg-gray-50 rounded-lg">
                    <Search size={48} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-xl font-playfair text-gray-500 italic">No results found for "{query}"</p>
                    <button 
                      onClick={() => router.push('/products')}
                      className="mt-6 text-brand-text font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Browse all products
                    </button>
                 </div>
               )}

               {/* Pagination */}
               {displayProducts.length > 0 && (
                 <div className="flex justify-center items-center gap-3 mt-24">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button 
                        key={page}
                        onClick={() => {
                          setCurrentPage(page);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-12 h-12 border flex items-center justify-center text-[14px] transition-all duration-300 ${
                          page === currentPage ? 'bg-[#F1EADA] border-[#D4C3A3] font-bold text-black shadow-sm' : 'border-gray-200 text-gray-400 hover:border-gray-400 hover:text-black'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                 </div>
               )}
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

const SidebarContent = () => (
  <>
    <h3 className="hidden lg:block text-lg font-bold tracking-widest uppercase mb-8 border-b border-black pb-2">Filters</h3>
    
    {/* TYPE Filter */}
    <div className="mb-8">
      <h4 className="text-[14px] font-bold tracking-widest uppercase mb-4 flex justify-between items-center group cursor-pointer">
        Type <ChevronRight size={16} className="rotate-90 text-gray-400 group-hover:text-black transition-colors" />
      </h4>
      <div className="space-y-4">
        {[
          { label: "Products", count: 186 },
          { label: "Services", count: 31 },
          { label: "Boutiques", count: 136 },
          { label: "Registries", count: 10 }
        ].map((item) => (
          <label key={item.label} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-[18px] h-[18px] rounded-full border border-gray-300 flex items-center justify-center transition-all group-hover:border-black">
              {item.label === "Products" && <div className="w-[10px] h-[10px] rounded-full bg-[#1C1C1C]"></div>}
            </div>
            <span className={`text-[14px] transition-colors ${item.label === "Products" ? 'text-black font-medium' : 'text-gray-500 group-hover:text-black'}`}>
              {item.label} ({item.count})
            </span>
          </label>
        ))}
      </div>
    </div>

    {/* CATEGORY Filter */}
    <div className="mb-8 border-t border-gray-200 pt-8">
      <h4 className="text-[14px] font-bold tracking-widest uppercase mb-4 flex justify-between items-center group cursor-pointer">
        Category <ChevronRight size={16} className="rotate-90 text-gray-400 group-hover:text-black transition-colors" />
      </h4>
      <div className="space-y-4">
        {["Fashion", "Jewelry", "Home & Decor", "Wellness & Beauty"].map((cat) => (
          <label key={cat} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-[18px] h-[18px] border border-gray-300 transition-all group-hover:border-black"></div>
            <span className="text-[14px] text-gray-500 group-hover:text-black transition-colors">{cat} (186)</span>
          </label>
        ))}
      </div>
    </div>

    {/* PRICE Filter */}
    <div className="mb-8 border-t border-gray-200 pt-8">
      <h4 className="text-[14px] font-bold tracking-widest uppercase mb-4 flex justify-between items-center group cursor-pointer">
        Price <ChevronRight size={16} className="rotate-90 text-gray-400 group-hover:text-black transition-colors" />
      </h4>
      <div className="mt-4">
         <div className="text-[14px] mb-6 font-bold text-[#1C1C1C]">Price: $50 - $500</div>
         <div className="h-[2px] bg-gray-200 relative mb-8">
           <div className="absolute left-[0%] right-[20%] h-full bg-[#D4C3A3]"></div>
           <div className="absolute left-[0%] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#D4C3A3] rounded-full border-2 border-white shadow-md cursor-pointer"></div>
           <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#D4C3A3] rounded-full border-2 border-white shadow-md cursor-pointer"></div>
         </div>
         <div className="flex flex-wrap gap-2">
            {["10-25k", "25-50k", "50-100k", "100k+"].map(range => (
              <button key={range} className="px-4 py-1.5 bg-[#F1EADA] text-[11px] font-bold hover:bg-[#EAE0CD] transition-colors uppercase tracking-widest text-[#1C1C1C]">
                {range}
              </button>
            ))}
         </div>
      </div>
    </div>

    {/* AVAILABILITY Filter */}
    <div className="mb-8 border-t border-gray-200 pt-8">
      <h4 className="text-[14px] font-bold tracking-widest uppercase mb-4 flex justify-between items-center group cursor-pointer">
        Availability <ChevronRight size={16} className="rotate-90 text-gray-400 group-hover:text-black transition-colors" />
      </h4>
      <div className="space-y-4">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-[18px] h-[18px] border border-[#D4C3A3] bg-[#D4C3A3] flex items-center justify-center text-white">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <span className="text-[14px] text-black font-bold">In Stock</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-[18px] h-[18px] border border-gray-300 group-hover:border-black transition-colors"></div>
          <span className="text-[14px] text-gray-500 group-hover:text-black transition-colors">Booked</span>
        </label>
      </div>
    </div>

    {/* RATING Filter */}
    <div className="mb-8 border-t border-gray-200 pt-8">
      <h4 className="text-[14px] font-bold tracking-widest uppercase mb-4 flex justify-between items-center group cursor-pointer">
        Rating <ChevronRight size={16} className="rotate-90 text-gray-400 group-hover:text-black transition-colors" />
      </h4>
      <div className="space-y-4">
        {[4, 3, 2, 1].map((stars) => (
          <label key={stars} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-[18px] h-[18px] border border-[#D4C3A3] bg-[#D4C3A3] flex items-center justify-center text-white">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < stars ? "#D4C3A3" : "none"} stroke={i < stars ? "#D4C3A3" : "#D1D5DB"} />
              ))}
            </div>
            <span className="text-[12px] text-gray-500 font-medium">{stars} and up (39)</span>
          </label>
        ))}
      </div>
    </div>

    {/* LOCATION Filter */}
    <div className="mb-8 border-t border-gray-200 pt-8">
      <h4 className="text-[14px] font-bold tracking-widest uppercase mb-4 flex justify-between items-center group cursor-pointer">
        Location <ChevronRight size={16} className="rotate-90 text-gray-400 group-hover:text-black transition-colors" />
      </h4>
      <div className="text-[12px] text-gray-400 italic mb-4">[for services or boutiques]</div>
      <div className="space-y-4">
        {["London", "New York", "Los Angeles", "Paris"].map((loc) => (
          <label key={loc} className="flex items-center gap-3 cursor-pointer group">
            <div className="w-[18px] h-[18px] border border-gray-300 group-hover:border-black transition-colors"></div>
            <span className="text-[14px] text-gray-500 group-hover:text-black transition-colors">{loc}</span>
          </label>
        ))}
      </div>
    </div>
  </>
);

const SearchPage = () => {
  return (
    <Suspense fallback={
       <div className="min-h-screen bg-white">
          <LandingTopAnnouncementBar />
          <Navbar />
          <div className="flex items-center justify-center py-40">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
          </div>
       </div>
    }>
      <SearchResults />
    </Suspense>
  );
};

export default SearchPage;
