"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhatsNew({ WhatsNewItems }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="w-full flex flex-col items-center pt-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white border-none w-full max-w-7xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans pb-8 text-center">
          What&apos;s <span className="text-green-600">New</span>
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WhatsNewItems.blogs.map((item) => (
            <Link href={`/pages/blog/${item.slug}`} key={item.id}>
              <Card
                className="relative overflow-hidden bg-gray-100 rounded-none cursor-pointer"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="aspect-video relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h2 className="text-lg font-semibold p-4">{item.title}</h2>
                <motion.div
                  className="absolute inset-0 bg-green-950 p-4 flex flex-col justify-end text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredId === item.id ? 0.95 : 0,
                    y: hoveredId === item.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm mb-4">{item.description}</p>
                  <Link href={`/pages/blog/${item.slug}`}>
                    <button className="text-sm underline self-start">
                      Learn More
                    </button>
                  </Link>
                </motion.div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
