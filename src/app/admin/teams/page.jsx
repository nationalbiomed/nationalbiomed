"use client";
import { useEffect, useState } from "react";
import CardList from "./_components/CardList";
import { PlusIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddForm from "./_components/AddForm";
import SkeletonLoader from "../_components/SkeletonLoader";

export default function Banner() {
  const [isloading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const getAllBanner = async () => {
    setIsLoading(true);
    const res = await fetch("https://nationalbiomedical.vercel.app/api/team");
    if (res.ok) {
      const result = await res.json();
      setData(result);
      setIsLoading(false);
    } else {
      console.error("Error Fetching Teams");
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
        <p className="text-xl font-medium sm:pb-0  ">Our Teams</p>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-textColor text-white px-3
  py-5   rounded-sm hover:bg-textColor hover:contrast-200 sm:space-x-3 sm:px-4  hover:text-white flex"
            >
              <span className="hidden md:block">Add Team</span>
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
      ) : data.length > 0 ? (
        <div className="py-1">
          <CardList data={data} setData={setData} />
        </div>
      ) : (
        <h2 className="text-center text-2xl text-textColor h-[60vh] flex items-center justify-center">
          No Teams found
        </h2>
      )}
    </>
  );
}
