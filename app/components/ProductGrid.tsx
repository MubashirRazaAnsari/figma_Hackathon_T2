import React from 'react'
import ProductCard from './ProductCard'
import Link from 'next/link'

interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    image: string;
    category: string;
}

interface ProductGridProps {
    title: string;
    products: Product[];
    category: string;
}

const ProductGrid = ({title, products, category}: ProductGridProps) => {
  return (
    <div className='w-[95vw] h-fit max-w-7xl mx-auto py-16 md:py-24'>
      <div className='space-y-12 px-4 md:px-0'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <h2 className='text-3xl md:text-4xl font-medium text-primary-dark font-satoshi'>
            {title}
          </h2>
          <Link 
            href={`/products/${category}`}
            className='w-1/2 text-center  md:w-auto px-8 py-3 border border-primary-dark text-primary-dark rounded-lg hover:bg-primary-dark hover:text-white transition-colors font-medium'
          >
            View Collection
          </Link>
        </div>
        
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductGrid
