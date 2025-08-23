import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ProductProps } from "../../types";

const Product: React.FC<ProductProps> = ({ product, handleToAddCart }) => {
  const { name, seller, img, price, ratings } = product;

  return (
    <div className="w-full h-auto sm:h-[480px] border border-gray-200 rounded-lg overflow-hidden flex flex-col transition-shadow hover:shadow-md">
      <img src={img} alt={name} className="w-full h-48 sm:h-56 object-cover" />
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>
        <p className="text-gray-700 font-bold mb-2">Price: ${price}</p>
        <p className="text-gray-600 text-sm mb-2">Seller: {seller}</p>
        <p className="text-sm text-gray-600 mb-4">Rating: {ratings} stars</p>

        <button
          className="mt-auto bg-secondary hover:bg-accent text-gray-900 hover:text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
          onClick={() => handleToAddCart(product)}
        >
          <span className="mr-2">Add to Cart</span>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
