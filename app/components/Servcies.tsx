import React from 'react'
import { FaCheckCircle, FaCreditCard, FaShippingFast } from 'react-icons/fa'
import { FaPlantWilt } from 'react-icons/fa6'

const Services = () => {
  return (
    <div className='w-full  md:h-[60vh] max-w-7xl mx-auto py-16 md:py-14'>
      <div className='space-y-16'>
        {/* Heading */}
        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl font-medium text-primary-dark font-satoshi'>
            What makes our brand different
          </h2>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-2 sm:m-10 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12'>
          {/* Next Day Delivery */}
          <div className='flex flex-col gap-4 group m-6'>
            <FaShippingFast className='w-8 h-8 text-gray-600 group-hover:text-primary-dark transition-colors'/>
            <div className='space-y-2'>
              <h3 className='text-lg md:text-xl font-medium text-gray-900 group-hover:text-primary-dark transition-colors'>
                Next day as standard
              </h3>
              <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          </div>

          {/* Artisan Quality */}
          <div className='flex flex-col gap-4 group m-6'>
            <FaCheckCircle className='w-8 h-8 text-gray-600 group-hover:text-primary-dark transition-colors'/>
            <div className='space-y-2'>
              <h3 className='text-lg md:text-xl font-medium text-gray-900 group-hover:text-primary-dark transition-colors'>
                Made by true artisans
              </h3>
              <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                Handmade crafted goods made with real passion and craftmanship
              </p>
            </div>
          </div>

          {/* Unbeatable Prices */}
          <div className='flex flex-col gap-4 group m-6'>
            <FaCreditCard className='w-8 h-8 text-gray-600 group-hover:text-primary-dark transition-colors'/>
            <div className='space-y-2'>
              <h3 className='text-lg md:text-xl font-medium text-gray-900 group-hover:text-primary-dark transition-colors'>
                Unbeatable prices
              </h3>
              <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                For our materials and quality you won&apos;t find better prices anywhere
              </p>
            </div>
          </div>

          {/* Recycled Packaging */}
          <div className='flex flex-col gap-4 group m-6'>
            <FaPlantWilt className='w-8 h-8 text-gray-600 group-hover:text-primary-dark transition-colors'/>
            <div className='space-y-2'>
              <h3 className='text-lg md:text-xl font-medium text-gray-900 group-hover:text-primary-dark transition-colors'>
                Recycled packaging
              </h3>
              <p className='text-gray-600 text-sm md:text-base leading-relaxed'>
                We use 100% recycled packaging to ensure our footprint is manageable
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
