"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useState, useMemo, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, ChevronRight } from "lucide-react";

import LandingTopAnnouncementBar from "../_components/LandingTopAnnouncementBar";
import Navbar from "../_components/Navbar";
import Container from "@/components/shared/Container";

import SearchHeader from "./_components/SearchHeader";
import SearchSidebar from "./_components/SearchSidebar";
import SearchSortBar from "./_components/SearchSortBar";
import SearchProductGrid from "./_components/SearchProductGrid";
import SearchPagination from "./_components/SearchPagination";

const SearchResults = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Products");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);
  const [availability, setAvailability] = useState<string[]>(["In Stock"]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
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

      <SearchHeader 
        query={query} 
        resultsCount={displayProducts.length} 
        onBack={() => router.back()} 
      />

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
                    
                    <SearchSidebar 
                      activeType={activeTab} 
                      setActiveType={setActiveTab} 
                      selectedCategories={selectedCategories}
                      setSelectedCategories={setSelectedCategories}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      availability={availability}
                      setAvailability={setAvailability}
                      selectedRating={selectedRating}
                      setSelectedRating={setSelectedRating}
                      selectedLocations={selectedLocations}
                      setSelectedLocations={setSelectedLocations}
                    />
                  </motion.aside>
                </>
              )}
            </AnimatePresence>

            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block w-[280px] flex-shrink-0">
               <SearchSidebar 
                activeType={activeTab} 
                setActiveType={setActiveTab} 
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                availability={availability}
                setAvailability={setAvailability}
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
                selectedLocations={selectedLocations}
                setSelectedLocations={setSelectedLocations}
               />
            </aside>

            {/* Main Content Area */}
            <div className="flex-grow">
               <SearchSortBar 
                 viewMode={viewMode} 
                 setViewMode={setViewMode} 
                 itemsPerPage={itemsPerPage} 
               />

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

               <SearchProductGrid 
                 products={paginatedProducts} 
                 viewMode={viewMode} 
                 query={query} 
               />

               <SearchPagination 
                 currentPage={currentPage} 
                 totalPages={totalPages} 
                 onPageChange={setCurrentPage} 
               />
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
};

const SearchPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
};

export default SearchPage;
