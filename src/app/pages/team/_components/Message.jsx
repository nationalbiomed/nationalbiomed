'use client';

import { useEffect, useState } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function Message({ chairman }) {
  const [sanitizedMessage, setSanitizedMessage] = useState('');

  useEffect(() => {
    setSanitizedMessage(DOMPurify.sanitize(chairman?.message || ''));
  }, [chairman]);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02]">
              <Image
                src={chairman.image}
                alt={chairman.name}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-aos="fade-right"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-white text-xl font-semibold">{chairman.name}</h2>
                <p className="text-white/80 text-sm">{chairman.post}</p>
              </div>
            </div>
          </div>
          <Card className="lg:col-span-7 border-none " data-aos="fade-left">
            <CardContent className="p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-semibold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
                  Message
                </span>{" "}
                <span className="text-gray-900 ">
                  From {chairman.post}
                </span>
              </h1>
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: sanitizedMessage }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

