export function GalleryFallback() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="aspect-video bg-gray-200 rounded-lg animate-pulse"></div>
      ))}
    </div>
  )
}

