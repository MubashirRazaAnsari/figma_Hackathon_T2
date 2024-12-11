import ProductListing from '../components/ProductListing'
import { products } from '../data'

export default function ProductsPage() {
  return (
    <main className="w-full">
      <ProductListing products={products} title={'Products'} />
    </main>
  )
} 