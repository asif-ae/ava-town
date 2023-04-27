import React from "react";

export default function Select() {
  return (
    <select className="w-[200px]">
      <option value="Featured">Featured</option>
      <option value="Price: Low to High">Price: Low to High</option>
      <option value="Price: High to Low">Price: High to Low</option>
      <option value="Customer Review">Customer Review</option>
      <option value="New">New</option>
      <option value="Polygon:Low to High">Polygon:Low to High</option>
      <option value="Polygon:High to Low">Polygon:High to Low</option>
    </select>
  );
}
