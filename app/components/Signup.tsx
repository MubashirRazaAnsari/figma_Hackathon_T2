import React from 'react'

const Signup = () => {
  return (
    <div className='w-full   bg-[#F9F9F9] py-16 md:py-24'>
      <div className='w-full max-w-2xl mx-auto px-4 flex flex-col gap-6 items-center text-center'>
        <h2 className='text-3xl md:text-4xl font-medium text-primary-dark font-satoshi'>
          Join the club and get the benefits
        </h2>
        <p className='text-gray-600 text-base md:text-lg font-satoshi max-w-xl'>
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
        </p>
        
        <div className='w-full flex flex-col sm:flex-row gap-2 mt-4'>
          <input 
            type="email" 
            placeholder="your@email.com" 
            className='flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-dark transition-colors'
          />
          <button className='w-full sm:w-auto px-8 py-3 bg-primary-dark text-white rounded-lg hover:bg-primary-dark/90 transition-colors font-medium'>
            Sign up
          </button>
        </div>

        <p className='text-gray-500 text-sm'>
          Discover more about our privacy policy
        </p>
      </div>
    </div>
  )
}

export default Signup
