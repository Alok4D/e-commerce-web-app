"use client";

import { useState } from "react";
import Navbar from "../_components/Navbar";
import LandingTopAnnouncementBar from "../_components/LandingTopAnnouncementBar";
import BreadcrumbHero from "./_components/BreadcrumbHero";
import ProductGrid from "./_components/ProductGrid";
import FilterSidebar from "./_components/FilterSidebar";
import SortBar from "./_components/SortBar";
import Pagination from "./_components/Pagination";
import Container from "@/components/shared/Container";
import productData from "@/data/products.json";
import { Product, Category } from "@/types/product";

const ProductsPage = () => {
  const [activeSort, setActiveSort] = useState("Default Sorting");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [expandedFilters, setExpandedFilters] = useState<string[]>(["FINDÉA COLLECTION", "Woman"]);

  const products = productData.products as Product[];
  const categories = productData.categories as Category[];

  const toggleFilter = (filter: string) => {
    setExpandedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };

  return (
    <main className="min-h-screen bg-white">
      <LandingTopAnnouncementBar />
      <Navbar />
      <BreadcrumbHero />

      <div className="bg-[#F5F3EE] pt-16 pb-24">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12">
            <FilterSidebar 
              categories={categories}
              expandedFilters={expandedFilters}
              toggleFilter={toggleFilter}
            />

            <main className="flex-grow">
              <SortBar 
                activeSort={activeSort}
                setActiveSort={setActiveSort}
                viewMode={viewMode}
                setViewMode={setViewMode}
              />

              <ProductGrid 
                products={products}
                viewMode={viewMode}
              />

              <Pagination currentPage={1} totalPages={10} />
            </main>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default ProductsPage;
