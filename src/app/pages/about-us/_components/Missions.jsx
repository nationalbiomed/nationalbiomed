import { Card } from "@/components/ui/card";
import { Handshake, Heart, Target } from "lucide-react";
export default function Missions() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 lg:px-24 px-10 mb-[100px]" data-aos="fade-up" >
      <Card className="w-full text-center p-10 shadow-lg hover:shadow-xl hover:ease-in-out duration-300">
        <div className="flex justify-center items-center w-full">
          <Target className=" w-14 h-14 pb-3 text-green-600" />
        </div>
        <h1 className="font-semibold text-xl pb-3">Missions</h1>
        <p className="text-gray-600">
          Bridge workforce gaps with reliable, skilled, and culturally diverse
          manpower solutions for the Middle East and Europe, empowering Nepali
          careers.
        </p>
      </Card>

      <Card className="w-full text-center p-10 shadow-lg hover:shadow-xl hover:ease-in-out duration-300">
        <div className="flex justify-center items-center w-full">
          <Handshake className=" w-14 h-14 pb-3 text-green-600" />
        </div>
        <h1 className="font-semibold text-xl pb-3">Missions</h1>
        <p className="text-gray-600">
          Bridge workforce gaps with reliable, skilled, and culturally diverse
          manpower solutions for the Middle East and Europe, empowering Nepali
          careers.
        </p>
      </Card>
      <Card className="w-full text-center p-10 shadow-lg hover:shadow-xl hover:ease-in-out duration-300">
        <div className="flex justify-center items-center w-full">
          <Heart className=" w-14 h-14 pb-3 text-green-600" />
        </div>
        <h1 className="font-semibold text-xl pb-3">Missions</h1>
        <p className="text-gray-600">
          Bridge workforce gaps with reliable, skilled, and culturally diverse
          manpower solutions for the Middle East and Europe, empowering Nepali
          careers.
        </p>
      </Card>
    </div>
  );
}
