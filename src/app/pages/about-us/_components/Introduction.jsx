import { Button } from "@/components/ui/button";
import { ChevronsRight} from "lucide-react";
export default function Introduction() {
  return (
    <div className="w-full lg:mt-[100px] mt-[50px] lg:px-20 px-5">
        

    <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-16 lg:mb-[100px] mb-[50px]">
      <div  data-aos="fade-right">
        
    <h1 className="text-4xl font-bold text-green-600 mb-4">Information</h1>
        <p className="text-md  text-gray-700 mb-5">
          Established in 2008, National Bio-Medical Suppliers is highly reliable
          and reputed importers and suppliers of a vast range of higher-quality
          medical products in Nepal, including hospital/medical/scientific/lab
          equipment, instruments, apparatus, medical disposable, dental
          equipment & materials, surgical instruments, and hospital furniture.
          </p>
          <p className="text-md text-gray-700 mb-6">
          Almost all products, we deal are manufactured by ISO 9001; ISO13485
          certified companies and the products hold CE certification. Certain
          products are also backed up by US FDA510 (K) and WHO
          recommendationAfter years of development with Principle “Quality
          First, Customers First, Reputation Utmost”, National Bio-Medical Pvt.
          Ltd. have established an extensive sales and service network all over
          Nepal, which enable us to provide higher quality products and fastest
          service to our clients through our skilled marketing team and Bio-Med.
          Engineers & Technicians.
          
        </p>
        <Button className=" bg-green-600"> Contact us <ChevronsRight/></Button>
      </div>
      <div >
        <img src="/aboutimg.jpg" className="rounded-lg"  data-aos="fade-left"/>
      </div>
    </div>
    </div>
  );
}
