import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white px-6 py-8 mt-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Filters</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>All</li>
            <li>Electronics</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-3">
            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-8 text-center">
        © 2024 Whatbytes. All rights reserved.
      </p>
    </footer>
  );
}