export interface CounterState {
  value: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface WishlistState {
  products: Product[];
}
