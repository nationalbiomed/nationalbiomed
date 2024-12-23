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


// async function getData() {
//   const [bannerRes, newsRes, teamsRes] = await Promise.all([
//     fetch("https://nationalbiomedical.vercel.app/api/banner", { cache: "no-store" }),
//     fetch("https://nationalbiomedical.vercel.app/api/customer", { cache: "no-store" }),
//     fetch("https://nationalbiomedical.vercel.app/api/team", { cache: "no-store" }),
//   ]);

//   if (!bannerRes.ok || !newsRes.ok || !teamsRes.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const [banner, news, teams] = await Promise.all([
//     bannerRes.json(),
//     newsRes.json(),
//     teamsRes.json(),
//   ]);

//   return { banner, news, teams };
// }

// export default async function Home() {
//   const { banner, news, teams } = await getData();

//   return (
//     <>
//       <Carousel bannerdata={banner} />
//       <TemplePage />
//       <News newsData={news} />
//       <Teams teamMembers={teams} />
//     </>
//   );
// }