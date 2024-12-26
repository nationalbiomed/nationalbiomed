
import ProductList from './_components/ProductList';

async function getProducts() {
  const res = await fetch('http://localhost:3000/api/product');
  return res.json() ;
}

async function getBrands() {
  const res = await fetch('http://localhost:3000/api/product/brand');
  return res.json() ;
}

async function getCategories() {
  const res = await fetch('http://localhost:3000/api/product/category');
  return res.json() ;
}

export default async function ProductsPage() {
  const [productData, brandData, categoryData] = await Promise.all([
    getProducts(),
    getBrands(),
    getCategories()
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold ">Our Products</h1>
      <ProductList 
        initialProducts={productData.data} 
        brands={brandData.brands} 
        categories={categoryData.pcategorys} 
      />
    </div>
  );
}

