export interface Product {
  id: string;
  category: string;
  name: string;
  seller: string;
  price: number;
  stock: number;
  ratings: number;
  ratingsCount: number;
  img: string;
  shipping: number;
  quantity: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartProps {
  cart: CartItem[];
}

export interface ProductProps {
  product: Product;
  handleToAddCart: (product: Product) => void;
}

export interface ShoppingCart {
  [key: string]: number;
}
