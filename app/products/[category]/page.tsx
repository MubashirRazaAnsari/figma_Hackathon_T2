import ProductListing from '@/app/components/ProductListing'
import CategoryHeader from '@/app/components/CategoryHeader'
import { products, products2 } from '@/app/data'

interface PageProps {
  params: {
    category: string;
  }
}

export default function CategoryPage({ params }: PageProps) {
  // Function to get products based on category
  const getProductsByCategory = (category: string) => {
    switch(category.toLowerCase()) {
      case 'ceramics':
        return products;
      case 'popular':
        return products2;
      default:
        return products;
    }
  }

  // Format category name for display
  const formatCategoryName = (category: string) => {
    return category.charAt(0).toUpperCase() + category.slice(1)
  }

  const categoryProducts = getProductsByCategory(params.category)

  return (
    <main className="w-full">
      <CategoryHeader title={formatCategoryName(params.category)} />
      <ProductListing 
        products={categoryProducts}
        title={`${formatCategoryName(params.category)} Collection`}
      />
    </main>
  )
}

// Generate static params for known categories
export function generateStaticParams() {
  return [
    { category: 'ceramics' },
    { category: 'popular' },
    // Add more categories as needed
  ]
} 