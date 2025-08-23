import { ShoppingCart } from "../types";

// use local storage to manage cart data
export const addToDb = (id: string): void => {
  let shoppingCart: ShoppingCart = getShoppingCart();

  // add quantity
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

export const removeFromDb = (id: string): void => {
  const shoppingCart: ShoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

export const getShoppingCart = (): ShoppingCart => {
  let shoppingCart: ShoppingCart = {};

  // get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

export const deleteShoppingCart = (): void => {
  localStorage.removeItem("shopping-cart");
};
