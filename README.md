# WhatBytes Frontend Assignment

A responsive e-commerce product listing app built with Next.js, Tailwind CSS, and Zustand.

## Live Demo
[https://whatbytes-frontend-pi.vercel.app](https://whatbytes-frontend-pi.vercel.app)

## Features
- Product listing page with responsive grid (3 cols desktop, 2 tablet, 1 mobile)
- Category and price range filters, synced to URL query params
- Search filtering by product title
- Product detail page with dynamic routing (`/product/[id]`)
- Quantity selector on product detail page
- Cart with add/remove/update quantity, persisted via localStorage (Zustand)
- Cart page with price summary
- Conditional rendering for empty states (no products found, empty cart)

## Tech Stack
- Next.js (App Router)
- Tailwind CSS v4
- Zustand (state management + persistence)
- lucide-react (icons)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
src/
  app/
    page.js               # Home / product listing
    product/[id]/page.js  # Product detail page
    cart/page.js          # Cart page
  components/              # Header, Sidebar, ProductCard, ProductGrid, Footer
  store/cartStore.js       # Zustand cart store
  data/products.js         # Mock product data
```