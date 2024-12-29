import React from "react";
import DeleteForm from "../../_components/DeleteForm";
import EditForm from "./EditForm";

export default function CardList({ data, setData }) {
  const handleDeleteCallback = (deletedId) => {
    setData((prevData) => prevData.filter((item) => item.id !== deletedId));
  };

  return (
    <div className="flex px-3 flex-wrap gap-4  w-[100%]">
      {data &&
        data.map((data, index) => {
          return (
            <div
              key={index}
              className="flex  relative   w-[300px] h-[100%] flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            >
              <img
                className="w-full  h-[220px] object-cover "
                src={data?.pimage}
                alt="Card Image"
              />

              <div className="p-4 md:px-3  md:py-4 ">
                <div className="">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white break-words">
                    {data?.title}
                  </h3>
                  <div className="">
                    <p className="mt-1 py-[2px] ">Brand: {data?.brand?.name}</p>
                    <p className="mt-1    py-[2px] ">
                      Category: {data?.category?.name}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between gap-4 pt-4 ">
                  <EditForm data={data} />
                  <div className="w-[50%]">
                    <DeleteForm
                      id={data?.id}
                      title={"Product"}
                      url={"http://localhost:3000/api/product/delete"}
                      onDelete={handleDeleteCallback}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
