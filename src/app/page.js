"use client";

import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import products from "@/data/products";

export default function Home() {
  return (
    <main>
      <Header cartCount={0} />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
        <ProductGrid products={products} onAddToCart={(p) => console.log("add", p)} />
      </div>
    </main>
  );
}