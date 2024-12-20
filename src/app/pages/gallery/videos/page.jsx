import { Suspense } from 'react';
import Gallery from './_components/Gallery';
import { GalleryFallback } from './_components/GalleryFallback';

async function getVideos(page) {
  const res = await fetch(`https://nationalbiomedical.vercel.app/api/video?page=${page}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch videos');
  return res.json();
}

export default async function GalleryPage({ searchParams }) {
  const pageParam =await searchParams?.page;
  const page = Number(pageParam) || 1;
  const { data, meta } = await getVideos(page);

  return (
    <main className="container max-w-7xl mx-auto py-8 px-4 md:px-0">
      <h1 className="text-3xl font-bold mb-6">Videos</h1>
      <Suspense fallback={<GalleryFallback />}>
        <Gallery initialVideos={data} initialMeta={meta} />
      </Suspense>
    </main>
  );
}

