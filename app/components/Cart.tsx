'use client'

import React from 'react'
import { useCart } from '../context/CartContext'
import Image from 'next/image'
import { FaTrash } from 'react-icons/fa'

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart()

  return (
    <div className="fixed right-0 top-0 h-screen w-[400px] bg-white shadow-xl p-6 overflow-y-auto">
      <h2 className="text-2xl font-medium text-primary-dark mb-6">Your Cart</h2>
      
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                <div className="relative w-20 h-20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 font-medium">{item.name}</h3>
                  <p className="text-primary-dark">£{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-red-500 hover:text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Total:</span>
              <span>£{totalPrice}</span>
            </div>
            <button className="w-full py-3 bg-primary-dark text-white rounded-lg hover:bg-primary-dark/90 transition-colors">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart 