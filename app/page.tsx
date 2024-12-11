import Image from "next/image";
import ProductGrid from "./components/ProductGrid";
import Services from "./components/Servcies";
import { products, products2 } from "./data";
import Signup from "./components/Signup";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-primary-dark">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center md:text-left">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white font-satoshi leading-tight">
                  The furniture brand for the future, with timeless designs
                </h1>
                <button className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-dark transition-all duration-300">
                  View Collection
                </button>
              </div>
              <p className="text-white/80 font-satoshi text-lg md:text-xl max-w-xl mx-auto md:mx-0">
                A new era in eco-friendly furniture with Avelon, the French luxury
                retail brand with nice fonts, tasteful colors and a beautiful way
                to display things digitally using modern web technologies.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative w-full aspect-square hidden md:block md:aspect-auto md:h-[600px]">
              <Image 
                src="/hero.png" 
                alt="Modern furniture showcase" 
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <Services />
      </section>

      {/* Products Section */}
      <section className="bg-[#F9F9F9]">
        <ProductGrid 
          title="New Ceramics" 
          products={products} 
          category="ceramics"
        />
      </section>

      {/* Our Popular Products */}
      <section className="bg-white">
        <ProductGrid 
          title="Our Popular Products" 
          products={products2}
          category="popular"
        />
      </section>

      {/* Signup Section */}
      <section className="bg-white">
        <Signup />
      </section>

      {/* Banner Section */}
      <section className="bg-white">
        <Banner />
      </section>
    </main>
  );
}
