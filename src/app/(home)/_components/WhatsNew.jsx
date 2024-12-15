import { Card } from "@/components/ui/card";

const WhatsNewItems = [
  {
    id: 1,
    label: "Samsung Medison concludes acquisition of French AI Startup",
    img: "/hand.png",
    description:
      "Samsung Medison received approval from the French government for Foreign Direct Investment (FDI) to acquire 100% of the shares of Sonio, a French AI startup specializing in obstetrics ultrasound reporting software, and subsequently concluded the acquisition process on August 30.",
  },
  {
    id: 2,
    label: "Samsung Medison concludes acquisition of French AI Startup",
    img: "/hand.png",
    description:
      "Samsung Medison received approval from the French government for Foreign Direct Investment (FDI) to acquire 100% of the shares of Sonio, a French AI startup specializing in obstetrics ultrasound reporting software, and subsequently concluded the acquisition process on August 30.",
  },

  {
    id: 3,
    label: "Samsung Medison concludes acquisition of French AI Startup",
    img: "/hand.png",
    description:
      "Samsung Medison received approval from the French government for Foreign Direct Investment (FDI) to acquire 100% of the shares of Sonio, a French AI startup specializing in obstetrics ultrasound reporting software, and subsequently concluded the acquisition process on August 30.",
  },
];
export default function WhatsNew() {
  return (
    <div className="w-full flex flex-wrap sm:flex-row justify-center items-center pt-[100px]  ">
      <Card className=" bg-white border-none xl:w-[95%] lg:w-[100%]  flex flex-col justify-center text-left items-center gap-4  ">
        <h1 className="sm:text-5xl text-2xl font-bold font-sans pb-4">What&apos;s <span className="text-green-600">New</span></h1>
        <div className="flex lg:flex-row flex-col gap-4 w-[96%] justify-center">
          <div className="lg:w-[50%] w-[100%] relative rounded-lg overflow-hidden">
            <img src="/hand.png" className="w-full h-full object-cover" />
            <Card className="absolute w-full h-full bg-green-950 top-[50%] translate-y-[-50%] p-5 opacity-0 hover:opacity-90 cursor-pointer text-white">
              <h1 className="lg:text-xl text-sm pb-2">
                Samsung Medison concludes acquisition of French AI Startup{" "}
              </h1>
              <p className="text-xs sm:text-lg ">
                Samsung Medison received approval from the French government for
                Foreign Direct Investment (FDI) to acquire 100% of the shares of
                Sonio, a French AI startup specializing in obstetrics ultrasound
                reporting software, and subsequently concluded the acquisition
                process on August 30.
              </p>
              <h1 className="underline">Learn More</h1>
            </Card>
          </div>

          <div className="lg:w-[50%] w-[100%] relative rounded-lg overflow-hidden ">
            <img src="/hand.png" className="w-full" />
            <Card className="absolute w-full h-full bg-green-950 top-[50%] translate-y-[-50%] p-5 opacity-0 hover:opacity-90 cursor-pointer text-white">
              <h1 className="lg:text-xl text-sm pb-2">
                Samsung Medison concludes acquisition of French AI Startup{" "}
              </h1>
              <p className="text-xs sm:text-lg">
                Samsung Medison received approval from the French government for
                Foreign Direct Investment (FDI) to acquire 100% of the shares of
                Sonio, a French AI startup specializing in obstetrics ultrasound
                reporting software, and subsequently concluded the acquisition
                process on August 30.
              </p>
              <h1 className="underline">Learn More</h1>
            </Card>
          </div>
        </div>
        {/* <div className="w-[96%] flex flex-col gap-4 sm:flex-row flex-wrap"> */}
        <div className="w-[96%] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
          {WhatsNewItems.map((item) => (
            <Card
              className="w-[100%] relative overflow-hidden bg-gray-0 "
              key={item.id}
            >
              <div className="overflow-hidden ">
                <img src={item.img} className=" w-full"></img>
              </div>

              <h2 className="text-xl p-5">{item.label}</h2>
              <Card className="w-full h-full bg-green-950 absolute top-[50%] translate-y-[-50%] p-5 opacity-0 hover:opacity-90 cursor-pointer text-white">
                <h1 className="text-xl pb-2"> {item.label}</h1>
                <p> {item.description}</p>
                <h1 className="underline">Learn More</h1>
              </Card>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
