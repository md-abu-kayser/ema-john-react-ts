import React from "react";
import { CartProps } from "../../types";

const Cart: React.FC<CartProps> = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="bg-orange-50 p-4 md:p-6 rounded-lg sticky top-4">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Order Summary
      </h2>

      <div className="space-y-2 md:space-y-3">
        <p className="flex justify-between">
          <span>Selected Items:</span>
          <span className="font-semibold">{quantity}</span>
        </p>
        <p className="flex justify-between">
          <span>Total Price:</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span>Shipping Charge:</span>
          <span className="font-semibold">${shipping.toFixed(2)}</span>
        </p>
        <p className="flex justify-between">
          <span>Tax:</span>
          <span className="font-semibold">${tax.toFixed(2)}</span>
        </p>

        <div className="border-t border-gray-300 pt-2 md:pt-3 mt-3 md:mt-4">
          <p className="flex justify-between text-lg md:text-xl font-bold">
            <span>Grand Total:</span>
            <span>${grandTotal.toFixed(2)}</span>
          </p>
        </div>
      </div>

      <button className="w-full bg-accent text-white py-3 px-4 rounded-lg mt-6 md:mt-8 hover:bg-orange-600 transition-colors">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
