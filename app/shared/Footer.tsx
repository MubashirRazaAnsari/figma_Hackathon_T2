import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaFacebook, FaInstagram, FaSkype, FaTwitter, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-primary-dark w-full h-auto flex flex-col justify-center items-center px-4 py-12'>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-7xl'>
        {/* Menu Section */}
        <div className='space-y-4'>
          <h3 className='text-white text-lg font-medium font-satoshi'>Menu</h3>
          <div className='flex flex-col gap-3'>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>New Arrivals</Link>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>Best seller</Link>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>Recently Viewed</Link>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>Popular this week</Link>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>All Products</Link>
          </div>
        </div>

        {/* Categories Section */}
        <div className='space-y-4'>
          <h3 className='text-white text-lg font-medium font-satoshi'>Categories</h3>
          <div className='flex flex-col gap-3'>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>Crockery</Link>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>Furniture</Link>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>Homeware</Link>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>Plant pots</Link>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>Chairs</Link>
          </div>
        </div>

        {/* Our Company Section */}
        <div className='space-y-4'>
          <h3 className='text-white text-lg font-medium font-satoshi'>Our Company</h3>
          <div className='flex flex-col gap-3'>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>About us</Link>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>Contact us</Link>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>Privacy Policy</Link>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>Terms & Conditions</Link>
            <Link href={'/'} className='text-white/80 hover:text-white text-sm font-normal font-satoshi transition-colors'>Shipping & Returns</Link>
          </div>
        </div>

        {/* Mailing List Section */}
        <div className='space-y-4 col-span-2 md:col-span-1'>
          <h3 className='text-white text-lg font-medium font-satoshi'>Join our mailing list</h3>
          <div className='flex flex-col gap-3'>
            <input 
              type='email' 
              placeholder='your@email.com' 
              className='w-full px-4 py-2.5 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors'
            />
            <button className='w-full md:w-auto px-6 py-2.5 bg-white text-primary-dark font-medium rounded hover:bg-white/90 transition-colors'>
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='w-full max-w-7xl mt-12 pt-8 border-t border-white/10'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-white/60 text-sm'>Copyright 2022 Avion LTD</p>
          <div className='flex items-center gap-4 md:gap-6 flex-wrap justify-center'>
            <Link href={'/'} className='text-white/60 hover:text-white transition-colors'>
              <FaLinkedin size={20} />
            </Link>
            <Link href={'/'} className='text-white/60 hover:text-white transition-colors'>
              <FaFacebook size={20} />
            </Link>
            <Link href={'/'} className='text-white/60 hover:text-white transition-colors'>
              <FaInstagram size={20} />
            </Link>
            <Link href={'/'} className='text-white/60 hover:text-white transition-colors'>
              <FaSkype size={20} />
            </Link>
            <Link href={'/'} className='text-white/60 hover:text-white transition-colors'>
              <FaTwitter size={20} />
            </Link>
            <Link href={'/'} className='text-white/60 hover:text-white transition-colors'>
              <FaPinterest size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
