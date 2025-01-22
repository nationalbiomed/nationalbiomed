"use client";

import React from "react";
import Link from "next/link";
import { EditIcon, Trash2 } from "lucide-react";
import DeleteForm from "../../_components/DeleteForm";
import EditForm from "./EditForm";

import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function CardList({
  data,
  setData,
  editBttn = true,
  deleteBtnn,
}) {
  const handleDeleteCallback = (deletedId) => {
    setData((prevData) => prevData.filter((item) => item.id !== deletedId));
  };

  const { data: session, status } = useSession({
    required: false,
  });

  
  const filteredData = data.filter(item => item.email !== "admin@gmail.com");

  return (
    <>
      {session?.token?.email !== "admin@gmail.com" && session?.token?.email !== "admin@national.com"  ? (
        <>
          <h3 className="text-xl text-center h-[60vh] flex  justify-center items-center">
            You are not Authorized !!
          </h3>
        </>
      ) : (
        <div className=" px-3  ">
          {filteredData &&
            filteredData.map((data, index) => {
              return (
                <div key={index}>
                  <div className=" md:px-3 p-2 space-y-2 sm:space-y-0 sm:flex justify-between bg-gray-200 mb-3 items-center  md:py-3 w-[100%] ">
                    <div className="">
                      <h3 className="text-lg  font-bold text-black  break-words">
                        {data?.name}
                      </h3>
                      <p className="mt-1 text-left inline-block sm:bg-textColor sm:px-3 py-[1px]  text-black">
                        {data?.email}
                      </p>
                    </div>
                    {session?.token?.email == "admin@nepaltech.com" &&
                    data?.email == "admin@nepaltech.com" ? (
                      <div className="flex justify-between gap-4  ">
                        <EditForm id={data?.id} />
                        <div className="w-[50%]">
                          <Button
                            disabled
                            variant="outline"
                            className="bg-red-700  w-[100%] text-white px-3 py-5 space-x-3 rounded-sm hover:bg-red-700 hover:contrast-200 hover:text-white flex"
                          >
                            <Trash2 />
                            <span>Delete</span>
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-between gap-4  ">
                        <EditForm id={data?.id} />
                        <div className="w-[50%]">
                          <DeleteForm
                            id={data?.id}
                            title={"User"}
                            url={"https://nationalbiomedical.vercel.app/api/user/delete"}
                            onDelete={handleDeleteCallback}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}
