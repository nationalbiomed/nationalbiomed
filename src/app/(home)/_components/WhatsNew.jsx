"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

const WhatsNewItems = [
  {
    id: 1,
    label: "Samsung Medison concludes acquisition of French AI Startup",
    img: "/whats-new.jpg",
    slug: "#",
    description:
      "Samsung Medison received approval from the French government for Foreign Direct Investment (FDI) to acquire 100% of the shares of Sonio, a French AI startup specializing in obstetrics ultrasound reporting software, and subsequently concluded the acquisition process on August 30.",
  },
  {
    id: 2,
    label: "New AI-powered ultrasound technology unveiled",
    img: "/hospitalbed.avif",
    slug: "#",
    description:
      "Samsung Medison introduces groundbreaking AI-powered ultrasound technology, revolutionizing medical imaging with enhanced accuracy and efficiency in diagnostics.",
  },
  {
    id: 3,
    label: "Partnership announced with leading healthcare provider",
    img: "/new.avif",
    slug: "#",
    description:
      "Samsung Medison forms strategic partnership with a leading global healthcare provider to expand the reach of innovative medical imaging solutions and improve patient care worldwide.",
  },
];

const FeaturedNews = {
  img: "/whats.avif",
  label: "Samsung Medison concludes acquisition of French AI Startup",
  description:
    "Samsung Medison received approval from the French government for Foreign Direct Investment (FDI) to acquire 100% of the shares of Sonio, a French AI startup specializing in obstetrics ultrasound reporting software, and subsequently concluded the acquisition process on August 30.",
};

export default function WhatsNew() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="w-full flex flex-col items-center pt-10 px-4 sm:px-6 lg:px-8">
      <Card className="bg-white border-none w-full max-w-7xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans pb-8 text-center">
          What&apos;s <span className="text-green-600">New</span>
        </h1>

        {/* Featured News Section */}
        <div className="relative rounded-lg overflow-hidden aspect-video cursor-pointer md:aspect-[16/5] mb-8">
          <Image
            src={FeaturedNews.img}
            alt="Featured news"
            layout="fill"
            objectFit="cover"
          />
          <motion.div
            className="absolute inset-0 bg-green-950 p-4 sm:p-6 flex flex-col justify-end text-white"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              {FeaturedNews.label}
            </h2>
            <p className="text-xs sm:text-sm mb-2 line-clamp-2 sm:line-clamp-3">
              {FeaturedNews.description}
            </p>
            <button className="text-xs sm:text-sm underline self-start">
              Learn More
            </button>
          </motion.div>
        </div>

        {/* List of What's New Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WhatsNewItems.map((item) => (
            <Link href={item.slug} key={item.id}>
              <Card
                className="relative overflow-hidden bg-gray-100 rounded-lg cursor-pointer"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="aspect-video relative">
                  <Image
                    src={item.img}
                    alt={item.label}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h2 className="text-lg font-semibold p-4">{item.label}</h2>
                <motion.div
                  className="absolute inset-0 bg-green-950 p-4 flex flex-col justify-end text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredId === item.id ? 0.95 : 0,
                    y: hoveredId === item.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                  <p className="text-sm mb-4">{item.description}</p>
                  <button className="text-sm underline self-start">
                    Learn More
                  </button>
                </motion.div>
              </Card>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
}
