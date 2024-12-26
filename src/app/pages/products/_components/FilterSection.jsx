'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Filter } from 'lucide-react'



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

  const FilterContent = () => (
    <>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Brands</h3>
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
        <h3 className="font-semibold mb-2">Categories</h3>
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
    </>
  );

  return (
    <>
      {/* Mobile view */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription className="sr-only">
                Apply filters to refine your product search
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <FilterContent />
              <Button 
                onClick={() => { 
                  handleFilter(); 
                  setIsOpen(false); 
                }} 
                className="w-full"
              >
                Apply Filters
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <FilterContent />
        <Button onClick={handleFilter} className="w-full">
          Apply Filters
        </Button>
      </div>
    </>
  );
}

