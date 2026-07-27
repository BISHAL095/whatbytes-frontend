import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-40 bg-gray-100 rounded-md mb-3 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className="font-semibold text-sm">{product.title}</h3>
      </Link>

      <p className="text-gray-900 font-bold mt-1">${product.price}</p>

      {product.rating && (
        <div className="flex items-center gap-0.5 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < product.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
      )}

      <button
        onClick={() => onAddToCart?.(product)}
        className="mt-3 bg-blue-900 hover:bg-blue-800 text-white text-sm font-medium py-2 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
}