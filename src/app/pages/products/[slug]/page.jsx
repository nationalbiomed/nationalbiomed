import ProductDetail from './_components/ProductDetail'

async function getProduct(slug) {
  const res = await fetch(`http://localhost:3000/api/product/get/${slug}`)
  return res.json()
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.slug)

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </div>
  )
}

