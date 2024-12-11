'use client'

import React from 'react'
import { useCart } from '../context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice } = useCart()

  return (
    <main className="w-full bg-white py-16 md:py-24">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-medium text-primary-dark font-satoshi mb-12">
          Your shopping cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-6">Your cart is empty</p>
            <Link 
              href="/products/ceramics"
              className="inline-block px-8 py-3 bg-primary-dark text-white rounded-lg hover:bg-primary-dark/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Headers */}
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-gray-600">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Total</div>
              <div className="col-span-2"></div>
            </div>

            {/* Cart Items */}
            <div className="space-y-6 mt-6">
              {cart.map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 py-4 border-b border-gray-200">
                  {/* Product Info */}
                  <div className="col-span-1 md:col-span-6">
                    <div className="flex gap-4">
                      <div className="relative w-24 h-24">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                        <p className="text-primary-dark">£{item.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="col-span-1 md:col-span-2 flex justify-center items-center">
                    <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-gray-500 hover:text-primary-dark transition-colors"
                      >
                        <FaMinus size={12} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-primary-dark transition-colors"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="col-span-1 md:col-span-2 flex justify-center items-center">
                    <p className="font-medium">£{item.price * item.quantity}</p>
                  </div>

                  {/* Remove Button */}
                  <div className="col-span-1 md:col-span-2 flex justify-end items-center">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-primary-dark transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-12 flex flex-col items-end gap-4">
              <div className="w-full md:w-80 space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Subtotal</span>
                  <span className="font-medium">£{totalPrice}</span>
                </div>
                <p className="text-gray-500 text-sm">
                  Taxes and shipping are calculated at checkout
                </p>
                <button className="w-full py-3 bg-primary-dark text-white rounded-lg hover:bg-primary-dark/90 transition-colors">
                  Go to checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}

export default CartPage 