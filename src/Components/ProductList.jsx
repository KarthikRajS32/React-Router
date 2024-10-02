import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ addToCart, cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        
        setProducts(data.products.slice(0, 30));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          addToCart={addToCart}
          cart={cart}
        />
      ))}
    </div>
  );
};

export default ProductList;
