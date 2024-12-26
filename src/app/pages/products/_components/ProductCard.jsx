import Image from 'next/image';


export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={product.pimage}
          alt={product.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.excrept}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600">{product.category.name}</span>
          <span className="text-sm font-medium text-gray-500">{product.brand.name}</span>
        </div>
      </div>
    </div>
  );
}

