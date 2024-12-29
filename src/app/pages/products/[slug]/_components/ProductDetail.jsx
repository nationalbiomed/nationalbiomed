"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProductDetail({ product }) {
  // Include `pimage` in the images array
  const allImages = [product.pimage, ...product.images];
  const [selectedImage, setSelectedImage] = useState(allImages[0]);

  return (
    <motion.div
      className="flex flex-col gap-8"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side - Image Gallery */}
        <motion.div className="flex gap-4" variants={fadeInUp}>
          <div className="flex flex-col gap-4">
            {allImages.map((image, index) => (
              <button
                key={`${image}-${index}`} // Combine image URL and index for unique key
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
        </motion.div>

        {/* Right side - Product Details */}
        <motion.div className="flex flex-col gap-6" variants={staggerChildren}>
          <motion.div variants={fadeInUp}>
            <Badge variant="secondary" className="mb-2">
              {product.category.name}
            </Badge>
            <motion.h1
              className="text-3xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {product.title}
            </motion.h1>
          </motion.div>

          <motion.p className="text-muted-foreground" variants={fadeInUp}>
            {product.excerpt}
          </motion.p>

          {/* Add more product details here (e.g., price, add to cart button) */}
        </motion.div>
      </div>

      {/* Tabs below the image */}
      <motion.div variants={fadeInUp}>
        <Tabs defaultValue="description" className="w-full">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            {/* <TabsTrigger value="additional">Additional Information</TabsTrigger> */}
          </TabsList>
          <AnimatePresence mode="wait">
            <TabsContent value="description">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6">
                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="additional">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6">
                  <div className="grid gap-4">
                    <motion.div
                      className="grid grid-cols-2 gap-4"
                      variants={fadeInUp}
                    >
                      <div className="font-semibold">Brand</div>
                      <div>{product.brand.name}</div>
                    </motion.div>
                    <motion.div
                      className="grid grid-cols-2 gap-4"
                      variants={fadeInUp}
                    >
                      <div className="font-semibold">Category</div>
                      <div>{product.category.name}</div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}
