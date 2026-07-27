"use client";

import { Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export default function Header({ onSearch, cartCount = 0 }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
    <header className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between gap-4">
      <div className="text-xl font-bold shrink-0">Logo</div>

      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for products..."
          className="w-full pl-9 pr-3 py-2 rounded-md text-gray-900 text-sm focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <button className="flex items-center gap-2 bg-blue-950 hover:bg-blue-800 px-4 py-2 rounded-md text-sm">
          <ShoppingCart className="w-4 h-4" />
          Cart
          {cartCount > 0 && (
            <span className="bg-white text-blue-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <User className="w-6 h-6" />
      </div>
    </header>
  );
}