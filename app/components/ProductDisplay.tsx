'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

interface ProductDisplayProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    description?: string;
    category: string;
    dimensions?: {
      height: string;
      width: string;
      depth: string;
    };
    features?: string[];
  }
}

const ProductDisplay = ({ product }: ProductDisplayProps) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const increaseQuantity = () => setQuantity(prev => prev + 1)
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    })
  }

  return (
    <div className='w-full bg-white py-16 md:py-4'>
      <div className='w-full max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24'>
          {/* Product Image */}
          <div className='relative aspect-square rounded-lg overflow-hidden'>
            <Image 
              src={product.image} 
              alt={product.name}
              fill
              className='object-cover'
              priority
            />
          </div>

          {/* Product Info */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <h1 className='text-4xl font-medium text-primary-dark font-satoshi'>
                {product.name}
              </h1>
              <p className='text-2xl font-medium text-primary-dark'>
                £{product.price}
              </p>
            </div>

            {/* Description */}
            <div className='space-y-4'>
              <h2 className='text-xl font-medium text-gray-900'>
                Description
              </h2>
              <p className='text-gray-600 leading-relaxed'>
                {product.description || 'A timeless design, with premium materials features as one of our most popular and iconic pieces. Perfect for any stylish living space.'}
              </p>
            </div>

            {/* Dimensions */}
            <div className='space-y-4 max-w-xs'>
              <h2 className='text-xl font-medium text-gray-900'>
                Dimensions
              </h2>
              <div className='grid grid-cols-3 gap-4 border-t border-b border-gray-200 py-4'>
                <div>
                  <p className='text-gray-600'>Height</p>
                  <p className='text-gray-900 font-medium'>{product.dimensions?.height || '110cm'}</p>
                </div>
                <div>
                  <p className='text-gray-600'>Width</p>
                  <p className='text-gray-900 font-medium'>{product.dimensions?.width || '75cm'}</p>
                </div>
                <div>
                  <p className='text-gray-600'>Depth</p>
                  <p className='text-gray-900 font-medium'>{product.dimensions?.depth || '50cm'}</p>
                </div>
              </div>
            </div>

            {/* Features */}
            {product.features && (
              <div className='space-y-4'>
                <h2 className='text-xl font-medium text-gray-900'>
                  Features
                </h2>
                <ul className='list-disc list-inside space-y-2 text-gray-600'>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add to Cart Section */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4'>
              <div className='w-1/2 sm:w-auto flex items-center gap-4'>
                <p className='text-gray-900 whitespace-nowrap'>Quantity:</p>
                <div className='flex-1 flex items-center justify-center gap-4 border border-gray-200 rounded-lg px-4 py-2'>
                  <button 
                    onClick={decreaseQuantity}
                    className='text-gray-500 hover:text-primary-dark transition-colors'
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className='w-8 text-center'>{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className='text-gray-500 hover:text-primary-dark transition-colors'
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </div>
              <button 
                onClick={handleAddToCart}
                className='w-full sm:flex-1 py-3 bg-primary-dark text-white rounded-lg hover:bg-primary-dark/90 transition-colors'
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay 