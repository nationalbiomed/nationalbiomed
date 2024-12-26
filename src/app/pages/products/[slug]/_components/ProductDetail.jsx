'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="flex flex-col gap-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side - Image Gallery */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className="w-16 h-16 relative border rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
              >
                <Image
                  src={image}
                  alt={`Product thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </button>
            ))}
          </div>
          <div className="flex-1 relative aspect-square max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <Zoom>
                  <Image
                    src={selectedImage}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover rounded-lg"
                  />
                </Zoom>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="flex flex-col gap-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category.name}
            </Badge>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          </div>

          <p className="text-muted-foreground">{product.excrept}</p>

          {/* Add more product details here (e.g., price, add to cart button) */}
        </div>
      </div>

      {/* Tabs below the image */}
      <Tabs defaultValue="description" className="w-full">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="additional">Additional Information</TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <Card className="p-6">
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          </Card>
        </TabsContent>
        <TabsContent value="additional">
          <Card className="p-6">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="font-semibold">Brand</div>
                <div>{product.brand.name}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="font-semibold">Category</div>
                <div>{product.category.name}</div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
