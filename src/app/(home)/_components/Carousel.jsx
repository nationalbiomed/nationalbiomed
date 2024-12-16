'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Header from "@/components/Header"

const images = [
  {
    url: "https://mindray.scene7.com/is/image/mindray/surgical-digital-frontiers-home-pc?$image1920-960$",
    alt: "Grassy hills and mountains in Dolomites, Italy"
  },
  {
    url: "https://mindray.scene7.com/is/image/mindray/envision-future-smart-healthcare-home-pc?$1920-9650$",
    alt: "Mountain waterfall"
  },
  {
    url: "https://mindray.scene7.com/is/image/mindray/penangs-heart-safe-city-initiative-pc?$1920-96$",
    alt: "Mountain waterfall"
  }
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }
  }

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
  }

  useEffect(() => {
    const timer = setInterval(goToNext, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleTransitionEnd = () => {
    setIsAnimating(false)
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Image container */}
      <div 
        className="relative flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-screen flex-shrink-0"
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
          </div>
        ))}
      </div>

      <Header />

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 p-2 rounded-full shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 p-2 rounded-full shadow-lg transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              currentIndex === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

