'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'



export default function Gallery({ 
  initialImages, 
  initialMeta 
}) {
  const [images, setImages] = useState(initialImages)
  const [meta, setMeta] = useState(initialMeta)
  const [selectedImage, setSelectedImage] = useState(null)
  const router = useRouter()

  const openDialog = (image) => setSelectedImage(image)
  const closeDialog = () => setSelectedImage(null)

  const navigateImage = (direction) => {
    const currentIndex = images.findIndex(img => img.id === selectedImage?.id)
    const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1
    if (newIndex >= 0 && newIndex < images.length) {
      setSelectedImage(images[newIndex])
    }
  }

  const changePage = async (newPage) => {
    if (newPage < 1 || newPage > meta.totalPages) return
    const res = await fetch(`/api/images?page=${newPage}`)
    const { data, meta: newMeta } = await res.json()
    setImages(data)
    setMeta(newMeta)
    router.push(`?page=${newPage}`)
  }

  return (
    <>
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((image) => (
          <div key={image.id} className="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={image.image}
                alt={`Image ${image.id}`}
                width={300}
                height={300}
                onClick={() => openDialog(image)}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <Button
          onClick={() => changePage(meta.page - 1)}
          disabled={meta.page === 1}
        >
          Previous
        </Button>
        <span className="self-center">
          Page {meta.page} of {meta.totalPages}
        </span>
        <Button
          onClick={() => changePage(meta.page + 1)}
          disabled={meta.page === meta.totalPages}
        >
          Next
        </Button>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={closeDialog}>
        <DialogContent className="max-w-3xl">
          {selectedImage && (
            <div className="relative">
              <Image
                src={selectedImage.image}
                alt={`Image ${selectedImage.id}`}
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <Button
                className="absolute left-2 top-1/2 transform -translate-y-1/2"
                onClick={() => navigateImage('prev')}
                disabled={images.indexOf(selectedImage) === 0}
              >
                <ChevronLeft />
              </Button>
              <Button
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => navigateImage('next')}
                disabled={images.indexOf(selectedImage) === images.length - 1}
              >
                <ChevronRight />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

