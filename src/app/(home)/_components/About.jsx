import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="relative mb-[100px] overflow-hidden">
      <img src="/Nepal.jpg" className="object-cover w-full h-[500px] "></img>
      <Card className="absolute md:w-[30%] w-[100%] top-[50%] translate-y-[-50%] bg-white opacity-65 flex justify-end rounded-l-none">
        <div className="w-[70%] p-10">
          <h1 className="text-4xl font-semibold font-sans pb-5 ">About</h1>
          <p data-aos="fade-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil,
            provident. Nostrum rem sint vel itaque corrupti voluptatem
            aspernatur facilis excepturi rerum. Ullam modi deserunt molestiae
            eligendi aliquid nulla quas reiciendis.
          </p>
        </div>
      </Card>
    </div>
  );
}
