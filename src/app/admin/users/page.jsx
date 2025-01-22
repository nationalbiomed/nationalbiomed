"use client";
import { useEffect, useState } from "react";
import CardList from "./_components/CardList";
import { PlusIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddForm from "./_components/AddForm";

export default function User() {
  const [isloading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const getAllBanner = async () => {
    setIsLoading(true);
    const res = await fetch("http://nationalbiomed.com.np/api/user");
    if (res.ok) {
      const result = await res.json();
      setData(result);
      setIsLoading(false);
    } else {
      console.error("Error Fetching Banner");
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    getAllBanner();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
    <div className="flex items-center justify-between mb-8">
        <p className="text-xl font-medium sm:pb-0  ">Users</p>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out flex items-center space-x-2"
            >
              <span className="hidden md:block">Add User</span>
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

      {data && (
        <div className="py-1">
          <CardList data={data} setData={setData} />
        </div>
      )}
    </div>
  );
}
