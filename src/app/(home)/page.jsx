import About from "./_components/About";
import ProductServices from "./_components/ProductServices";
import Vision from "./_components/Vision";
import WhatsNew from "./_components/WhatsNew";
import ImageCarousel from "./_components/Carousel";
import OurCustomers from "./_components/OurCustomers";

export default function Home() {
  return (
    <>
    <ImageCarousel/>
    <OurCustomers />
    <ProductServices />
   
      <WhatsNew />
      {/* <About /> */}
      {/* <Vision /> */}
    </>
  );
}
