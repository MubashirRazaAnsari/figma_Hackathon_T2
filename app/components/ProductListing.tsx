import React from 'react'
import ProductCard from './ProductCard'
import { FaFilter } from 'react-icons/fa'
import { products3 } from '../data';

interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    image: string;
    category: string;
}

interface ProductListingProps {
    products: Product[];
    title: string;
}

const ProductListing = ({ products, title }: ProductListingProps) => {
  return (
    <div className='w-full bg-white py-16 md:py-24'>
      <div className='w-full max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='flex flex-col gap-8 mb-12'>
          <div className='flex justify-between items-center'>
            <h1 className='text-3xl md:text-4xl font-medium text-primary-dark font-satoshi'>
              {title}
            </h1>
            <button className='flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:border-primary-dark transition-colors'>
              <FaFilter className='text-gray-500' />
              <span className='text-gray-700'>Filters</span>
            </button>
          </div>
          <div className='flex justify-between items-center text-gray-600'>
            <p>Showing all {products.length} results</p>
            <select className='px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-dark'>
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
          {products3.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <div className='flex justify-center mt-12'>
          <div className='flex gap-2'>
            <button className='px-4 py-2 border border-gray-200 rounded-lg hover:border-primary-dark transition-colors text-gray-700'>
              Previous
            </button>
            <button className='px-4 py-2 bg-primary-dark text-white rounded-lg hover:bg-primary-dark/90 transition-colors'>
              1
            </button>
            <button className='px-4 py-2 border border-gray-200 rounded-lg hover:border-primary-dark transition-colors text-gray-700'>
              2
            </button>
            <button className='px-4 py-2 border border-gray-200 rounded-lg hover:border-primary-dark transition-colors text-gray-700'>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListing 