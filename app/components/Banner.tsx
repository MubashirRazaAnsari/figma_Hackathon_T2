import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='w-full bg-white py-16 md:py-24'>
      <div className='w-full max-w-7xl mx-auto pl-4 md:pl-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24'>
          {/* Text Content */}
          <div className='flex flex-col gap-8 max-w-xl'>
            <div className='space-y-6'>
              <h2 className='text-2xl md:text-3xl font-medium text-primary-dark font-satoshi'>
                From a studio in London to a global brand with over 400 outlets
              </h2>
              <div className='space-y-4 text-gray-600'>
                <p className='font-satoshi'>
                  When we started Avion, the idea was simple. Make high quality furniture 
                  affordable and available for the mass market.
                </p>
                <p className='font-satoshi'>
                  Handmade, and lovingly crafted furniture and homeware is what we live, 
                  breathe and design so our Chelsea boutique become the hotbed for the 
                  London interior design community.
                </p>
              </div>
            </div>
            <button className='w-fit px-8 py-3 border border-primary-dark text-primary-dark rounded-lg hover:bg-primary-dark hover:text-white transition-colors font-medium'>
              Get in touch
            </button>
          </div>

          {/* Image */}
          <div className='w-full md:w-auto flex-shrink-0'>
            <Image 
              src='/banner.png' 
              width={730} 
              height={600} 
              alt='Furniture studio showcase'
              className='rounded-lg w-full md:w-[730px] h-auto object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
