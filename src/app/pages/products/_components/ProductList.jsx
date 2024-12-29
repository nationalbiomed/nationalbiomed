'use client'

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import FilterSection from './FilterSection';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductList({ initialProducts, brands, categories, metadata }) {
  const [products, setProducts] = useState(initialProducts);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(metadata.page);

  useEffect(() => {
    handleFilter();
  }, [currentPage, selectedBrands, selectedCategories]);

  const filterProducts = () => {
    const filteredProducts = initialProducts.filter(product => 
      (selectedBrands.length === 0 || selectedBrands.includes(product.brandId)) &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.categoryId))
    );

    const startIndex = (currentPage - 1) * metadata.limit;
    const endIndex = startIndex + metadata.limit;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const handleFilter = () => {
    setProducts(filterProducts());
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
          <div className="mt-8 flex justify-center items-center space-x-4">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <span className="text-sm font-medium">
              Page {currentPage} of {metadata.totalPages}
            </span>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === metadata.totalPages}
              variant="outline"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

