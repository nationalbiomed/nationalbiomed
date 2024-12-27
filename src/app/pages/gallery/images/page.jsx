import { Suspense } from "react";
import Gallery from "./_components/Gallery";
import { GalleryFallback } from "./_components/GalleryFallback";

async function getImages(page) {
  const res = await fetch(`https://nationalbiomedical.vercel.app//api/images?page=${page}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch images");
  return res.json();
}

export default async function GalleryPage({ searchParams }) {
  const pageParam = await searchParams?.page; // Await the searchParams.page
  const page = Number(pageParam) || 1;
  const { data, meta } = await getImages(page);

  return (
    <main className="container max-w-7xl  mx-auto py-8 px-4 md:px-0">
      <h1 className="text-3xl font-bold mb-6">Images</h1>
      <Suspense fallback={<GalleryFallback />}>
        <Gallery initialImages={data} initialMeta={meta} />
      </Suspense>
    </main>
  );
}
