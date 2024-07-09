import React from "react";
import ProductCard from "./ProductCard";

export default function FeaturesSection() {
  return (
    <div className="px-2">
        <h1 className="text-3xl sm:text-5xl font-bold pt-4 sm:pt-8">Featured Section</h1>
        <div class="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-2 pt-4 sm:pt-8">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold pt-4 sm:pt-8">New Drop</h1>
        <div class="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-2 pt-4 sm:pt-8">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </div>
  );
}
