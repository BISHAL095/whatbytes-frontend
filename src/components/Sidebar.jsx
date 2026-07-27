"use client";

const CATEGORIES = ["All", "Electronics", "Clothing", "Home"];

export default function Sidebar({ category, setCategory, price, setPrice }) {
  return (
    <aside className="bg-blue-900 text-white rounded-lg p-5 w-full max-w-xs h-fit">
      <h2 className="font-bold text-lg mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="font-semibold mb-2">Category</h3>
        <div className="flex flex-col gap-2">
          {CATEGORIES.map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={category === cat}
                onChange={() => setCategory(cat)}
                className="accent-white"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Price</h3>
        <input
          type="range"
          min={0}
          max={1000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-white"
        />
        <div className="flex justify-between text-xs mt-1">
          <span>0</span>
          <span>{price}</span>
        </div>
      </div>
    </aside>
  );
}