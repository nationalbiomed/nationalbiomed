import { Suspense } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import About from "./_components/About";
import ProductServices from "./_components/ProductServices";
import Vision from "./_components/Vision";
import WhatsNew from "./_components/WhatsNew";
import ImageCarousel from "./_components/Carousel";
import OurCustomers from "./_components/OurCustomers";
import Services from "./_components/Services"
import Counter from "./_components/Counter"
import SoleDistributors from "./_components/Soledistributors"

async function getData() {
  const [bannerRes, customerRes, statRes, soleRes, newsRes] = await Promise.all([
    fetch("http://localhost:3000/api/banner", { cache: "no-store" }),
    fetch("http://localhost:3000/api/customer", { cache: "no-store" }),
    fetch("http://localhost:3000/api/stat", { cache: "no-store" }),
    fetch("http://localhost:3000/api/soledistributor", { cache: "no-store" }),
    fetch("http://localhost:3000/api/blog", { cache: "no-store" }),
  ]);

  if (!bannerRes.ok || !customerRes.ok || !statRes.ok || !soleRes.ok || !newsRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const [banner, customer, stat, sole, news] = await Promise.all([
    bannerRes.json(),
    customerRes.json(),
    statRes.json(),
    soleRes.json(),
    newsRes.json(),
  ]);

  return { banner, customer, stat, sole, news };
}

export default async function Home() {
  const { banner, customer, stat, sole, news } = await getData();


  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <ImageCarousel slides={banner} />
        <Counter statsData={stat} />
        <ProductServices />
        <Services />
        <OurCustomers Customers={customer} />
        <SoleDistributors Distributors={sole} />
        <WhatsNew WhatsNewItems={news} />
      </Suspense>
    </ErrorBoundary>
  );
}
