import ProductList from './_components/ProductList'

async function getProducts() {
  // Use absolute URL with process.env.NEXT_PUBLIC_APP_URL or fallback
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://nationalbiomedical.vercel.app'
  const res = await fetch(`${baseUrl}/api/product`, {
    next: { 
      revalidate: 3600 
    }
  })
  
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.statusText}`)
  }
  
  return res.json()
}

async function getBrands() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://nationalbiomedical.vercel.app'
  const res = await fetch(`${baseUrl}/api/product/brand`, {
    next: { 
      revalidate: 3600 
    }
  })
  
  if (!res.ok) {
    throw new Error(`Failed to fetch brands: ${res.statusText}`)
  }
  
  return res.json()
}

async function getCategories() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://nationalbiomedical.vercel.app'
  const res = await fetch(`${baseUrl}/api/product/category`, {
    next: { 
      revalidate: 3600 
    }
  })
  
  if (!res.ok) {
    throw new Error(`Failed to fetch categories: ${res.statusText}`)
  }
  
  return res.json()
}

export default async function ProductsPage() {
  try {
    const [productData, brandData, categoryData] = await Promise.all([
      getProducts(),
      getBrands(),
      getCategories()
    ])

    return (
      <div className="container mx-auto px-4 py-8 mt-5">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <ProductList 
          initialProducts={productData.data} 
          brands={brandData.brands} 
          categories={categoryData.pcategorys} 
        />
      </div>
    )
  } catch (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Unable to Load Products
          </h1>
          <p className="text-gray-600 mb-4">
            We're experiencing technical difficulties. Please try again later.
          </p>
        </div>
      </div>
    )
  }
}

