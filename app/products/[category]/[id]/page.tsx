import { products, products2, products3 } from '@/app/data'
import ProductDisplay from '@/app/components/ProductDisplay'
import { notFound } from 'next/navigation'
import ProductGrid from '@/app/components/ProductGrid';
import Signup from '@/app/components/Signup';
import Services from '@/app/components/Servcies';

interface PageProps {
  params: {
    category: string;
    id: string;
  }
}

export default function ProductPage({ params }: PageProps) {
  // Get all products
  const allProducts = [...products, ...products2, ...products3]
  
  // Find the specific product
  const product = allProducts.find(p => p.id === params.id)

  if (!product) {
    return notFound()
  }

  return (
    <main className="w-full">
      <ProductDisplay product={product} />
      <div className='w-full bg-white py-16 md:py-6'>
        <ProductGrid products={products} title='You Might Also Like' category='Furniture' />
      </div>
      <div className='w-full bg-white py-16'>
        <Services />
      </div>
      <div className='w-full bg-white py-16 md:py-6'>
        <Signup />
      </div>
    </main>
  )
} 