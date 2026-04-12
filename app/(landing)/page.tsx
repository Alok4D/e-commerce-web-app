import Navbar from "./_components/Navbar";
import Blog from "./_components/Blog";
import Footer from "./_components/Footer";
import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutSection";
import InstagramFeed from "./_components/InstagramFeed";
import ExploreProduct from "./_components/ExploreProduct";
import BlogFeaturedSection from "./_components/BlogFeaturedSection";
import ChristmasCollection from "./_components/ChristmasCollection";
import GiftCardSection from "./_components/GiftCardSection";
import NewsletterSection from "./_components/NewsletterSection";
import ProductGridLanding from "./_components/ProductGridLanding";
import RegistrySection from "./_components/RegistrySection";
import ServicesSection from "./_components/ServicesSection";
import TestimonialSection from "./_components/TestimonialSection";
import LandingTopAnnouncementBar from "./_components/LandingTopAnnouncementBar";

export default function page() {
  return (
    <main className="min-h-screen bg-white">
      <LandingTopAnnouncementBar />
      <Navbar />
      <HeroSection />
      <Blog />
      <AboutSection />
      <RegistrySection />
      <ExploreProduct />
      <ServicesSection />
      <ChristmasCollection />
      <ProductGridLanding />
      <TestimonialSection />
      <GiftCardSection />
      <InstagramFeed />
      <BlogFeaturedSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}


