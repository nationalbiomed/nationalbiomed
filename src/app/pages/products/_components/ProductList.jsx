"use client"
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
  const [currentMetadata, setCurrentMetadata] = useState(metadata);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, selectedBrands, selectedCategories]);

  const fetchProducts = async () => {
    const brandParams = selectedBrands.map(b => `brandId=${b}`).join('&');
    const categoryParams = selectedCategories.map(c => `categoryId=${c}`).join('&');
    const url = `/api/product?page=${currentPage}&${brandParams}&${categoryParams}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data.data);
      setCurrentMetadata(data.meta);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleFilter = () => {
    setCurrentPage(1);
    fetchProducts();
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
              Page {currentPage} of {currentMetadata.totalPages}
            </span>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === currentMetadata.totalPages}
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

