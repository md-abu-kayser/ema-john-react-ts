import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { Product as ProductType, CartItem } from "../../types";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Shop: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data: ProductType[]) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart: CartItem[] = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleToAddCart = (selectedProduct: ProductType) => {
    let newCart: CartItem[] = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);

    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Cart Toggle Button */}
      <div className="lg:hidden fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="bg-accent text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Toggle cart"
        >
          <span className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </span>
        </button>
      </div>

      {/* Products Grid */}
      <div className="w-full lg:w-3/4 p-4 md:p-6 lg:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleToAddCart={handleToAddCart}
            />
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div
        className={`
        fixed lg:static top-0 right-0 h-full w-full lg:w-1/4 bg-white shadow-lg lg:shadow-none z-50 transform transition-transform duration-300 ease-in-out
        ${isCartOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="p-4 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-4 lg:hidden">
            <h2 className="text-xl font-bold">Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close cart"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <Cart cart={cart} />
        </div>
      </div>

      {/* Overlay for mobile cart */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Shop;
