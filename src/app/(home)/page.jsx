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

async function getData() {
  const [bannerRes, customerRes, statRes] = await Promise.all([
    fetch("http://localhost:3000/api/banner", { cache: "no-store" }),
    fetch("http://localhost:3000/api/customer", { cache: "no-store" }),
    fetch("http://localhost:3000/api/stat", { cache: "no-store" }),
  ]);

  if (!bannerRes.ok || !customerRes.ok || !statRes.ok) {
    throw new Error("Failed to fetch data");
  }

  const [banner, customer, stat] = await Promise.all([
    bannerRes.json(),
    customerRes.json(),
    statRes.json(),
  ]);

  return { banner, customer, stat };
}

export default async function Home() {
  const { banner, customer, stat } = await getData();


  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <ImageCarousel slides={banner} />
        <Counter statsData={stat} />
        <ProductServices />
        <Services />
        <OurCustomers Customers={customer} />
        <WhatsNew />
      </Suspense>
    </ErrorBoundary>
  );
}
