"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Filter, ChevronDown, ChevronUp } from "lucide-react";

export default function FilterSection({
  brands,
  categories,
  selectedBrands,
  selectedCategories,
  setSelectedBrands,
  setSelectedCategories,
  handleFilter,
}) {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [tempSelectedBrands, setTempSelectedBrands] = useState(selectedBrands);
  const [tempSelectedCategories, setTempSelectedCategories] = useState(selectedCategories);

  const toggleBrand = (brandId) => {
    setTempSelectedBrands((prev) =>
      prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]
    );
  };

  const toggleCategory = (categoryId) => {
    setTempSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    );
  };

  const applyFilters = () => {
    setSelectedBrands(tempSelectedBrands);
    setSelectedCategories(tempSelectedCategories);
    handleFilter();
  };

  const FilterContent = () => (
    <>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Brands</h3>
        {brands.slice(0, showAllBrands ? brands.length : 5).map((brand) => (
          <div key={brand.id} className="flex items-center mb-2">
            <Checkbox
              id={`brand-${brand.id}`}
              checked={tempSelectedBrands.includes(brand.id)}
              onCheckedChange={() => toggleBrand(brand.id)}
            />
            <label htmlFor={`brand-${brand.id}`} className="ml-2 text-sm">
              {brand.name}
            </label>
          </div>
        ))}
        {brands.length > 5 && (
          <Button
            variant="link"
            onClick={() => setShowAllBrands(!showAllBrands)}
            className="p-0 h-auto font-normal"
          >
            {showAllBrands ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                View More
              </>
            )}
          </Button>
        )}
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Categories</h3>
        {categories.slice(0, showAllCategories ? categories.length : 5).map((category) => (
          <div key={category.id} className="flex items-center mb-2">
            <Checkbox
              id={`category-${category.id}`}
              checked={tempSelectedCategories.includes(category.id)}
              onCheckedChange={() => toggleCategory(category.id)}
            />
            <label htmlFor={`category-${category.id}`} className="ml-2 text-sm">
              {category.name}
            </label>
          </div>
        ))}
        {categories.length > 5 && (
          <Button
            variant="link"
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="p-0 h-auto font-normal"
          >
            {showAllCategories ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                View More
              </>
            )}
          </Button>
        )}
      </div>
      <Button onClick={applyFilters} className="w-full">
        Apply Filters
      </Button>
    </>
  );

  return (
    <>
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
            </div>
            <SheetClose asChild>
              <Button onClick={applyFilters} className="w-full mt-4">
                Apply Filters
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:block bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <FilterContent />
      </div>
    </>
  );
}
