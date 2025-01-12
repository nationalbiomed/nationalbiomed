"use client";
import { useEffect, useState } from "react";
import CardList from "./_components/CardList";
import { PlusIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddForm from "./_components/AddForm";
import SkeletonLoader from "../_components/SkeletonLoader";

export default function Banner() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 20;

  const getAllBanner = async (page = 1) => {
    setIsLoading(true);
    const res = await fetch(
      `https://nationalbiomedical.vercel.app/api/product?page=${page}&limit=${limit}`
    );
    if (res.ok) {
      const result = await res.json();
      setData(result?.data);
      setTotalPages(result?.meta?.totalPages || 1);
      setIsLoading(false);
    } else {
      console.error("Error Fetching Products");
      setIsLoading(false);
    }
  };

  const getAllBrand = async () => {
    const res = await fetch("https://nationalbiomedical.vercel.app/api/brand");
    if (res.ok) {
      const result = await res.json();
      setBrand(result);
    } else {
      console.error("Error Fetching Brand");
    }
  };

  const getAllCategory = async () => {
    const res = await fetch("https://nationalbiomedical.vercel.app/api/category");
    if (res.ok) {
      const result = await res.json();
      setCategory(result);
    } else {
      console.error("Error Fetching Category");
    }
  };

  useEffect(() => {
    getAllBanner(currentPage);
    getAllBrand();
    getAllCategory();
  }, [currentPage]);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="flex mt-5 px-3 sm:mt-2 items-center justify-between mb-4">
        <p className="text-xl font-medium sm:pb-0">Products</p>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-textColor text-white px-3 py-5 rounded-sm hover:opacity-85 hover:bg-textColor hover:text-white sm:space-x-3 sm:px-4 flex"
            >
              <span className="hidden md:block">Add Product</span>
              <PlusIcon />
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[600px] max-h-[80%] overflow-y-auto"
            onPointerDownOutside={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <AddForm setIsOpen={setIsOpen} category={category} brand={brand} />
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <SkeletonLoader count={4} />
      ) : !isLoading && data?.length > 0 ? (
        <div className="py-1">
          <CardList
            data={data}
            setData={setData}
            category={category}
            brand={brand}
          />
          <div className="flex justify-between items-center mt-4 px-4">
            <Button
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-green-600 text-white hover:bg-green-500"
            >
              Previous
            </Button>
            <p>
              Page {currentPage} of {totalPages}
            </p>
            <Button
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-green-600 text-white hover:bg-green-500"
            >
              Next
            </Button>
          </div>
        </div>
      ) : (
        <h2 className="text-center text-2xl text-textColor h-[60vh] flex items-center justify-center">
          No Product found
        </h2>
      )}
    </>
  );
}
