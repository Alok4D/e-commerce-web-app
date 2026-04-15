import React from "react";
import Image from "next/image";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import NewsletterSection from "../_components/NewsletterSection";
import { Heart, Users, Leaf } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513519247388-19345420d4c4?q=80&w=2070"
          alt="About Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl text-white font-playfair tracking-widest uppercase bg-black/20 px-8 py-4 backdrop-blur-sm">
            À PROPOS DE NOUS
          </h1>
        </div>
      </section>

      {/* Who are we Section */}
      <section className="max-w-[1239px] mx-auto py-20 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1522071823991-b9671f9d7d17?q=80&w=2070"
            alt="Who we are"
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-playfair text-[#1A1A1A] uppercase tracking-wider">
            Qui sommes-nous
          </h2>
          <div className="space-y-6 text-lg text-[#4A4A4A] font-playfair leading-relaxed">
            <p>
              Findea est née d'un constat simple: à l'idée, les talents sont 
              partout, mais ils sont souvent difficiles à trouver. Des 
              boutiques confidentielles, des artisans passionnés, des 
              créateurs inspirés, des prestataires de confiance... autant de 
              belles adresses qui méritent d'être vues, connues et 
              accessibles plus facilement.
            </p>
            <p>
              Findea a été imaginée comme un point de rencontre. Un espace 
              où l'on prend le temps de chercher, de découvrir, de comparer 
              et de choisir avec intention. Un lieu digital où chaque produit 
              et chaque service raconte quelque chose, et où chaque 
              professionnel trouve sa place.
            </p>
          </div>
          <button className="self-start bg-[#F0E4CF] text-black px-10 py-3 text-sm font-medium hover:bg-[#e5d8c1] transition-all tracking-wide uppercase">
            Contact Us
          </button>
        </div>
      </section>

      {/* Meeting Point Section */}
      <section className="bg-[#FAF9F6] py-20 px-6 md:px-12">
        <div className="max-w-[1239px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-[#1A1A1A] uppercase tracking-widest mb-16">
            FINDEA, UN POINT DE RENCONTRE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Découvrir",
                img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070",
              },
              {
                title: "Comparer",
                img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2070",
              },
              {
                title: "Choisir",
                img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2070",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="relative h-[400px] w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-xl font-playfair text-[#1A1A1A] uppercase tracking-widest mt-4">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="bg-[#D5D0C9] py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xl md:text-2xl font-playfair text-[#1A1A1A] leading-relaxed italic">
            "Que l'on cherche un objet pour son intérieur, un cadeau chargé de sens, une pièce pour une liste de mariage ou de naissance, ou encore un service du quotidien, Findea accompagne chaque étape."
          </p>
          <div className="w-16 h-px bg-black mx-auto"></div>
          <p className="text-lg md:text-xl font-playfair text-[#1A1A1A] opacity-90">
            Findea ne vend pas seulement des produits ou des services. Elle crée des liens.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-[1239px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-[#1A1A1A] uppercase tracking-[0.2em] mb-20">
            VALEURS DE FINDEA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Heart,
                title: "Authenticité",
                desc: "Sélection soignée et de qualité",
              },
              {
                icon: Users,
                title: "Communauté",
                desc: "Des liens durables avec nos partenaires",
              },
              {
                icon: Leaf,
                title: "Durabilité",
                desc: "Pratiques responsables et consciencieuses",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-[#FAF9F6] p-12 transition-all hover:shadow-sm"
              >
                <div className="flex justify-center mb-8">
                  <value.icon size={48} strokeWidth={1} className="text-[#1A1A1A]" />
                </div>
                <h3 className="text-xl font-playfair text-[#1A1A1A] uppercase tracking-widest mb-4">
                  {value.title}
                </h3>
                <p className="text-[#4A4A4A] font-playfair">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </main>
  );
};

export default AboutPage;
