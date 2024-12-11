'use client'

import React, { useState } from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'
import Image from 'next/image'
import { FaCartShopping } from 'react-icons/fa6'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import Cart from '../components/Cart'

const Navbar = () => {
  const { totalItems } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className='bg-white w-full h-auto md:h-[132px] flex flex-col justify-center items-center px-4'>
      <div className='flex justify-between w-[95vw] mx-6 border-b border-gray-200 pb-4'>
        {/* Mobile Layout */}
        <div className='flex md:hidden items-center gap-4 w-full py-4'>
          <Image src={'/logo.png'} alt='logo' width={65} height={30} />
          <div className='flex items-center gap-4 ml-auto'>
            <FaSearch className='text-gray-500 hover:text-primary-dark transition-all duration-300 text-[18px]' />
            <Link href="/cart" className="relative">
              <FaCartShopping className='text-gray-500 hover:text-primary-dark transition-colors text-[18px]' />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-dark text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <FaUser className='text-gray-500 hover:text-primary-dark transition-all duration-300 text-[18px]' />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <IoMdClose className='text-gray-500 hover:text-primary-dark transition-all duration-300 text-[24px]' />
              ) : (
                <RxHamburgerMenu className='text-gray-500 hover:text-primary-dark transition-all duration-300 text-[24px]' />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className='hidden md:flex items-center'>
          <FaSearch className='text-gray-500 hover:text-primary-dark transition-all duration-300 text-[18px]' />
        </div>
        <div className='hidden md:flex items-center gap-2'>
          <Image src={'/logo.png'} alt='logo' width={65} height={30} />
        </div>
        <div className='hidden md:flex items-center gap-2'>
          <Link href="/cart" className="relative">
            <FaCartShopping className='text-gray-500 hover:text-primary-dark transition-all duration-300 text-[18px]' />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary-dark text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <FaUser className='text-gray-500 hover:text-primary-dark transition-all duration-300 text-[18px]' />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden w-full bg-white'>
          <div className='flex flex-col items-start text-[#726E8D] text-base font-normal font-satoshi gap-4 p-4'>
            <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Plant Pots</Link>
            <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Ceramics</Link>
            <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Tables</Link>
            <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Chairs</Link>
            <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Crockery</Link>
            <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Tableware</Link>
            <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Cultery</Link>
          </div>
        </div>
      )}

      {/* Desktop Menu */}
      <div className='hidden md:flex justify-center items-center w-[90vw] mx-6'>
        <div className='flex items-center text-[#726E8D] text-base font-normal font-satoshi gap-6 my-4'>
          <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Plant Pots</Link>
          <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Ceramics</Link>
          <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Tables</Link>
          <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Chairs</Link>
          <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Crockery</Link>
          <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Tableware</Link>
          <Link href={'/'} className='hover:text-primary-dark transition-all duration-300'>Cultery</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
