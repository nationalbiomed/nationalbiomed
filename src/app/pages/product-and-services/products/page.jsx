"use client";
import { ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles
import Related from "../_components/Related";

const ProductImage = [
  {
    id: 1,
    img: "/product1.jpg",
  },
  {
    id: 2,
    img: "/ultrasound.png",
  },
  {
    id: 3,
    img: "/adonis-x-ray-machine.jpg",
  },
];

export default function Products() {
  return (
    // <div className="w-full lg:mt-[100px] mt-[50px] lg:px-20 px-5">

    //    <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-16  mb-[50px]">
    //  <div>
    //     <img src="/adonis-x-ray-machine.jpg" className="rounded-lg"  data-aos="fade-right"/>
    //      <div className="flex gap-2">
    //     {ProductImage.map((items)=>(

    //     <div className="" key={items.id}>

    //          <img src={items.img} className="h-[100px] w-[100px]" />

    //     </div>
    //      ))}
    //      </div>
    //   </div>
    //   <div  data-aos="fade-left">

    //       <h1 className="text-4xl font-bold text-green-600 mb-4">Adonis X-Ray Machine</h1>
    //       <p className="text-md  text-gray-700 mb-5">
    //       We sincerely invite you to experience any one of our ultrasound systems through the SIUI MAI! Select any model that you're interested in and click "Product Enquiry" below, leave your message and we will contact you in time.
    //       </p>
    //       <h1>Category:<span className="text-green-600"> Uncategorized</span></h1>
    //       <Button className="mt-5 bg-green-600">Product Enquiry <ChevronsRight /> </Button>

    //        </div>

    //    </div>
    //    <div data-aos="fade-up">
    //    <h1 className="text-4xl font-bold text-green-600 mb-4">Description</h1>
    //    <p>
    //    C-Arm Image Intensifier (Modular)Models/Ratings series adonis 1k x 1k High End HF C-ARM X Ray Machine of HF C-Arm are known for their Actuator assisted C-Arm with foldable monitors mounted on modular trolley. Special Features Image processing software with real time image capturing, storage and display in 1K x 1K format. More than 10,000 images storage capacity in 1K x 1K format. CCD Camera with a progressive scan sensor of 1K x 1K medical grade with auto IRIS and ND filter. DICOM compatible (DICOM 3.0). Software collimator. High frequency generator The range of high frequency generators associated with the mobile range responds to the wide range of C-arm applications.
    //    </p>
    //    <h1 className="text-4xl font-bold text-green-600 mb-4 mt-[50px]">Related Products</h1>
    //    </div>
    // </div>
    <div className="w-full lg:mt-[100px] mt-[50px] lg:px-20 px-5">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-16  mb-[50px]">
        <div className="">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {ProductImage.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative   ">
                  <img
                    src={image.img}
                    alt={`Product ${image.id}`}
                    className=" rounded-md object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div data-aos="fade-left">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Adonis X-Ray Machine
          </h1>
          <p className="text-md  text-gray-700 mb-5">
            We sincerely invite you to experience any one of our ultrasound
            systems through the SIUI MAI! Select any model that you're
            interested in and click "Product Enquiry" below, leave your message
            and we will contact you in time.
          </p>
          <h1>
            Category:<span className="text-green-600"> Uncategorized</span>
          </h1>
          <Button className="mt-5 bg-green-600">
            Product Enquiry <ChevronsRight />{" "}
          </Button>
        </div>
        </div>
        <div data-aos="fade-up">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Description</h1>
        <p>
        C-Arm Image Intensifier (Modular)Models/Ratings series adonis 1k x 1k High End HF C-ARM X Ray Machine of HF C-Arm are known for their Actuator assisted C-Arm with foldable monitors mounted on modular trolley. Special Features Image processing software with real time image capturing, storage and display in 1K x 1K format. More than 10,000 images storage capacity in 1K x 1K format. CCD Camera with a progressive scan sensor of 1K x 1K medical grade with auto IRIS and ND filter. DICOM compatible (DICOM 3.0). Software collimator. High frequency generator The range of high frequency generators associated with the mobile range responds to the wide range of C-arm applications.
        </p>
       <h1 className="text-4xl font-bold text-green-600 mb-4 mt-[50px]">Related Products</h1>
       <Related />
    </div>
      
    </div>
  );
}
