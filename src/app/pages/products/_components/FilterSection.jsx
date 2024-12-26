'use client'

import { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'



export default function FilterSection({
  brands,
  categories,
  selectedBrands,
  selectedCategories,
  setSelectedBrands,
  setSelectedCategories,
  handleFilter
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBrand = (brandId) => {
    setSelectedBrands(
      selectedBrands.includes(brandId)
        ? selectedBrands.filter(id => id !== brandId)
        : [...selectedBrands, brandId]
    );
  };

  const toggleCategory = (categoryId) => {
    setSelectedCategories(
      selectedCategories.includes(categoryId)
        ? selectedCategories.filter(id => id !== categoryId)
        : [...selectedCategories, categoryId]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <button
        className="w-full p-4 flex justify-between items-center md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-semibold">Filters</span>
        {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
      </button>
      <div className={`p-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <h2 className="text-xl font-semibold mb-4 hidden md:block">Filters</h2>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Brands</h3>
          {brands.map(brand => (
            <div key={brand.id} className="flex items-center mb-2">
              <Checkbox
                id={`brand-${brand.id}`}
                checked={selectedBrands.includes(brand.id)}
                onCheckedChange={() => toggleBrand(brand.id)}
              />
              <label htmlFor={`brand-${brand.id}`} className="ml-2 text-sm">
                {brand.name}
              </label>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Categories</h3>
          {categories.map(category => (
            <div key={category.id} className="flex items-center mb-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={selectedCategories.includes(category.id)}
                onCheckedChange={() => toggleCategory(category.id)}
              />
              <label htmlFor={`category-${category.id}`} className="ml-2 text-sm">
                {category.name}
              </label>
            </div>
          ))}
        </div>
        <Button onClick={() => { handleFilter(); setIsOpen(false); }} className="w-full">
          Apply Filters
        </Button>
      </div>
    </div>
  );
}

