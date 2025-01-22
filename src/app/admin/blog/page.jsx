"use client";

import { useEffect, useState } from "react";
import CardList from "./_components/CardList";
import { PlusIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddForm from "./_components/AddForm";
import SkeletonLoader from "../_components/SkeletonLoader";

export default function Blogs() {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;

  const getAllBlogs = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(
        `http://nationalbiomed.com.np/api/blog/all?page=${currentPage}&perPage=${perPage}`
      );
      if (res.ok) {
        const result = await res.json();
        setData(result.blogs);
        setMeta(result.meta);
      } else {
        console.error("Error Fetching Blogs");
      }
    } catch (error) {
      console.error("Fetch Error: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (meta && page >= 1 && page <= meta.totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="flex mt-5 px-3 sm:mt-2 items-center justify-between mb-4">
        <p className="text-xl font-medium sm:pb-0">Blog</p>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-textColor text-white px-3 py-5 rounded-sm hover:bg-textColor hover:contrast-200 sm:space-x-3 sm:px-4 hover:text-white flex"
            >
              <span className="hidden md:block">Add Blog</span>
              <PlusIcon />
            </Button>
          </DialogTrigger>
          <DialogContent
            className="sm:max-w-[500px] max-h-[80%] overflow-y-auto"
            onPointerDownOutside={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <AddForm setIsOpen={setIsOpen} />
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <SkeletonLoader count={4} />
      ) : data.length ? (
        <div className="py-1">
          <CardList data={data} setData={setData} />
          <Pagination meta={meta} onPageChange={handlePageChange} />
        </div>
      ) : (
        <h2 className="text-center text-2xl text-textColor h-[60vh] flex items-center justify-center">
          No Blogs Found
        </h2>
      )}
    </>
  );
}

const Pagination = ({ meta, onPageChange }) => {
  if (!meta) return null;

  const { currentPage, totalPages } = meta;

  return (
    <div className="flex justify-center items-center mt-8">
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="mx-2"
      >
        Previous
      </Button>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="mx-2"
      >
        Next
      </Button>
    </div>
  );
};
