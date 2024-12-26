"use client";
import { useEffect, useState } from "react";
import CardList from "./_components/CardList";
import { PlusIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddForm from "./_components/AddForm";
import SkeletonLoader from "../_components/SkeletonLoader";

export default function Banner() {
  const [isloading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const getAllBanner = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/api/product");
    if (res.ok) {
      const result = await res.json();
      setData(result?.data);
      setIsLoading(false);
    } else {
      console.error("Error Fetching Customer");
      setIsLoading(false);
      return;
    }
  };

  const getAllBrand = async () => {
    const res = await fetch("http://localhost:3000/api/brand");
    if (res.ok) {
      const result = await res.json();
      setBrand(result);
    } else {
      console.error("Error Fetching Brand");
      return;
    }
  };

  const getAllCategory = async () => {
    const res = await fetch("http://localhost:3000/api/category");
    if (res.ok) {
      const result = await res.json();
      setCategory(result);
    } else {
      console.error("Error Fetching Category");
      return;
    }
  };

  useEffect(() => {
    getAllBanner();
    getAllBrand();
    getAllCategory();
  }, []);

  return (
    <>
      <div className="flex mt-5 px-3  sm:mt-2 items-center justify-between mb-4 ">
        <p className="text-xl font-medium sm:pb-0">Products</p>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-textColor text-white px-3
  py-5   rounded-sm hover:opacity-85 hover:bg-textColor hover:text-white sm:space-x-3 sm:px-4   flex"
            >
              <span className="hidden md:block">Add Product</span>
              <PlusIcon />
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[600px] max-h-[80%] overflow-y-auto "
            onPointerDownOutside={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <AddForm setIsOpen={setIsOpen} category={category} brand={brand} />
          </DialogContent>
        </Dialog>
      </div>

      {isloading ? (
        <SkeletonLoader count={4} />
      ) : !isloading && data?.length > 0 ? (
        <div className="py-1">
          <CardList
            data={data}
            setData={setData}
            category={category}
            brand={brand}
          />
        </div>
      ) : (
        <h2 className="text-center text-2xl text-textColor h-[60vh] flex items-center justify-center">
          No Product found
        </h2>
      )}
    </>
  );
}
