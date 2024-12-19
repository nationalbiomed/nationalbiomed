"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function getYouTubeId(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export default function Gallery({ initialVideos, initialMeta }) {
  const [videos, setVideos] = useState(initialVideos);
  const [meta, setMeta] = useState(initialMeta);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const router = useRouter();

  const openDialog = (video) => setSelectedVideo(video);
  const closeDialog = () => setSelectedVideo(null);

  const changePage = async (newPage) => {
    if (newPage < 1 || newPage > meta.totalPages) return;
    const res = await fetch(`/api/videos?page=${newPage}`);
    const { data, meta: newMeta } = await res.json();
    setVideos(data);
    setMeta(newMeta);
    router.push(`?page=${newPage}`);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => {
          const videoId = getYouTubeId(video.videoLink);
          const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
          return (
            <div key={video.id} className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg cursor-pointer"
                  src={thumbnailUrl}
                  alt={`Video ${video.id}`}
                  width={300}
                  height={200}
                  onClick={() => openDialog(video)}
                />
              </div>
            </div>
          );
        })}
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

      <Dialog open={!!selectedVideo} onOpenChange={closeDialog}>
        <DialogContent className="max-w-3xl">
          {selectedVideo && (
            <>
              <DialogTitle>
                <span className="sr-only">Video Player</span>
              </DialogTitle>
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(
                    selectedVideo.videoLink
                  )}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
