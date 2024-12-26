'use client'

import { useState } from 'react';
import ProductCard from './ProductCard';
import FilterSection from './FilterSection';



export default function ProductList({ initialProducts, brands, categories }) {
  const [products, setProducts] = useState(initialProducts);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const filterProducts = () => {
    return initialProducts.filter(product => 
      (selectedBrands.length === 0 || selectedBrands.includes(product.brandId)) &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.categoryId))
    );
  };

  const handleFilter = () => {
    setProducts(filterProducts());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 md:hidden">
        <FilterSection 
          brands={brands}
          categories={categories}
          selectedBrands={selectedBrands}
          selectedCategories={selectedCategories}
          setSelectedBrands={setSelectedBrands}
          setSelectedCategories={setSelectedCategories}
          handleFilter={handleFilter}
        />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="hidden md:block md:w-1/4 md:pr-4">
          <FilterSection 
            brands={brands}
            categories={categories}
            selectedBrands={selectedBrands}
            selectedCategories={selectedCategories}
            setSelectedBrands={setSelectedBrands}
            setSelectedCategories={setSelectedCategories}
            handleFilter={handleFilter}
          />
        </div>
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

