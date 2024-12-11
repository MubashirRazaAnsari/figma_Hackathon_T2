import React from "react";
import Banner from "../components/Banner";
import Services from "../components/Servcies";
import Signup from "../components/Signup";
import Link from "next/link";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-primary-dark font-satoshi max-w-2xl">
              A brand built on the love of craftmanship, quality and outstanding
              customer service
            </h1>
            <Link
              href="/products/ceramics"
              className="w-full md:w-auto px-8 py-3 border border-primary-dark text-primary-dark rounded-lg hover:bg-primary-dark hover:text-white transition-colors font-medium text-center"
            >
              View our products
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-full py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-3">
            <div className="h-full space-y-6 text-white bg-primary-dark p-[58px] min-h-[300px] md:min-h-[600px] flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium font-satoshi">
                It started with a small idea
              </h2>
              <p className="text-white/80 leading-relaxed">
                A global brand with local beginnings, our story began in a small
                studio in South London in early 2014
              </p>
              <button className="w-fit px-8 py-3 bg-white text-primary-dark rounded-lg hover:bg-white/90 transition-colors font-medium md:mt-[200px]">
                Get in touch
              </button>
            </div>
            <div className="relative md:h-[600px] h-[300px]">
              <Image
                src="/hero.png"
                alt="Our studio"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-fit bg-white py-16 md:py-4">
        <div className="w-full bg-white py-16 md:py-24">
          <div className="w-full max-w-7xl mx-auto pl-4 md:pl-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24">
                {/* Image */}
              <div className="w-full md:w-auto flex-shrink-0">
                <Image
                  src="/banner2.png"
                  width={730}
                  height={600}
                  alt="Furniture studio showcase"
                  className="rounded-lg w-full md:w-[730px] h-auto object-cover"
                />
              </div>
              {/* Text Content */}
              <div className="flex flex-col gap-8 max-w-xl">
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-medium text-primary-dark font-satoshi">
                    From a studio in London to a global brand with over 400
                    outlets
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="font-satoshi">
                      When we started Avion, the idea was simple. Make high
                      quality furniture affordable and available for the mass
                      market.
                    </p>
                    <p className="font-satoshi">
                      Handmade, and lovingly crafted furniture and homeware is
                      what we live, breathe and design so our Chelsea boutique
                      become the hotbed for the London interior design
                      community.
                    </p>
                  </div>
                </div>
                <button className="w-fit px-8 py-3 border border-primary-dark text-primary-dark rounded-lg hover:bg-primary-dark hover:text-white transition-colors font-medium">
                  Get in touch
                </button>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <Services />
      </section>

      {/* Signup Section */}
      <section className="bg-[#F9F9F9]">
        <Signup />
      </section>
    </main>
  );
};

export default AboutPage;
