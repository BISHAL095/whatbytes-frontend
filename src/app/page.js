"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductGrid from "@/components/ProductGrid";
import products from "@/data/products";
import useCartStore from "@/store/cartStore";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const addToCart = useCartStore((state) => state.addToCart);

  const category = searchParams.get("category") || "All";
  const price = Number(searchParams.get("price")) || 1000;
  const search = searchParams.get("search") || "";

  const updateParams = (updates) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, value]) => {
      if (!value || value === "All") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    router.push(`/?${params.toString()}`);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesPrice = p.price <= price;
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [category, price, search]);

  return (
    <main>
      <Header onSearch={(value) => updateParams({ search: value })} />
      <div className="p-6 flex gap-6">
        <Sidebar
          category={category}
          setCategory={(cat) => updateParams({ category: cat })}
          price={price}
          setPrice={(val) => updateParams({ price: val })}
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">Product Listing</h1>
          <ProductGrid products={filteredProducts} onAddToCart={(p) => addToCart(p, 1)} />
        </div>
      </div>
    </main>
  );
}