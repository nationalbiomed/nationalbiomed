import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const RelatedList = [
  {
    id: 1,
    img: "/ultrasound.png",
    title: "iSE series",
    description: "Portable Multi-Channel ECG",
    href: "/pages/product-and-services/products",
  },
  {
    id: 2,
    img: "/ultrasound.png",
    title: "iSE series",
    description: "Portable Multi-Channel ECG",
    href: "/pages/product-and-services/products",
  },
  {
    id: 3,
    img: "/ultrasound.png",
    title: "iSE series",
    description: "Portable Multi-Channel ECG",
    href: "/pages/product-and-services/products",
  },
  {
    id: 4,
    img: "/ultrasound.png",
    title: "iSE series",
    description: "Portable Multi-Channel ECG",
    href: "/pages/product-and-services/products",
  },
  {
    id: 5,
    img: "/ultrasound.png",
    title: "iSE series",
    description: "Portable Multi-Channel ECG",
    href: "/pages/product-and-services/products",
  },
];

export default function Related() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full  mb-[50px] overflow-hidden "
    >
      <CarouselContent>
        {RelatedList.map((items, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
            <div className="p-1">
              <Card className="w-[100%]">
                <CardContent className="flex flex-col  items-center justify-center p-6">
                  <img src={items.img} />
                  <h1>{items.title}</h1>
                  <h2>{items.description}</h2>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
