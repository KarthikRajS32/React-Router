import React from "react";

const ProductItem = ({ product, addToCart, cart }) => {
  const inCart = cart.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (inCart) {
      alert("Item already added to the cart");
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="border border-gray-300 p-2 rounded shadow-lg bg-blue-100 text-center hover:bg-blue-200">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <h3 className="mt-2 text-red-500 font-bold text-xl">{product.title}</h3>
      <p className="text-gray-800 text-m font-bold">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-blue-500 text-white py-1 px-2 rounded text-m hover:bg-blue-700"
      >
        {inCart ? "Already in Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductItem;
