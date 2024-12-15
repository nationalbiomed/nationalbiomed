import { Card } from "@/components/ui/card";

const Product = [
  {
    id: 1,
    label: "Ultrasound",
    img: "/ultrasound.png",
  },
  {
    id: 2,
    label: "Ultrasound",
    img: "/ultrasound.png",
  },
  {
    id: 3,
    label: "Ultrasound",
    img: "/ultrasound.png",
  },
];
export default function ProductServices() {
  return (
    <div className="flex flex-wrap justify-center sm:py-[100px] py-[50px] ">
      <Card className=" bg-gray-200 w-[95%] flex flex-col justify-center text-center items-center gap-4 sm:py-[100px] py-[50px]">
        <h1 className="sm:text-5xl text-2xl font-bold font-sans pb-4">
          Product and <span className="text-green-600"> services</span>
        </h1>
        <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-6 gap-3">
          {Product.map((items) => (
            <Card className="w-[100%] overflow-hidden" key={items.id}>
              <div className="overflow-hidden">
                <img
                  src={items.img}
                  className="w-full transition hover:scale-110 cursor-pointer ease-in-out duration-300"
                ></img>
              </div>

              <h2 className="sm:text-2xl text-lg py-2">{items.label}</h2>
            </Card>
          ))}
          <div className="sm:space-y-6 space-y-3 text-center">
            <div className="relative overflow-hidden rounded-2xl">
              {/* <div className="w-full absolute rounded-2xl  h-full bg-black opacity-[50%] z-[30%]"> </div> */}
              <img
                src="/health.png"
                className="transition hover:scale-110 cursor-pointer ease-in-out duration-300"
              ></img>
              <p className="absolute text-2xl top-[50%] left-[50%] text-white translate-x-[-50%] translate-y-[-50%] ">
                Health{" "}
              </p>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              {/* <div className="w-full absolute rounded-2xl  h-full bg-black opacity-[50%] z-[30%]"> </div> */}
              <img
                src="/health.png"
                className="transition hover:scale-110 cursor-pointer ease-in-out duration-300"
              ></img>
              <p className="absolute top-[50%] left-[50%] text-white translate-x-[-50%] translate-y-[-50%] text-2xl">
                Specialities{" "}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
