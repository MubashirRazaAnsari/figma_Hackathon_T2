import React from 'react'
import Image from 'next/image'

interface CategoryHeaderProps {
  title: string;
}

const CategoryHeader = ({ title }: CategoryHeaderProps) => {
  return (
    <div className='relative w-full h-[200px] bg-gray-900'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src="/header.png"  // Add your background image
          alt="Category background"
          fill
          className='object-cover opacity-100'
        />
      </div>

      {/* Content */}
      <div className='relative z-10 w-full h-full flex flex-col justify-end'>
        <div className='w-full max-w-7xl mx-auto px-4 pb-12'>
          <h1 className='text-4xl md:text-5xl text-white font-satoshi'>
            {title}
          </h1>
        </div>
      </div>

      {/* Filter Bar */}
      <div className='w-full bg-white border-b border-gray-200'>
        <div className='w-full max-w-7xl mx-auto px-4'>
          <div className='flex flex-col md:flex-row justify-between py-4 gap-4'>
            {/* Left Side Filters */}
            <div className='flex items-center gap-8'>
              <div className='relative group'>
                <button className='text-gray-600 hover:text-primary-dark flex items-center gap-2'>
                  Category
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className='relative group'>
                <button className='text-gray-600 hover:text-primary-dark flex items-center gap-2'>
                  Product type
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className='relative group'>
                <button className='text-gray-600 hover:text-primary-dark flex items-center gap-2'>
                  Price
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <div className='relative group'>
                <button className='text-gray-600 hover:text-primary-dark flex items-center gap-2'>
                  Brand
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side Sort */}
            <div className='flex items-center gap-2'>
              <span className='text-gray-600'>Sorting by:</span>
              <select className='border-none text-gray-600 hover:text-primary-dark focus:outline-none bg-transparent'>
                <option value="date">Date added</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryHeader 