export function GalleryFallback() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-64 bg-gray-200 rounded-lg animate-pulse"></div>
        ))}
      </div>
    )
  }
  
  