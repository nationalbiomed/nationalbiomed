import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CalendarIcon, InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import DeleteForm from "../../_components/DeleteForm";
import EditForm from "./EditForm";

function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export default function CardList({ data, setData }) {
  const handleDeleteCallback = (deletedId) => {
    setData((prevData) => prevData.filter((item) => item.id !== deletedId));
  };

  return (
    <div className="flex px-3 flex-wrap gap-4 w-[100%]">
      {data &&
        data.map((data, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <img
                  src={data?.image}
                  alt={data?.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {data?.date ? formatDate(data.date) : "No Date Available"}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {data?.title}
                  </h3>
                </CardHeader>

                <CardFooter className="mt-auto block">
                  {/* <div>
                    <Link
                      href={`/blog/details/${data?.slug}?preview=true`}
                      passHref
                    >
                      <Button variant="outline" className="text-sm flex-1">
                        <InfoIcon className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </Link>
                  </div> */}
                  <div className="flex justify-between gap-4 pt-4 ">
                    <EditForm blogData={data} />
                    <div className="w-[50%]">
                      <DeleteForm
                        id={data?.id}
                        title={"Blog"}
                        url={"https://nationalbiomed.com.np/api/blog/delete"}
                        onDelete={handleDeleteCallback}
                      />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
    </div>
  );
}
