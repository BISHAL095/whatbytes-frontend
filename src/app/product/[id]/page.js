"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Star, Minus, Plus } from "lucide-react";
import Header from "@/components/Header";
import products from "@/data/products";
import useCartStore from "@/store/cartStore"; 

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main>
        <Header cartCount={0} />
        <div className="p-6 text-center text-gray-500">
          Product not found.
          <button onClick={() => router.push("/")} className="block mt-4 text-blue-700 underline">
            Back to listing
          </button>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);  
  };

  return (
    <main>
      <Header cartCount={0} />
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="relative w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-xl font-semibold mt-2">${product.price}</p>

          {product.rating && (
            <div className="flex items-center gap-0.5 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          )}

          <p className="text-gray-600 mt-4">{product.description}</p>

          <p className="text-sm text-gray-500 mt-2">
            Category: <span className="font-medium">{product.category}</span>
          </p>

          <div className="flex items-center gap-4 mt-6">
            <span className="font-medium">Quantity</span>
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2 hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-6 bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}