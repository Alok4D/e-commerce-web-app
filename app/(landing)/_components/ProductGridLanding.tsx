import Image from "next/image";

const ProductGridLanding = () => {
  const products = [
    {
      name: "Ajami Njoya",
      brand: "Ateliers Ifé",
      price: "CFA 22,500",
      image: "/product-img/Rectangle 4448 (10).png",
    },
    {
      name: "Ajami Njoya",
      brand: "Ateliers Ifé",
      price: "CFA 22,500",
      image: "/product-img/Rectangle 4448 (11).png",
    },
    {
      name: "Ajami Njoya",
      brand: "Ateliers Ifé",
      price: "CFA 22,500",
      image: "/product-img/Rectangle 4448 (12).png",
    },
    {
      name: "Ajami Njoya",
      brand: "Ateliers Ifé",
      price: "CFA 22,500",
      image: "/product-img/Rectangle 4448 (13).png",
    },
  ];

  return (
    <section className="w-full bg-brand-greige py-20 md:py-[82px] px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header: Title and See All link */}
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-[25px] md:text-[32px] font-playfair text-brand-text font-bold uppercase">
            ACTUELLEMENT ADORÉ SUR FINDÉA
          </h2>
          <a
            href="#"
            className="text-md md:text-[24px] hidden md:block font-playfair font-semibold text-brand-text hover:opacity-60 transition-opacity"
          >
            See All
          </a>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col">
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="transition-transform duration-500 hover:scale-105"
                  draggable={false}
                  priority
                />
              </div>

              {/* Product Info Box */}
              <div className="bg-brand-beige py-6 px-4 text-center">
                <h3 className="text-[20px] font-playfair font-medium text-brand-text mb-1 uppercase">
                  {product.name}
                </h3>
                <p className="text-[16px] font-playfair text-brand-text mb-2">
                  {product.brand}
                </p>
                <p className="text-[16px] font-playfair text-brand-text font-medium">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGridLanding;
