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
  const getAllBanner = async () => {
    setIsLoading(true);
    const res = await fetch("http://localhost:3000/api/customer");
    if (res.ok) {
      const result = await res.json();
      setData(result);
      setIsLoading(false);
    } else {
      console.error("Error Fetching Customer");
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    getAllBanner();
  }, []);

  return (
    <>
      <div className="flex mt-5 px-3  sm:mt-2 items-center justify-between mb-4 ">
        <p className="text-xl font-medium sm:pb-0">Customer</p>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-textColor text-white px-3
  py-5   rounded-sm hover:opacity-85 hover:bg-textColor hover:text-white sm:space-x-3 sm:px-4   flex"
            >
              <span className="hidden md:block">Add Customer</span>
              <PlusIcon />
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[500px] max-h-[80%] overflow-y-auto "
            onPointerDownOutside={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <AddForm setIsOpen={setIsOpen} />
          </DialogContent>
        </Dialog>
      </div>

      {isloading ? (
        <SkeletonLoader count={4} />
      ) : data ? (
        <div className="py-1">
          <CardList data={data} setData={setData} />
        </div>
      ) : (
        <h2 className="text-center text-2xl text-textColor h-[60vh] flex items-center justify-center">
          No Customer found
        </h2>
      )}
    </>
  );
}
