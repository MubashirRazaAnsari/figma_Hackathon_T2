import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        price: number;
        image: string;
        description?: string;
        category: string;
    }
}

const ProductCard = ({product}: ProductCardProps) => {
  return (
    <Link href={`/products/${product.category}/${product.id}`} className='group cursor-pointer'>
      <div className='relative aspect-square overflow-hidden rounded-lg mb-4'>
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          className='object-cover group-hover:scale-105 transition-transform duration-300'
        />
      </div>
      <div className='space-y-1'>
        <h3 className='text-lg font-medium text-gray-900 group-hover:text-primary-dark transition-colors'>{product.name}</h3>
        <p className='text-primary-dark font-medium'>£{product.price}</p>
      </div>
    </Link>
  )
}

export default ProductCard
