"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import LandingTopAnnouncementBar from "../../_components/LandingTopAnnouncementBar";
import Navbar from "../../_components/Navbar";
import Container from "@/components/shared/Container";
import productData from "@/data/products.json";
import { Product } from "@/types/product";
import { ChevronRight, Star, Heart, Minus, Plus, Gift, Eye, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    const product = useMemo(() => {
        return productData.products.find(p => p.id === Number(id));
    }, [id]);

    if (!product) {
        return (
            <main className="min-h-screen bg-white">
                <LandingTopAnnouncementBar />
                <Navbar />
                <div className="flex flex-col items-center justify-center py-40">
                    <h1 className="text-3xl font-playfair mb-4">Product Not Found</h1>
                    <Link href="/products" className="text-brand-text font-bold uppercase tracking-widest hover:underline">
                        Back to products
                    </Link>
                </div>
            </main>
        );
    }

    // Use product image as the first image in gallery
    const images = [
        product.image,
        "https://images.unsplash.com/photo-1594932224491-fa7133f73bba?q=80&w=1928&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1539109132381-31a15b2974ea?q=80&w=1887&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1720&auto=format&fit=crop"
    ];

    const relatedProducts = [
        {
            id: 2,
            name: "Hope Power Dress",
            price: "$300.00",
            oldPrice: "$400.00",
            image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=708&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Hope Power Dress",
            price: "$300.00",
            oldPrice: "$400.00",
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=687&auto=format&fit=crop"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <LandingTopAnnouncementBar />
            <Navbar />

            {/* Product Breadcrumb Header */}
            <div className="bg-[#F7F5F2] pb-12 text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-center relative min-h-[140px]">
                        {/* The Trapezoid Shape */}
                        <div 
                            className="bg-[#EAE0CD] px-12 md:px-24 py-8 relative z-0"
                            style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0 100%)' }}
                        >
                            <div className="flex items-center justify-center gap-1 text-[11px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                                <Link href="/" className="hover:text-black">Home</Link>
                                <span className="mx-1">&gt;</span>
                                <Link href="/products" className="hover:text-black">Woman</Link>
                                <span className="mx-1">&gt;</span>
                                <span className="text-black font-bold">Blouse</span>
                            </div>
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
                </div>
            </div>

            <Container className="py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    
                    {/* Left Side: Product Images */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="relative aspect-[4/5] bg-[#F7F5F2] overflow-hidden group">
                            <Image 
                                src={images[activeImage]} 
                                alt="Product Image" 
                                fill 
                                className="object-cover transition-transform duration-700" 
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {images.map((img, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setActiveImage(idx)}
                                    className={`relative aspect-square border-2 transition-all ${activeImage === idx ? 'border-black' : 'border-transparent hover:border-gray-200'}`}
                                >
                                    <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Middle Section: Product Info */}
                    <div className="lg:col-span-5">
                        <h1 className="text-[32px] md:text-[36px] font-playfair font-bold text-[#1C1C1C] mb-4">
                            {product.name}
                        </h1>
                        <div className="text-2xl font-bold text-[#1C1C1C] mb-8">{product.price}</div>
                        
                        <div className="space-y-4 mb-10 text-[14px] text-gray-600 leading-relaxed font-playfair italic">
                            <p>{product.description}</p>
                            <p>Our mission is to make discovering premium products and reliable services simple and enjoyable. From local boutiques to specialized service providers, we bring everything you need into one seamless platform.</p>
                            <p className="font-bold">Our mission is to make discovering premium products</p>
                        </div>

                        {/* Options */}
                        <div className="space-y-6 mb-10">
                            <div>
                                <label className="block text-[13px] font-bold uppercase tracking-widest text-[#1C1C1C] mb-3">Color</label>
                                <div className="relative">
                                    <select className="w-full bg-[#F7F5F2] border border-gray-200 rounded-none px-4 py-3 text-[14px] outline-none appearance-none cursor-pointer">
                                        <option>choose an option</option>
                                    </select>
                                    <ChevronRight size={14} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[13px] font-bold uppercase tracking-widest text-[#1C1C1C] mb-3">Size</label>
                                <div className="relative">
                                    <select className="w-full bg-[#F7F5F2] border border-gray-200 rounded-none px-4 py-3 text-[14px] outline-none appearance-none cursor-pointer">
                                        <option>choose an option</option>
                                    </select>
                                    <ChevronRight size={14} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Quantity & Buttons */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-[13px] font-bold uppercase tracking-widest text-[#1C1C1C] mb-3">Quantity</label>
                                <div className="inline-flex border border-gray-300">
                                    <button 
                                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <div className="px-6 py-2 border-x border-gray-300 font-bold min-w-[50px] text-center">{quantity}</div>
                                    <button 
                                        onClick={() => setQuantity(prev => prev + 1)}
                                        className="px-4 py-2 hover:bg-gray-100 transition-colors"
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 bg-[#F1EADA] py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-sm border border-[#D4C3A3]/30">
                                    Add To Cart
                                </button>
                                <button className="flex-1 bg-white py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-[#F1EADA] transition-all border border-gray-300">
                                    Add To Registry
                                </button>
                            </div>

                            <div className="pt-4 space-y-3">
                                <div className="flex items-center gap-2 text-[13px] text-gray-600">
                                    <Gift size={16} className="text-[#D4C3A3]" />
                                    <span>Can't decide? <Link href="#" className="text-[#D4C3A3] font-bold hover:underline">Send a Gift Card Instead</Link></span>
                                </div>
                                <button className="flex items-center gap-2 text-[13px] text-gray-600 hover:text-black transition-colors font-medium">
                                    <Heart size={16} strokeWidth={2} />
                                    <span>Add to wishlist</span>
                                </button>
                            </div>

                            <div className="pt-8 border-t border-gray-100 space-y-2">
                                <div className="text-[14px] text-gray-500 font-playfair">
                                    <span className="font-bold text-[#1C1C1C] uppercase tracking-widest text-[11px] mr-2">Category:</span> 
                                    {product.category}
                                </div>
                                <div className="text-[14px] text-gray-500 font-playfair"><span className="font-bold text-[#1C1C1C] uppercase tracking-widest text-[11px] mr-2">Tag:</span> Look3</div>
                                <div className="text-[14px] text-gray-500 font-playfair"><span className="font-bold text-[#1C1C1C] uppercase tracking-widest text-[11px] mr-2">SKU:</span> {2355670 + product.id}</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Brand & Recommendations */}
                    <div className="lg:col-span-3">
                        {/* Brand Box */}
                        <div className="border border-gray-100 p-8 text-center mb-12">
                            <div className="text-[12px] uppercase tracking-[0.2em] text-gray-400 mb-2 font-medium">Cartier</div>
                            <h3 className="text-2xl font-playfair font-bold text-[#1C1C1C] mb-4">Cartier Logo</h3>
                            <Link href="#" className="text-[11px] uppercase tracking-widest text-gray-500 hover:text-black border-b border-gray-300 pb-1 font-bold">View All Products</Link>
                        </div>

                        {/* Related Products */}
                        <div>
                            <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-100">
                                <h4 className="text-[13px] font-bold uppercase tracking-[0.2em]">You May Also Like...</h4>
                                <div className="flex gap-2">
                                    <ChevronRight size={16} className="rotate-180 text-gray-300 cursor-pointer" />
                                    <ChevronRight size={16} className="text-black cursor-pointer" />
                                </div>
                            </div>
                            <div className="space-y-8">
                                {relatedProducts.map(prod => (
                                    <div key={prod.id} className="flex gap-4 group cursor-pointer">
                                        <div className="relative w-20 h-24 flex-shrink-0 bg-gray-50">
                                            <Image src={prod.image} alt={prod.name} fill className="object-cover" />
                                        </div>
                                        <div className="py-1">
                                            <h5 className="text-[14px] font-bold text-[#1C1C1C] mb-1 group-hover:text-gray-600 transition-colors">{prod.name}</h5>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[13px] font-bold text-[#1C1C1C]">{prod.price}</span>
                                                <span className="text-[12px] text-gray-400 line-through">{prod.oldPrice}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section: Reviews & Form */}
                <div className="mt-32 pt-20 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left: Reviews List */}
                    <div>
                        <h2 className="text-[28px] font-playfair font-bold text-[#1C1C1C] mb-8 pb-4 border-b border-black w-fit pr-12 relative">
                            Reviews
                        </h2>
                        <p className="text-[14px] text-gray-500 font-playfair italic">There are no reviews yet.</p>
                    </div>

                    {/* Right: Review Form */}
                    <div>
                        <h3 className="text-[20px] font-playfair font-bold text-[#1C1C1C] mb-1">
                            Be the first to review "Crew Sweatshirt"
                        </h3>
                        <p className="text-[13px] text-gray-500 mb-8 font-playfair italic">Your email address will not be published. Required fields are marked</p>
                        
                        <form className="space-y-6">
                            <div>
                                <label className="block text-[13px] font-bold uppercase tracking-widest text-[#1C1C1C] mb-3">Your rating *</label>
                                <div className="flex gap-1 text-[#D4C3A3]">
                                    {[...Array(5)].map((_, i) => (
                                        <button key={i} type="button">
                                            <Star size={16} fill="currentColor" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-[13px] font-bold uppercase tracking-widest text-[#1C1C1C] mb-3">Your review *</label>
                                <textarea className="w-full bg-[#E5E2DD] border-none outline-none p-6 min-h-[150px] font-playfair" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-[13px] font-bold uppercase tracking-widest text-[#1C1C1C] mb-3">Name *</label>
                                    <input type="text" className="w-full bg-[#E5E2DD] border-none outline-none px-6 py-4 font-playfair" />
                                </div>
                                <div>
                                    <label className="block text-[13px] font-bold uppercase tracking-widest text-[#1C1C1C] mb-3">Email *</label>
                                    <input type="email" className="w-full bg-[#E5E2DD] border-none outline-none px-6 py-4 font-playfair" />
                                </div>
                            </div>

                            <button className="bg-[#F1EADA] px-12 py-4 text-[12px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-sm border border-[#D4C3A3]/30">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </main>
    );
};

export default ProductDetailsPage;
